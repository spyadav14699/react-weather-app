import React from 'react'

const Weatherui = () => {
  return (
    <div className="maindiv">
        
<br/>
<br/>
     <div className="mobile">

  <button type="submit" className= "searchButton">&#9906;
  </button>
  <input className='Search' type="search" id="city" placeholder="enter city name"></input>
  <button type="submit" className= "searchButton">&#9906;
  </button>

     </div>

    </div>
  )
}

export default Weatherui;