import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'

const App = () => { 
    const [productsState, setProductsState] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
            const newProductsState = productsArray.map((product) => 
            {return product.title})
            setProductsState(newProductsState)
            })
    }, [])  

    const hasProducts = productsState.length > 0
    return (
        <div> 
            {/* <CountButton incrementBy={1} buttonColor="blue" /> */}
            {/* {hasProducts ? <SearchBar 
                products = {productsState}/> : 'Loading'} */}
            <Button buttonText="MyButton"/>
            <Button buttonText="Hello"/>
            <Button buttonText="Button3"/>
            <Button buttonText="Army "/>
        </div>
    )
}

export default App