import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loadDatas } from '../actions/data'
import Homes from '../components/Home'
import Header from '../components/Header'

class HomesContainer extends Component {
  static propTypes = {
    datas: PropTypes.array
  }

  static need = [
    loadDatas
  ]

  shouldComponentUpdate(nextProps) {
    return this.props.datas !== nextProps.datas;
  }

  onReloadDatas = () => {
    this.props.onLoadDatas()
  }

  componentDidMount() {
    this.onReloadDatas()
  }

  render() {
    return (
      <div>
     <Header header='Home'/>
      <Homes datas={this.props.datas}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({ datas: state.datas }),
  { onLoadDatas: loadDatas }
)(HomesContainer)
