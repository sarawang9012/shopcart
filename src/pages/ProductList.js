import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const ProductList = ({title, products}) => {
    useTitle(title);
  return (
    <main>
        <section className="flex  flex-wrap justify-between max-w-7xl mx-auto py-5 mt-8">
{products.map((product)=>(<Card key={product.id} product={product} />))}
        </section>
    </main>
  )
}
