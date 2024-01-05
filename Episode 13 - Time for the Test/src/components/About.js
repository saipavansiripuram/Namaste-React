
import Header from "./Header";
import Footer from "./Footer";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);

    // console.log(" Parent constructing");
  }
  componentDidMount() {
    // To make an API Call we use componentDidMount
    //
    // console.log(" Parent   componentDidMount");
  }
  render() {
    console.log("parent render");

    return (
      
      <div className=" flex justify-center">
        
   <div >

          {/* <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer> */}
   </div>

        {/* <h2>This is about</h2> */}
        {/* <User name={"Saipavan (Function)"} location={"Hyderabad"} contact={"31212312"}/> */}
        <div>

        <UserClass
          name={"Saipavan Siripuram (class)   "}
          location={"Hyderabad"}
          contact={"31212312"}
        />
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>

//         <h1>About</h1>
//         <h2>This is about</h2>
//        {/* <User name={"Saipavan (Function)"} location={"Hyderabad"} contact={"31212312"}/> */}
//        <UserClass name={"Saipavan Siripuram (class)   "}  location={"Hyderabad"} contact={"31212312"}/>
//     </div>
//   )
// }

// export default About
