import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart';
import Films from './Components/Films';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path = '/' element = {<Films />}
        />
        <Route
          path = '/cart' element = {<Cart />}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
