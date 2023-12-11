import { CartItem } from "../components";
import { useTitle } from "../hooks/useTitle";
export const Cart = ({title, items,setItems}) => {
    useTitle(title);
  return (
    <main>
        <section className="max-w-7xl m-auto mt-8 flex flex-col items-center ">
            <p className="text-2xl font-bold mb-9">Cart Items: {items.length}</p>
            {items.map((item)=>(<CartItem key={item.id} item={item} items={items} setItems={setItems}/>))}
        </section>
    </main>
  )
}
