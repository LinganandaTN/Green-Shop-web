import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
    
  const [isVisible,setVisible] = useState(true);
  
    return (
      <div>
       {isVisible ? <div><h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
        <h1 >hii</h1>
      </div> : <div>hii <br/><br/><br/><br/><br/></div>}
        <button onClick = {() => { setVisible( !isVisible)} }>Send Data</button>
      </div>
    );
  };
  

export default About;