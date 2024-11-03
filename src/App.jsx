import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola Gente"/>
      <ItemListContainer greeting="Bienvenidos/as a True Shop"/>
      <ItemCount/>
    </div>
  )
}

export default App
