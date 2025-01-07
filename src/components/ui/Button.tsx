import { ButtonHTMLAttributes } from "react"

interface IProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    children:string,
    className?:string,
    bg?:string,
    w?:"w-full"|"w-fit"
    
}
const Button = ({children,className,bg="bg-indigo-700",...rest}:IProps) => { 
  return (
    <button  className={`rounded-md py-3 px-8  text-white ${className} ${bg}`} {...rest}>{children}</button>
  )
}

export default Button