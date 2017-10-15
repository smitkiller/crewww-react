import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { loadPage } from '../../actions/page';
import { getRoomsColById } from '../../reducers/roomscol';
import EditFormCol from '../../components/Rooms/Edit';
import _ from 'lodash'; 

class EditFormColContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    page: PropTypes.object.isRequired
  }


  render() {

    return (
      <div>
        <EditFormCol
            id={this.props.params.id}
            page={this.props.page}
        />
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => ({ roomscol: getRoomsColById(state, ownProps.params.id)})
)(EditFormColContainer)

