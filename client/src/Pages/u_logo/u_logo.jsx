import React, {useState} from 'react';


const ThemeContext = React.createContext('light');
export default ThemeContext;
// export default function User_logo(){
//     return(<ThemeContext.Provider value="dark">
//     <div>logoo</div>
//   </ThemeContext.Provider>);
// }
export function Toolbar(logo) {
    // Use the useContext hook to access the context value
    // const theme = React.useContext(ThemeContext);
    const l= logo.name;
    console.log(l);
    const a='logo';
    return <div >l</div>;
  }

// function Toolbar() {
//     // Use the useContext hook to access the context value
//     const theme = React.useContext(ThemeContext);
//     return <div>Toolbar</div>;
//   }
