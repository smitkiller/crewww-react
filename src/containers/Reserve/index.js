import React,{Component,PropTypes} from 'react';
import Reserve from '../../components/Reserve';
import {connect} from 'react-redux';
import Header from '../../components/Header';

class ReserveContainer extends Component {
    
    static propTypes = {
    	reserves:PropTypes.array.isRequired,
    	onLoadReserves:PropTypes.func.isRequired
    }

	shouldComponentUpdate(nextProps){
		return this.props.reserves !== nextProps.reserves;
	}

	onReloadReserves = () =>{
    	this.props.onLoadReserves();
    }

	componentDidMount(){
		this.onReloadReserves();
	}

	render(){
		return(
			<div>
				<Header header="จองห้องพัก"/>
				<Reserve
				  reserves={this.props.reserves}
				  onReloadReserves={this.onReloadReserves} />
			</div>
			)
	}
}
	ReserveContainer = connect(
		(state) => ({reserves:state.reserves}),
		//{onLoadReserves:loadReserves}

	)(ReserveContainer)

	export default ReserveContainer;