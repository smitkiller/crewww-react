import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import { Link} from 'react-router'
import logo from './img/logo2.png'
import {logout} from '../Auth/auth'
import { firebaseAuth } from '../constants/configAuth'

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
         
          {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <Link style={{textDecoration:'none'}} to={'/login'}><MenuItem>Login</MenuItem></Link>}
          {/*<Link style={{textDecoration:'none'}} to={'/about'}><MenuItem>About</MenuItem></Link>*/}
          </Drawer>
          </div>
      </header>
   )
 }
}
export default Header
