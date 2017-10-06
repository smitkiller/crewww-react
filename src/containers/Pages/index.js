import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loadPages,deletePage } from '../../actions/page'
import Pages from '../../components/Pages/index'

class PagesContainer extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired,
    onDelete:PropTypes.func
  }

  static need = [
    loadPages
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages;
  }

  onReloadPages = () => {
    this.props.onLoadPages()
  }

  onRemove = (id) => {
    this.props.onDelete(id)
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    return (
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages}
        onRemove={this.onRemove} />
    )
  }
}

export default connect(
  (state) => ({ pages: state.pages }),
  { onLoadPages: loadPages,onDelete:deletePage }
)(PagesContainer)
