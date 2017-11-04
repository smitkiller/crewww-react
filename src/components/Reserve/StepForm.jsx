import React,{Component,PropTypes} from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton} from 'material-ui/RadioButton';
import { reduxForm,Field } from 'redux-form';
import { FlatButton } from 'material-ui';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';


// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);
const checkDate = value => (value > 15 ? 'Are you mad?' : undefined);

class StepForm extends React.Component {
  constructor(props){
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      stepIndex: 0,
      types:"0",
      minDate: minDate,
      maxDate: maxDate,
      minEnd:minDate,
    };
  }
 
  handleDayStart=(event, date)=>{
    this.setState({
      minEnd: date,
    });
  }

 handleDay=()=>(
          this.setState({types:"0"})
        )

  handleMouth=()=>(
          this.setState({types:"1"})
        )

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 1) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;
    return (
      <div style={{margin: '12px 0'}}>
      {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
          type={stepIndex === 1 ? 'submit' : 'button'}
        />
        
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;
    const {handleSubmit} = this.props;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
      <form onSubmit={handleSubmit((values,dispatch)=>console.log('valuessssssssss',values))} >
        <Stepper
          activeStep={stepIndex}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
            <StepContent>
              <div>
            <Field name="typeReserve" component={RadioButtonGroup}>
              <RadioButton value="0" label="รายวัน" onClick={this.handleDay}  />
              <RadioButton value="1" label="รายเดือน" onClick={this.handleMouth} />
            </Field>
          </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
            <StepContent>
                <div>
                    <div>วันที่เข้าพัก</div>
                      <Field
                        name="dateCheckIn"
                        component={DatePicker}
                        format={null}
                        hintText="วันที่เข้าพัก"
                        validate={required}
                        minDate={this.state.minDate}
                        maxDate={this.state.maxDate}
                        onChange={this.handleDayStart}
                      />
                </div>
                 <div>
                    <div>วันที่ออก</div>
                      <Field
                        name="dateCheckOut"
                        component={DatePicker}
                        format={null}
                        hintText="วันที่ออก"
                        validate={required}
                        minDate={this.state.minEnd}
                        maxDate={this.state.maxDate}
                      />
                </div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
        </Stepper>
        </form>
      </div>
    );
  }
}

StepForm = reduxForm(
  {
    form: 'StepForm',
    initialValues: {
      typeReserve: '0',
    }
})(StepForm)

StepForm.propsTypes={
  handleSubmit:PropTypes.func
}

export default StepForm;