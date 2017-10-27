import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
//import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ReserveList extends Component{
render(){
	return(
	<div className="left_side" >
		<div>รายการการจองห้องพัก</div>
		  <Table>
		     <TableHeader>
		       <TableRow>
		       <TableHeaderColumn>วันที่</TableHeaderColumn>
		        <TableHeaderColumn>ชื่อ-นามสกุล</TableHeaderColumn>
		        <TableHeaderColumn>เบอร์ติดต่อ</TableHeaderColumn>
		        <TableHeaderColumn></TableHeaderColumn>
		         <TableHeaderColumn></TableHeaderColumn>
		      </TableRow>
		      </TableHeader>
		      <TableBody>
		            <TableRow >
		              <TableRowColumn></TableRowColumn>
		              <TableRowColumn></TableRowColumn>
		              <TableRowColumn></TableRowColumn>
		              <TableRowColumn>
		                <FlatButton icon={<EditIcon/>} />
		              </TableRowColumn>
		              <TableRowColumn>
		              </TableRowColumn>
		            </TableRow>
		      </TableBody>
		    </Table>
	</div>
		)
  }
}

export default ReserveList;