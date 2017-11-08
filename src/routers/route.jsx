import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
        App,
        About,
        NotFound } from '../components';
import { 
        Pages,
        NewPage,
        ShowPage,
        EditPage,
        Login,
        Reserve,
        ReserveList,
        Users,
        RoomsCol,
        NewRooms,
        EditRoomscol,
        Home } from '../containers';



 function privateAuth(authed,nextState,replace){
    if(!authed){
         replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
          })
    }
 }

//onEnter={(nextState,replace)=>{privateAuth(authed,nextState,replace)}}


class Routes extends Component {

  render() {
  const {history,authed} = this.props

    return (
      <div>
         <Router history={history}>       
          <Route path="/" exact component={Home} />

          <Route path="about" component={About}/>
          
        
              <Route path="app" component={App}  />
              <Route path="reserve" >
                  <IndexRoute component={Reserve} />
                  <Route path="list" >
                              <Route path=':id' component={ReserveList} />
                  </Route>

              </Route>
              
              <Route path="users" component={Users}/>
              <Route path="roomcol" >
                  <IndexRoute component={RoomsCol} />
                  <Route path="new" component={NewRooms}/>
                  <Route path="edit" >
                              <Route path=':id' component={EditRoomscol} />
                  </Route>

              </Route>
              <Route path="login" component={Login} />
              <Route path='pages' >
                <IndexRoute component={Pages} />
                <Route path='new'
                       component={NewPage} />
                <Route path=':id'
                       component={ShowPage} />
               <Route path='edit'>
                      <Route path=':id' component={EditPage} />
                </Route>

          </Route> 
          <Route path='*' component={NotFound} />     
          </Router>
      </div>
    )
  }
}



export default Routes;