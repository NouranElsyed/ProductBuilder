import {truncateText} from "../../uitles/function"
import Image from "../Image/Image"
import Button from "../ui/Button"
import {IProduct} from "../../interface/IProduct"

const Product = ({title,description, imgURL, price,author}:IProduct) => {

  return (
    <>
        <div className="card border p-3 rounded-md m-2 flex flex-col w-3/4  md:w-full  justify-center items-center" >
            <div className="self-center w-1/2 sm:w-2/3 md:w-full bg-black rounded-lg overflow-hidden">
                <Image imgUrl={imgURL} className="image min-w-full" alt={title}/>           
            </div>
            <p  className="font-bold my-3 text-xl lg:self-right"> {title}</p>
            <div   className="card-content sm:text-center text-right"> {truncateText(description)} </div>
            <div className="flex space-x-2 my-2">
              <span className="w-5 h-5 bg-blue-700 rounded-full"></span>
              <span className="w-5 h-5 bg-red-700 rounded-full"></span>
              <span className="w-5 h-5 bg-green-700 rounded-full"></span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-teal-700">{price}</span>
              <Image imgUrl={author.imgUrl} className="h-10 w-10 rounded-full object-center" alt={author.name}/>           

            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <Button bg="bg-indigo-700" onClick={()=>{console.log("click")}} >Edit</Button>
              <Button bg="bg-red-700">Delete</Button>
            </div>
        </div>
    </>
  )
}

export default Product 