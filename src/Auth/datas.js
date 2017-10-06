import { ref, firebaseAuth } from '../constants/configAuth'


export function getDatas() {
  return ref.child(`pages`).once('value',snap =>{
  	const datas = snap.val();
  //	console.log('xxxxxxxxxxxxxxxxxxxx',datas)
  })
}
