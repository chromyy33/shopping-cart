import { Button, Card, CardHeader } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import Rating from "./Rating";
import { Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
function CheckoutItem({ itemData }) {
  const { title, thumbnail, id, price, rating, stock } = itemData;
  const { updateQuantity, removeItem } = useCart();
  return (
    <Card shadow="sm" className=" lg:w-[40rem]">
      <CardHeader className="w-full flex-col gap-3 lg:gap-2 items-start lg:flex-row lg:items-center lg:justify-center">
        <img src={thumbnail} alt={title} className="w-[4rem] object-cover" />
        {title}
        <p>$ {price}</p>
        <Rating type="ui" r={Math.floor(rating)} size={16} label="" />

        <Select
          onChange={(e) => {
            updateQuantity(id, e.target.value);
          }}
          className="w-[5rem]"
          labelPlacement="inside"
          label={""}
          aria-label="qty"
          size="sm"
          defaultSelectedKeys={["1"]}
        >
          {[...new Array(stock)].map((_, index) => {
            return (
              <SelectItem value={index + 1} key={index + 1}>{`${
                index + 1
              }`}</SelectItem>
            );
          })}
        </Select>
        <Button
          color="danger"
          type="primary"
          size="sm"
          onClick={() => {
            removeItem(id);
          }}
          className="mr-3"
        >
          <Trash2 size={16} />
        </Button>
      </CardHeader>
    </Card>
  );
}

export default CheckoutItem;
