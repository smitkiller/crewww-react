import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Routes from '../routers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../components/material_ui_raw_theme_file'



export default class Root extends Component {
  render() {

    const { history} = this.props
    const store = configureStore()

    
    return (
      <Provider store={store} key='provider'>
      <MuiThemeProvider muiTheme={theme}>     
          <Routes
           history={history}     
          />
      </MuiThemeProvider>
       </Provider>
       
    )
  }
}
