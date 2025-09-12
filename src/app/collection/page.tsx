import { FC } from "react";
import Sidebar from "./_components/sidebar";
import "./page.scss";
import ProductList from "./_components/product-list";

const Collection: FC = () => {
  return (
    <div className="collection">
      <Sidebar />

      <ProductList />
    </div>
  );
};

export default Collection;
