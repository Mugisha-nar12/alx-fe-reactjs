import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <Outlet />
    </div>
  );
}

export default App;