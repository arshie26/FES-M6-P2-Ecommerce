import React from 'react';

const Highlight = (props) => {

    return (
        <div className="highlight">
            <div className="highlight__img">
                {props.image}
            </div>
            <p className="highlight__subtitle">{props.title}</p>
            <p className="highlight__para">{props.description}</p>
        </div>
    )
}

export default Highlight