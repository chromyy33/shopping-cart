import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Shipping() {
  return (
    <div className="text-[1.5rem] text-center mt-[8rem] gap-9 flex flex-col">
      Thank you for shopping with us 😀{" "}
      <Button type="primary" color="primary" className="mx-auto">
        <Link to={"/"}>Continue shopping</Link>
      </Button>
    </div>
  );
}

export default Shipping;
