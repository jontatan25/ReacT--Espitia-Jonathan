import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const DetailPage = ({ data }) => {
  const { id } = useParams();
  /**Intento uno */
  const filtro = data && data.filter((filtro) => filtro.id.toString() === id);

  return (
    <div className="full-detail">
      <div className="explore-container">
        {console.log(data)}
        {console.log(id)}
        {console.log(filtro)}
        {/**Intento dos ,aca estoy usando id === 1 y sirve pero si asigno el id que viene de useParams no sirve. */}
        {filtro.map((it) => (
            <>
              <img src={it.img} width="200px" alt="imagen" />
              <ItemDetail
                name={it.name}
                price={it.price}
                category={it.category}
                id={it.id}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default DetailPage;
