import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { ShoppingCart } from "lucide-react";
import { Input } from "@nextui-org/input";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";
// -----------------------------------------------------------------------------

function Header() {
  const { state } = useCart();
  const cartCount = state.cart.length;
  const cartData = state.cart;
  const location = useLocation();
  return (
    <header>
      <Navbar className="mb-4 p-4">
        <NavbarBrand>
          <Link to="/" className="uppercase tracking-wide">
            Shoppy
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <Input
            type="text"
            placeholder="Search for products"
            className={`${
              location.pathname === "/cart" ? "opacity-0" : ""
            } opacity-0 sm:opacity-100`}
          />

          <Dropdown>
            <DropdownTrigger>
              <Button variant="solid" color="primary">
                <ShoppingCart size={16} />
                {cartCount}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              variant="flat"
              closeOnSelect={false}
            >
              {cartCount ? (
                cartData.map((itemData) => {
                  return (
                    <DropdownItem key={itemData.id}>
                      <CartItem itemData={itemData} />
                    </DropdownItem>
                  );
                })
              ) : (
                <DropdownItem key="new" className="no-hover">
                  The cart is empty
                </DropdownItem>
              )}
              {cartCount ? (
                <DropdownItem>
                  <Button
                    size="sm"
                    color="primary"
                    type="primary"
                    className="w-[100%]"
                  >
                    <Link to="/cart">Go to Cart</Link>
                  </Button>
                </DropdownItem>
              ) : (
                ""
              )}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </header>
  );
}

export default Header;
