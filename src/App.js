import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo.jsx';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { books } from './data.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

            <Route path="/" exact component={Home} />
            <Route path="/books/1" exact render={() => { return <BookInfo books={books} />}} />
            <Route path="/books" exact render={() => { return <Books books = {books} />}}  />
            
        <Footer />              
      </div>
    </Router>
  );
}

export default App;
