import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import Rating from '../components/Rating.jsx';
import Price from '../components/Price.jsx'
import Recommended from '../components/Recommended.jsx';

const BookInfo = (props) => {
    const { id } = useParams();
    
    const book = props.books.find((book) => {return parseFloat(book.id) === parseFloat(id)});

    /***************************************** */
    /* TOGGLE VIEW CART BUTTON: DEFAULT METHOD */
    function bookExists(book){

        // FINDS BOOK INDEX IN CART
        let bookIndex = props.cart.findIndex(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id));
        
        // IF BOOK EXISTS IN CART, RETURN TRUE
        if(bookIndex > -1){
          return true;
        }
        // OTHERWISE, RETURN FALSE
        else{
          return false;
        }  
    }

    useEffect(() => {
        console.log("book id is now ", id);
        
        
        //WHY DOES THIS NOT WORK IF USEEFFECT RUNS ON EVERY RENDER?
        //book = props.books.filter((book) => {return parseFloat(book.id) === parseFloat(id);});
    }, [id]);



    /* ADD BOOK TO CART: DEFAULT METHOD */
    function addBookToCart(book){
        props.addToCart(book);
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
                                    <img className="book__selected--img" src={book.url} alt=""/>
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
                                        
                                        {// TOGGLE VIEW CART BUTTON: DEFAULT METHOD
                                        bookExists(book)? 
                                            <Link to="/cart"><button className="btn">View Cart</button></Link>
                                            :
                                            <button onClick={() => {addBookToCart(book)}} 
                                             className="btn">Add to Cart</button>
                                            
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
                            {/*RECOMMENDED BOOKS SECTION */
                                <Recommended id={id} books={props.books} />}
                            </div>
                        </div>
                    </div>
                </main>
            
        </div>
    )
}

export default BookInfo