import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import EditIcon from 'material-ui/svg-icons/image/edit'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import DialogRoomsCol from '../Dialog/DialogRoomsCol';
import _ from 'lodash';

const style = {
  margin: 12,
};

const Roomscol = ({
  roomscol,handleSubmit
}) => (
  <div>
  {roomscol
  ?<div></div>
  :<DialogRoomsCol
        handleSubmit={handleSubmit}/>
    
  }
     
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
              <TableRowColumn>{value.rows}</TableRowColumn>
              <TableRowColumn>{value.col}</TableRowColumn>
              <TableRowColumn>
                
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton icon={<EditIcon/>} style={style} />
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
  handleSubmit: PropTypes.func
}

export default Roomscol;
