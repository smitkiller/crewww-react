import React,{Component} from 'react';
//import { syncHistoryWithStore } from 'react-router-redux';
import { Router,Route,IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../containers/Home';
import About from '../components/About';
import Pages from '../containers/Pages/index';
import NewPage from '../containers/Pages/New';
import ShowPage from '../containers/Pages/Show';
import EditPage from '../containers/Pages/Edit';
import Login from '../containers/Login';
import Reserve from '../containers/Reserve';
import ReserveList from '../containers/Reserve/ReserveList';
import Users from '../containers/Users';
import RoomsCol from '../containers/Rooms';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

function  privateAuth(authed,nextState,replace) {

        if (authed===false) {
          replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
          })
        }
 }

function  privateLogin(authed) {
        if (authed===true) {
           browserHistory.push('/home');
        }
 }


//onEnter={(nextState,replace)=>{requireAuth(this.props.login.authed,nextState,replace)}}


class Routes extends Component {

  render() {
  const {history} = this.props
    return (
      <div>
         <Router history={history}>       
          <Route path="/" component={Home} />
          <Route path="app" component={App} onEnter={(nextState,replace)=>{privateAuth(this.props.authed,nextState,replace)}}/>
          <Route path="about" component={About}/>
          <Route path="reserve" component={Reserve}/>
          <Route path="reserveList" component={ReserveList} />
          <Route path="home" component={Home}/>
          <Route path="users" component={Users}/>
          <Route path="roomcol" component={RoomsCol}/>
          <Route path="login" onEnter={privateLogin(this.props.authed)} component={Login}  />
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
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    authed:state.login.authed
  };
}





 Routes = connect(mapStateToProps)(Routes);

export default Routes;