import CareScale from "./CareScale";
import "../styles/PlantItem.css";

const handleClick = (name) => {
  console.log(`✨ Ceci est un clic ✨ ${name}`);
};

const PlantItem = ({ name, cover, light, water }) => {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick(name)}>
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
