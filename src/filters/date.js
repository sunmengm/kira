import {addzero} from './addzero.js'
 
/*export default{
  const date(input)=>{
  var d=new Date();
  d.setTime(input);
  return 
    ${addzero(d.getFullYear())}年
    ${addzero(d.getMonth()+1)}月
    ${addzero(d.getDate())}日 
    ${addzero(d.getHours())}:
    ${addzero(d.getMinutes())}:
    ${addzero(d.getSeconds())}
    
    };
}*/
  export  const date=(input)=>{
  var d=new Date();
  d.setTime(input);
  return `
    ${addzero(d.getFullYear())}年
    ${addzero(d.getMonth()+1)}月
    ${addzero(d.getDate())}日 
    ${addzero(d.getHours())}:
    ${addzero(d.getMinutes())}:
    ${addzero(d.getSeconds())}
    `
};