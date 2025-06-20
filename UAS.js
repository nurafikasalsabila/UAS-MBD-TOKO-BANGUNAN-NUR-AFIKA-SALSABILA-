use TokoBangunanFika

//Key-Value dengan masing-masing 1 value
db.tokoInfo.insertMany([
{ key: "nama_toko", value: "Toko Bangunan Fika" },
{ key: "alamat", value: "Jalan Veteran No. 16 Korongana" },
{ key: "telepon", value: "082398049437" },
{ key: "jam_operasional", value: "10:00 - 04:00" },
{ key: "pemilik", value: "Mbak Fika" }
]); 

//key-value dengan value berupa array
db.tokoInfo.insertMany([
{ key: "kategori_produk", value: ["Bahan Bangunan", "Cat", "Peralatan"] },
{ key: "produk_populer", value: ["Semen Tiga Roda", "Cat Dulux", "Keramik 40x40"] }
]) 

//key-value dengan value berupa objek
db.tokoInfo.insertMany([
{
    key: "info_supplier",
    value: { 
    nama: "CV Sumber Jaya",
    kontak: "081234567890",
    alamat: "Jalan Industri No. 45, Jakarta",
    email: "supplier@sumberjaya.com" }
},
{
    key: "promo_terbaru",
    value: {
    nama_promo: "Diskon Lebaran",
    produk: "Keramik 40x40",
    diskon: "10%",
    berlaku_hingga: "2025-06-30" }
},
{
    key: "data_karyawan",
    value: {
    nama: "Rudy",
    jabatan: "Kasir",
    nomor_pegawai: "KSR001",
    kontak: "081345678912" }
}
]);

//wide column
db.wideColumnToko.insertMany([
    { 
        id: 1, 
        nama: "Semen Tiga Roda", 
        kategori: "Bahan Bangunan", 
        harga: 50000, 
        stok: 100, 
        supplier: "CV Sumber Jaya", 
        berat: "50 kg", 
        diskon: 5 
    },
    { 
        id: 2, 
        nama: "Cat Dulux", 
        kategori: "Cat", 
        harga: 75000, 
        stok: 50, 
        supplier: "PT Warna Abadi", 
        warna: "Putih", 
        volume: "5 Liter", 
        diskon: 10 
    },
    { 
        id: 3, 
        nama: "Paku 2 Inch", 
        kategori: "Peralatan", 
        harga: 1000, 
        stok: 1000, 
        supplier: "UD Baja Sejati", 
        jenis: "Besi", 
        berat: "100 gram" 
    },
    { 
        id: 4, 
        nama: "Keramik 40x40", 
        kategori: "Keramik", 
        harga: 50000, 
        stok: 200, 
        supplier: "PT Indah Keramik", 
        ukuran: "40x40 cm", 
        motif: "Marmer" 
    },
    { 
        id: 5, 
        nama: "Pasir Halus", 
        kategori: "Bahan Bangunan", 
        harga: 120000, 
        stok: 30, 
        supplier: "UD Pasir Nusantara", 
        berat: "1 kubik" 
    },
    { 
        id: 6, 
        nama: "Kayu Balok", 
        kategori: "Kayu", 
        harga: 30000, 
        stok: 500, 
        supplier: "CV Kayu Lestari", 
        jenis: "Balok", 
        panjang: "3 meter" 
    },
    { 
        id: 7, 
        nama: "Pintu Kayu Jati", 
        kategori: "Peralatan", 
        harga: 1500000, 
        stok: 10, 
        supplier: "PT Mebel Nusantara", 
        bahan: "Kayu Jati", 
        ukuran: "80x200 cm" 
    },
    { 
        id: 8, 
        nama: "Kawat Duri", 
        kategori: "Keamanan", 
        harga: 50000, 
        stok: 300, 
        supplier: "PT Baja Prima", 
        panjang: "10 meter", 
        ketebalan: "3 mm" 
    },
    { 
        id: 9, 
        nama: "Tangga Aluminium", 
        kategori: "Peralatan", 
        harga: 250000, 
        stok: 20, 
        supplier: "UD Perkakas Modern", 
        bahan: "Aluminium", 
        tinggi: "2 meter" 
    },
    { 
        id: 10, 
        nama: "Pipa PVC", 
        kategori: "Sanitasi", 
        harga: 20000, 
        stok: 500, 
        supplier: "PT Plastik Makmur", 
        ukuran: "3 inch", 
        panjang: "4 meter" 
    }
]);