import React,{Component} from'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
const style = {
  height: 100,
  width: 100,//!important
  textAlign: 'center',
  display: 'inline-block',
  'margin-left': 5,
 // 'vertical-align': 'middle',
  
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
	margin:-10,
};

const styleContent ={
	'margin-left': '50px',
	'margin-right': '50px',
	'margin-top': '50px'
}
/*
const getObjects = () => {
  const objs = []
  for (var i=0; i < objects.length; i++) {
    objs.push(<ObjectRow obj={objects[i]} key={i}>)
  }

  return objs;
}

###########################################

var lis = [];

for (var i=0; i<10; i++) {
    lis.push(<li><a href="#">{i + 1}</a></li>);
}

var Pagination = React.createClass({
    render: function(){
        return(
            <div class="text-center">
                <ul class="pagination">

                    <li><a href="#">«</a></li>
                    {lis}
                    <li><a href="#">»</a></li>
                </ul>
            </div>
        );
    }
});

*/

var lis = [];
var rows=5;
var col=5;
var Foo = React.createElement("div", { style:{style}});

	for(var i=0;i<rows;i++){
		lis.push(Foo);
		for (var j=0; j<col; j++) {
				lis.push( <Paper style={style} zDepth={1} />);
		}

	}

/*const listItem = lis.map((lis)=>
		<div>{lis}</div>
	);*/

class Reserve extends Component{
	render(){
		const {rooms} = this.props
		return(

			<div style={styleContent}> 
				<p style={styleTriangles}></p><p style={styleTrianglesHead}></p>
				<Paper style={styleScrope}>
			   		{
			   			_.map(rooms,(val,key)=>(
			   				console.log('dkkkkkkkkkkkkkkkkkk',val)

			   				))
			   		}
			   	</Paper>
			</div>                        
											
			)
	}
}

export default Reserve;
