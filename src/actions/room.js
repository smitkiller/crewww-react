import { CALL_API } from 'redux-api-middleware';
import { ROOMSCOL_ENDPOINT,
  ROOMS_ENDPOINT,
  ROOMSCOL_ENDPOINT_DEL,
  ROOMCOL_ENDPOINT } from '../constants/endpoints';
import { browserHistory } from 'react-router';
import {
  LOAD_ROOMSCOL_REQUEST,LOAD_ROOMSCOL_SUCCESS,LOAD_ROOMSCOL_FAILURE,
  CREATE_ROOMSCOL_REQUEST,CREATE_ROOMSCOL_SUCCESS,CREATE_ROOMSCOL_FAILURE,
  CREATE_ROOMS_REQUEST,CREATE_ROOMS_SUCCESS,CREATE_ROOMS_FAILURE,
  DELETE_ROOMS_REQUEST,DELETE_ROOMS_SUCCESS,DELETE_ROOMS_FAILURE,
  DELETE_ROOMSCOL_REQUEST,DELETE_ROOMSCOL_SUCCESS,DELETE_ROOMSCOL_FAILURE,
  LOAD_ROOMS_REQUEST,LOAD_ROOMS_SUCCESS,LOAD_ROOMS_FAILURE,
  LOAD_ROOMCOL_REQUEST,LOAD_ROOMCOL_SUCCESS,LOAD_ROOMCOL_FAILURE

} from '../constants/actionTypes';


export const loadRoomcol = (id) => ({
  [CALL_API]: {
    endpoint: `${ROOMCOL_ENDPOINT}/${id}/.json`,
    method: 'GET',
    types: [LOAD_ROOMCOL_REQUEST, LOAD_ROOMCOL_SUCCESS, LOAD_ROOMCOL_FAILURE]
  }
})

export const loadRoomscol = () => ({
  [CALL_API]: {
    endpoint: ROOMSCOL_ENDPOINT,
    method: 'GET',
    types: [LOAD_ROOMSCOL_REQUEST, LOAD_ROOMSCOL_SUCCESS, LOAD_ROOMSCOL_FAILURE]
  }
})

export const loadRooms = () => ({
  [CALL_API]:{
    endpoint:ROOMS_ENDPOINT,
    method:'GET',
    types:[LOAD_ROOMS_REQUEST,LOAD_ROOMS_SUCCESS,LOAD_ROOMS_FAILURE]
  }
})

const createRooms = (values) =>(
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ROOMS_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(roomsNum(values)),
        types: [
          CREATE_ROOMS_REQUEST,
          {
            type: CREATE_ROOMS_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((rooms) => {
                 //console.log('dddddddddddddddddddddddddddddddd')
                 
                return rooms
              })
            }
          },
          CREATE_ROOMS_FAILURE
        ]
      }
    }
  )

)

export const cleanRooms = () =>({
   [CALL_API]: {
    endpoint: ROOMS_ENDPOINT,
    method: 'DELETE',
    types: [DELETE_ROOMS_REQUEST,DELETE_ROOMS_SUCCESS,DELETE_ROOMS_FAILURE]
  }
})

export const cleanRoomsCol = () =>({
  [CALL_API]: {
    endpoint: ROOMSCOL_ENDPOINT_DEL,
    method: 'DELETE',
    types: [DELETE_ROOMSCOL_REQUEST,DELETE_ROOMSCOL_SUCCESS,DELETE_ROOMSCOL_FAILURE]
  }
})

export const createRoomscol = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ROOMSCOL_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          CREATE_ROOMSCOL_REQUEST,
          {
            type: CREATE_ROOMSCOL_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((roomscol) => {                               
               // dispatch(push(`/pages/${page.id}`))
                dispatch(loadRoomscol());
                
                return roomscol
              })
            }
          },
          CREATE_ROOMSCOL_FAILURE
        ]
      }
    }
  )

)

export const updateRoomscol=(values)=>(
   (dispatch)=>{
            var data=[];
            var newValue=[];
            var total=0;
            for(var i=0;i<values.length;i++){
              total=Number(total)+Number(values[i]);
            }

              data = {
                          totalLevel:values.length,
                          levelRooms:values,
                          totalRooms:total
                    }

              //  roomsNum(data)
             dispatch(cleanRooms());
             dispatch(cleanRoomsCol());
             dispatch(createRooms(data)); 
             dispatch(createRoomscol(data));
             browserHistory.push(`/roomcol`); 
             //console.log('ssssssmit',data[0])
      }
   
  )

export const addRomms = (values) =>(

  (dispatch)=>{
  var data=[];
  var newValue=[];
  var total=0;
  for(var i=0;i<values.length;i++){
    total=Number(total)+Number(values[i]);
  }

    data = {
                totalLevel:values.length,
                levelRooms:values,
                totalRooms:total
          }

      roomsNum(data)
   dispatch(cleanRooms());
   dispatch(createRooms(data)); 
   dispatch(createRoomscol(data));
   browserHistory.push(`/roomcol`); 
   //console.log('ssssssmit',data[0])
  }

)


function roomsNum(values){
      var data = []; 
      for(var i=0;i<values.totalLevel;i++){        
          for(var j=0;j<values.levelRooms[i];j++){
              var rows=(i+1).toString();
              var col=(j+1).toString();            
              var numRooms=pad(col, 3);
              var numberRoom = rows.concat(numRooms);
              data.push({id:numberRoom,level:i+1});
             
          }

      }
         /*   var lev=[];
      for(var m=0;m<values.totalLevel;m++){
        lev.push([]);
      } */
      
      return data;
}

function pad(str, max) {
return str.length < max ? pad("0" + str, max) : str;
}
 
