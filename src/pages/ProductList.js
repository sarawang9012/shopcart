import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const ProductList = ({title, products, items, setItems}) => {
    useTitle(title);
  return (
    <main>
        <section className="flex  flex-wrap justify-between max-w-7xl mx-auto py-5 mt-8">
{products.map((product)=>(<Card key={product.id} pid={product.id} name={product.name} price={product.price} img={product.img} items={items} setItems={setItems}/>))}
        </section>
    </main>
  )
}
