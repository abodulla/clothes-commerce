import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import ProductGrid from "../components/Home/ProductGrid";
import BaseCollection from "../components/Home/BaseCollection";
const Home = () => {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <ProductGrid />
        <BaseCollection />
      </div>
    </>
  );
};

export default Home;
