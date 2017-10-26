import React,{Component,PropTypes} from'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';



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
		  marginLeft: 5,
		  marginTop:5,
		  backgroundColor: '#FF9800'
	},
	raised_button	:{
		margin: 12,
		height:80,
	},
	scrope :{
		margin:5,

	},
	triangles : {
		width: 'auto',
		height: 0,
		textIndent: '-9999px',
		borderRight: '80px solid transparent',
		borderBottom: '80px solid rgb(83, 165, 82)',//'80px solid #f09',
		borderLeft:'80px solid transparent',
		//'border-right-width':'1000px'
	},
	triangles_head : {
		width: 0,
		height: 0,
		textIndent: '-9999px',
		borderRight: '80px solid transparent',
		borderBottom: '80px solid rgb(101, 18, 38)',
		borderLeft:'80px solid transparent',
		marginTop: '-96px'
	},
	content_reserve :{
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5
	},
	rm_style:{
		backgroundColor:'#3F51B5'
	}
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

	/*	for(var a=0;a<total.level;a++){

					test.push([{'dd':a}:[]]);
		}*/

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
		info_data.sort(function(a,b){
			return b[0]-a[0]
		})
//console.log('xxxxxxxxxxxxxxxxxxxxxxxx',info_data)
	
		return(

			<div style={styles.content_reserve}> 
			<p style={styles.triangles}></p><p style={styles.triangles_head}></p>
			<Paper style={styles.scrope}>
			{
				info_data.map((datas,inx)=>(
					<div key={inx} style={styles.mid}>
					{
						datas.map((data,key)=>(	
							<RaisedButton key={key}  label={data} backgroundColor="#E91E63" style={styles.raised_button} />
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
