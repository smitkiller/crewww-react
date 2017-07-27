import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { createPage } from '../../actions/page'
import PageForm from '../../components/Pages/Forms'


const FIELDS = ['title', 'content']


class PageFormContainer extends Component {

  render() {
    const { fields, handleSubmit } = this.props

    return (
      <PageForm
        fields={fields}
        handleSubmit={handleSubmit} />
    )
  }
}

export default reduxForm({
    form: 'page',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(createPage(values))
}
)(PageFormContainer)
