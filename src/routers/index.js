import React,{Component,PropTypes} from 'react';
import { syncHistoryWithStore } from 'react-router-redux'

import { Router, Route,IndexRoute } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import logo from '../components/img/logo2.png'
import App from '../components/App'
import Home from '../containers/Home'
import About from '../components/About'
import Pages from '../containers/Pages/index'
import NewPage from '../containers/Pages/New'
import ShowPage from '../containers/Pages/Show'
import EditPage from '../containers/Pages/Edit'
import Login from '../containers/Login'
import { firebaseAuth } from '../constants/configAuth'


function  requireAuth(authed,nextState,replace) {
  //alert(authed)
        if (authed===false) {
          replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
          })
        }
 }



class Routes extends Component {
 state = {
    authed: false
  }

   removeListener = () => {
      this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true
        })
      } else {
        this.setState({
          authed: false
        })
      }
    })
  }

    componentDidmount () {
    this.removeListener()
  }
 
  render() {
  const {history,store} = this.props
    return (
   <Router history={syncHistoryWithStore(history, store)}>
    <Route path="/" component={Home} />
    <Route path="app" component={App} onEnter={(nextState,replace)=>{requireAuth(this.state.authed,nextState,replace)}} />
    <Route path="about" component={About}/>
    <Route path="home" component={Home}/>
    <Route path="login" component={Login}  />
    <Route path='pages'>
      <IndexRoute component={Pages} />
      <Route path='new'
             component={NewPage} />
      <Route path=':id'
             component={ShowPage} />
     <Route path='edit'>
            <Route path=':id' component={EditPage} />
      </Route>
    </Route>

  </Router>
    )
  }
}

export default Routes;