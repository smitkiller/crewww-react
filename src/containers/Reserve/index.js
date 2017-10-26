import React,{Component,PropTypes} from 'react';
import Reserve from '../../components/Reserve';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import {loadRooms} from '../../actions/room';

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
