import { Button } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";

function CartItem({ itemData }) {
  const { removeItem } = useCart();
  const { title, thumbnail, id } = itemData;
  return (
    <div className="w-[18rem] flex items-center justify-between gap-2">
      <img src={thumbnail} alt={title} className="w-14" />
      <p>{title}</p>
      <Button
        color="danger"
        type="primary"
        size="sm"
        onClick={() => {
          removeItem(id);
        }}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
}

export default CartItem;
