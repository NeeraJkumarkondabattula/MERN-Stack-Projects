import AddProduct from "./component/addProduct/AddProduct";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import NotFound from "./component/notFound/NotFound";
import ProductList from "./component/productList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProduct from "./component/updateProduct/UpdateProduct";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
