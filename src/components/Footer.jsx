import React from 'react'
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
                        <a className="footer__link" href="">Home</a> 
                        <span className="footer__link" href="">About</span>
                        <a className="footer__link" href="">Books</a> 
                        <a className="footer__link" href="">Cart</a> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer