import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoute'

function App() {

  return (
    // <>
    //   <Button>Hello</Button>
    // </>
    <HashRouter>
      <AppRoutes/>
    </HashRouter>

  )
}

export default App
