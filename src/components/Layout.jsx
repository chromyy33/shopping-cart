import ProductItem from "../components/ProductItem";
import { useCart } from "../contexts/CartContext";
import Filter from "./Filter";
function Layout() {
  const { state } = useCart();
  const productsData = state.productsData;
  return (
    <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[18rem_1fr] sm:px-[4rem] px-[2rem] gap-5 content-center mx-auto ">
      <Filter />
      <div className="grid gap-5 lg:grid-cols-3  ">
        {productsData.products.map((productItemData) => {
          return (
            <ProductItem
              productItemData={productItemData}
              key={productItemData.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Layout;
