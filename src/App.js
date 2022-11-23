
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importar nuestros componentes
import ShowAdopter from './Components/ShowAdopter';
import CreateAdopter from './Components/CreateAdopter';
import EditAdopter from './Components/EditAdopter';
import ShowEmployee from './Components/ShowEmployee';
import CreateEmployee from './Components/CreateEmployee';
import EditEmployee from './Components/EditEmployee';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/adopter' element={ <ShowAdopter/> } />
          <Route path='/adopter/create' element={ <CreateAdopter/> } />
          <Route path='/adopter/edit/:id' element={ <EditAdopter/> } />
          <Route path='/employee' element={ <ShowEmployee/> } />
          <Route path='/employee/create' element={ <CreateEmployee/> } />
          <Route path='/employee/edit/:id' element={ <EditEmployee/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
