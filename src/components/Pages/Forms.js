import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import Header from '../Header'
//import { FileUpload } from 'redux-file-upload'
import { FlatButton, TextField } from 'material-ui'
//import ImageUpload from '../ImageUpload'

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
)
const PageForm = ({
  fields,
  handleSubmit,touched,error
}) => {

  return (
    <div className="App">
    <Header header='New'/>
    <form
      onSubmit={handleSubmit}
      className='form'>
      <div>
        <Field
         name="title"
         label="Title"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="content"
       label="Content"
       component={renderTextField} />

      </div>
      <FlatButton type='submit' label="Submit" />
    </form>
    </div>
  )
}
PageForm.propTypes = {
  fields: PropTypes.array,
  title: PropTypes.object,
  content: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default PageForm
