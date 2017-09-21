import React,{Component,PropTypes} from'react';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  height: 30,
  width: 30,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FF9800'
};
  
const styleTriangles = {
	width: 'auto',
	height: 0,
	'text-indent': '-9999px',
	'border-right': '80px solid transparent',
	'border-bottom': '80px solid rgb(182, 50, 87)',//'80px solid #f09',
	'border-left':'80px solid transparent',
	//'border-right-width':'1000px'

};
const styleTrianglesHead = {
	width: 0,
	height: 0,
	'text-indent': '-9999px',
	'border-right': '80px solid transparent',
	'border-bottom': '80px solid rgb(101, 18, 38)',
	'border-left':'80px solid transparent',
	'margin-top': '-96px'
}
const styleScrope = {
	margin:-10
};

const styleContent ={
	'margin-left': '50px',
	'margin-right': '50px',
	'margin-top': '50px'
}

class Reserve extends Component{
	render(){

		return(
			<div style={styleContent}> 
			<p style={styleTriangles}></p><p style={styleTrianglesHead}></p>
			<Paper style={styleScrope}>	
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			<Paper style={style} zDepth={1} />
			</Paper>
			</div>									
			)
	}
}

export default Reserve;
