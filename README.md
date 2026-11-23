# Template Dokumentasi 2 Role

Template VitePress yang terpisah dari dokumentasi Alumetri. Salin folder ini
ke lokasi proyek dokumentasi baru, lalu sesuaikan nama role dan modul.

## Mulai

Jalankan perintah berikut dari root repository:

```bash
cd template-dokumentasi-2-role
npm install
npm run docs:dev
```

Build dokumentasi dari root repository:

```bash
cd template-dokumentasi-2-role
npm run docs:build
```

## Sesuaikan template

1. Ganti `role-1`, `role-2`, `guru`, dan `siswa` dengan nama role dalam format
   slug, misalnya `wali-murid`, `administrator`, `guru`, dan `siswa`.
2. Ubah nama role, deskripsi, dan tautan pada `docs/index.md`,
   `docs/roles/role-1.md`, `docs/roles/role-2.md`, `docs/roles/guru.md`,
   `docs/roles/siswa.md`, serta `.vitepress/config.mts`.
3. Ganti atau duplikasi `dashboard.md` dan `modul-1.md` sesuai fitur aplikasi.
   Pastikan tautan sidebar dan tautan antarhalaman ikut diperbarui.
4. Simpan screenshot di `docs/public/images/<slug-role>/<slug-modul>/`, lalu
   rujuk dari Markdown dengan URL seperti `/images/role-1/dashboard/contoh.png`.

## Struktur

```text
template-dokumentasi-2-role/
├── .vitepress/
│   └── config.mts
├── docs/
│   ├── index.md
│   ├── roles/
│   │   ├── role-1.md
│   │   ├── role-1/
│   │   │   ├── dashboard.md
│   │   │   └── modul-1.md
│   │   ├── role-2.md
│   │   ├── role-2/
│   │   │   ├── dashboard.md
│   │   │   └── modul-1.md
│   │   ├── guru.md
│   │   ├── guru/
│   │   │   ├── dashboard.md
│   │   │   ├── jadwal-mengajar.md
│   │   │   └── kelas-dan-tugas.md
│   │   ├── siswa.md
│   │   └── siswa/
│   │       ├── dashboard.md
│   │       ├── jadwal-pelajaran.md
│   │       └── nilai-dan-absensi.md
│   └── public/
│       └── images/
│           ├── role-1/
│           │   ├── dashboard/
│           │   └── modul-1/
│           ├── role-2/
│           │   ├── dashboard/
│           │   └── modul-1/
│           ├── guru/
│           │   ├── dashboard/
│           │   └── jadwal-mengajar/
│           └── siswa/
│               ├── dashboard/
│               └── jadwal-pelajaran/
└── package.json
```
