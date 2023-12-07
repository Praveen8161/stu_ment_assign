import NoPage from './Pages/NoPage/NoPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mentors from './Pages/Mentor/Mentors'
import Students from './Pages/Students/Students'
import AssignMentor from './Pages/Assign/AssignMentor'

function App() {

  return (
    <div className='min-h-screen bg-gray-700 min-w-screen'>
      <Routes>
        <Route exact path='/' element={<Mentors />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/assign' element={<AssignMentor />} />
        <Route exact path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
