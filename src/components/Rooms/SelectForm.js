import React, {Component,PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { FlatButton, TextField } from 'material-ui';
import { reduxForm } from 'redux-form'
import { addRomms } from '../../actions/room';

const styles = {
  customWidth: {
    width: 150,
  },
};

const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/></div>
)

const FIELDS=[];


class SelectForm extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {fields,handleSubmit}= this.props;
     const items = [];
     const itemsInput = [];
      for (var i = 1; i < 100; i++ ) {
            items.push(<MenuItem value={i} key={i} primaryText={`${i} ชั้น`} />);
      }
      for(var m=1; m <=this.state.value;m++){
           itemsInput.push( <div ><Field key={m} name={m.toString()} label={`ชั้นที่ ${m}`} component={renderTextField} /></div>)
      }

    return (
      <div>
        <SelectField
          floatingLabelText="จำนวนชั้น"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {
            items
          }
        </SelectField>

        <form onSubmit={handleSubmit}>
            {
               itemsInput
            }

            <FlatButton type='submit' label="Submit" />
         </form>

      </div>
    );
  }
}

SelectForm = reduxForm({
    form: 'rooms',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(addRomms(values))
}
)(SelectForm)

SelectForm.propTypes={
  handleSubmit:PropTypes.func.isRequest
}

export default SelectForm;