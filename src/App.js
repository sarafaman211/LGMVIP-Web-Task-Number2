import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
