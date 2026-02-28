import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = (props) => {
    return (  
        <div key={props.id} className="book">
            <div className="book__img--wrapper">
                <figure className="book__img--skeleton">
                    <img className="book__img" src={props.url} />    
                </figure>
            </div>
            <p className="book__title--skeleton">
                <a className="book__title--link">
                    {props.title}
                </a>
            </p>
            <p className="book__rating--skeleton">
                {new Array(Math.floor(props.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)}
                {!Number.isInteger(props.rating) && <FontAwesomeIcon icon="star-half-alt" />}
            </p>
            <div className="book__price">
                {/*METHOD 1 */
                props.salePrice && <span className="book__price--normal">${props.originalPrice}</span>}
                {props.salePrice}
                {!props.salePrice && props.originalPrice}
                
                {/*METHOD 2 */
                props.salePrice? 
                    (<>
                        <span className="book__price--normal">${props.originalPrice}</span>
                        <span>{props.salePrice}</span>
                    </>)
                    :
                    (
                        <>
                            <span>{props.originalPrice}</span>
                        </>
                    )}
            </div>
        </div>    
    )
}

export default Book