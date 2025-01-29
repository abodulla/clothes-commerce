import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import ProductGrid from "../components/Home/ProductGrid";
import BaseCollection from "../components/Home/BaseCollection";
import HeroSection from "../components/Home/HeroSection";
import BaseColletion2 from "../components/Home/BaseColletion2";
import ProductGrid2 from "../components/Home/ProductGrid2";
import Review from "../components/Home/Review_Section";
import Categories from "../components/Home/Categories";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <ProductGrid />
        <BaseCollection />
        <HeroSection />
        <BaseColletion2 />
        <ProductGrid2 />
        <Review />
        <Categories />
        <Footer />
      </div>
    </>
  );
};

export default Home;
