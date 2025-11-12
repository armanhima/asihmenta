// src/components/organisms/FormBarang.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

function FormBarang() {
  const [form, setForm] = useState({
    nama_barang: "",
    jumlah: "",
    tanggal_masuk: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/barang-masuk", form);
    navigate("/barang-masuk");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormField
        label="Nama Barang"
        name="nama_barang"
        type="text"
        value={form.nama_barang}
        onChange={handleChange}
      />
      <FormField
        label="Jumlah"
        name="jumlah"
        type="number"
        value={form.jumlah}
        onChange={handleChange}
      />
      <FormField
        label="Tanggal Masuk"
        name="tanggal_masuk"
        type="date"
        value={form.tanggal_masuk}
        onChange={handleChange}
      />
      <Button type="submit">Simpan</Button>
    </form>
  );
}

export default FormBarang;