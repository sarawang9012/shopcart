import { Routes, Route } from "react-router-dom";
import { ProductList,Cart,PageNotFound } from "../pages";
export const AllRoutes = ({products,setProducts,items,setItems}) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductList title="Home" products={products} items={items} setItems={setItems}/>} />
            <Route path="cart" element={<Cart title="cart" items={items} setItems={setItems}/>} />
            <Route path="*" element={<PageNotFound title="Page not found"/>} />
        </Routes>
    </div>
  )
}
