import React from 'react';
import { books } from '../data.js';
import Book from './Book.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {

    /* CONVERTS NUMBER RATING TO RATING IN STARS  */
    function createRating(rating){   
        let stars = [];
        
        for(let i=rating; i > 0; i--){
            if(rating === 0.5){
                return stars.push(<FontAwesomeIcon icon="star-half-alt" />);
            }
            stars.push(<FontAwesomeIcon icon="star" />);
        }
        return stars;
    }
    
    return(
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="books">
                    {/* GETS 4 5-STAR BOOKS TO LIST AS FEATURED BOOKS */
                    books
                        .filter((book) => {return book.rating === 5;})
                        .slice(0,4)
                        .map((book) => {
                        return (
                            <Book key={book.id} id={book.id} url={book.url} title={book.title} rateFunction={createRating}
                            rating={book.rating} salePrice={book.salePrice} originalPrice={book.originalPrice} />
                        )
                    })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features