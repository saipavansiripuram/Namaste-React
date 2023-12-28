import  React from "react";
import  ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, //parent div
    [React.createElement("div", { id: "child1" }, //child 1 div having h1 and h2
        [React.createElement("h1", {}, "Namaste React"), React.createElement("h2", {}, "I'm  h2 tag")])
        ,
    React.createElement("div", { id: "child2" }, ///child 2 div having h1 and h2
        [React.createElement("h1", {}, "Namaste Angular"), React.createElement("h2", {}, "I'm  h2 tag")])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);