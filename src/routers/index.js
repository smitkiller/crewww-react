import React,{Component} from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'

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

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}/>
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/home' />}/>
  )
}

export default class Routes extends Component {
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }
  handleToggle = () =>this.setState({
    open:!this.state.open
  })
  render() {
    return (
      <BrowserRouter>
        <div>
        <AppBar
        title="Crewww-react"
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight = {<img src={logo} />}/>
        {/*iconElementRight =*/} {/*<img src='header-logo.png' alt="Logo" />*/}
        <div>
        <Drawer
        width={200}
        openSecondary={false}
        open={this.state.open}>
        <AppBar title="test" onLeftIconButtonTouchTap={this.handleToggle}/>
        <Link style={{textDecoration:'none'}} to={'/home'}><MenuItem>Home</MenuItem></Link>
        <Link style={{textDecoration:'none'}} to={'/app'}><MenuItem>App</MenuItem></Link>
        <Link style={{textDecoration:'none'}} to={'/pages'}><MenuItem>Pages</MenuItem></Link>
        <Link style={{textDecoration:'none'}} to={'/login'}><MenuItem>Login</MenuItem></Link>
        {/*<Link style={{textDecoration:'none'}} to={'/about'}><MenuItem>About</MenuItem></Link>*/}
        </Drawer>
        </div>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute authed={true} path="/app" component={App} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
