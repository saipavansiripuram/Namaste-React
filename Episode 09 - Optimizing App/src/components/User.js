// A functional component is nothing but that returns the JSX.
 
import { useState,useEffect } from "react";
const User = ({name,location,contact })=>{
    let [count,setCount]=useState(0);
    let [count2,setCount2]=useState(1);
    // We are writing 2 but behind the scenes react combines it into one big object and 
    useEffect(()=>{
        // API calls
    },[])
    return (
    <div className="user-card">
        <h1>Count {count} </h1>
        <button onClick={()=>{
            setCount(count = count +1);
        }}>Add</button>
         <button onClick={()=>{
            setCount(count = count -1);
        }}>Subtract</button>
        <h2>
          Name :{name}
        </h2>
        <h3>Location : {location}</h3>
        <h4>Contact :{contact} </h4>
    </div>
    );
};

export default User;


