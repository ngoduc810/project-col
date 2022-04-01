import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Item from './components/Item';
import Navbar from './components/Navbar';
import Product from './components/Product';
import store from './redux/store';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={
                                    <ProtectedRoute>
                                      <Home />
                                    </ProtectedRoute>
                                    } />
            <Route path='/products' element={ <ProtectedRoute>
                                      <Product />
                                    </ProtectedRoute>} />
            <Route path='/products/:id' element={ <ProtectedRoute>
                                      <Item />
                                    </ProtectedRoute>} />
            <Route path='/cart' element={<ProtectedRoute>
                                      <Cart />
                                    </ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<ProtectedRoute>
                                      <About />
                                    </ProtectedRoute>} />
            <Route path='/contact' element={<ProtectedRoute>
                                            <Contact />
                                          </ProtectedRoute>} />              
            </Routes>
          <Footer />
      </BrowserRouter>
      </UserAuthContextProvider>
    </Provider>
  );
}

export default App;
