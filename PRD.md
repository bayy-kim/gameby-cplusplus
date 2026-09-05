# PRD — CppForge
Product Requirements Document

## 1. Ringkasan Produk
CppForge adalah platform web aplikasi interaktif untuk mempelajari bahasa pemrograman C++, disusun sebagai kurikulum *skill tree* bertahap dari pemula sampai tingkat mahir (standar C++20/C++23). Pengguna belajar melalui materi bacaan bergaya dokumentasi developer, lalu langsung diuji di dalam *code playground* dengan mesin eksekusi terminal (*Piston Mock*). Terdapat sistem XP, mata uang (SyntaxCoin), dan tantangan berbatas waktu (*Boss Battle*).

## 2. Latar Belakang & Masalah
Materi belajar C++ yang ada di pasaran kebanyakan berupa video durasi panjang atau buku teks usang yang mengajarkan sintaks lama (C++98) dan membosankan. CppForge memecahkan ini dengan micro-learning interaktif, fokus pada *modern best practices* (seperti `std::make_unique` dan `ranges`), dibungkus dengan antarmuka yang sangat premium khas *developer tool* modern (Vercel-like/Dark Tech).

## 3. Target Pengguna
- Pemula yang baru mengenal logika pemrograman.
- Developer dari bahasa lain (Python, JS) yang ingin beralih/mempelajari C++ modern tanpa harus menginstal *compiler* kompleks di lokal.

## 4. Tujuan & Metrik Sukses
- Completion rate: Persentase penyelesaian minimal 1 modul lengkap.
- Praktik Modern: Pengguna tidak lagi memicu pesan peringatan "gaya lama" (seperti `new/delete` atau `std::endl`).
- Growth loop: Banyaknya profil/sertifikat (*Achievement Card*) yang dibagikan.

## 5. Fitur Utama & Prioritas

**Must have (MVP) - *Selesai***
- Peta Skill Tree interaktif berisi 8 Dunia/Modul.
- Arsitektur rute ganda: Halaman Teori (`/theory`) dan Halaman Praktik Terminal (`/practice`).
- Code Playground menggunakan Monaco Editor C++ dengan integrasi eksekusi simulasi *backend*.
- Sistem Progres DB (XP, Koin, Lencana/Badges).
- Boss Battle (Debug sintaks berbatas waktu).
- Dashboard Bento Grid Telemetri.

**Should have**
- Dokumentasi C++ terintegrasi (Cheat Sheet halaman `/docs`).
- Kartu Bagikan (Shareable Card) menggunakan `html-to-image` resolusi tinggi.

## 6. Struktur Kurikulum (C++ Modern)
Terdiri dari 8 Dunia (Pemula - Expert):
1. Fondasi C++ Modern (I/O, Auto).
2. Kontrol Alur (Initializer `if`, Range-based loops).
3. Struktur Data (Vectors, Structs, Span).
4. Fungsi & Modularitas (Lambdas, Reference).
5. Arsitek OOP (Class, Encapsulation).
6. Pengelolaan Memori (Smart Pointers).
7. STL & Algoritma (Ranges).
8. Konkurensi & C++23.

## 7. Arah Desain & UI/UX
Mengadopsi panduan `DESIGN.md` — **"Dark Tech / Vercel-like Premium Minimalist"**:
- Latar belakang sangat gelap (`#09090b` / `zinc-950`).
- Tipografi Monospace pada metrik/status, dipadu dengan Sans-serif bersih.
- Komponen Bento Grid, pembatas tipis (`border-zinc-800`), dan kilau *neon/glow* yang subtil.
- Sepenuhnya didukung oleh animasi `framer-motion` untuk *staggered reveals*.
- Penggantian total *Emoji* menjadi Ikon SVG `lucide-react`.

## 8. Arsitektur Teknis
- **Stack:** Next.js App Router, Tailwind CSS v4, Prisma (PostgreSQL Neon).
- **Infrastruktur Eksekusi:** *Route Handler API* yang menyimulasikan kompilator dan analisis AST statis ringan untuk mendeteksi *Output Target*.
- **Hosting:** Vercel Production.

## 9. Di Luar Cakupan (MVP)
- Multiplayer/Sistem guild real-time.
- Eksekusi C++ melalui instance Docker kontainer di server asli pengguna (Kini ditiadakan demi simulasi *client-side* yang *cost-effective*).
