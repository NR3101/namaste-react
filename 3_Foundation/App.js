import React from "react";
import ReactDOM from "react-dom/client";

/* JSX is a HTML-like syntax(not HTML)
JSX => transpiled by BABEL to React.createElement(which is an object) => is rendered to HTML element by PARCEL using root.render  
*/

/* For single line in JSX no bracket needed. For multiple lines use () */

const jsxHeading = (
  <div id="jsxDiv">
    <h1 id="heading">JSX Heading</h1>
    <h2 className="head2">Second children</h2>
  </div>
);

/* React Functional Component --> Normal JS func. that returns some JSX or React elements
Rules : 1. Always start with capital letter 2. agar return ni likhna h to (parenthesis) use hnge 
3. agar return likhna h to {curly brackets} use hnge 4. render krne k <ReactComp/> ye syntax use hga 
*/

const Title = () => <h1 id="heading">React Title component</h1>;

const HeadingComponent = () => (
  <div className="componentHead">
    {/* component composition(component k ander component) */}
    <Title />
    <h2>React Functional component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
