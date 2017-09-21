import React,{Component} from 'react';
import Form from '../../Component/Form';
import {reduxForm} from 'redux-form';
import {createReserve} from '../../action/reserve'

const FIELDS = ['firstname','lastname','tel','email'];

class FormContainer extends Component{
	render(){
			const {handleSubmit} = this.props
		return(
			<div>
			<Form handleSubmit={handleSubmit} />
			</div>
			)
	}
}
/*FormContainer=reduxForm({
	form:'reserve'
	fields:FIELDS,
	validate:(values,props)=>
		FIELDS.reduce((errors,field)=>
		values[field] ? errors : {...errors,[field]:'Required'},{}
		),onSubmit:(values,dispatch)=> dispatch(createReserve(values))
})(FormContainer)*/

export default FormContainer;