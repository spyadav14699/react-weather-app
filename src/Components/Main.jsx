import React from 'react'
import { useEffect,useState } from 'react'



const Main = () => {
    const [search,setsearch]=useState("ayodhya")
    const [city,setcity]=useState(null)
    useEffect(()=>{
  
        const fetchApi=async()=>{
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8e60b6c2e5570bd4c9e2c450413be350`
              const response= await fetch(url)
               console.log(response);
              const resJson=await response.json()
               console.log(resJson)
           setcity(resJson.main)
        }
    
       fetchApi()
        
      },[search])
  return (
   <>
   <div style={{backgroundColor:"skyblue",width:"500px",height:"500px"}}>
   <div style={{backgroundColor:"white",width:"400px",height:"400px",marginLeft:"40px",marginTop:"60",borderRadius:"50px"}}>
   <input type="search" id="city" placeholder="enter city name" onChange={(event)=>{setsearch(event.target.value)}}></input>

       

      
   {!city ? (
    <p >no any data found</p>
   ):(

          <div>
    <div>{search}</div>
    <div>`☁ Temperature_min➼{city.temp_min}`</div>
    <div>`☁ Temperature_max➼{city.temp_max}`</div>
     {/* <iframe src='https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe> */}
 </div>

   )}
   </div>
 </div>
   </>
 
    
  )
}

export default Main