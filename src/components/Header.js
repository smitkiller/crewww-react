import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router';
import logo from './img/logo2.png';
import {logoutUser} from '../actions/login';
import { firebaseAuth } from '../constants/configAuth';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
injectTapEventPlugin();

class Header extends Component {
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
    const { header } = this.props
    return (
      <div>
      <header className="header">
          <AppBar
          title={header}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight = {<img src={logo} />}/>
          {/*iconElementRight =*/} {/*<img src='header-logo.png' alt="Logo" />*/}
          <div>
          <Drawer
          width={200}
          openSecondary={false}
          open={this.state.open}>
          <AppBar title={header} onLeftIconButtonTouchTap={this.handleToggle}/>
          <Link style={{textDecoration:'none'}} to={'/home'}><MenuItem>Home</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/app'} ><MenuItem>App</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/pages'}><MenuItem>Pages</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/reserve'}><MenuItem>จอง</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/pages'}><MenuItem>แจ้ง</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/pages'}><MenuItem>คำนวณ</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to={'/pages'}><MenuItem>ติดต่อ</MenuItem></Link>
          {this.props.login.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logoutUser()
                        }}
                        className="navbar-brand">Logout</button>
                    : <Link style={{textDecoration:'none'}} to={'/login'}><MenuItem>Login</MenuItem></Link>}
          {/*<Link style={{textDecoration:'none'}} to={'/about'}><MenuItem>About</MenuItem></Link>*/}
          </Drawer>
          </div>
      </header>
      </div>
   )
 }
}
Header = connect(
(state)=>({login:state.login})
  )(Header)

export default Header;
