import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router';
import logo from './img/logo2.png';
import {logoutUser} from '../actions/login';
import { firebaseAuth } from '../constants/configAuth';
import { connect } from 'react-redux';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';





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
          <MenuItem
              primaryText="แจ้ง"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <Link style={{textDecoration:'none'}} to={'/login'}><MenuItem primaryText="แจ้งออกห้องพัก" /></Link>,
                <MenuItem primaryText="แจ้งย้ายห้องพัก" />,
                <MenuItem primaryText="แจ้งอุปกรณ์ชำรุด"  />,
                <MenuItem primaryText="อื่นๆ"  />
              ]}
          />
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
