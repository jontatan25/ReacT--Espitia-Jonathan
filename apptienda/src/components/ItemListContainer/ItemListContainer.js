import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({nombre,apellido}) => {
    return(
        <>
            <h2>Bienvenido {nombre+ " "+apellido}</h2>
            <ItemList/>
        </>
    )
}

export default ItemListContainer
