import React,{PropTypes} from 'react'
//import PropTypes from 'prop-types';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import themeSite from './img/4.png'
import logo from './img/logoCrewww.png'

const style = {
  height: 100,
  width: 800,
  margin:'auto',
};

const Homes = ({
  datas
}) => (
<div style={{margin:20}}>
        <Card style={style}>
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
          {
            datas.map((data,key) => (
          <CardText key={key} style={style}>
          {data.title}
          </CardText>
        )
        )}
        </Card>
</div>
)

Homes.propTypes = {
  datas: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired
}

export default Homes
