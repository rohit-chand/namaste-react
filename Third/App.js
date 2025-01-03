import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

//Using createElement
const heading1 = React.createElement("h1", {}, "This is heading 1");
const heading2 = React.createElement("h2", {}, "This is heading 2");
const heading3 = React.createElement("h3", {}, "This is heading 3");
const title = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

//Using JSX
const title2 = ( 
  <div className="title">
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading3</h3>
  </div>
);

//functional component 
const Title = ()=> <div className="title"><h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3></div>

//Composition of Components 
const Composition = () => <div><Title/><Title/></div>

const root = createRoot(document.getElementById("root"));
root.render(<Header/>);
