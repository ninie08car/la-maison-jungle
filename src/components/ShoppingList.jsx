import { plantList } from "../datas/plantList";

function ShoppingList() {
  return (
    <ul>
      {plantList.map((plant, id) => (
        <li key={id}>{plant}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
