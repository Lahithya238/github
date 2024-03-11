import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Users from './pages/Users'
import Todolist from './pages/Todolist'
import Shop from './pages/Shop'
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext';
import { Cartprovider } from './pages/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Cartprovider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/users' element={<Users />} />
              <Route path='/todolist' element={<Todolist />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cartpage' element={<CartPage />} />
            </Routes>
          </Cartprovider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
