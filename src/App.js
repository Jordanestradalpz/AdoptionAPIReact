import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Mascota from './components/Mascota';
import CreateMascota from './components/CreateMascota';

function App() {
  

  return (
    <BrowserRouter>
    <Menu/>
    <div className='container'>        
      <Routes>
        <Route path='/' />
        <Route path='/mascotas' element={<Mascota/>}/>
        <Route path='/createmascota' element={<CreateMascota/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
