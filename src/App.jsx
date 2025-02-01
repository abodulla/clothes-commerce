import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopWomen from "./pages/Women_Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/women" element={<ShopWomen />} />
      </Routes>
    </>
  );
};

export default App;
