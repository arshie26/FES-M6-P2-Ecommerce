import React from 'react'
import Price from '../components/Price.jsx'
import { useState, useEffect, useMemo } from 'react';
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';

const Cart = (props) => {

    
    /* USED TO CALCULATE TOTAL PRICE
    OF ALL BOOKS IN CART */
    const total = useMemo(() => {
        let price = 0;
        props.cart.forEach((book) => {
            price += parseFloat((book.salePrice || book.originalPrice)) * book.quantity;
        });
        return price;
    }, [props.cart])

    

    return (

            <div id="books__body" className="row">
                <main id="books__main" >
                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <h2 className="cart__title">Cart</h2>
                            </div>
                        
                            <div className="cart">
                                <div className="cart__header">
                                    <span className="cart__book">Book</span>
                                    <span className="cart__quantity">Quantity</span>
                                    <span className="cart__total">Total</span>
                                </div>
                                <div className="cart__body">
                                    {/* DISPLAYS EACH BOOK IN THE CART */
                                    props.cart.map((book) => {
                                        return (
                                            <div key={book.id} className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} className="cart__book--img" alt=""/>

                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        {book.salePrice? 
                                                            <span className="cart__book--price">{book.salePrice}</span>
                                                            : <span className="cart__book--price">{book.originalPrice}</span>}
                                                        <Price className="cart__book--price" originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                                        <button className="cart__book--remove" onClick={() => props.removeFromCart(book)}>Remove</button> 
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="cart__quantity">
                                                    <input  
                                                        className="cart__input" 
                                                        type="number"  
                                                        min={0} 
                                                        max={99} 
                                                        value={book.quantity}
                                                        onChange={/*CALLS UPDATE CART IN APP (PARENT) WITH NEW 
                                                                    QUANTITY WHICH UPDATES STATE, WHICH RERENDERS 
                                                                    COMPONENT WITH NEW QUANITY*/
                                                                    (event) => { return props.updateCart(event.target.value, book) }}  
                                                    />
                                                </div>
                                                
                                                <div className="cart__total">
                                                    ${book.salePrice? book.salePrice * book.quantity : book.originalPrice * book.quantity}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* IF CART IS EMPTY, DISPLAY EMPTY CART IMAGE */
                                props.cart.length === 0?
                                    (<div className="cart__empty">
                                        <img src={EmptyCart} className="cart__empty--img" alt="" />
                                        <h2>You don't have any books</h2>
                                        <Link to="/books"><button className="btn">Browse books</button></Link>
                                    </div>) :
                                    <></>
                                }
                                
                            </div>
                            { /* DISPLAYS TOTAL PRICE */
                            props.cart.length && 
                            <div className="total">
                                <div className="total__item total__sub--total">
                                    <span>Subtotal</span>
                                    <span>${(total * 0.9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total*0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor">
                                    Proceed to checkout
                                </button>
                            </div>
                            }
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default Cart