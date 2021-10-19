import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const Item = ({ title, price, img, id }) => {
  return (
    <>
      <div className="card">
        <img class="card-img-top" src={img} alt="Card cap" />
        <div class="card-header">{title}</div>
        <div class="card-body">
          <h5 class="card-title">{price}</h5>
          <Link to={`/item/${id}`}>
            <button type="button" class="btn btn-primary">
              Mas detalles
            </button>
          </Link>
        </div>
      </div>

      <ItemCount />
    </>
  );
};
export default Item;
