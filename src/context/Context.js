import { createContext, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
  const [counter, setCounter] = useState(99);
  const [shop_ar, setShopAr] = useState([
    {name:"milk",amount:3,id:1},
    {name:"shoko",amount:2,id:2},
    {name:"bamba",amount:5,id:3}
  ])
  const addProduct = (newItem) => {
    setShopAr([...shop_ar,newItem]);
  }
  const removeProduct = (id) => {
    const newAr = shop_ar.filter(item => item.id !== id);
    setShopAr(newAr);
  }
  const globalValue = {
    counter,setCounter,
    shop_ar, addProduct, removeProduct
  }
  return (
    <AppContext.Provider value={globalValue}>
      {props.children}
    </AppContext.Provider>
  )
}