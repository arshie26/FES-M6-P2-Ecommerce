import React, { useState } from 'react';
import { books } from '../data.js';
import Book from './Book.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
    
    /*let [images, updateImages] = useState([]);

    async function getImage(id, url){
        
        let imageCall = await axios(url);
        
        return imageCall.data;

        /* STATE UPDATE ATTEMPT */
        /*updateImages((prevState) => ([
            ...prevState,
            {
                id: id,
                image: imageCall.data
            }
        ]));
        console.log("images is now ", images);
        */

        /* BASE 64 CONVERSION ATTEMPT */
        /*const base64 = btoa(
            new Uint8Array(imageCall.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          )
        console.log("getIMage base6", base64);
        return base64;*/

    /*}*/

    /*let image;
    getImage(book.id, book.url).then((data) => {
        image = data.value;
        console.log(image);
    });
    console.log(image);*/

    function createRating(rating){   
        let stars = [];
        
        for(let i=rating; i > 0; i--){
            if(rating == 0.5){
                return stars.push(<FontAwesomeIcon icon="star-half-alt" />);
            }
            stars.push(<FontAwesomeIcon icon="star" />);
        }
        return stars;
    }
    /* FILTER AND SORT SEPARATELY FROM MAP AND PRINT LOCATION */
    /*let fiveStarBooks = books.filter((book) => {
        return book.rating == 5;
    }).slice(0,4);
    books.sort((a, b) => {return b.rating - a.rating});*/
    
    return(
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="books">
                    {books
                        .filter((book) => {return book.rating == 5;})
                        .slice(0,4)
                        .map((book) => {
                        return (
                            <Book key={book.id} url={book.url} title={book.title} rateFunction={createRating}
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