import  {v4 as uuid} from "uuid"
import { IProduct } from "../interface/IProduct"

// eslint-disable-next-line react-refresh/only-export-components
export const ProductList:IProduct[]=  [
  {
    id:uuid(),
    title:"الدوائر الخمس",
    description:"تحفة فنية آسرة ستأخذك في رحلة لا تُنسى عبر عالم من الغموض والإثارة",
    imgURL:"daw2r.jpg",
    price:"$400",
    // color:[""],
    author:{
      name:"osama el-moslem",
      imgUrl:"Osama.jpeg"
    }
  },  {
    id:uuid(),
    title:"عرين الاسد",
    description:"' نُزلزل الأَرض تحتَ أقدام من يستبيح أرضَنا.. ونُريق دِمَاءَهم لنسقِيها حين تَشح السماء بمائِها ..'نافجة ابنة أملج",
    imgURL:"Arabestan.jpg",
    price:"$650",
    // color:[""],
    author:{
      name:"osama el-moslem",
      imgUrl:"Osama.jpeg"
    }
  }, {
    id:uuid(),
    title:"الغهيب",
    description: `
    العمى درجات والبصيرة هِبات.. 
    نحن نرى ونسمع غالباً ما نريد فقط ..
    ولا نستسيغ سوى ما يتوافق مع أهوائنا ..
  `,
    imgURL:"el5haeeb.jpg",
    price:"$200",
    // color:[""],
    author:{
      name:"osama el-moslem",
      imgUrl:"Osama.jpeg"
    }
  }, {
    id:uuid(),
    title:"خوف",
    description:" تدور أحداث رواية خوف حول بطل الرواية المتمرد علي عادات وافكار بلاده العربية ويهرب منها بحبه وشغفه للقراءة والكتب   ",
    imgURL:"Khooof.jpg",
    price:"$250",
    // color:[""],
    author:{
      name:"osama el-moslem",
      imgUrl:"Osama.jpeg"
    }
  }, {
    id:uuid(),
    title:"ساحرة الهجينة",
    description:" جرادة بيضاء تطن بأجنحتها تحت سماء عربستان الملبدة بالغيوم الكثيفة",
    imgURL:"sahera.jpg",
    price:"$350",
    // color:[""],
    author:{
      name:"osama el-moslem",
      imgUrl:"Osama.jpeg"
    }
  },
 
]

export default ProductList