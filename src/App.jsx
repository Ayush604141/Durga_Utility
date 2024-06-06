import Home from "./component/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import products from "../data.json";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products/list"
        element={<ProductsList products={products} />}
      />
    </Routes>
  );
};

export default App;
