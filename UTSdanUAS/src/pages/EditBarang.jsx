import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditBarang() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama_barang: '',
    jumlah: '',
    tanggal_masuk: ''
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/barang-masuk/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/barang-masuk/${id}`, form)
      .then(() => {
        alert('Data berhasil diupdate');
        navigate('/barang-masuk');
      })
      .catch(err => {
        console.error(err);
        alert('Gagal update data');
      });
  };

  return (
    <div>
      <h2>Edit Barang Masuk</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nama_barang" value={form.nama_barang} onChange={handleChange} required />
        <input type="number" name="jumlah" value={form.jumlah} onChange={handleChange} required />
        <input type="date" name="tanggal_masuk" value={form.tanggal_masuk} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBarang;