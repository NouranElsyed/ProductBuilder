
import Product from './components/Product/product'
import ProductList from './Data'


const App = () => {
  const RenderProductList = ProductList.map(product=><Product key={product.id} title={product.title} description={product.description} imgURL={product.imgURL} price={product.price} author={product.author}/>)
  return (
    <>
      <div className="grid place-items-center grid-cols-1  sm:grid-cols-2  md:grid-col-3 lg:grid-cols-4  m-10 gap-5 lg:gap-10">
       {RenderProductList}
       {RenderProductList}

      </div>
    </>
  )
}

export default App