//App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Home from './components/issues/home.js';
import Login from './components/users/login.js';
import Navbar from './components/navbar.js';

const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/login' element={ <Login />} />
              <Route path='/' element={ <Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
