import React, { Component ,PropTypes } from 'react';
import { connect } from 'react-redux';
import {EditFormCol,Header} from '../../components';
import _ from 'lodash';


class EditFormColContainer extends Component {
  static propTypes = {
     roomscol: PropTypes.object.isRequired
  }


  render() {
    return (
      <div>
      <Header txtTitle="แก้ไขจำนวนห้องพัก"/>
        <EditFormCol
           id={this.props.params.id}
           roomscol={this.props.roomscol}
        />
      </div>
    )
  }
}

EditFormColContainer = connect(
  (state) => ({ roomscol: state.roomscol})
)(EditFormColContainer)
export default EditFormColContainer;