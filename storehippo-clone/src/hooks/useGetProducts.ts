import { useEffect, useState } from "react"

type Product = {
    name:string,
    description:string,
    imageUrl:string,
    id:string

}
  

  export const useGetProducts = () =>{
    const [products,setProducts] = useState<Product[]|null>()
    const [isfetch,setFetch] = useState<boolean>(true)
    useEffect(()=>{
        
       async function getProducts(){
        const response = await fetch("http://localhost:4024/api/v1/product/bulk")
        const data = await response.json()
        
        setProducts(data.products)
        setFetch(false)
       }
       getProducts()
    },[])
    return {products,isfetch}
  }