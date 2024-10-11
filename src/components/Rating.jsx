import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

function Rating({ r = 0, setRating, size, label = "Rating:" }) {
  const [internalRating, setInternalRating] = useState(r); // Use internal state for the rating
  const { sortByRating } = useCart();

  // Update internal state when the `r` prop changes (e.g., when reset)
  useEffect(() => {
    setInternalRating(r);
  }, [r]);

  // Handle star click and update both internal and external rating
  const handleStarClick = (index) => {
    const newRating = index + 1;
    setInternalRating(newRating);
    setRating(newRating); // Update the rating in the Filter component
    sortByRating(newRating); // Call sorting function with new rating
  };

  return (
    <div className="flex items-center">
      <h2 className="mr-2">{label}</h2>
      {[...new Array(5)].map((_, index) => (
        <Star
          size={size}
          key={index}
          index={index}
          fill={internalRating > index ? "orange" : ""}
          stroke={internalRating > index ? "orange" : "currentColor"}
          onClick={() => handleStarClick(index)} // Handle star click
        />
      ))}
    </div>
  );
}

export default Rating;
