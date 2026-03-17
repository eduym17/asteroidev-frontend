import './App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from "./router/router";

function App() {

  return (
    // <BrowserRouter>
    <HashRouter>
      <AppRouter />
    </HashRouter>
    // </BrowserRouter>
  )
}

export default App