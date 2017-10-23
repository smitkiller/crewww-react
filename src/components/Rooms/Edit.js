import React, {Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Dialog,FlatButton, TextField } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { reduxForm } from 'redux-form';
import { updateRoomscol } from '../../actions/room';
import _ from 'lodash';

const FIELDS = [];
const styles = {
   float       : 'none', 
   width       : '200px',
   marginLeft  : 'auto',
   marginRight : 'auto'
};


const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/>
  </div>
)

const numValidate = (value) =>(value && isNaN(Number(value))?'กรุณากรอกตัวเลข':undefined)
const required=(value)=>(value?undefined:'Required')

  class EditFormCol extends Component {

    state = {
      value:1
    };

    componentWillMount() {
       this.levelTotal();
      }

    handleChange = (event, index, value) => this.setState({value});
    levelTotal = () =>(
            _.map(this.props.roomscol,(val)=>this.setState({value:val.totalLevel}))
        )
  
        render(){
          const { handleSubmit} = this.props;
          const items = [];
          const itemsInput = [];
            for (var i = 1; i < 100; i++ ) {
                  items.push(<MenuItem value={i} key={i} primaryText={`${i} ชั้น`} />);
            }

            for(var m=0; m <this.state.value;m++){
                 itemsInput.push(<Field key={m} name={m.toString()} label={`ชั้นที่ ${m+1}`} 
                 component={renderTextField} validate={[required,numValidate]} />)
            }


          return (
                <div style={styles}>
                   <form onSubmit={handleSubmit}>
                  <SelectField
                    floatingLabelText="จำนวนชั้น"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    {
                      items
                    }
                  </SelectField>

              
                      {
                         itemsInput
                      }

                      <FlatButton type='submit' label="Submit" />
                   </form>

                </div>
         );
      }
}



EditFormCol = reduxForm(
  {
    form: 'EditFormCol',
    fields: FIELDS,
    enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
    onSubmit:(values,dispatch)=> dispatch(updateRoomscol(values))
})(EditFormCol)


function mapStateToProps(state,ownProps){
  var data=[];
  var datas=[];
  var values=[];
    datas={
      id:ownProps.id
    }

      data=  _.map(state.roomscol,(val)=>val.levelRooms)
      for(var i=0;i<data.length;i++){
            values=data[i];  
      }
  

   //console.log('dddddddddddddddddddddsssss',values)
  return{
    initialValues:values
  }
}
EditFormCol = connect(mapStateToProps
)(EditFormCol)




export default EditFormCol;
