import Header from './header'
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
