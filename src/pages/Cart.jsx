import React from 'react'
import { books } from '../data.js';
import Price from '../components/Price.jsx'
import { useState, useEffect } from 'react';

const Cart = (props) => {

    const [cart, updateCart] = useState(props.cart);
    const [books, updateBooks] = useState(props.books);

    let booksInfo;
    let cartQuantity = 0;

    /*
    WHY DOES THIS CAUSE INFINITE LOOP?
    updateCart(cart.map((book) => {
        if(book.total == undefined){
            book.total = "$0";
            return book;
        }
    }));*/

    cartQuantity = 0;

    useEffect(() => {
        console.log("In Cart books ", cart);
    }, [cart])

    
    /*
    function removeBook(id) {
        let bookIndex = cart.findIndex(book => book.id == id);
        let bookQuantity = cart[bookIndex].quantity;
        if(bookQuantity == 1){
            cart.splice(bookIndex, 1)
            updateCart((prevCart) => {prevCart = cart})
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else{
            updateCart((prevCart) => {return prevCart[bookIndex].quantity -= 1;});
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("new cart: ", cart);
        }
    }*/

    function total(event, price, id){
        let bookIndex = cart.findIndex((book) => {return book.id == id});
        let book = cart[bookIndex];
        if(event.target.value == 0){
            props.remove(book);
        }
        else{
            cart[bookIndex].total = event.target.value * price;
            cart[bookIndex].quantity = event.target.value;
            updateBooks(cart.slice(0,));
        }
    }

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
                                    {cart.map((book) => {
                                        return (
                                            <div class="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} className="cart__book--img" />

                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        {book.salePrice? 
                                                            <span className="cart__book--price">{book.salePrice}</span>
                                                            : <span className="cart__book--price">{book.originalPrice}</span>}
                                                        <Price className="cart__book--price" originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                                        <button className="cart__book--remove" onClick={() => props.remove(book)}>Remove</button> 
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="cart__quantity">
                                                    <input type="number" className="cart__input" min={0} max={99} 
                                                    onChange={(event) => {book.salePrice? total(event, book.salePrice, book.id) : total(event, book.originalPrice, book.id)}} value={book.quantity} />
                                                </div>
                                                
                                                <div className="cart__total">
                                                    ${book.total}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="total">
                                <div className="total__item total__sub--total">
                                    <span>Subtotal</span>
                                    <span>$9.00</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>$1.00</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>$1.00</span>
                                </div>
                                <button className="btn btn__checkout no-cursor">
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default Cart