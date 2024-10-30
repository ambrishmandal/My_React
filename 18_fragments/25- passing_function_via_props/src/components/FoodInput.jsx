import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter food Item "
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};
export default FoodInput;
