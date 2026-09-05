# SRS — CppForge
Software Requirements Specification

## 1. Pendahuluan

### 1.1 Tujuan
Dokumen ini merinci kebutuhan fungsional dan non-fungsional sistem CppForge sebagai acuan teknis untuk development pasca-refaktor MVP v1.

### 1.2 Definisi Istilah
- **Dunia / Modul**: Kelompok kurikulum yang memuat sub-level berurutan.
- **Teori / Instruksi**: Halaman rute (`/theory`) yang menyajikan materi dengan perenderan Terminal Markdown.
- **Practice**: Halaman rute (`/practice`) khusus untuk memecahkan *challenge* dengan Monaco Editor.
- **Piston Mock Simulator**: Backend *route handler* pengganti Piston publik yang melakukan simulasi eksekusi terminal di layar klien.

## 2. Deskripsi Umum Sistem
CppForge adalah aplikasi edukasi berbasis web (Next.js App Router). Sistem dipisah secara antarmuka antara Teori dan Praktik untuk mengurangi kelebihan beban kognitif pada layar *mobile*. Arsitektur sepenuhnya menggunakan Tailwind v4 CSS-first dengan desain estetika *Dark Tech*.

## 3. Functional Requirements

### 3.1 Autentikasi (Auth)
- FR-1: Login/Register di-handle oleh NextAuth v5 (konfigurasi dasar terpasang dengan `trustHost`).
- FR-2: Seluruh properti sesi terikat dengan tabel `User` dari skema Prisma.

### 3.2 Skill Tree & Progres
- FR-3: Skill tree merender komponen *Bento Grid* berorientasi vertikal, tidak lagi dengan bentuk *S-Curve*.
- FR-4: Modul/Level dicegah (pointer-events-none / visual buram abu-abu) apabila progres user di database belum mencapai syaratnya.

### 3.3 Lesson & Code Playground
- FR-5: Navigasi level dibagi menjadi `/lesson/[id]/theory` (untuk membaca instruksi) dan `/lesson/[id]/practice` (untuk mengetikkan kode).
- FR-6: Di dalam Practice, terdapat panel "Target Misi" dan "Sistem Dekripsi Hint".
- FR-7: Code Editor menggunakan `@monaco-editor/react`.
- FR-8: Tombol eksekusi "Run Code" ("Jalankan") mengirimkan payload ke `/api/execute` yang mensimulasikan hasil kompilasi GCC lokal (Merespons status 1 / 0, stdout).

### 3.4 Gamifikasi & Dashboard Telemetri
- FR-9: Sistem menyediakan XP dan mata uang koin yang dinamis melalui Hook di UI Practice.
- FR-10: *Dashboard Telemetry* menampilkan komponen Kartu Pengguna, Streak Api (*Active Streak*), dan Lencana Pencapaian (*Unlocked Achievements*).
- FR-11: Klik pada kartu Lencana membuka *Modal Share Achievement* (dihasilkan melalui `html-to-image`) yang menangkap resolusi piksel 3x untuk diunggah ke X/LinkedIn.

## 4. Non-Functional Requirements
- NFR-1 (UI Aesthetics): Gaya UI wajib menggunakan aturan yang ada pada `DESIGN.md` (Hitam/Seng, Border 1px `zinc-800`, tanpa Emoji murni/harus SVG).
- NFR-2 (Usability): Pada viewport *mobile* (<1024px), panel Editor dan Target Misi pada layar *Practice* tidak ditampilkan tumpang tindih, tetapi memanfaatkan fungsi `setMobileView` layaknya tab iOS.
- NFR-3 (Robustness): Ekstensi browser tidak boleh menghancurkan render React. Tag `<div suppressHydrationWarning>` disematkan pada setiap komponen *Wrapper Layout* utama.

## 5. Model Data (Prisma PostgreSQL)
Tidak ada perubahan dari model MVP awal:
`User`, `Account`, `Session`, `World`, `Level`, `Hint`, `UserProgress`, `Badge`, `UserBadge`, `BossAttempt`.

## 6. Antarmuka Eksternal
- **Vercel Cloud**: Serverless backend hosting, `node` runtimes.
- **Neon PostgreSQL**: Database *Connection Pool*.
- (Dihapus) *Piston API Publik: Diabaikan karena pembatasan Whitelist*.
