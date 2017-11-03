/* File TEST */
import React,{ Component } from 'react';
import {Dialog,FlatButton} from 'material-ui';
import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import ReserveForm from '../Reserve/Form';



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

      <FlatButton
      type="submit"
      label="Submit"
      primary={true}
      onTouchTap={handleSubmit}
      />
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
      <ReserveForm/>
      </Dialog>
      </div>
    )
  }
}

export default DialogReserve;