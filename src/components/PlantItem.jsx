import CareScale from "./CareScale";
import "../styles/PlantItem.css";

const handleClick = () => {
  console.log("✨ Ceci est un clic ✨");
};

const PlantItem = ({ id, name, cover, light, water }) => {
  return (
    <li key={id} className="lmj-plant-item" onClick={handleClick}>
      <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
      <span>{name}</span>
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
