import axios from 'axios'
import React, { useState } from 'react'

export const App = () => {

const [images, setimages] = useState([])

const func1=async()=>{
  const obj=await axios.get("https://picsum.photos/v2/list");
   const d=obj.data;
   setimages(d)

}




  return (
    <>
    <div>App</div>
    <button onClick={func1}>btn</button>
    {images.map(function(elem,key){
      return <div className='h-8 ' key={key}>
         <img src={elem.download_url}></img>
      </div>
    })}
    </>
  )
}
export default App