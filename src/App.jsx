import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopWomen from "./pages/Women_Shop";
import ShopMen from "./pages/Men_Shop";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/women" element={<ShopWomen />} />
        <Route path="/men" element={<ShopMen />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
