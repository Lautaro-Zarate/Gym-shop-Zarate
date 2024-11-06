import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import EjemPromise from './components/EjemPromise'
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola Gente, bienvenidos/as a True Shop"/>
      <EjemPromise/>
    </div>
  )
}
export default App
