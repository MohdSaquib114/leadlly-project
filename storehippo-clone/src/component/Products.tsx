import { useGetProducts } from "../hooks/useGetProducts"
import Spinner from "../ui/Spinner"
import Product from "./Product"

export default function Products() {
  const {products,isfetch} =  useGetProducts()


  return (
    <div className="p-20 text-center">
      <h3 className="lg:text-5xl text-3xl font-bold text-slate-700">Our Products</h3>
      <div className="lg:p-20">
       <Spinner isVisible={isfetch} />
       <div className="grid grid-col-1 lg:grid-cols-3 gap-8">
        {products?.map((product,id)=><Product key={id+product.id} name={product.name} description={product.description} imageUrl={product.imageUrl}  />)}
       </div>
      </div>
    </div>
  )
}
