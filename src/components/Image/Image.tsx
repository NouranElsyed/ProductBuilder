import "./image.css"
interface IProps{
imgUrl:string,
alt:string,
className:string,

}

const Image = ({imgUrl,alt,className}:IProps) => {
  return (
    <img className={className} src={`src/assets/img/${imgUrl}`} alt={alt} />
   
  )
}

export default Image