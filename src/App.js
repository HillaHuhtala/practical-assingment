import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />  
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
