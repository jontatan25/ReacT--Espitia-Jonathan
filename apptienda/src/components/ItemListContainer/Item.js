import { Link } from "react-router-dom";

const Item = ({ title, price, img, id }) => {
  return (
    <>
      <div className="card">
        <img class="card-img-top" src={img} alt="Card cap" />
        <div class="card-header">{title}</div>
        <div class="card-body">
          
          <Link to={`/item/${id}`}>
            <button type="button" class="btn btn-primary">
              Mas detalles
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Item;
