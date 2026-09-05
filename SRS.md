# SRS — GAMEBY_C++
Software Requirements Specification

## 1. Pendahuluan

### 1.1 Tujuan
Dokumen ini merinci kebutuhan fungsional dan non-fungsional sistem GAMEBY_C++ sebagai acuan teknis untuk development (dipakai bareng dengan prompt build di `prompt-opencode-GAMEBY_CPP.md`).

### 1.2 Definisi Istilah
- **Dunia**: kelompok besar materi (setara "world" dalam game), berisi beberapa level.
- **Level**: satu unit lesson + soal/tantangan.
- **SyntaxCoin**: mata uang dalam game.
- **Boss Battle**: tantangan debug kode berbatas waktu di akhir tiap Dunia.

## 2. Deskripsi Umum Sistem
GAMEBY_C++ adalah aplikasi web (Next.js) yang diakses lewat browser desktop maupun mobile, dengan akun pengguna untuk menyimpan progres. Sistem terdiri dari: modul autentikasi, modul skill tree & progres, modul lesson & code playground (terhubung ke layanan eksekusi kode eksternal), modul gamifikasi (XP/currency/badge/streak), dan dashboard.

## 3. Functional Requirements

### 3.1 Autentikasi (Auth)
- FR-1: Sistem menyediakan login/register (NextAuth v5), minimal via email atau OAuth provider.
- FR-2: Sistem menyimpan sesi user dan mengaitkan seluruh progres ke akun tersebut.

### 3.2 Skill Tree & Progres
- FR-3: Sistem menampilkan peta skill tree berisi 8 Dunia dan level di dalamnya.
- FR-4: Node/level terkunci sampai prasyaratnya (level sebelumnya) selesai.
- FR-5: Sistem menandai visual node yang sudah selesai, sedang dikerjakan, dan masih terkunci.
- FR-6: Progres tiap user tersimpan persisten di database dan dimuat ulang saat login dari device lain.

### 3.3 Lesson & Code Playground
- FR-7: Tiap level menampilkan materi singkat sebelum soal/tantangan.
- FR-8: Sistem menyediakan code editor (Monaco Editor) dengan syntax highlighting C++.
- FR-9: Sistem dapat mengirim kode user ke layanan eksekusi eksternal (Piston API/Judge0) dan menampilkan hasil output atau error.
- FR-10: Sistem memvalidasi apakah output sesuai jawaban yang diharapkan, lalu memberi status lulus/gagal.
- FR-11: Sistem menyediakan hint bertingkat (3 level) yang bisa dibuka satu per satu oleh user.

### 3.4 Gamifikasi
- FR-12: Sistem memberi XP setiap level yang berhasil diselesaikan.
- FR-13: Sistem memberi SyntaxCoin yang bisa dipakai untuk membuka hint tambahan atau kustomisasi tema editor.
- FR-14: Sistem memicu Boss Battle (tantangan debug berbatas waktu) di akhir tiap Dunia sebelum Dunia berikutnya terbuka.
- FR-15: Sistem memberi badge/achievement otomatis saat syarat tertentu terpenuhi (contoh: selesai satu Dunia, streak 7 hari).
- FR-16: Sistem mencatat streak harian berdasarkan aktivitas login/menyelesaikan level.

### 3.5 Dashboard & Share
- FR-17: Sistem menampilkan dashboard berisi XP total, level user, streak, dan daftar badge yang dimiliki.
- FR-18: Sistem dapat membuat kartu achievement (gambar) yang bisa diunduh/dibagikan saat user mendapat badge atau naik level besar.

## 4. Non-Functional Requirements
- NFR-1 (Performance): halaman lesson dan hasil eksekusi kode tampil dalam ≤ 3 detik pada koneksi mobile standar.
- NFR-2 (Usability): seluruh alur inti (login → pilih level → kerjakan → dapat hasil) bisa dilakukan dengan satu tangan di layar HP, target minimum touch 44×44px.
- NFR-3 (Security): tidak ada secret/API key yang ter-hardcode di kode sisi client; kredensial eksekusi kode disimpan di environment variable server.
- NFR-4 (Compatibility): berjalan baik di browser mobile utama (Chrome Android, Safari iOS) dan desktop modern.
- NFR-5 (Scalability): skema database dirancang agar mudah menambah Dunia/level baru tanpa migrasi besar (level & konten disimpan sebagai data, bukan hardcode di komponen).
- NFR-6 (Availability): kegagalan layanan eksekusi kode eksternal ditangani dengan pesan error yang jelas, tidak membuat halaman crash.

## 5. Model Data (Garis Besar)
Entitas utama (Prisma schema):
- `User` — id, email, xp, syntaxCoin, currentStreak, createdAt.
- `World` (Dunia) — id, title, order, difficultyTier.
- `Level` — id, worldId, title, content, expectedOutput, order.
- `UserProgress` — userId, levelId, status (locked/in_progress/completed), completedAt.
- `Badge` — id, name, description, criteria.
- `UserBadge` — userId, badgeId, earnedAt.
- `BossAttempt` — userId, worldId, passed, attemptedAt.

## 6. Antarmuka Eksternal
- **Piston API / Judge0 API**: menerima kode C++ dan input, mengembalikan stdout/stderr/exit code. Dipanggil dari server-side (route handler Next.js), bukan langsung dari client, untuk menghindari expose endpoint/kredensial.
- **NextAuth v5 Provider**: email/password atau OAuth (Google) untuk login.

## 7. Arsitektur Sistem (Garis Besar)
- Frontend & backend: Next.js App Router (satu codebase, route handler untuk API internal).
- Database: Prisma ORM + Neon (PostgreSQL).
- Auth: NextAuth v5, `trustHost: true` (deploy di Vercel).
- Hosting: Vercel, team ID `team_tbgZxv4K2WYJ9ERvprAqi7Ke`.
- Eksekusi kode: request server-side ke Piston API/Judge0.

## 8. Alur Pengguna Utama (User Flow)
1. User membuka app → landing page dengan CTA "Mulai Petualangan Coding-mu".
2. Register/login.
3. Diarahkan ke skill tree, node Dunia 1 Level 1 terbuka.
4. Pilih level → baca materi singkat → kerjakan soal di code playground.
5. Run kode → sistem cek hasil → jika benar, dapat XP + SyntaxCoin, level berikutnya terbuka.
6. Setelah level terakhir dalam satu Dunia selesai → Boss Battle → jika lulus, Dunia berikutnya terbuka.
7. Dashboard menampilkan progres kapan saja; badge baru memicu popup share ke media sosial.

## 9. Desain Sistem — Claymorphism
- Sudut membulat besar: 16-24px pada card, 12-16px pada tombol/input.
- Shadow ganda: outer soft shadow (blur besar, offset ke bawah-kanan) + inner highlight tipis di sisi atas-kiri untuk kesan "empuk"/3D.
- Tombol punya efek tekan (scale turun sedikit + shadow mengecil saat diklik).
- Palet warna (dipilih Claude, tema modern-playful):
  - Base/background: `#F5F1EC` (krem hangat) — mode terang; `#2B2733` (plum gelap lembut) — mode gelap.
  - Primary (skill tree, elemen utama): `#7C6FE0` (violet modern).
  - Secondary (XP/positif/berhasil): `#4FBF9F` (mint teal).
  - Accent (CTA/tombol aksi): `#FF7A59` (coral-oranye).
  - Warning/Boss Battle: `#FFB648` (amber hangat).
  - Teks utama: `#3A3530` (abu hangat, bukan hitam pekat, supaya tetap terasa lembut khas claymorphism).
- Mobile-first, dengan card dan tombol yang cukup besar untuk disentuh nyaman satu tangan.
