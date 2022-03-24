import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router>
      <Routes>
      <Navbar />
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
