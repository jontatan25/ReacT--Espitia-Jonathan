import {React,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFireBase";
import ItemList from "../ItemListContainer/ItemList";

const DetailByCategory = () => {
  const { categoryid } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection("items")
      .where("category", "==", categoryid)
      .get()
      /**Filtro*/
      .then((resp) =>
        setItem(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
        
      );
      console.log('la categoria es '+categoryid)
  }, [categoryid]);

  return (
    <>
    <ItemList item={item}/>
    </>
  );
};

export default DetailByCategory;
