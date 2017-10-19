import React, { Component ,PropTypes } from 'react';
import { connect } from 'react-redux';
import EditFormCol from '../../components/Rooms/Edit';
import Header from '../../components/Header';
import _ from 'lodash';
import { loadRoomscol } from '../../actions/room';

class EditFormColContainer extends Component {
  static propTypes = {
    onLoadRoomscol: PropTypes.func.isRequired
  }

  static need = [
    loadRoomscol
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.roomcol !== nextProps.roomcol;
  }

  onReloadRoomscol = () => {
    this.props.onLoadRoomscol()
  }


  componentWillMount() {
    this.onReloadRoomscol()
  }

  render() {
    return (
      <div>
      <Header txtTitle="แก้ไขจำนวนห้องพัก"/>
        <EditFormCol
           id={this.props.params.id}
           roomcol={this.props.roomcol}
        />
      </div>
    )
  }
}

EditFormColContainer = connect(
  (state) => ({ roomcol: _.map(state.roomscol,(val)=>val)}),
  { onLoadRoomscol: loadRoomscol }
)(EditFormColContainer)
export default EditFormColContainer;