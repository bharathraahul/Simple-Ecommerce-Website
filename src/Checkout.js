import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';



function Checkout(){
    const [{basket},dispatch] = useStateValue();

    return(
        <div className='checkout'>


            <div className='checkout__left'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZBBtsqzdEBPX3qnLzR4gizYD4EGKzX2Zg&usqp=CAU" 
                alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item =>
                        <CheckoutProduct
                            id = {item.id}
                            titile = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                        )}
                    
                    

                </div>



            </div>

            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>

    );
}

export default Checkout;