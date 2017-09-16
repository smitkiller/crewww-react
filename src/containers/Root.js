import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Routes from '../routers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../components/material_ui_raw_theme_file'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

export default class Root extends Component {
  render() {
    const { history, initialState } = this.props
    const store = configureStore(history, initialState)

    return (
      
      <MuiThemeProvider muiTheme={theme}>
      <Provider store={store} key='provider'>
        <Routes
        store={store}
         history={history}
        />
     </Provider>
      </MuiThemeProvider>
       
    )
  }
}
