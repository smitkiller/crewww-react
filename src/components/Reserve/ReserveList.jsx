import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
//import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import AddIcon from 'material-ui/svg-icons/image/add-to-photos';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import themeSite from '../../img/old.jpg';
import logo from '../../img/logoCrewww.png';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabItemContainer:{
  	backgroundColor: '#00838F'
  }
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
    	<div style={{marginTop:'20'}}>
      <Tabs 
      tabItemContainerStyle={styles.tabItemContainer}
      style={{'width':'80%','margin':'0 auto'}}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="รายการจองห้องพัก" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="รายละเอียดห้องพัก" value="b">
          <div>
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
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
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