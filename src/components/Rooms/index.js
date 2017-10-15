import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DialogRoomsCol from '../Dialog/DialogRoomsCol';
import EditFormDialog from './Edit';
import _ from 'lodash';
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import { FlatButton, TextField } from 'material-ui';
import EditIcon from 'material-ui/svg-icons/image/edit';

const style = {
  margin: 12,
};

const Roomscol = ({
  roomscol,handleSubmit
}) => (
  <div>
  {/*roomscol
  ?<div></div>
  :<DialogRoomsCol
        handleSubmit={handleSubmit}/>
    
  */}
     <Link to={{ pathname: '/roomcol/new' }}><FlatButton icon={<AddIcon/>} style={style} /></Link>
    <hr />
    <Table>
     <TableHeader>
       <TableRow>
       <TableHeaderColumn>จำนวนชั้น</TableHeaderColumn>
        <TableHeaderColumn>จำนวนห้องแต่ละชั้น</TableHeaderColumn>
        <TableHeaderColumn>จำนวนห้องทั้งหมด</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
         <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
        {

          _.map(roomscol,(value,key)=>(
            <TableRow key={key} >
              <TableRowColumn>{value[0].level.num}</TableRowColumn>
              <TableRowColumn>{value[0].total.rooms}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn>
                <Link to={{ pathname: `/roomcol/edit/${key}` }}><FlatButton icon={<EditIcon/>} style={style} /></Link>

              </TableRowColumn>
              <TableRowColumn>


              </TableRowColumn>
            </TableRow>
            ))
          }
      </TableBody>
    </Table>
  </div>
)

Roomscol.propTypes = {
  handleSubmit: PropTypes.func,
  rooms:PropTypes.number
}

export default Roomscol;