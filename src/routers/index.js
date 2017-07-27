import React from 'react';
import { Router, Route,IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import App from '../components/App'
import Home from '../containers/Home'
import About from '../components/About'
import simpleForm from '../components/simpleForm'
import Pages from '../containers/Pages/index'
import NewPage from '../containers/Pages/New'
import ShowPage from '../containers/Pages/Show'
import EditPage from '../containers/Pages/Edit'
import Login from '../containers/Login'
import {requireAuthentication} from '../components/AuthenticatedComponent'
import {ProtectedView} from '../components/ProtectedView'



export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
    <Route path="/" component={Home} />
    <Route path="app" component={App} />
    <Route path="about" component={About}/>
    <Route path="home" component={Home}/>
    <Route path="login" component={Login}/>
    <route path='pages'>
      <IndexRoute component={Pages} />
      <route path='new'
             component={NewPage} />
      <route path=':id'
             component={ShowPage} />
     <route path='edit'>
            <route path=':id' component={EditPage} />
      </route>
    </route>

  </Router>
)
}
