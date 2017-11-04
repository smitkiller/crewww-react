/* File TEST */
import React,{ Component,PropTypes} from 'react';
import {Dialog,FlatButton} from 'material-ui';
import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import ReserveForm from '../Reserve/Form';
import StepForm from '../Reserve/StepForm';


class DialogReserve extends Component{
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
    ]

    return(
      <div>
      <FlatButton title="จอง" icon={<ActionTouch/>} onTouchTap={this.handleOpen} />
      <Dialog
      title="จองห้องพัก"
      actions={actions}
      modal={true}
      open={this.state.open}
      autoScrollBodyContent={true}>
      <StepForm/>
      </Dialog>
      </div>
    )
  }
}

export default DialogReserve;