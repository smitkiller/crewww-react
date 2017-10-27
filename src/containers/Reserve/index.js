import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header,Reserve} from '../../components';
import {loadRooms} from '../../actions';

class ReserveContainer extends Component {
   
  static propTypes = {
    	onLoadRooms:PropTypes.func.isRequired
    }

	shouldComponentUpdate(nextProps){
		return this.props.rooms !== nextProps.rooms;
	}

	onReloadRooms = () =>{
    	this.props.onLoadRooms();
    }

	componentDidMount(){
		this.onReloadRooms();
	}

	render(){
		return(
			<div>
				<Header txtTitle="จองห้องพัก"/>
				<Reserve
				  rooms={this.props.rooms}
				  roomscol={this.props.roomscol}/>
			</div>
			)
	}
}
	ReserveContainer = connect(
		(state) => ({rooms:state.rooms,roomscol:state.roomscol}),
		{onLoadRooms:loadRooms}

	)(ReserveContainer)

	export default ReserveContainer;