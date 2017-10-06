import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/pages'
import ShowPage from '../../components/Pages/Show'

class ShowPageContainer extends Component {
  static propTypes = {
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
 //  const { title, content } = this.props.page
//console.log('skdlkfjsd',this.props.page)
    return (
      <ShowPage
        page={this.props.page}/>
    )
  }
}

export default connect(
  (state, ownProps) => ({ page: getPageById(state, ownProps.params.id) }),
  { onLoadPage: loadPage }
)(ShowPageContainer)
