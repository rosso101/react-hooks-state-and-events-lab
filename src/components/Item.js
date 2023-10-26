import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name} - {category}{" "}
      <button onClick={() => setInCart(!inCart)}>Add to Cart</button>
    </li>
  );
};

export default Item;
