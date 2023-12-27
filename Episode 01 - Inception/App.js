//  const heading = React.createElement("h1",{id:"heading"},"Hello World from React !"); //3 elements ( tag , {object} where we give attributes to this,element)

// const root =  ReactDOM.createRoot(document.getElementById("root")); // To put h1 to the browser we use Dom to create it

// root.render(he ading); // This will create a object with the following properties and attributes that will be inserted into the DOM 
// render method will be responsible for taking object properties and attributes convert them and put them into the DOM

// React comes with a piloshopy that writing or manipulating the DOM using JavaScript or using React


/**
 * <div id = "parent">
    * <div id = "child1">
    *   <h1>I'm an h1 tag</h1>
    *   <h2>I'm an h2 tag</h2>
    * </div>
    * <div id = "child2">
    *   <h1>I'm an h1 tag</h1>
    *   <h2>I'm an h2 tag</h2>
    * </div>
 * </div> 
 */

// React Object becomes HTML that browsers understands

//The React equivalent of the above HTML is this: 
const parent = React.createElement("div", { id: "parent" }, //parent div
    [React.createElement("div", { id: "child1" }, //child 1 div having h1 and h2
        [React.createElement("h1", {}, "I'm  h1 tag"), React.createElement("h2", {}, "I'm  h2 tag")])
        ,
    React.createElement("div", { id: "child2" }, ///child 2 div having h1 and h2
        [React.createElement("h1", {}, "I'm  h1 tag"), React.createElement("h2", {}, "I'm  h2 tag")])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);