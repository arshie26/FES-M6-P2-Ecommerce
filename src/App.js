import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo.jsx';
import Nav from './components/Nav';
import Cart from './pages/Cart.jsx'
import Footer from './components/Footer';
import { books } from './data.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {
  
  const [cart, setCart] = useState([]);

  /*********************************** */
  /* ADDS BOOK TO CART: DEFAULT METHOD */
  function addToCart(book){
    
    //console.log("In add to cart ", book);

    // MAKES SURE BOOK IS OBJECT, NOT ARRAY WITH OBJECT
    if(book[0]){
      book = book[0];
    }
    
    // IF IT'S NOT IN THE CART, USE SPREAD OPERATOR TO ADD TO CART
    setCart([...cart, 
      {...book, 
      quantity: 1}]);
      
  }


  /* UPDATE CART: DEFAULT METHOD 
  UPDATES BOOK IN CART WITH NEW BOOK QUANTITY 
  QUANTITY COMES FROM CART PAGE*/
  function updateCart(newQuantity, book){

    // IF THE NEW QUNTITY IS ZERO, 
    //SEND BOOK TO REMOVEFROMCART METHOD
    if(parseFloat(newQuantity) === 0){
        console.log("Input is now 0");
        return removeFromCart(book);
    }
    
    // OTHERWISE, UPDATE BOOK WITH NEW QUANTITY 
    //USE SPREAD OPERATOR TO UPDATE QUANTITY
    setCart(cart.map((bookInCart) => {
      
      if (parseFloat(bookInCart.id) === parseFloat(book.id)) {
        return {
              ...bookInCart,
              quantity: parseFloat(newQuantity)
        };
      }
      else{
        return bookInCart;
      }
      
    }));
    
  }
  
  /**************************** */
  /* REMOVE BOOK: ATTEMPT 2*/
  function removeFromCart(book){

    // FIND THE BOOK INDEX IN THE CART
    let bookIndex = cart.findIndex(bookInCart => parseFloat(book.id) === parseFloat(bookInCart.id));
    
    //IF THE BOOK EXISTS IN THE CART...
    if(bookIndex > -1){
      
      //REMOVE THE BOOK ENTIRELY FROM THE CART
      cart.splice(bookIndex, 1);
      setCart(cart.slice(0,));
    }

  }

  

  useEffect(() => {
    
  }, [])
  
  /* UPDATES CART QUANTITY IN NAV BAR */
  /* CALLED FROM NAV */
  const quantity = () => {
    let cartQuantity = 0;
    
    //CYCLES THROUGH BOOKS SUMMATING CART QUANTITY
    cart.map((book) => {
        cartQuantity += book.quantity;
        return cartQuantity;
    })

    //RETURNS CART QUANTITY
    return cartQuantity;
  }
  
  return (
    <Router>
      <div className="App">
        <Nav quantity = {quantity()} />

            <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => { return <Books books = {books} />}}  />
            <Route path="/books/:id" exact render={() => { return <BookInfo addToCart={addToCart} cart={cart} books={books} />}} />
            <Route path="/cart" render={() => { return <Cart updateCart={updateCart} removeFromCart={removeFromCart} cart={cart} books = {books} />}}  />
            
        <Footer />              
      </div>
    </Router>
  );
}

export default App;
