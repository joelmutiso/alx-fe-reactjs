import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#eee",
        marginTop: "2rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

