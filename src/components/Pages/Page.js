import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,FlatButton} from 'material-ui'

export default class Page extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onRemove:PropTypes.func
  }

  render() {
    const { id, title,onRemove } = this.props

    return (
      <Table>
      <TableHeader>
      <TableRow>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{title}</TableRowColumn>
        <TableRowColumn>
          <Link to={{ pathname: `/pages/${id}` }}><FlatButton label="Show" secondary={true} /></Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={{ pathname: `/pages/edit/${id}` }}>Edit</Link>
        </TableRowColumn>
        <TableRowColumn>
        <button className='button' onClick={() => onRemove(id)}>delete</button>
        </TableRowColumn>
      </TableRow>
      </TableHeader>
      </Table>
    )
  }
}
