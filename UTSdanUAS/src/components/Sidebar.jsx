import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/barang-masuk">Barang Masuk</Link></li>
        <li><Link to="/proyek">Proyek</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;