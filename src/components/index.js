import { useState } from "react";

function FruitList({ fruitList }) {
  const [fruits, setFruits] = useState(fruitList);

  const totalPrice = fruits.reduce((acc, current) => acc + current.price, 0);

  const nameFruits = fruits.map((element) => {
    return <li> {element.name} </li>;
  });

  function redFruits() {
    const filterRedFruits = fruits.filter((element) => element.color === "red");
    setFruits(filterRedFruits);
  }

  return (
    <div className="folder">
      Preço total = {totalPrice}
      <div>{nameFruits}</div>
      <button onClick={redFruits}> Mostrar frutas vermelhas </button>
    </div>
  );
}

export default FruitList;
