import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
        App,
        About } from '../components';
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
          <Route path="roomcol">
              <IndexRoute component={RoomsCol} />
              <Route path="new" component={NewRooms}/>
              <Route path="edit" >
                          <Route path=':id' component={EditRoomscol} />
              </Route>

          </Route>
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