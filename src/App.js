import { Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Router>
        <Routes></Routes>
      </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
