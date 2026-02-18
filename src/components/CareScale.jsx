const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "💧";

  const handleClick = () => {
    const quantityLabel =
      scaleValue === 1 ? "peu" : scaleValue === 2 ? "modérément" : "beaucoup";

    const careTypeLabel = careType === "light" ? "de lumière" : "d'arrosage";

    alert(`Cette plante requiert ${quantityLabel} ${careTypeLabel}`);
  };

  return (
    <div onClick={handleClick}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null,
      )}
    </div>
  );
};

export default CareScale;
