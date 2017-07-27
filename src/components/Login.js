import React, { PropTypes,Component } from 'react'
import { FlatButton, TextField } from 'material-ui'
import { Field,reduxForm } from 'redux-form'


const styleLogin = {
  'margin': '2% 40%'
};


const renderTextField = props => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
)
const Login = ({
  fields,
  handleSubmit,touched,error
}) => {
  const { username,password } = fields

  return (
    <div style={styleLogin}>
    <form
      onSubmit={handleSubmit}
      className='form'>
      <div>
        <Field
         name="email"
         label="E-mail"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="password"
       label="Password"
       component={renderTextField} />

      </div>
      <FlatButton type='submit' label="Submit" />
    </form>
    </div>
  )
}
Login.propTypes = {
  fields: PropTypes.array,
  email: PropTypes.object,
  password: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default Login;
