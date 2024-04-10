import { useEffect, useState } from "react"

export const useGetScrollPos = () =>{
    const [position,setPosition] = useState(0)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
       setPosition(Math.ceil(window.scrollY))
       
        })
        
    })
    return position
}