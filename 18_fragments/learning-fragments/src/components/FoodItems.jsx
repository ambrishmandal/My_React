import Item from "./Item";

const FoodItems = () => {
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Apple",
    "Fish",
    "Mango",
    "Carrot",
    "Milk",
  ];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
