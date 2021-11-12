import './App.css';
import Home from './html/Home.js';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Service from './html/Service.js';
import Blog from './html/Blog';
import Contact from './html/Contact.js';
import About from './html/About.js';
import Navigate from './html/Navigate.js';

function App() {
  return (
    <div className="App">
          <Navigate/>
          <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/service" element={<Service/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/contact" element={<Contact/>}/>
              </Routes>
           </BrowserRouter>
           </div>
    
  )
}

export default App;
