import React from 'react'

const Weatherui = () => {
  return (
    <div className="maindiv">
        
<br/>
<br/>
     <div className="mobile">

  <button type="submit" className= "searchButton1">&#9906;
  </button>
  <input className='Search' type="search" id="city" placeholder="City Name"></input>
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
  )
}

export default Weatherui;