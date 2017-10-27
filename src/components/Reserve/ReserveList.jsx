import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import themeSite from '../../img/old.jpg';
import logo from '../../img/logoCrewww.png';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DialogReserve from '../Dialog/DialogReserve';

const styles = {
  headline: {
    fontSize: 16,
    paddingTop: 5,
    marginBottom: 5,
    textAlign: 'center'
  },
  tabItemContainer:{
  	backgroundColor: '#00BCD4'
  }
};

const state = {
    showCheckboxes: false
  };

class ReserveList extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
    	<div style={{marginTop:20}}>
      <Tabs 
      tabItemContainerStyle={styles.tabItemContainer}
      style={{'width':'80%','margin':'0 auto'}}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="รายการจองห้องพัก" value="a">
          <div>
          <Table>
           <TableHeader
              displaySelectAll={state.showCheckboxes}
              adjustForCheckbox={state.showCheckboxes}
           >
              <TableRow>
                <TableHeaderColumn style={styles.headline} colSpan="4"  >
                  รายการจองห้องพัก
                </TableHeaderColumn>
              </TableRow>
             <TableRow>
             <TableHeaderColumn>วันที่</TableHeaderColumn>
              <TableHeaderColumn>ชื่อ-นามสกุล</TableHeaderColumn>
              <TableHeaderColumn>เบอร์ติดต่อ</TableHeaderColumn>
              <TableHeaderColumn><DialogReserve/></TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={state.showCheckboxes}
            >
                  <TableRow >
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn>
                      <FlatButton title="ยกเลิก" icon={<DeleteIcon/>} />
                    </TableRowColumn>
                  </TableRow>
            </TableBody>
          </Table>
        </div>
        </Tab>
        <Tab label="รายละเอียดห้องพัก" value="b">
          <div style={{marginBottom:20}}>
              <Card style={{'width':'100%','margin':'0 auto'}}>
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar={logo}
                />
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                  <img src={themeSite} alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton title="จอง" icon={<ActionTouch/>} />
                </CardActions>
              </Card>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default ReserveList;