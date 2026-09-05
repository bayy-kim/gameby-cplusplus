# PRD — GAMEBY_C++
Product Requirements Document

## 1. Ringkasan Produk
GAMEBY_C++ adalah web app berbentuk game edukasi untuk belajar bahasa pemrograman C++, disusun sebagai skill tree bertahap dari pemula sampai expert. Pengguna belajar lewat lesson singkat, langsung praktik di code playground yang bisa dijalankan beneran di browser, lalu naik level lewat sistem XP, currency, badge, dan boss battle.

## 2. Latar Belakang & Masalah
Materi belajar C++ yang ada kebanyakan berbentuk artikel/video panjang atau course formal yang berat dan gampang bikin bosan/berhenti di tengah jalan. GAMEBY_C++ menjawab ini dengan memecah materi jadi level-level kecil, langsung praktik, dan dibungkus mekanik game supaya orang betah dan balik lagi tiap hari.

## 3. Target Pengguna
- Pemula yang baru mulai belajar programming (siswa/mahasiswa, self-taught).
- Audiens dari channel konten kamu (TikTok/YouTube) yang mau belajar coding dengan cara yang related sama gaya konten kamu.
- Programmer yang sudah tahu bahasa lain dan mau pindah/nambah skill C++.

## 4. Tujuan & Metrik Sukses
- Completion rate: persentase user yang menyelesaikan minimal 1 Dunia penuh.
- Retention: persentase user yang punya streak ≥ 3 hari berturut-turut.
- Engagement: rata-rata level diselesaikan per sesi.
- Growth loop: jumlah kartu achievement yang di-share ke media sosial.

## 5. Fitur Utama & Prioritas

**Must have (MVP)**
- Skill tree interaktif 8 Dunia, node terkunci/terbuka sesuai progres.
- Halaman lesson: teori singkat + soal.
- Code playground dengan eksekusi C++ beneran (compile & run di browser).
- Sistem XP, level user, dan progress tersimpan per akun (login).
- Boss battle di akhir tiap Dunia.
- Dashboard progress (XP, streak, badge).

**Should have**
- Mata uang dalam game "SyntaxCoin" untuk buka hint/skin editor.
- Badge/achievement dengan kartu yang bisa di-share.
- Hint bertingkat (3 level) di tiap soal.
- Streak harian dengan reminder.

**Could have (fase berikutnya)**
- Karakter pemandu Ciko & Bonbon sebagai maskot penjelas teori dan pemberi tantangan.
- Leaderboard mingguan.
- Mode freemium (sebagian Dunia expert berbayar).

## 6. Struktur Skill Tree
4 tingkat kesulitan (Pemula, Menengah, Mahir, Expert), 8 Dunia, ±26 level total. Rincian lengkap topik per Dunia ada di dokumen rencana awal (`rencana-game-belajar-cpp.md`) — tidak diulang di sini supaya PRD ini fokus ke requirement, bukan konten materi.

## 7. Gamifikasi & CTA
Ringkasan mekanik: XP & level, SyntaxCoin, badge, streak harian, boss battle per Dunia, hint bertingkat. CTA utama: "Mulai Petualangan Coding-mu", "Lanjut ke Tantangan Berikutnya", "Hadapi Boss Debug", "Bagikan pencapaianmu". Detail lengkap di dokumen rencana awal.

## 8. Arah Desain
UI bergaya **claymorphism** — elemen terasa empuk/3D dengan shadow ganda (outer soft shadow + inner highlight), sudut membulat besar (16-24px), tombol terasa "bisa ditekan". Palet warna modern (lihat SRS bagian desain sistem untuk kode warna). Mobile-first.

## 9. Monetisasi (Catatan, Bukan Prioritas Sekarang)
Belum jadi fokus MVP. Opsi masa depan: freemium (Dunia 7-8 expert berbayar), atau donasi/dukungan lewat link TikTok.

## 10. Di Luar Cakupan (MVP)
- Multiplayer/kompetisi real-time antar user.
- Bahasa pemrograman selain C++.
- Aplikasi native mobile (fokus web app dulu).

## 11. Risiko & Asumsi
- Asumsi: layanan eksekusi kode eksternal (Piston/Judge0) cukup stabil dan gratis/murah untuk skala awal.
- Risiko: kalau traffic naik, kuota API eksekusi kode bisa jadi bottleneck biaya — perlu dicek limitnya sebelum launch.
- Asumsi: user mengakses lewat HP (mobile-first), jadi code playground harus tetap nyaman dipakai di layar kecil.
