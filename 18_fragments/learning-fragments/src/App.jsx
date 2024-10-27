import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let emptyMessage =
  //   foodItems.length == 0 ? <h3>I am still hungry .</h3> : null;

  let foodItems = [
    "Bhat",
    "Green Vegetable",
    "Apple",
    "Fish",
    "Mango",
    "Carrot",
    "Milk",
  ];

  return (
    <>
      <h1 className="heading">Healthy Food</h1>
      {/* {emptyMessage} */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}
export default App;

// import FoodItem from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App() {

//   //  using the if-else statement in conditional rendering
//   // if (foodItem == 0) {
//   //   return <h3>I am still Hungry</h3>;
//   // }

//   return (
//     <React.Fragment>
//       <h1>Healthy Fruits</h1>
//       {/*   Using ternarary operator in conditional rendring  */}
//       {/* {foodItem.length == 0 ? <h3>I am still Hungry</h3> : null}   */}
//       {/* using the logical operators in conditional rendering */}
//       {/* {foodItem.length == 0 && <h3>I am still Hungry</h3>} */}
//       {/* <ul className="list-group">
//         {foodItem.map((item) => (
//           <li className="list-group-item">{item}</li>
//         ))}
//       </ul> */}
//       {/* here , Using the probs concept  */}

//       <ErrorMessage></ErrorMessage>
//       <FoodItem></FoodItem>
//     </React.Fragment>
//   );
// }
