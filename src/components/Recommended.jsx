import React from 'react'
import Book from './Book'

const Recommended = (props) => {
    return (
        <>
                    {props.books
                        .filter((book) => { return (parseFloat(book.id) !== parseFloat(props.id)) && (book.rating === 5); })
                        .slice(0,4)
                        .map((book) => {
                            return <Book key={book.id} id={book.id} title={book.title} url={book.url} rating={book.rating}
                            originalPrice={book.originalPrice} salePrice={book.salePrice} />
                        })
                    }
              </>
    )
}

export default Recommended