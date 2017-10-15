import React, {Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updatePage } from '../../actions/page';
import { Dialog,FlatButton, TextField } from 'material-ui';
import PropTypes from 'prop-types';
import EditIcon from 'material-ui/svg-icons/image/edit';

const FIELDS = ['title', 'content']


const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
  </div>
)

  class EditFormCol extends Component {

        state={
          open:false
        }
        handleOpen= () =>{
          this.setState({
            open:true
          })
        }
        handleClose= () =>{
          this.setState({
            open:false
          })
        }

        render(){
          const { handleSubmit} = this.props
          const actions= [
            <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}/>,

            <FlatButton
            type="submit"
            label="Submit"
            primary={true}
            onTouchTap={handleSubmit}
            />
          ]

    return (
        <div>
          <FlatButton icon={<EditIcon/>} onTouchTap={this.handleOpen} />
          <Dialog
          title="Delete"
          actions={actions}
          modal={true}
          open={this.state.open}>
                    <div className="App">
                        <form
                          onSubmit={handleSubmit}
                          className='form'>
                          <div>
                            <Field
                             name="rows"
                             label="Rows"
                             component={renderTextField} />
                          </div>
                          <div>
                          <Field
                           name="col"
                           label="Col"
                           component={renderTextField} />

                          </div>
                     
                        </form>
                  </div>
           </Dialog>
          </div>
        )
      }
}

EditFormCol = reduxForm(
  {
    form: 'Editpage',
    enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' },{}),
    onSubmit:(values,dispatch)=> dispatch(updatePage(values))
})(EditFormCol)

EditFormCol = connect(
  (state, ownProps) => ({
    initialValues:{
      id:ownProps.id,
      title:ownProps.page.title,
      content:ownProps.page.content
    }
  })
)(EditFormCol)

EditFormCol.propTypes = {
  id: PropTypes.string,
  title: PropTypes.object,
  content: PropTypes.object
}

export default EditFormCol;
