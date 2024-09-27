import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ProductCreate from "./pages/ProductCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<Product />}></Route>
          <Route path="form" element={<ProductCreate />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
