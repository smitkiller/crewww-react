import React,{Component,Proptypes} from 'react';
import Header from '../Header';
import { FlatButton, TextField } from 'material-ui'
import { Field } from 'redux-form'

const renderTextField = (props) => (
      <div>
		<TextField 
			hintText={props.label} 
			floatingLabelText={props.label}
			errorText={props.meta.touched && props.meta.error}
			{...props.input}/>
      </div>
	)


class ReserveForm extends Component{
   render(){
   		const {handleSubmit} = this.props;
   	return(

   		<form onSubmit={handleSubmit} className='form' >
   		<div>
   			<Field name="firstname" label="ชื่อ" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="lastname" label="นามสกุล" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="tel" label="เบอร์โทรศัพท์" component={renderTextField} />
   		</div>
   		<div>
   			<Field name="email" label="ำีเมลล์" component={renderTextField} />
   		</div>
   		<div>
   			ประเภทการเข้าพัก
   		</div>
   		</form>	
   		)
   }
}

export default ReserveForm;