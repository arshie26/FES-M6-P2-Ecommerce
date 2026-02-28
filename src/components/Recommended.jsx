import React from 'react'
import Book from './Book'

const Recommended = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="books">
                    {props.books
                        .filter((book) => { return book.id != props.id; })
                        .slice(0,4)
                        .map((book) => {
                            console.log("recommended", book.title);
                            return <Book key={book.id} title={book.title} url={book.url} rating={book.rating}
                            originalPrice={book.originalPrice} salePrice={book.salePrice} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommended