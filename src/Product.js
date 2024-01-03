import React from "react";
import "./Product.css";
import {useStateValue} from './StateProvider.js';

function Product({id,image,price,rating,title}){
    const[state,dispatch] = useStateValue();  //dispatch is an alternate name for action

    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{           //data i want to push into the data layer
                id:id,
                image:image,
                price:price,
                rating:rating
            },
        });

    };

    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}
                    </p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                    </div>
                </div>

                <img src={image}></img>

                <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;