import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './App.css';
import { useState } from 'react';
import FormBarang from './components/organisms/FormBarang';
import BarangMasukTable from './pages/BarangMasukTable';
import EditBarang from './pages/EditBarang';



function App() {
  const [darkMode, setDarkMode] = useState(false);  
  return (
    <Router>
  <div className={darkMode ? 'dark' : 'light'}>
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-barang" element={<FormBarang />} />
          <Route path="/barang-masuk" element={<BarangMasukTable />} />
          <Route path="/form-barang" element={<FormBarang />} />
          <Route path="/edit-barang/:id" element={<EditBarang />} />

        </Routes>
      </div>
    </div>
  </div>
</Router>
  );
}


export default App;