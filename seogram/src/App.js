import './App.css';
import Home from './html/Home.js';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import Service from './html/Service.js';
import Blog from './html/Blog';
import Contact from './html/Contact.js';
import About from './html/About.js';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
    </Router>
    
  );
}

export default App;
