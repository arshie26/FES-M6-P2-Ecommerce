import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { books } from '../data.js'
import BookInfo from '../pages/BookInfo';
import Rating from '../components/Rating.jsx';
import Price from '../components/Price.jsx';

const Book = (props) => {

    const [img, setImage] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = props.url;
        image.onload = () => {
            setTimeout(() => {
                if(mountedRef.current){
                    setImage(image);
                }
            }, 300)
        };

        return () => {
            mountedRef.current = false;
        }
        
    });

    return (  
        <div key={props.id} className="book">
            {img? 
                (<>
                    <div className="book__img--wrapper">
                    <Link to={`/books/${props.id}`}  className="book__title--link">
                        <figure className="book__img--skeleton">
                            <img 
                                src={img.src}
                                alt=""
                                className="book__img" 
                                
                                />
                        </figure>
                    </Link>
                    </div>
                    <div className="book__title">
                        <Link to={`/books/${props.id}`}  className="book__title--link">
                            {props.title}
                        </Link>
                    </div>
                    
                    <Rating rating={props.rating} />
                    <div className="book__price">
                        {//METHOD 1 
                        /*props.salePrice && <span className="book__price--normal">${props.originalPrice}</span>}
                        {props.salePrice}
                        {!props.salePrice && props.originalPrice}*/}
                        
                        {/*METHOD 2 */}
                        <>
                            <Price salePrice={props.salePrice} originalPrice={props.originalPrice} />
                        </>
                        
                    </div>

                </> ):
                (<>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                </>
            )}
            
            
            
        </div>    
    )
}

export default Book