import React from "react";
import ReactDOM from "react-dom/client";

import { cardList } from "./carddata";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/maxican-hat-on-pizza-slice-5388ld.png?nwm=1&nws=1&industry=restaurant-food&sf="
        alt="logo"
      />
    </div>
    <div className="nav-container">
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

/* 
! Props --> properties passed to a React component to make it dynamic.
 * Similar to passing arguements to a function
 * React combines all props passed to a component in an object called Props
 * Can be destructured on the fly using "{props names}" or can be used as props.Prop1 , props.Prop2
 */

/*
! Map() func. => For creating multiple dynamic components use map() JS func.
* When mapping over data always use keys --> so that React knows uniquely what have changed b/w renders
* Should not use index as keys
*/

const RestaurantCard = (props) => {
  const { name, rating, ETA, imgSrc } = props;
  return (
    <div className="res-card">
      <img src={imgSrc} alt="res-logo" className="res-logo" />
      <h3>Name : {name}</h3>
      <h4>Rating : {rating} ⭐</h4>
      <h4>ETA : {ETA} mins</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search-bar">Search</div>
    <div className="card-container">
      <RestaurantCard resData={cardList[0]} />
      <RestaurantCard
        name="Laxmi Pizza"
        rating="4.2"
        ETA="28"
        imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e9108477d82d8492e0d0af2bc066946"
      />
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

export default App;
