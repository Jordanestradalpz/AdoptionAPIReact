// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu';
import Mascota from './Components/Mascota';
import CreateMascota from './Components/CreateMascota';
import EdithMascota from './Components/EdithMascota';
import DeleteMascota from './Components/DeleteMascota';
import Solicitud from './Components/Solicitud';
import EdithSolicitud from './Components/EdithSolicitud';
import DeleteSolicitud from './Components/DeleteSolicitud';
import CreateSolicitud from './Components/CreateSolicitud';
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
          <Route path='/adopter' element={ <ShowAdopter/> } />
          <Route path='/adopter/create' element={ <CreateAdopter/> } />
          <Route path='/adopter/edit/:id' element={ <EditAdopter/> } />
          <Route path='/employee' element={ <ShowEmployee/> } />
          <Route path='/employee/create' element={ <CreateEmployee/> } />
          <Route path='/employee/edit/:id' element={ <EditEmployee/> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;







