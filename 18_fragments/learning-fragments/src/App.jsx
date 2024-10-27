import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let foodItem = [];

  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Apple",
    "Fish",
    "Mango",
    "Carrot",
    "Milk",
  ];

  //  using the if-else statement in conditional rendering
  // if (foodItem == 0) {
  //   return <h3>I am still Hungry</h3>;
  // }

  return (
    <React.Fragment>
      <h1>Healthy Fruits</h1>
      {/*   Using ternarary operator in conditional rendring  */}
      {/* {foodItem.length == 0 ? <h3>I am still Hungry</h3> : null}   */}
      {/* using the logical operators in conditional rendering */}
      {/* {foodItem.length == 0 && <h3>I am still Hungry</h3>} */}
      {/* <ul className="list-group">
        {foodItem.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul> */}
      {/* here , Using the probs concept  */}

      <ErrorMessage></ErrorMessage>
      <FoodItem></FoodItem>
    </React.Fragment>
  );
}

export default App;
