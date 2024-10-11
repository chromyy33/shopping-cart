import { useCart } from "../contexts/CartContext";
import CheckoutItem from "../components/CheckoutItem";

import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
function Cart() {
  let shippingFee;
  const { state } = useCart();
  const cartData = state.cart;
  const numCart = cartData.length;
  const subTotal = cartData.reduce((acc, item) => {
    return acc + +item.price * +item.qty;
  }, 0);

  if (subTotal) {
    shippingFee = subTotal > 25 ? "Free" : 6.99;
  } else {
    shippingFee = 0;
  }
  return (
    <div className="flex justify-between w-[62rem] mx-auto">
      <div className="flex flex-col gap-3 items-center ">
        {cartData.map((itemData) => {
          return <CheckoutItem itemData={itemData} key={itemData.id} />;
        })}
      </div>
      <Card className="p-3 h-[50vh] w-[19rem]">
        <CardHeader className="text-lg">
          {numCart
            ? `You have ${numCart} ${
                numCart > 1 ? "items" : "item"
              } in your cart.`
            : "Your cart is empty."}
        </CardHeader>
        <CardBody>
          <p className="flex justify-between w-[100%] mb-4 text-[grey]">
            Subtotal
            <span>${subTotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between w-[100%] mb-8 text-[grey]">
            Shipping Fees
            <span>
              {typeof shippingFee === "number" ? "$" : ""}
              {shippingFee}
            </span>
          </p>
          <Divider />
          <p className="flex justify-between w-[100%] mt-auto mb-5 items-end">
            Total
            <span className="text-[24px]">
              ${" "}
              {shippingFee === "Free"
                ? (0 + subTotal).toFixed(2)
                : (shippingFee + subTotal).toFixed(2)}
            </span>
          </p>
          <Button size="sm" type={"primary"} color="primary">
            <Link to="/shipping">Go to Checkout</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cart;
