import './App.css'
import Home from './pages/Index'
import { GlobalContext } from './context'

function App() {
  const user = {
    username: 'mhadzakaria'
  }
  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
