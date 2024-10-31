import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola Gente"/>
      <ItemListContainer greeting="Bienvenidos/as a True Shop"/>
    </div>
  )
}

export default App
