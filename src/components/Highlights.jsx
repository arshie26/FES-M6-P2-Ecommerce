import Highlight from './Highlight';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Highlights = () => {
    
    /* LIST OF ALL HIGHLIGHTS */
    const highlightList = 
    [{
        image: <FontAwesomeIcon icon="bolt" />,
        title: "Easy and Quick",
        description: "Get access to the book you purchased online instantly."
    },
    {   
        image: <FontAwesomeIcon icon="book-open" />,
        title: "10,000+ Books",
        description: "Library has books in all your favorite categories."
    },
    {   
        image: <FontAwesomeIcon icon="tags" />,
        title: "Affordable",
        description: "Get your hands on popular books for as little as $10."
    }]
    
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        {/* CYCLES THROUGH HIGHLIGHTS AND DISPLAYS THEM */
                        highlightList.map((highlight) => {
                            return (
                                <Highlight key={highlight.title} image={highlight.image} title={highlight.title} description={highlight.description} />
                            );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Highlights