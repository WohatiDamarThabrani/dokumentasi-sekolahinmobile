import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Sekolahin Mobile',
  description: 'Panduan pengguna aplikasi',
  themeConfig: {
    logo: '/logo.jpeg',
    nav: [
      { text: 'Beranda', link: '/' },
      {
        text: 'Role',
        items: [
          { text: 'Wali Murid', link: '/roles/wali-murid' },
          { text: 'Admin', link: '/roles/admin' },
          { text: 'Guru', link: '/roles/guru' },
          { text: 'Siswa', link: '/roles/siswa' }
        ]
      }
    ],
    sidebar: {
      '/roles/wali-murid': [
        {
          text: 'Wali Murid',
          items: [
            { text: 'Ringkasan', link: '/roles/wali-murid' },
            { text: 'Dashboard', link: '/roles/wali-murid/dashboard' },
            { text: 'Notifikasi', link: '/roles/wali-murid/notifikasi' },
            { text: 'Kabar Sekolah', link: '/roles/wali-murid/kabar-sekolah' },
            { text: 'Ajukan Izin', link: '/roles/wali-murid/ajukan-izin' },
            { text: 'Kehadiran', link: '/roles/wali-murid/kehadiran' },
            { text: 'Jadwal', link: '/roles/wali-murid/jadwal' },
            { text: 'Kartu Pelajar', link: '/roles/wali-murid/kartu-pelajar' },
            { text: 'Pesan Guru', link: '/roles/wali-murid/pesan-guru' },
            { text: 'Bayar SPP', link: '/roles/wali-murid/bayar-spp' },
            { text: 'Tugas', link: '/roles/wali-murid/tugas' },
            { text: 'Catatan Harian', link: '/roles/wali-murid/catatan-harian' },
            { text: 'Makan', link: '/roles/wali-murid/makan' },
            { text: 'Materi', link: '/roles/wali-murid/materi' },
            { text: 'Nilai', link: '/roles/wali-murid/nilai' },
            { text: 'Rapor', link: '/roles/wali-murid/rapor' }
          ]
        }
      ],
      '/roles/admin': [
        {
          text: 'Admin',
          items: [
            { text: 'Dasbor', link: '/roles/admin/dashboard' },
            { text: 'Siswa', link: '/roles/admin/siswa' },
            { text: 'Guru dan Staf', link: '/roles/admin/guru-dan-staf' },
            { text: 'Kelas dan Mapel', link: '/roles/admin/kelas-dan-mapel' },
            { text: 'Absensi', link: '/roles/admin/absensi' },
            { text: 'Keuangan', link: '/roles/admin/keuangan' },
            { text: 'Pengumuman', link: '/roles/admin/pengumuman' },
            { text: 'Persetujuan', link: '/roles/admin/persetujuan' },
            { text: 'Surat dan Disposisi', link: '/roles/admin/surat-dan-disposisi' }
          ]
        }
      ],
      '/roles/guru': [
        {
          text: 'Guru',
          items: [
            { text: 'Ringkasan', link: '/roles/guru' },
            { text: 'Dashboard', link: '/roles/guru/dashboard' },
            { text: 'Jadwal Mengajar', link: '/roles/guru/jadwal-mengajar' },
            { text: 'Materi', link: '/roles/guru/materi' },
            { text: 'Ceklis Hafalan', link: '/roles/guru/ceklis-hafalan' },
            { text: 'Monitoring', link: '/roles/guru/monitoring' },
            { text: 'Catat Poin', link: '/roles/guru/catat-poin' },
            { text: 'Presensi Saya', link: '/roles/guru/presensi-saya' },
            { text: 'Slip dan Cuti', link: '/roles/guru/slip-dan-cuti' },
            { text: 'Disposisi', link: '/roles/guru/disposisi' },
            { text: 'Ekskul', link: '/roles/guru/ekskul' },
            { text: 'Input Nilai', link: '/roles/guru/input-nilai' },
            { text: 'Pengumuman', link: '/roles/guru/pengumuman' },
            { text: 'Kalender', link: '/roles/guru/kalender' },
            { text: 'Tugas', link: '/roles/guru/tugas' },
            { text: 'Pesan', link: '/roles/guru/pesan' }
          ]
        }
      ],
      '/roles/siswa': [
        {
          text: 'Siswa',
          items: [
            { text: 'Ringkasan', link: '/roles/siswa' },
            { text: 'Dashboard', link: '/roles/siswa/dashboard' },
            { text: 'Tugas', link: '/roles/siswa/tugas' },
            { text: 'Ujian', link: '/roles/siswa/ujian' },
            { text: 'Kartu Pelajar', link: '/roles/siswa/kartu-pelajar' },
            { text: 'Jadwal', link: '/roles/siswa/jadwal-pelajaran' },
            { text: 'Pengumuman', link: '/roles/siswa/pengumuman' },
            { text: 'Nilai', link: '/roles/siswa/nilai' },
            { text: 'Materi', link: '/roles/siswa/materi' },
            { text: 'Rapor', link: '/roles/siswa/rapor' },
            { text: 'Kalender', link: '/roles/siswa/kalender' },
            { text: 'Lapor BK', link: '/roles/siswa/lapor-bk' }
          ]
        }
      ]
    }
  }
})
