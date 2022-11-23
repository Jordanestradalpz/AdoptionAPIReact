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
    </div>
    </BrowserRouter>
  );
}

export default App;
