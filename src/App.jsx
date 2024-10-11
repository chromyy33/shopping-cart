import { Route, Routes } from "react-router-dom";
import { useNavigate, useHref } from "react-router-dom";

import Product from "./pages/Product";
import Shipping from "./pages/Shipping";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";

const routes = (
  <Routes>
    {/* Define your routes here */}
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product" element={<Product />} />
    <Route path="/shipping" element={<Shipping />} />
  </Routes>
);
function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Header />
      {routes}
    </NextUIProvider>
  );
}

export default App;
