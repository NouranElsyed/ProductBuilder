
import { useState } from 'react'
import Product from './components/Product/product'
import {Modal} from './components/ui/Modal'
import ProductList from './Data'
import Button from './components/ui/Button'
import { InputField } from './components/ui/InputField'


const App = () => {
 
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  return (
    <>
       
      <div className='container mx-auto flex flex-col my-5 justify-center  items-center'>
        <Button bg="bg-indigo-700" onClick={openModal}>Add product</Button>

        <Modal title={"Add Product"} closeModal={closeModal} isOpen={isOpen} openModal={openModal} >
              <InputField label='Title'/>
              <InputField label='Description'/>
              <InputField label='Price'/>
              <InputField label='Author'/>
          <div className='mt-5 flex flex-col sm:flex-row w-1/2 mx-auto space-y-3 sm:space-x-2 sm:space-y-0 justify-center'>
              <Button bg="bg-indigo-700">Submit</Button>
              <Button className='w-full' bg="bg-red-700" onClick={closeModal}>Cancel</Button>
          </div>
        </Modal>
        <div className="grid place-items-center grid-cols-1  sm:grid-cols-2  md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4  gap-1 md:gap-4">
        {ProductList.map(product=><Product key={product.id} title={product.title} description={product.description} imgURL={product.imgURL} price={product.price} author={product.author}/>)}
        </div>
      </div>
    </>
  )
}

export default App