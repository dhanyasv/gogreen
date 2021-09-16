import React, { useContext } from 'react'
import Product from './Product'
import { AuthContext } from '../../App';

function Products() {
    const auth = useContext(AuthContext);
    console.log(auth)
    return (
        <div className="green-products">
            <Product />
        </div>
    )
}

export default Products
