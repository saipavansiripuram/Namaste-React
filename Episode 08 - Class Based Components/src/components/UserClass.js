 // Class component is a normal javascript class which extends React component and it has a render menthod that return JSX

// React.componetent , we are inheriting some properties from Component class
// Basically react library is giving compoent class

// Whenever the class is instantiated the constructor is called .

// Whenever Loading a class base components onto webpage is nothing but creating a new instance of class .

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    // all the passed arguments will be passed to the constructor in only single props object
    super(props);

    // to create a state
    // state is a reserved word and this.state creates a object which contain state variables

    this.state = {
      // count : 0,
      // count2:1,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy.com/dummy.png",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saipavansiripuram");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUnmount(){
    console.log("component unmount");
  }
  render() {
    // We can destructure it
    // const { name , location, contact}= this.props;
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div className="image">

        <img className="avtar-2" src={avatar_url} alt="" />
        </div>
       
        <div className="content">
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h3>Bio : {bio} </h3>
      
        </div>
      </div>
    );
  }
}

export default UserClass;