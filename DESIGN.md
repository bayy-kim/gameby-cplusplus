# Design System & Guidelines — CppForge

Dokumen ini adalah sumber kebenaran (*Single Source of Truth*) untuk estetika visual dan antarmuka **CppForge**. Semua pembuatan komponen, halaman, atau elemen UI baru WAJIB mengikuti panduan di bawah ini untuk mencegah degradasi desain (*UI drift*) atau gaya generik (*AI slop*).

---

## 1. Aesthetic DNA: "Dark Tech / Vercel-like Premium Minimalist"
Estetika CppForge dirancang untuk terlihat seperti alat pengembang (*developer tool*) modern kelas atas (seperti Linear, Vercel, atau Stripe Docs). Kesan yang ingin ditimbulkan adalah: **Akurat, Tajam, Profesional, dan Dalam (*Deep*)**. 

- **TIDAK ADA** *gradient* ungu/pink menyala yang dominan di latar belakang.
- **TIDAK ADA** sudut elemen yang membulat ekstrem (hindari `rounded-[3rem]` atau `rounded-full` pada kartu besar).
- **TIDAK ADA** bayangan (*shadow*) yang lebar, buram, dan gembung (hindari *claymorphism*).

---

## 2. Palet Warna (Color Palette)

Aplikasi beroperasi secara mutlak pada **Mode Gelap Sejati (True Dark Mode)**. Latar belakang tidak abu-abu terang, melainkan hampir hitam pekat.

| Fungsi | Tailwind Class | Hex Value | Keterangan |
| :--- | :--- | :--- | :--- |
| **Latar Aplikasi** | `bg-[#09090b]` atau `bg-zinc-950` | `#09090b` | Warna kanvas/fondasi paling bawah. |
| **Latar Kartu/Elevasi** | `bg-[#121214]` atau `bg-zinc-900` | `#121214` | Untuk *Bento grid*, kartu level, atau panel. |
| **Batas/Garis (Border)** | `border-zinc-800` | `#27272a` | Garis tipis 1px pemisah *card* (sangat penting untuk *crisp UI*). |
| **Teks Utama** | `text-zinc-100` atau `text-white`| `#f4f4f5` | Heading dan *value* yang ditekankan. |
| **Teks Sekunder** | `text-zinc-400` atau `text-zinc-500`| `#a1a1aa` | Paragraf deskripsi, label *monospace*, *metadata*. |
| **Aksen Aktif** | `text-indigo-400` | `#818cf8` | Elemen sistem aktif, tombol "Run", *glow* status. |
| **Aksen Sukses** | `text-emerald-400` | `#34d399` | Status *PASS*, selesai, *experience points* (XP). |
| **Aksen Bahaya/Boss**| `text-amber-400` atau `text-red-500` | `#fbbf24` | Indikator Boss Battle, waktu hampir habis. |

---

## 3. Tipografi (Typography)

Kami mengkombinasikan fon *Sans-Serif* bersih untuk kelancaran membaca (kognitif) dan fon *Monospace* untuk memberikan nuansa mesin/terminal.

*   **Teks Deskripsi & Paragraf:** \`font-sans\` (`Inter` atau sistem *sans-serif* default). Gunakan ukuran kecil (`text-sm`) dengan jarak baris lapang (`leading-relaxed`).
*   **Judul & Heading:** Harus rapat. Gunakan `font-bold tracking-tight` atau `tracking-tighter`.
*   **Label Metrik & Status:** Selalu gunakan **Monospace** (seperti `JetBrains Mono` atau `Fira Code`). Harus kapital semua dengan rentang karakter lebar: `font-mono text-[10px] uppercase tracking-widest text-zinc-500`.

---

## 4. Efek Visual & Material

### a. Elevasi (Shadow & Border)
Gunakan bayangan yang tipis dan dekat, bukan bayangan tebal.
*   **Card Hover:** `hover:border-zinc-600 transition-colors shadow-xl`
*   **Tombol Utama:** Harus padat. `bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]` (Glow yang dikendalikan).
*   **Inner Glow / Border:** Untuk elemen yang ingin di-*highlight*, gunakan sedikit transparansi pada latar belakang dipadu dengan *border* warna senada (Contoh: `bg-indigo-500/10 border-indigo-500/20 text-indigo-400`).

### b. Noise Pattern & Blur
Selalu tambahkan sentuhan tekstur "*grain*" yang sangat redup di elemen besar untuk menghilangkan kesan plastik.
*   \`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none\`

### c. Animasi (Framer Motion)
Gerakan (motion) harus fungsional dan tidak bertele-tele. Jangan gunakan pantulan (bounce) yang kekanak-kanakan.
*   Gunakan parameter fisika yang mulus: \`transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}\` (Kurva eksponensial lambat mereda).
*   Pola entri halaman: Menggabungkan `opacity: 0` menuju `1` dengan perpindahan `y` (dari `20` menuju `0`).

---

## 5. Komposisi Tata Letak (Layout)

*   **Bento Grid:** Untuk menampilkan sekelompok level/kartu, selalu gunakan grid asimetris yang kaku (misalnya memisahkan 1 kolom besar dan 2 kolom kecil).
*   **Split View (Materi vs Editor):** Memisahkan area membaca (kiri) dan area kerja (kanan). Panel *Materi* menggunakan tata letak mirip dokumentasi API, sementara panel *Editor* menggunakan format jendela Terminal/Console.

## 6. Anti-Patterns (DILARANG)
- Menggunakan emoji generik (🚀, 💡, 🔥). Selalu gunakan ikon SVG monokromatis (dari library **Lucide React**).
- Mewarnai teks secara penuh (contoh: deskripsi biru di dalam boks biru). Selalu gunakan abu-abu netral untuk teks penjelas.
- Membungkus teks di tengah pada *Hero Section* dengan lebar 100%. *Hero* harus memiliki hirarki kiri-rata yang kokoh, dengan aset visual pendamping di kanan.
