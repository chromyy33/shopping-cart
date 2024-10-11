import ProductItem from "../components/ProductItem";
import { useCart } from "../contexts/CartContext";
import Filter from "./Filter";
function Layout() {
  const { state } = useCart();
  const productsData = state.productsData;
  return (
    <div className="grid grid-cols-[19rem_1fr] px-[4rem] gap-5 content-center mx-auto ">
      <Filter />
      <div className="grid grid-cols-4 gap-5  ">
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
