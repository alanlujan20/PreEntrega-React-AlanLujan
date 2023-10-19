
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = 'Donde la música encuentra su hogar'/>


    </div>
  );
}

export default App;
