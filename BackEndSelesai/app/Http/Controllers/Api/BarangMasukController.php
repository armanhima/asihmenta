<?php

namespace App\Http\Controllers\Api;

use App\Models\BarangMasuk;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BarangMasukController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'nama_barang' => 'required|string',
        'jumlah' => 'required|integer',
        'tanggal_masuk' => 'required|date',
    ]);

    $barang = BarangMasuk::create($validated);

    return response()->json($barang, 201);
}

public function update(Request $request, $id)
{
    $validated = $request->validate([
        'nama_barang' => 'required|string',
        'jumlah' => 'required|integer',
        'tanggal_masuk' => 'required|date',
    ]);

    $barang = BarangMasuk::findOrFail($id);
    $barang->update($validated);

    return response()->json($barang);
}

public function destroy($id)
{
    $barang = BarangMasuk::findOrFail($id);
    $barang->delete();

    return response()->json(['message' => 'Data berhasil dihapus']);
}


public function index()
{
    return response()->json(\App\Models\BarangMasuk::all());
}



}


