import React from "react";
import ReactDOM from "react-dom";


// React.createElement =>React Element - JS Object => HTMLElement(render)
// When we render it will be html Element



const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// JSX

// JSX => is transipiled to React.createElement    => React Element - JS Object => HTMLElement(render)

// Babel takes all the JSX code and converts them into React.createElement

// React Element
const jsxheading =
  (
    <h1 id="heading" className="head">
      ನಮಸ್ಕಾರ
    </h1>
  )
 ; 


root.render(jsxheading);

//  React Funcitonal Compoent
//  React Funcitonal COmpoent is Just a normal JavaScript Function
// React Functional component is  also called as a Javascript function which returns a react element

 
const HeadingComponent2 = ()=> <h1 className="heading">Sup? Functional Component</h1>; // Perfectly valid code

const random = "2024";
const HeadingComponent = ()=>{
  return <div id="container">
   {jsxheading}
    <h1 className="heading">Sup? { random} </h1>
    <Header></Header>
    {/* {HeadingComponent2()} */}
    {/* <HeadingComponent2/>
    <HeadingComponent2></HeadingComponent2> */}
  </div> 
 };


const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent/>); // This is the syntax that babel understands to render functional Component
