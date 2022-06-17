import React, { useEffect, useState } from 'react'


const Main = () => {

const [data, setData] = useState([]);

const [filter, setFilter] = useState(data);

const [loading, setLoading] = useState(false);

let componentMounted = true;

useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
       
        if (componentMounted) {
            setData(await res.clone().json());
            setFilter(await res.json());
            setLoading(false);
            console.log(data);
            //data fetched
        
        }
        return () => {
            componentMounted = false;
        }
    }
    getProducts();
}
, []);




const Loading = () => {
    return (
      <>
       Loading........
      </>
        
    )
}







const ShowProducts = () => {
  return (
   <>
   
    {filter.list.map((el) => {


        return (
            <>
    <div className="maindiv">
        
        <br/>
        <br/>
             <div className="mobile">
        
          <button type="submit" className= "searchButton1">&#9906;
          </button>
          <input className='Search' type="search" id="city" placeholder="enter city name" onChange={(event)=>{setData(event.target.value)}}></input>
          <button type="submit" className= "searchButton">&#9906;
          </button>
        
        
          <br/>
        
            <br/>
            
            <div className="days">
                <h1>Sun</h1>
                <h1>Mon</h1>
                <h1>Sur</h1>
                <p>Sunny</p>
            </div>
        
         <br/>
            <div className="maincontent">
        
               <div className="digree">
               <h1>26 C</h1>
               <h1>Sun</h1>
               </div>
          <div className="mapreserve">
            this is for map
          </div>
               <div className="timeweather">
        
                <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
                <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
                <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
                <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
                <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
                  <div className="timewithdigree">
                    <p>21</p>
                    <p>6am</p>
                </div>
               </div>
        
           <div className="visibity">
            <div className="visibilitycontent">
                <p>Presure</p>
                <p>1013 hpa</p>
            </div><div className="visibilitycontent">
                <p>Presure</p>
                <p>1013 hpa</p>
            </div>
        
           </div>
        
           <div className="sunupdate">
        
            <div className="maintime">
                <p>Sunriser</p>
                <p>6 am</p>
            </div>
            <div className="maintime">
                <p>Sunriser</p>
                <p>6 am</p>
            </div>
           </div>
        
        
            </div>
        
             </div>
        
            </div>

 </>
    )
    })}

    </>
    )}






  return (
    <div>
        {loading ? <Loading/> : <ShowProducts/>}
    </div>
    )
}

export default Main;






{/* <div style={{backgroundColor:"skyblue",width:"500px",height:"500px"}}>
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
//  </div>

//    )}
//    </div>
//  </div> */}



















  