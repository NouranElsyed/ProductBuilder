export interface IProduct {

    
        id?:string|undefined,
        title:string,
        description:string,
        imgURL:string,
        price:string,
        // color:string[],
        author:{
          name:string,
          imgUrl:string
        }
      
}