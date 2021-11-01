import {React,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../services/getFireBase";

const DetailPage = () => {
  const { id } = useParams();
  /**Filtro*/
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection("items")
      .where("id", "==",id)
      .get()
      /**Filtro*/
      .then((resp) =>
        setItemDetail(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
        
      );
      console.log('el id es '+id)
  }, [id]);

  return (
    <div className="full-detail">
      <div className="explore-container">

        {itemDetail.map((it) => (
            <>
              <img src={it.img} width="200px" alt="imagen" />
              <ItemDetail
                title={it.title}
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
