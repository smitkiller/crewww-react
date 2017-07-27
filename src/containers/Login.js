import React, { Component, PropTypes } from 'react'
import { loginUser } from '../actions/login'
import Login from '../components/Login'
import Header from '../components/Header'
import { reduxForm } from 'redux-form'

const FIELDS = ['email', 'password']

class LoginContainer extends Component{

  render () {
    const { fields, handleSubmit } = this.props

    return (
      <div>
      <Header/>
       <Login
       fields={fields}
       handleSubmit={handleSubmit}/>
       </div>
    );
  }
}
export default reduxForm({
    form: 'login',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(loginUser(values))
}
)(LoginContainer)
