/* createElement() is used to create a React element(which is an object) in React. Takes 3 args:
1. name of element 2.attributes to element(ex: id, props) 3.inner HTML(ander kya hga vo)   
*/

const heading2 = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World From React!!"
);

// nested structure --> 3rd argument m dubara ek or element bna skte h createElement() use krke
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(heading2); //render converts the React element(object) to actual HTML tags
root1.render(parent);
