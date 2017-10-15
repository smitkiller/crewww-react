import React, {Component} from 'react';
import SelectForm from '../../components/Rooms/SelectForm';
import Header from '../../components/Header';




class NewRoomsContainer extends Component{
	render(){
		//const {fields,handleSubmit} = this.props;
		return(
			<div>
				<Header />
				<SelectForm  />
				</div>
			)
	}
}



export default NewRoomsContainer;