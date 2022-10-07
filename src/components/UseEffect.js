import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const UseEffect = () => {
   const [data, setData] = useState("");
   const [count, setCount] = useState(0);

   useEffect(()=> {
      // console.log("Hello World!")
      // axios.get("https://api.quotable.io/random")
      // .then((res)=>{
      //    setData(res.data.author);
      //    console.log("API WAS CALLED")
      // })
      console.log("API WAS CALLED")

   }, [data]);

   return (
      <>
         <div>Hello World! {data}</div>
         <h2>{count}</h2>
         <button onClick={()=> {setCount (count + 1)}}>+</button>
      </>
   )
}

export default UseEffect