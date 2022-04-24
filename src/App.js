import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Results from './pages/Results';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}
