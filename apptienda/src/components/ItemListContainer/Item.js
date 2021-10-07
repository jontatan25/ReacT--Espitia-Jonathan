import ItemCount from "../ItemCount";

const Item= ({title,price,img}) => {
    return(
        <>
            <div>{title}{price}{img}</div>
            <ItemCount/>
        </>
    )
  }
  export default Item 