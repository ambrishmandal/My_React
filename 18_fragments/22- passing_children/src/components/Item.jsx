import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const handelBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className={`${styles["ak-item"]} list-group-item`}>
      {" "}
      <span className={styles["ak-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handelBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
