import React, { useState } from 'react';
import { useEffect } from 'react';
import Features from '../components/Features'
import Book from '../components/Book.jsx';
import { books } from '../data.js'
import Filter from '../components/Filter.jsx'

const Books = (props) => {

    const [ books, updateBooks ] = useState(props.books);

    console.log("In Books books length is ", books.length);

    function filterBooks(newFilter){
        console.log(newFilter);
        
        let newBooks;
        if(newFilter == "LOW_TO_HIGH"){
            newBooks = books.slice().sort((a, b) => {
                return (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
            });
            updateBooks(newBooks);

            /* PREVIOUS ATTEMPTS: 
            updateBooks(books); USING STATE VARIABLE TO UPDATE STATE
            SORT AND UPDATE ARRAY, SET TO A NEW VARIABLE AND UPDATE STATE
            newBooks = books.sort((a, b) => {
                return (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
            });
            updateBooks((prevBooks) => prevBooks = newBooks);*/
        }
        else if(newFilter == "HIGH_TO_LOW"){
            newBooks = books.slice().sort((a, b) => {
                return (b.salePrice || b.originalPrice)-(a.salePrice || a.originalPrice);
            });
            updateBooks(newBooks);
        }
        else if(newFilter=="RATING"){
            newBooks = books.slice().sort((a, b) => {
                return b.rating-a.rating;
            })
            updateBooks(newBooks);
        }
    }

    useEffect(() => {
        console.log("Books mounted");
    })

    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Books</h2>
                                <Filter filterBooks={filterBooks} />
                            </div>
                            <div className="books">
                                {books.map((book) => {
                                    return (
                                        <Book title={book.title} url={book.url} originalPrice={book.originalPrice}
                                        salePrice={book.salePrice} rating={book.rating} id={book.id} /> 
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Books