import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row row__column">
                    <figure className="footer__logo">
                        <img className="footer__logo--img" src={Logo} />
                    </figure>
                    <p className="footer__copyright">&copy; Arsh Agarwl</p>
                    <div className="footer__list">
                        <Link className="footer__link" to="/">Home</Link> 
                        <span className="footer__link" to="">About</span>
                        <Link className="footer__link" to="/books">Books</Link> 
                        <Link className="footer__link" to="/cart">Cart</Link> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer