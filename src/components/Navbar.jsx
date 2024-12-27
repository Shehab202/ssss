import { useContext } from "react";
import { send } from "../context/main";
function Navbar() {
  const value =useContext(send)
  return <>
  {
    value.map((e)=>{
return(
  <h1 key={e.id}>{e.id} </h1>
)
    })
  }
  
  </>;

}
export default Navbar;
