import {useState} from "react"

let stock = 5;

const ItemCount  = () => {

    const [estado,cambiarEstado] = useState(0)
    
    const sumarContador = () => {
        cambiarEstado(estado + 1)
    }
    const restarContador = () => {
        cambiarEstado(estado - 1)
    }

    if (estado <= 0 ){
        return(
            <>
            <p>Cantidad:  {estado}</p>
            <button onClick= "#">Restar</button>
            <button onClick= {sumarContador}>Añadir</button>
            <p>Stock = {stock}</p>
            </>
        )
    }
    if (estado >= stock ){

        return(
            <>
            <p>Cantidad:  {estado}</p>
            <button onClick= {restarContador}>Restar</button>
            <button onClick= "#">Añadir</button>
            <p>Stock = {stock}</p>
            </>
        )
    }
    if ((estado > 0 )&& (estado <= stock)){
        
        return(
            <>
            <p>Cantidad:  {estado}</p>
            <button onClick= {restarContador}>Restar</button>
            <button onClick= {sumarContador}>Añadir</button>
            <p>Stock = {stock}</p>
            </>
        )}
}
export default ItemCount