const userData = () =>{
  const userData = localStorage.getItem('userData')
  if(userData != "undefined")
    return  JSON.parse(userData)

}
export default userData