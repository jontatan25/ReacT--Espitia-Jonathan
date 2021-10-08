import ItemCount from "../ItemCount";

const Item= ({title,price,img,description}) => {
    return(
        <>
            <div>{title}{img}<p>{description}</p><p>{price}</p></div>
        </>
    )
  }
  export default Item 