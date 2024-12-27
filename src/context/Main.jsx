import { createContext , useState } from "react";
export const send = createContext();

function Main(props) {
    const [product, setproduct] = useState([
        { id: 1, titlle: "product1" },
        { id: 2, titlle: "product2" },
        { id: 3, titlle: "product3" },
      ]);
    
  return <>
  <send.Provider value={product}>
{props.children}
  </send.Provider>

  </>;
}
export default Main;
