
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importar nuestros componentes
import ShowAdopter from './Components/ShowAdopter';
import CreateAdopter from './Components/CreateAdopter';
import EditAdopter from './Components/EditAdopter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowAdopter/> } />
          <Route path='/create' element={ <CreateAdopter/> } />
          <Route path='/edit/:idAdopter' element={ <EditAdopter/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
