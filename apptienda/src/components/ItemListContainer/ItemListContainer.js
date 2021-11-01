import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { getFirestore } from '../../services/getFireBase'


const ItemListContainer = ({nombre,apellido}) => {

    const [item,setItem] = useState(1)

    useEffect(() => {

        const db = getFirestore()
        db.collection('items').get()   
        
        // filtrar
        // db.collection('items').where('precio','>',1000).get()   

        // ingresa el id en cada objeto
        .then(resp => setItem(resp.docs.map(it => ({id:it.id, ...it.data()}))))   

        // traer objeto individualmente

        // db.collection('items').doc('1').get()    
        // .then(resp => setEstado({id:resp.id,...resp.data()})(resp))
      },[])

    return item === 1 ? (
        <>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
            <p>cargando</p>
        </>
    ) : 
    
    <>
    <h2>Bienvenido {nombre+ " "+apellido}</h2>
    <ItemList item={item}/>
</>
}
        
        



export default ItemListContainer
