import React,{Component} from 'react';
import ReserveList from '../../components/Reserve/ReserveList';
import Hearder from '../../components/Header';

class ReserveListContainer extends Component{

	render(){

		return(
				<div>
					<Hearder txtTitle="รายการการจองห้องพัก"/>
					<ReserveList/>
				</div>
			)
	}
}

export default ReserveListContainer;