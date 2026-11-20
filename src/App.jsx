import React from 'react'
import Task22Oct from './Pages/Task22Oct'
import Task23Oct from './Pages/Task23Oct'
import Task24Oct from './Pages/Task24Oct'
import Task26Oct from './Pages/Task26Oct'
import AppRoutes from './routes/AppRoutes'
import Task29Oct from './Pages/Task29Oct'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar'
import Task17Nov from './Pages/Task17Nov'
import CounterScreen from './Pages/CounterScreen'
import Task20Nov from './Pages/Task20Nov'

const App = () => {
  return (
    <div>
     
      {/* <Task26Oct/> */}
      {/* <AppRoutes/> */}
      {/* <UserProvider>
      <Task29Oct/>
      </UserProvider> */}
      {/* <Task17Nov/> */}
      <CounterScreen/>
      <Task20Nov/>
    </div>
  )
}

export default App
