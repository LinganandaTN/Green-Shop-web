import React from 'react';

export  function Validate(data, from_comp){
  console.log("data");
    const gmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
    const isGmail = gmailPattern.test(data.email);
    const passPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isPass = passPattern.test(data.password);
    const name_len = undefined ;
    console.log(from_comp);
    if((from_comp === "Register") || (from_comp === "Profile")){
      console.log("Register");
    const name = data.name;
    const name_len = name.length;
    console.log(name_len)
    }
    // }
    // const pass_match = data.password === data.repassword ? true: false;
      if( (isGmail && isPass) && from_comp === "Login"){
        return true;
      }
    
      else if( (name_len > 4 && isGmail && isPass ) && (from_comp === "Register") || (from_comp === "Profile"))   // passmatch
      { 
        return true;
      }      
      else {
        return false;}

}