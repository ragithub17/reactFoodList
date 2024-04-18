import styles from "./BuyBtn.module.css";
const Item = ({ fooditem, bought, handleOnClickBtn }) => {
  return (
    <li className={`list-group-item ${bought ? "active" : null}`}>
      {fooditem}{" "}
      <button className={styles.BuyBtn} onClick={handleOnClickBtn}>
        Buy
      </button>
    </li>
  );
};

export default Item;
