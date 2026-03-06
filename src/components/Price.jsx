import React from 'react';

const Price = (props) => {
    return (
        <div>
            {   
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