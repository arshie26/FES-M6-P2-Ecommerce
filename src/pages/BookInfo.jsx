import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import Rating from '../components/Rating.jsx';
import Price from '../components/Price.jsx'
import Book from '../components/Book.jsx'
import Recommended from '../components/Recommended.jsx';

const BookInfo = (props) => {
    const { id } = useParams();

    const [disableAdd, setDisable] = useState(props.disableAdd);
    let book = props.books.find((book) => {return parseFloat(book.id) === parseFloat(id)});

    useEffect(() => {
        console.log("book id is now ", id);
        console.log("Book Info disabled is ", disableAdd);
        
        let bookIndex = props.cart.findIndex(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id));
        if(bookIndex > -1){
            /*
            if(parseFloat(props.cart[bookIndex].quantity) === parseFloat(5)){
                console.log("Quantity is now 5");
                setDisable(true);
            }
            console.log("Quantity is now 5");
            setDisable(true);*/

        }

        //WHY DOES THIS NOT WORK IF USEEFFECT RUNS ON EVERY RENDER?
        //book = props.books.filter((book) => {return parseFloat(book.id) === parseFloat(id);});
    }, [id, props.cart]);

    /*function addToCart(){
        //Retrieves cart from local storage
        let cart = JSON.parse(localStorage.getItem("cart"));
        let bookInCart;
        
        
        if(cart){
            //If book is in the cart, update quantity
            bookInCart = cart.findIndex(book => book.id === id);
            if(bookInCart > 0){
                cart[bookInCart].quantity += 1;
            }

            //If book is not in cart, add book to cart
            else{
                cart.push({id: id, quantity: 1});
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
        //If cart is empty, add book to cart 
        else{
            let newCart = [{id: id, quantity: 1}];
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    }*/

    function addBookToCart(book){
        if(!props.cart.find(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id))){
            props.addToCart(book);
            setDisable(true);
        }
    }

    return (
        
            <div id="books__body">
                <main id="books__main">
                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <Link to="/books" className="book__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/books" className="book__link">
                                    <h2 className="book__selected--title--top">Books</h2>
                                </Link>
                            </div>
                            <div className="book__selected">
                                <figure className="book__selected--figure">
                                    <img className="book__selected--img" src={book.url} />
                                </figure>
                                <div className="book__selected--description">
                                    <h2 className="book__selected--title">{book.title}</h2>
                                    <Rating rating={book.rating} />
                                    <div className="book__price">
                                        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                    </div>
                                    <div className="book__summary">
                                        <div className="book__summary--title">Summary</div>
                                        <p className="book__summary--para">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sed id quisquam 
                                            voluptas consequatur deserunt voluptatibus iusto harum praesentium quaerat quae dolor, 
                                            minus aliquid possimus? Aliquam nulla beatae exercitationem cum.
                                        </p>
                                        <p className="book__summary--para">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sed id quisquam 
                                            voluptas consequatur deserunt voluptatibus iusto harum praesentium quaerat quae dolor, 
                                            minus aliquid possimus? Aliquam nulla beatae exercitationem cum.
                                        </p>
                                        
                                        {/*props.bookExists(book)? 
                                            <Link to="/cart"><button className="btn">View Cart</button></Link>
                                            :
                                            <button onClick={() => {props.addToCart(book)}} 
                                            disabled={disableAdd} className="btn">Add to Cart</button>
                                            
                                        */}

                                        {disableAdd? 
                                            <Link to="/cart"><button className="btn">View Cart</button></Link>
                                            :
                                            <button onClick={() => {props.addToCart(book)}} 
                                            disabled={disableAdd} className="btn">Add to Cart</button>
                                            
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <h2 className="book__selected--title--top">Recommended Books</h2>
                            </div>
                            <div className="books">
                            {props.books
                                .filter((book) => { return (parseFloat(book.id) !== parseFloat(props.id)) && (book.rating == 5); })
                                .slice(0,4)
                                .map((book) => {
                                    return <Book key={book.id} title={book.title} url={book.url} rating={book.rating}
                                    originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                })
                            }
                            </div>
                        </div>
                    </div>
                </main>
            
        </div>
    )
}

export default BookInfo