import ItemCount from "../ItemCount";

const Item = ({ title, price, img, description ,id}) => {
  return (
    <>
      <div>
        {title}
        {img}
        <p>{description}</p>
        <p>{price}</p>
        <p>Detalles del producto con id:{id}</p>
      </div>
      <ItemCount />
    </>
  );
};
export default Item;
