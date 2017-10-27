import React,{PropTypes} from 'react'
//import PropTypes from 'prop-types';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import themeSite from '../img/old.jpg';
import logo from '../img/logoCrewww.png';


const style = {
  height: 100,
  width: 800,
  margin:'auto',
};

const Home = ({

}) => (
<div style={{marginTop:'20'}}>
 <Card style={{'width':'80%','margin':'0 auto'}}>
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
)

/*
Homes.propTypes = {
  datas: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired
}
*/
export default Home;
