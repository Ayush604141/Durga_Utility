import Home from "./component/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import products from "../data.json";
import NotFound from "./component/Not-found";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products/list"
        element={<ProductsList products={products} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
