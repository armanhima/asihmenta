import { useState } from 'react';
import axios from 'axios';
import './BarangMasukTable.css';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';


function FormBarang() {
  const [form, setForm] = useState({
    nama_barang: '',
    jumlah: '',
    tanggal_masuk: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
   axios.post('http://127.0.0.1:8000/api/barang-masuk', form)
      .then(res => {
        alert('Data berhasil disimpan!');
        setForm({ nama_barang: '', jumlah: '', tanggal_masuk: '' });
      })
      .catch(err => {
        console.error(err);
        alert('Gagal menyimpan data.');
      });
  };
   const navigate = useNavigate();

const handleTambahClick = () => {
  navigate('/barang-masuk');
};


  return (
    <div>
      <h2>Tambah Barang Masuk</h2>
      
      <button className="tambah-button" onClick={handleTambahClick}>
    <FaArrowLeft style={{ marginRight: '6px' }} />
Kembali

    Kembali
    </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama_barang"
          placeholder="Nama Barang"
          value={form.nama_barang}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="jumlah"
          placeholder="Jumlah"
          value={form.jumlah}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="tanggal_masuk"
          value={form.tanggal_masuk}
          onChange={handleChange}
          required
        />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default FormBarang;