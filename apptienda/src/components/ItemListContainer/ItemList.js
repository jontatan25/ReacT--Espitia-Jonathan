
import Item from "./Item"

function ItemList ({item}){

      return  (<div className="container-fluid mb-3">
        {item.map(it => <><Item title={it.title} price={it.price} img= {it.img} id= {it.id}/></> )}
        </div>)
}

export default ItemList