import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import CartView from './components/CartView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CheckOut from './components/CheckOut'
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos a Gym Shop!"/>}/>
          <Route path='/products/:category' element={<ItemListContainer greetings='Categoría: '/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App
