

export default function Product({name,description,imageUrl }:{name:string,description:string,imageUrl:string}) {
  return (
    <div className="flex flex-col justify-center border px-20 py-10 gap-4 shadow-md rounded-md">
        <div className="">
            <img className="w-60 h-60 rounded-md" src={imageUrl} alt="product-img" />
        </div>
    <h3 className="text-xl text-lime-600">{name}</h3>
    <p className="text-base line-clamp-2">{description}</p>
    </div>
  )
}
