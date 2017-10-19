import React, {Component,PropTypes} from 'react';
import SelectForm from '../../components/Rooms/SelectForm';
import Header from '../../components/Header';
import { reduxForm } from 'redux-form'
import { addRomms } from '../../actions/room';



class NewRoomsContainer extends Component{

	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
				<Header />
				<SelectForm  
					handleSubmit={handleSubmit}
				/>
				</div>
			)
	}
}

NewRoomsContainer = reduxForm({
    form: 'rooms',
    onSubmit:(values,dispatch)=> dispatch(addRomms(values))
}
)(NewRoomsContainer)

export default NewRoomsContainer;