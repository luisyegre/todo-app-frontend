const userData = () =>{
  return JSON.parse(localStorage.getItem('userData') || null)
}
export default userData