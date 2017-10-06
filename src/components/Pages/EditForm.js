import React, {Component } from 'react'
import { Field,reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { updatePage } from '../../actions/page'
import { FlatButton, TextField } from 'material-ui'
import Header from '../Header'

const FIELDS = ['title', 'content']


  class EditPageForm extends Component {

        renderTextField = (props) => (
          <div>
            <TextField
              hintText={props.label}
              floatingLabelText={props.label}
              errorText={props.meta.touched && props.meta.error}
              {...props.input} />
          </div>
        )


    render() {
      const {handleSubmit} = this.props

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
              component={this.renderTextField} />

            </div>
            <div>
              <Field
              name="content"
              label="Content"
              component={this.renderTextField}/>
            </div>

            <FlatButton type='submit' label="Submit" />
          </form>
          </div>
        )
      }
}

EditPageForm = reduxForm(
  {
    form: 'Editpage',
    enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' },{}),
    onSubmit:(values,dispatch)=> dispatch(updatePage(values))
})(EditPageForm)

EditPageForm = connect(
  (state, ownProps) => ({
    initialValues:{
      id:ownProps.id,
      title:ownProps.page.title,
      content:ownProps.page.content
    }
  })
)(EditPageForm)

export default EditPageForm
