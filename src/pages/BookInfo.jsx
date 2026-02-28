import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Recommended from '../components/Recommended.jsx';

const Info = (props) => {
    let { id } = useParams();
    
    let book = props.books.filter((book) => {console.log("id ", id); console.log("book id ", book.id); return book.id == id;})[0]; 
    console.log(book);

    /*useEffect(() => {
        book = books.filter((book) => {console.log(book.id); return book.id == id;});
    }, []);*/

    console.log(book.title);

    return (
        <div className="container__book--selected">
            <div className="book__selected">
                <div className="book__selected--top">
                    <FontAwesomeIcon icon="arrow-left" />
                    <div className="book__selected--title-top">
                        Books
                    </div>
                </div>
                <figure className="book__selected--figure">
                    <img className="book__selected--img" src={book.url} />
                </figure>
                <div className="book__selected--description">
                    <div className="book__selected--title">
                        {book.title}
                    </div>
                    <div className="book__summary--title">
                        Summary
                    </div>
                    <div className="book__summary--para">
                    </div>
                </div>
            </div>
            <Recommended books={props.books} id={id} />
        </div>
    )
}

export default Info