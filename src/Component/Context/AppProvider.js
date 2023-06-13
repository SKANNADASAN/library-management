import React, { createContext, useContext, useEffect, useState } from 'react'


const BookCtx = createContext(null)

function AppProvider({children}) {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        const getbook = async() =>{
          const response = await fetch("https://6469d79003bb12ac2093b550.mockapi.io/Books",{
            method:"GET",
          });
          const data = await response.json();
          if(data){
            setBook(data)
          }
        }
        getbook();
      },[]);
  return (
    <BookCtx.Provider
    value={{book, setBook}}
    >
        {children}
    </BookCtx.Provider>
  )
}
export const AppStates = () =>{
    return useContext(BookCtx)
}
export default AppProvider 