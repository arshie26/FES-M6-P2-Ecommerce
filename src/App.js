import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo.jsx';
import Nav from './components/Nav';
import Cart from './pages/Cart.jsx'
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { books } from './data.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {
  
  const [cart, setCart] = useState([]);
  const [disableAdd, setDisable] = useState(false);

  function bookExists(book){
    let bookIndex = cart.findIndex(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id));
    if(bookIndex > -1){
      return true;
    }
    else{
      return false;
    }  
  }

  /* ADDS BOOK TO CART */
  function addToCart(book){

    /* MAKES SURE BOOK IS OBJECT, NOT ARRAY WITH OBJECT */
    if(book[0]){
      book = book[0];
    }

    console.log("In add to cart ", book);

    let bookIndex = cart.findIndex(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id));
    if(bookIndex > -1){
      setDisable(true);
    }
    
    /*IF THE BOOK IS ALREADY IN THE CART, GET ITS INDEX 
      THEN UPDATE ITS QUNTITY AND RETURN A NEW CART ARRAY WITH UPDATED BOOK */ 
    if(cart.find(bookInCart => parseFloat(bookInCart.id) === parseFloat(book.id))){
      setCart(cart.map((bookInCart) => {
        if(parseFloat(bookInCart.id) === parseFloat(book.id)){
          if(bookInCart.salePrice){
            return {...bookInCart, quantity: bookInCart.quantity + 1, total: (bookInCart.quantity + 1) * bookInCart.salePrice }  
          }
          else{
            return {...bookInCart, quantity: bookInCart.quantity + 1, total: (bookInCart.quantity + 1) * bookInCart.originalPrice }  
          }
        }
        else{
          return bookInCart;
        }
      }))
    }

    /* IF IT'S NOT IN THE CART, USE SPREAD OPERATOR TO ADD TO CART */
    else{
      setCart([...cart, {...book, quantity: 1, total: book.originalPrice}]);
    }
  }

  
  /*function addToCart(book){
    //MAKES A SHALLOW COPY OF BOOK IN THE CART, UPDATES THE SHALLOW COPY
    //SO IT UPDATES THE CART, THEN USES SLICE TO RETURN A NEW ARRAY TO SETCART
    let bookInCart = cart.findIndex(cartBook => {console.log(cartBook.id); return cartBook.id == book.id;});
    if(bookInCart >= 0){
      console.log("Book is in cart")
      //Get book from cart
      let originalBook = cart[bookInCart];
      
      //Use original book data to update cart data
      originalBook.quantity += 1;
      originalBook.total = originalBook.originalPrice * (originalBook.quantity);
      if(originalBook.salePrice){
        originalBook.total = originalBook.salePrice * (originalBook.quantity);
      }

      //Update the cart state variable with the updated cart
      setCart(cart.slice(0,));
    }*/

    /* IF IT'S NOT IN THE CART, USE SPREAD OPERATOR TO ADD TO CART */
    /*else{
        book.quantity = 1;
        book.total = book.originalPrice;
        if(book.salePrice){
          book.total = book.salePrice;
        }
        console.log("Book is not in cart")
        console.log(book)
        setCart((prevCart) => {return [...prevCart, book] }); 
    }
  }*/

  function removeFromCart(book){
    let bookIndex = cart.findIndex(bookInCart => parseFloat(book.id) === parseFloat(bookInCart.id));
    if(bookIndex > -1){
      let originalBook = cart[bookIndex];
      if(originalBook.quantity == 1){
        cart.splice(bookIndex, 1);
        setCart(cart.slice(0,));
      }
      else{
        originalBook.quantity -= 1;
        setCart(cart.slice(0,));
      }
    }
  }

  useEffect(() => {
    console.log("In App, cart is ", cart);
    console.log("disabled set to ", disableAdd);

  }, [cart])
  
  return (
    <Router>
      <div className="App">
        <Nav />

            <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => { return <Books books = {books} />}}  />
            <Route path="/books/:id" exact render={() => { return <BookInfo addToCart={addToCart} bookExists = {bookExists} disableAdd={disableAdd} cart={cart} books={books} />}} />
            <Route path="/cart" exact render={() => { return <Cart books = {books} remove={removeFromCart} cart={cart} />}}  />
            
        <Footer />              
      </div>
    </Router>
  );
}

export default App;
