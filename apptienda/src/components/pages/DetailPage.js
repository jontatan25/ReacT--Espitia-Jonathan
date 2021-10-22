import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const DetailPage = ({ data }) => {
  const { id } = useParams();
  /**Filtro*/
  const filtro = data && data.filter((filtro) => filtro.id.toString() === id);

  return (
    <div className="full-detail">
      <div className="explore-container">

        {filtro.map((it) => (
            <>
              <img src={it.img} width="200px" alt="imagen" />
              <ItemDetail
                name={it.name}
                price={it.price}
                category={it.category}
                id={it.id}
                img={it.img}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default DetailPage;
