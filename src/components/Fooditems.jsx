import { useState } from "react";
import Item from "./Item";

const Fooditems = ({ items }) => {
  let [activeIems, setActiveItems] = useState([]);
  let onBuyBtn = (item, event) => {
    let newIems = [...activeIems, item];
    setActiveItems(newIems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeIems.includes(item)}
          handleOnClickBtn={(event) => {
            onBuyBtn(item, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
