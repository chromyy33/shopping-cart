import { RadioGroup, Radio, Slider, Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card";
import Rating from "./Rating";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

function Filter() {
  const { sortLowToHigh, highToLow, sortByPrice, resetFilters, state } =
    useCart();
  const [value, setValue] = useState(500);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [rating, setRating] = useState(0); // State for rating
  const handleRadioChange = (value) => {
    const val = value.target.value;
    setSelectedRadio(val);
    if (val === "Low to High") {
      sortLowToHigh();
    } else if (val === "High to Low") {
      highToLow();
    }
  };

  const handleClearFilters = () => {
    setValue(500);
    setSelectedRadio(null);
    resetFilters();
    setRating(0); // Resetting the rating to 0
  };

  return (
    <Card shadow="sm" className="h-[50vh] p-2">
      <CardBody>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <RadioGroup
          className="mb-4"
          value={selectedRadio}
          onChange={handleRadioChange}
        >
          <Radio value="Low to High">Low to High</Radio>
          <Radio value="High to Low">High to Low</Radio>
        </RadioGroup>
        <Slider
          label="Price"
          size="sm"
          value={value}
          step={1}
          maxValue={3000}
          minValue={0}
          className="max-w-60 mb-4"
          onChange={(val) => {
            setValue(val);
            sortByPrice(val);
          }}
        />
        <Rating r={rating} setRating={setRating} />{" "}
        {/* Pass rating state and setter */}
        <Button
          color="primary"
          size="sm"
          className="mt-auto"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </CardBody>
    </Card>
  );
}

export default Filter;
