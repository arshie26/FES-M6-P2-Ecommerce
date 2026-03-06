import React from 'react';
import { Link } from 'react-router-dom'
import { books } from '../data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookInfo from '../pages/BookInfo';
import Rating from '../components/Rating.jsx';
import Price from '../components/Price.jsx';

const Book = (props) => {
    return (  
        <div key={props.id} className="book">
            <div className="book__img--wrapper">
                <figure className="book__img--skeleton">
                    <img className="book__img" src={props.url} />    
                </figure>
            </div>
            <p className="book__title--skeleton">
                <Link to={`/books/${props.id}`} render={() => {<BookInfo id={props.id} books={books}/>}} className="book__title--link">
                    {props.title}
                </Link>
            </p>
            <p className="book__rating--skeleton">
                <Rating rating={props.rating} />
            </p>
            <div className="book__price">
                {/*METHOD 1 */
                props.salePrice && <span className="book__price--normal">${props.originalPrice}</span>}
                {props.salePrice}
                {!props.salePrice && props.originalPrice}
                
                {/*METHOD 2 */}
                <>
                    <Price salePrice={props.salePrice} originalPrice={props.originalPrice} />
                </>
                
            </div>
        </div>    
    )
}

export default Book