import { FC } from "react";
import Banner from "./components/banner/banner";
import dataBanner from "./data/banner-data.json";
import CategoryList from "./components/category-list";
import CategoryPreview from "./components/category-preview";

const HomePage: FC = () => {
  return (
    <div>
      <Banner data={dataBanner} />
      <section className="content">
        <CategoryList />
      </section>
      <section>
        <CategoryPreview />
      </section>
    </div>
  );
};

export default HomePage;
