import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadPage } from '../../actions/page';
import { getPageById } from '../../reducers/pages';
import EditForm from '../../components/Pages/EditForm';
import _ from 'lodash'; 

class EditPageContainer extends Component {
  static propTypes = {
    id: PropTypes.object,
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  static need = [
    (params) => (loadPage(params.id))
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage, params: { id } } = this.props

    onLoadPage(id)

  }


  render() {
   // console.log('sssssssssssssssssssss',this.props.params.id);

    return (
      <EditForm
          id= {this.props.params.id}
          page={this.props.page}
      />
    )
  }
}



export default connect(
  (state, ownProps) => ({ page: getPageById(state, ownProps.params.id)}),
  { onLoadPage: loadPage }
)(EditPageContainer)
