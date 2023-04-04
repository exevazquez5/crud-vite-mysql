import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Estudiante from './Estudiante'
import CreateEstudiante from './CreateEstudiante'
import UpdateEstudiante from './UpdateEstudiante'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Estudiante />}></Route>
          <Route path='/create' element={<CreateEstudiante />}></Route>
          <Route path='/update/:id' element={<UpdateEstudiante />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
