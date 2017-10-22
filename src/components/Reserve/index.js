import React,{Component} from'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

const styles = {
	mid:{
		   float       : 'none', 
		   width 	   : '100%',
		   marginLeft  : 'auto',
		   marginRight : 'auto',
		},
	display_block:{
		  height: 100,
		  width: 100,//!important
		  textAlign: 'center',
		  display: 'inline-block',
		  'margin-left': 5,
		  'margin-top':5,
		  backgroundColor: '#FF9800'
	}	
}


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


/*const listItem = lis.map((lis)=>
		<div>{lis}</div>
	);*/

class Reserve extends Component{
	render(){
		const {rooms,roomscol} = this.props
		var info_data = [];
		var total=[];
		var num_rooms=[];
		_.map(roomscol,(roomcol)=>total={level:roomcol.totalLevel,rooms:roomcol.totalRooms});
		_.map(rooms,(val)=>num_rooms=val);

		for(var m=0;m<total.level;m++){
			info_data.push([]);
		}
		for(var i=0;i<total.level;i++){
			for(var j=0;j<total.rooms;j++){
				if(num_rooms[j].level===(i+1)){
					info_data[i].push(num_rooms[j].id)
				}
			}
		}
	info_data.sort((a,key)=>console.log('xxxxxxxxxxxxxxxxxxxxxxx',key));
	
		return(

			<div style={styleContent}> 
				<p style={styleTriangles}></p><p style={styleTrianglesHead}></p>
				<Paper style={styleScrope}>
				{
					info_data.map((datas)=>(
						<div style={styles.mid}>
						{
							datas.map((data,key)=>(
									<Paper key={key} style={styles.display_block} zDepth={1} >{data}</Paper>
								))
						}
						</div>
					))
				}
			   	</Paper>
			</div>                        
											
			)
	}
}

export default Reserve;
