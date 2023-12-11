import { Routes, Route } from "react-router-dom";
import { ProductList,Cart,PageNotFound } from "../pages";
export const AllRoutes = ({products}) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductList title="Home" products={products} />} />
            <Route path="cart" element={<Cart title="Cart" />} />
            <Route path="*" element={<PageNotFound title="Page not found"/>} />
        </Routes>
    </div>
  )
}
