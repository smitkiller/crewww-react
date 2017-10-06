import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
//import Page from './Page'
import Header from '../Header'
import FlatButton from 'material-ui/FlatButton'
//import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import DialogDelete from '../DialogDelete';
import _ from 'lodash';

const style = {
  margin: 12,
};

const Pages = ({
  pages,
  onReloadPages,
  onRemove
}) => (
  <div>
    <Header txtTitle='Pages'/>
    <FlatButton
      onClick={() => onReloadPages()}
      label="Reload Pages"
    />
    <Link to={{ pathname: '/pages/new' }}><FlatButton icon={<AddIcon/>} style={style} /></Link>
    <hr />
    <Table>
     <TableHeader>
       <TableRow>
       <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
        {
          _.map(pages,(page,key) => (
            <TableRow key={key}>
              <TableRowColumn>{key}</TableRowColumn>
              <TableRowColumn>{page.title}</TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/pages/${key}` }}><FlatButton label="Show" secondary={true} /></Link>
              </TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/pages/edit/${key}` }}><FlatButton icon={<EditIcon/>} style={style} /></Link>
              </TableRowColumn>
              <TableRowColumn>
              <DialogDelete
                id={page.id}
                onRemove={onRemove}
              />

              </TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
)

Pages.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired,
  onRemove:PropTypes.func
}

export default Pages;
