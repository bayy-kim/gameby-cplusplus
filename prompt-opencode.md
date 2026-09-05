# Prompt OpenCode — GAMEBY_C++

Versi update dari prompt sebelumnya: nama final GAMEBY_C++, UI diganti ke gaya claymorphism dengan palet warna di bawah. Tinggal copy-paste ke OpenCode.

```
Buatkan aplikasi web bernama GAMEBY_C++ — game edukasi belajar C++ dengan
struktur skill tree bertahap dari pemula sampai expert.

STACK
- Next.js App Router + Tailwind v4 (CSS-first, pakai @theme di globals.css,
  JANGAN pakai tailwind.config.ts, hindari tabrakan namespace token kayak
  --spacing-xl yang override max-w-xl)
- Prisma + Neon untuk database (User, World, Level, UserProgress, Badge,
  UserBadge, BossAttempt — lihat skema di SRS)
- NextAuth v5 untuk autentikasi, wajib set trustHost: true karena deploy di Vercel
- Deploy ke Vercel, team ID: team_tbgZxv4K2WYJ9ERvprAqi7Ke

FITUR UTAMA
1. Skill tree interaktif sebagai halaman utama: peta visual 8 "Dunia" C++ dari
   fondasi sampai expert. Node terkunci sampai prasyaratnya selesai, animasi
   unlock waktu node baru kebuka.
2. Halaman lesson per level: teori singkat + code playground interaktif pakai
   Monaco Editor, terhubung ke Piston API (https://github.com/engineer-man/piston)
   lewat route handler server-side (jangan panggil langsung dari client) supaya
   kode C++ bisa benar-benar dijalankan dan hasilnya muncul real-time.
3. Sistem gamifikasi: XP & level, mata uang "SyntaxCoin", badge/achievement
   ("Pointer Master", "Loop Ninja", "Memory Leak Hunter"), streak harian, dan
   boss battle (tantangan debug berbatas waktu) di akhir tiap Dunia.
4. Dashboard progress: bento-grid berisi XP, streak, badge, Dunia yang sedang
   dikerjakan.
5. Hint bertingkat 3 level di tiap soal (petunjuk arah, contoh mirip, jawaban
   penuh), dibuka pakai SyntaxCoin.
6. Fitur share achievement: generate kartu pencapaian yang bisa
   di-screenshot/download untuk dibagikan ke media sosial.

STRUKTUR KONTEN (8 Dunia, simpan sebagai data di database, bukan hardcode)
Dunia 1 - Fondasi C++: struktur program pertama, variabel & tipe data,
input/output cin cout, operator & ekspresi.
Dunia 2 - Logika & Alur: if/else & switch-case, loop for & while, nested loop.
Dunia 3 - Struktur Data Dasar: array & multidimensional array, string
manipulation, vector & struct.
Dunia 4 - Fungsi & Modularitas: fungsi/parameter/return value, rekursi, scope
variabel & intro pointer.
Dunia 5 - OOP Kingdom: class & object, encapsulation & access modifier,
inheritance & polymorphism.
Dunia 6 - Memory Mastery: pointer & reference, dynamic memory (new/delete),
smart pointer (unique_ptr, shared_ptr).
Dunia 7 - STL & Algoritma: STL containers (map, set, queue, stack), algorithm
library, template & generic programming.
Dunia 8 - Boss Realm: studi kasus kompleks, optimisasi & best practice, final
boss berupa proyek nyata yang dinilai otomatis.

DESAIN UI — CLAYMORPHISM
- Sudut membulat besar: 16-24px di card, 12-16px di tombol/input.
- Shadow ganda di tiap elemen: outer soft shadow (blur besar, offset ke
  bawah-kanan) + inner highlight tipis di sisi atas-kiri, biar kesan empuk/3D.
- Tombol ada efek tekan: scale turun sedikit + shadow mengecil saat diklik.
- Palet warna:
  - Background terang: #F5F1EC, background gelap (mode gelap): #2B2733
  - Primary (skill tree/elemen utama): #7C6FE0
  - Secondary (XP/berhasil): #4FBF9F
  - Accent (tombol CTA): #FF7A59
  - Warning/Boss Battle: #FFB648
  - Teks utama: #3A3530
- Mobile-first, minimum touch target 44x44px, card dan tombol cukup besar buat
  disentuh nyaman satu tangan.
- Microinteraction: confetti saat level up/naik Dunia, animasi transisi antar
  state.

GUARDRAIL TEKNIS (WAJIB)
- Kalau ada pemakaian useSearchParams(), wajib dibungkus Suspense boundary.
- Elemen full-height di mobile pakai 100dvh, jangan 100vh.
- Elemen position: fixed di dalam container yang punya backdrop-filter, render
  lewat React Portal ke document.body.
- Pakai top/right/bottom/left eksplisit untuk positioning, jangan inset
  shorthand (supaya tidak bug di browser mobile).
- Jangan hardcode secret apapun di kode, jangan pakai fallback string di auth
  config.

Mulai dari setup project, skema database (Prisma schema), lalu halaman skill
tree, baru halaman lesson + code playground.
```
