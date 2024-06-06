import Home from "./component/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/list" element={<ProductsList />} />
    </Routes>
  );
};

export default App;
