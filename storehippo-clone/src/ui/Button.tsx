

export default function Button({title,px,py,width}:{title:string,px:string,py:string,width?:string}) {
  return (
    <a className={`px-${px} py-${py} ${width} transition-all px-10 py-4 border-lime-600 lg:self-start self-center hover:bg-white hover:text-lime-600 hover:border-lime-600 border text-sm font-medium  bg-lime-600 text-center text-slate-50 rounded-3xl`} href="#">{title}</a>

  )
}
