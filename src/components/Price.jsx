import React from 'react';

const Price = (props) => {
    return (
        <div>
            {   /* IF THERE IS A SALE PRICE, DISPLAY A STRIKETHROUGH ORIGINAL PRICE
                    OTHERWISE DISPLAY THE ORIGINAL PRICE NORMALLY */
                props.salePrice? 
                (<>
                    <span className="book__price--normal">${props.originalPrice}</span>
                    <span>${props.salePrice}</span>
                </>)
                :
                (
                    <>
                        <span>${props.originalPrice}</span>
                    </>
                )
            }
        </div>
    )
}

export default Price;