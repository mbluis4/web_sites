import { useState } from "react";

const useQuantityColor = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);

  return { quantity, setQuantity, setColor };
};

export default useQuantityColor;
