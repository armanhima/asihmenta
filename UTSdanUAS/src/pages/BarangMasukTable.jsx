import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BarangMasukTable.css';
import { FaPlus } from 'react-icons/fa';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

function BarangMasukTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/barang-masuk')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = (id) => {
  navigate(`/edit-barang/${id}`);
};

const handleDelete = (id) => {
  if (confirm('Yakin ingin menghapus data ini?')) {
    axios.delete(`http://127.0.0.1:8000/api/barang-masuk/${id}`)
      .then(() => {
        alert('Data berhasil dihapus');
        setData(data.filter(item => item.id !== id));
      })
      .catch(err => {
        console.error(err);
        alert('Gagal menghapus data');
      });
  }
};


  const handleTambahClick = () => {
    navigate('/form-barang');
  };

const [searchNama, setSearchNama] = useState('');
const [searchTanggal, setSearchTanggal] = useState('');

const filteredData = data.filter(item => {
  const cocokNama = item.nama_barang.toLowerCase().includes(searchNama.toLowerCase());
  const cocokTanggal = searchTanggal === '' || item.tanggal_masuk === searchTanggal;
  return cocokNama && cocokTanggal;
});

  return (
    
    <div className="table-container">
  <div className="header-bar">
    <h2>Data Barang Masuk</h2>
    <button className="tambah-button" onClick={handleTambahClick}>
    <FaPlus style={{ marginRight: '6px' }} />

    Tambah Data
    </button>
      </div>

   <div className="filter-bar">
  <div className="filter-group">
    <FaSearch className="icon" />
    <input
      type="text"
      placeholder="Cari nama barang..."
      value={searchNama}
      onChange={(e) => setSearchNama(e.target.value)}
    />
  </div>
  <div className="filter-group">
    <FaCalendarAlt className="icon" />
    <input
      type="date"
      value={searchTanggal}
      onChange={(e) => setSearchTanggal(e.target.value)}
    />
  </div>
</div>
 
 
{(searchNama !== "" || searchTanggal !== "") ? (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama Barang</th>
        <th>Jumlah</th>
        <th>Tanggal Masuk</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.map((barang) => (
        <tr key={barang.id}>
          <td>{barang.id}</td>
          <td>{barang.nama_barang}</td>
          <td>{barang.jumlah}</td>
          <td>{barang.tanggal_masuk}</td>
           <td>
                <button onClick={() => handleEdit(barang.id)}>Edit</button>
                <button onClick={() => handleDelete(barang.id)}>Hapus</button>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>Silakan masukkan nama barang atau tanggal untuk melihat data.</p>
)}


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Tanggal Masuk</th>
          </tr>
        </thead>
        <tbody>
          {data.map((barang) => (
            <tr key={barang.id}>
              <td>{barang.id}</td>
              <td>{barang.nama_barang}</td>
              <td>{barang.jumlah}</td>
              <td>{barang.tanggal_masuk}</td>
            <td>
                <button onClick={() => handleEdit(barang.id)}>Edit</button>
                <button onClick={() => handleDelete(barang.id)}>Hapus</button>
            </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BarangMasukTable;