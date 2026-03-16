import './App.css'
// import {asteroiDevLogo} from './utils/images.ts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/router";

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App