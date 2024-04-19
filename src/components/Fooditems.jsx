import { useState } from "react";
import Item from "./Item";

const Fooditems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyBtn = (item, event) => {
    let newIems = [...activeItems, item];
    setActiveItems(newIems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)}
          handleOnClickBtn={(event) => {
            onBuyBtn(item, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
