import React, {FC} from 'react';
import {ICart} from "../../models/ICarts";

type CartsProps = {
    carts:ICart[]
}
const Carts:FC<CartsProps>= ({carts}) => {
    return (
        <div>
            {carts.map(cart => (<ol>
                    <li>id - {cart.id}</li>
                    <li>
                        {cart.products.map(product => <ol>
                            <li>product_id - {product.id}</li>
                            <li>product_title - {product.title}</li>
                            <li>product_price - {product.price}</li>
                            <li>product_quantity - {product.quantity}</li>
                            <li>product_total - {product.total}</li>
                            <li>product_discountPercentage - {product.discountPercentage}</li>
                            <li>product_discountedTotal - {product.discountedTotal}</li>
                            <li>product_thumbnail - {product.thumbnail}</li>
                        </ol>)}
                    </li>
                    <li>total - {cart.total}</li>
                    <li>discountedTotal - {cart.discountedTotal}</li>
                    <li>userId - {cart.userId}</li>
                    <li>totalProducts - {cart.totalProducts}</li>
                    <li>totalQuantity - {cart.totalQuantity}</li>
                    <hr/>
                </ol>
            ))}
        </div>
    );
};

export default Carts;