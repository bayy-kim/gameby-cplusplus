# CppForge

<div align="center">
  <p><strong>Platform edukasi C++ modern bergaya gamifikasi dan interaktif, berjalan langsung di *browser* Anda.</strong></p>
</div>

![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

CppForge memecahkan kebosanan belajar C++ melalui *micro-learning* interaktif berbasis *Skill Tree*. Pelajari standar **C++20/23** terbaik (`std::ranges`, `std::make_unique`, *Designated Initializers*, dll) dan praktikkan langsung di *Code Playground* dengan simulasi terminal yang otentik.

## Fitur Utama

- 🗺️ **Peta Skill Tree Interaktif**: 8 Dunia terstruktur dari Fondasi hingga Arsitektur OOP dan Memori.
- 💻 **Terminal Eksekutor Bawaan**: Membaca dan meniru (*mock*) keluaran kompilator secara instan.
- ⚔️ **Boss Battles**: Tantangan berbatas waktu untuk menemukan *bug* dan kebocoran memori.
- 🏆 **Sistem Pencapaian (Gamifikasi)**: Kumpulkan XP, SyntaxCoin, dan *Badge* eksklusif.
- 🎨 **Desain Dark Tech Minimalist**: UI premium berkelas *Developer Tool*, ramah mata (*Dark Mode* pekat) dengan sentuhan neon.
- 📱 **Mobile-First Optimizations**: Pemisahan mode `Teori` dan `Editor` membuat *koding* di ponsel pintar (*smartphone*) tidak lagi mustahil.

## Tech Stack

Proyek ini dibangun menggunakan arsitektur modern:
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4.
- **Backend & Database**: Prisma ORM, PostgreSQL (via Neon).
- **Animasi & Ikon**: Framer Motion (`motion/react`), Lucide React.
- **Komponen Ekstra**: `@monaco-editor/react` (untuk *Editor*), `react-markdown` (untuk *Cheat Sheet/Teori*), dan `html-to-image` (untuk fitur bagikan kartu lencana).

## Instalasi & Menjalankan Lokal

Jika Anda ingin mencoba menjalankan atau memodifikasi CppForge di mesin lokal Anda:

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (Versi 18 atau ke atas)
- Instance PostgreSQL (atau ganti *provider* di `schema.prisma` ke `sqlite`)

### 2. Kloning Repositori
\`\`\`bash
git clone https://github.com/bayy-kim/gameby-cplusplus.git
cd gameby-cplusplus
\`\`\`

### 3. Instalasi Dependensi
\`\`\`bash
npm install
\`\`\`

### 4. Konfigurasi Environment Variables
Buat file \`.env\` di direktori *root*, lalu isi dengan:
\`\`\`env
# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5432/namadatabase"

# NextAuth v5 Configuration (Ganti secret-nya)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_super_secret_key"
AUTH_TRUST_HOST="true"

# (Optional) Eksekutor Piston API jika punya instance publik/lokal sendiri
PISTON_API_URL="https://emkc.org/api/v2/piston"
\`\`\`

### 5. Inisialisasi & Seed Database
Lakukan sinkronisasi skema ke database dan masukkan materi kurikulum *default*:
\`\`\`bash
npx prisma db push
npm run db:seed
\`\`\`

### 6. Jalankan Server Dev
\`\`\`bash
npm run dev
\`\`\`
Buka [http://localhost:3000](http://localhost:3000) pada peramban web Anda.

## Struktur Folder Utama

\`\`\`
src/
├── app/                  # Rute Halaman (App Router Next.js)
│   ├── dashboard/        # Halaman Profil/Statistik Pengguna
│   ├── docs/             # Halaman Cheat Sheet / Dokumentasi
│   ├── lesson/           # Dinamik route materi per level
│   │   └── [id]/         
│   │       ├── practice/ # Layar Code Editor (Monaco)
│   │       └── theory/   # Layar Teori (Markdown)
│   └── api/              # Route Handler API (Simulasi Eksekusi Piston dll)
├── components/           # Komponen React (SkillTree, Navbar, dll)
└── lib/                  # Konfigurasi Prisma dan Seed Data (Kurikulum C++)
\`\`\`

## Berkontribusi

Bantuan untuk menambahkan tantangan (level) C++ baru di `src/lib/seedData.ts` sangat diharapkan! 
Silakan di *fork* dan ajukan *Pull Request* (*PR*).

## Lisensi

[MIT License](LICENSE)
