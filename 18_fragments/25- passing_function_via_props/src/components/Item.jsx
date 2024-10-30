import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyClicked }) => {
  return (
    <li className={`${styles["ak-item"]} list-group-item`}>
      {" "}
      <span className={styles["ak-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyClicked}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
