import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Image" element={<ImageGallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
