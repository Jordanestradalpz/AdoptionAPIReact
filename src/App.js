import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Mascota from './components/Mascota';
import CreateMascota from './components/CreateMascota';
import EdithMascota from './components/EdithMascota';
import DeleteMascota from './components/DeleteMascota';
import Solicitud from './components/Solicitud';
import EdithSolicitud from './components/EdithSolicitud';
import DeleteSolicitud from './components/DeleteSolicitud';
import CreateSolicitud from './components/CreateSolicitud';
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
    <BrowserRouter>
    <Menu/>
    <div className='container'>        
      <Routes>
        <Route path='/' />
        <Route path='/mascotas' element={<Mascota/>}/>
        <Route path='/createmascota' element={<CreateMascota/>}/>
        <Route path='/edithmascota/:idMascota' element={<EdithMascota/>}/>
        <Route path='/deletemascota/:idMascota' element={<DeleteMascota/>}/>

        <Route path='/solicitudes' element={<Solicitud/>}/>
        <Route path='/createsolicitud' element={<CreateSolicitud/>}/>
        <Route path='/edithsolicitud/:idAdoption' element={<EdithSolicitud/>}/>
        <Route path='/deletesolicitud/:idAdoption' element={<DeleteSolicitud/>}/>
      </Routes>
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
    </BrowserRouter>
  );
}
export default App;







