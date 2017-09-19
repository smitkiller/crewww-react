import React, { PropTypes,Component } from 'react'
import { FlatButton, TextField } from 'material-ui'
import { Field } from 'redux-form'

const styleLogin = {
  'margin': '2% 40%'
}


class Login extends Component{

  render(){
    const {fields,login,handleSubmit}=this.props
    const {email,password} = fields
    return(
        <div style={styleLogin}>{login.statusText}

    <form
      onSubmit={handleSubmit}
      className='form'>
      <div>
        <Field
         name="email"
         type="text"
         label="E-mail"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="password"
       type="password"
       label="Password"
       component={renderTextField} />

      </div>
      <FlatButton type='submit' label="Submit" />
    </form>
    </div>
    )
  }
}
Login.propTypes = {
  fields: PropTypes.array,
  email: PropTypes.object,
  password: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default Login;

const renderTextField = props => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    type={props.type}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
)