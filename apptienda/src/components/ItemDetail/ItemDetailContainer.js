import React from 'react'
import {useState, useEffect} from "react"
import ItemDetail from './ItemDetail'

function ItemDetailContainer ({id}){

    const [item,setItem] = useState(1)

    const promesaEj = () => {
      return new Promise((res, rej) => {
        setTimeout(() =>
          res([
            {id: 1, title:'Edición de Fotografia',
              description:"Edición de imagen, retoque, Postproduccion y Correcion. Todo lo que Necesitas para que tus fotos favoritas se vean con acabados profesionales.",
              price: " *precio: 50*      ",
              img: "https://i.ytimg.com/vi/IPn96roEbgY/maxresdefault.jpg"},            
          ]), 500
        )
      })
    }

    useEffect(() => {
      promesaEj().then((data) => {
        setItem(data)
      })
    },[])


    return item === 1 ? (
      <p>cargando Item Detail</p>
    ) : (<div>
        {item.map(it => <><img src={it.img} width="200px" alt="imagen"/><ItemDetail title={it.title} price={it.price} description={it.description} id={id}/></> )}
        </div>)
}

export default ItemDetailContainer