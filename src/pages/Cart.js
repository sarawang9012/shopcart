import { CartItem } from "../components";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
export const Cart = ({title}) => {
    useTitle(title);
    const { total, cartList } = useCart();
  return (
    <main>
        <section className="max-w-7xl m-auto mt-8 flex flex-col items-center ">
            <p className="text-2xl font-bold mb-9">Cart Items: {cartList.length} |${total}</p>
            {cartList.map((product)=>(<CartItem key={product.id} product={product}  />))}
        </section>
    </main>
  )
}
