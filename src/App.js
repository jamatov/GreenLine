import './App.scss';
import NavTest from './components/NavTest';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <NavTest/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
