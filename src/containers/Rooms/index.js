import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRoomscol,createRoomscol } from '../../actions/room';
import Roomscol from '../../components/Rooms';
import Header from '../../components/Header';
import { reduxForm } from 'redux-form'

const FIELDS = ['rows', 'col'];

class RoomscolContainer extends Component {
  static propTypes = {
    onLoadRoomscol: PropTypes.func.isRequired
  }

  static need = [
    loadRoomscol
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.roomscol !== nextProps.roomscol;
  }

  onReloadRoomscol = () => {
    this.props.onLoadRoomscol()
  }


  componentDidMount() {
    this.onReloadRoomscol()
  }

  render() {
    const {fields,handleSubmit} = this.props;
    return (
      <div><div>
          <Header txtTitle='จัดการจำนวนห้อง'/>
          <Roomscol 
              roomscol={this.props.roomscol}
              fields={fields}
              handleSubmit={handleSubmit}
          />
     
     </div>
      </div>
    )
  }
}

RoomscolContainer = reduxForm({
    form: 'roomscol',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(createRoomscol(values))
}
)(RoomscolContainer)

RoomscolContainer = connect(
  (state) => ({ roomscol: state.rooms }),
  { onLoadRoomscol: loadRoomscol }
)(RoomscolContainer)


export default RoomscolContainer;