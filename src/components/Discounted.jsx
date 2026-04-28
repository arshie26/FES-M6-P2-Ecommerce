import React from 'react';
import Book from './Book.jsx'
import { books } from '../data.js'

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="books">
                        {/* SELECTS 8 BOOKS WITH A VALID SALE PRICE AND LISTS THEM */
                        books
                            .filter((book) => {return book.salePrice != null})
                            .slice(0, 8)
                            .map((book) => {
                                return (
                                    <Book key={book.id} id={book.id} title={book.title} url={book.url} rating={book.rating}
                                    salePrice={book.salePrice} originalPrice={book.originalPrice} />
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discounted