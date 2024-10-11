import { Star } from "lucide-react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image, Button } from "@nextui-org/react";
import { useCart } from "../contexts/CartContext";
function ProductItem({ productItemData }) {
  const {
    title,
    price,
    rating,
    discountPercentage: discount,
    thumbnail,
    id,
    stock,
  } = productItemData;
  const { addItem, removeItem, state } = useCart();
  const cartItems = state.cart;
  const isAdded = cartItems.some((item) => item.id === id);

  return (
    <Card className="py-3 px-3" isPressable>
      <CardHeader className="pb-0 pt-2 px-4 items-center justify-center">
        <Image
          alt={title}
          className="object-cover rounded-xl w-[85%] mx-auto"
          src={thumbnail}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h3 className="text-[18px] mb-2 mt-auto">{title}</h3>
        <p className="flex gap-1 items-center mb-4">
          <Star fill="orange" stroke="none" size={16} /> {rating}
          <span className="bg-red-600 ml-1 rounded-sm py-0 px-1 text-sm text-slate-50">
            -{discount.toFixed(0)}%
          </span>
        </p>
        <p className="text-[20px] mb-4">${price}</p>{" "}
        {isAdded ? (
          <Button
            size="sm"
            color="danger"
            className="mt-auto"
            onClick={() => {
              removeItem(id);
            }}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            isDisabled={stock > 0 ? false : true}
            size="sm"
            color="primary"
            className="mt-auto"
            onClick={() => {
              addItem(productItemData);
            }}
          >
            {stock?'Add to Cart':'Out of Stock'}
          </Button>
        )}
      </CardBody>
    </Card>
  );
}

export default ProductItem;
