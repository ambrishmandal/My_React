import styles from "./Item.module.css";
const Item = (props) => {
  return (
    <li className={`${styles["ak-item"]}`}>
      {" "}
      <span className={styles["ak-span"]}>{props.foodItem}</span>
    </li>
  );
};
export default Item;
