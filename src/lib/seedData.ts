export interface WorldData {
  id: string;
  title: string;
  description: string;
  order: number;
  difficultyTier: string;
  icon: string;
  levels: LevelData[];
}

export interface LevelData {
  id: string;
  worldId: string;
  title: string;
  content: string;
  starterCode: string;
  expectedOutput: string;
  xpReward: number;
  coinReward: number;
  order: number;
  isBossLevel: boolean;
  timeLimitSec?: number;
  hints: HintData[];
}

export interface HintData {
  id: string;
  tier: number;
  content: string;
  costCoins: number;
}

export const SEED_WORLDS: WorldData[] = [
  // ══════════════════════════════════════════════════════════
  // DUNIA 1 — FONDASI C++
  // ══════════════════════════════════════════════════════════
  {
    id: "world-1",
    title: "Dunia 1: Fondasi C++",
    description: "Pelajari struktur dasar program C++ modern, variabel, tipe data, dan instruksi I/O.",
    order: 1,
    difficultyTier: "Pemula",
    icon: "code",
    levels: [
      {
        id: "level-1-1",
        worldId: "world-1",
        title: "Hello, Modern C++!",
        content: `Bayangin kamu lagi ngasih perintah ke robot yang cuma ngerti instruksi yang sangat detail dan berurutan — itulah cara kerja komputer. C++ adalah salah satu "bahasa perintah" yang dipakai programmer buat ngobrol sama komputer.

Setiap program C++ punya satu "pintu masuk" wajib bernama \`main()\` — di sinilah komputer mulai membaca perintah kamu, baris demi baris, dari atas ke bawah.

### Contoh Program
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Selamat datang di GAMEBY_C++!\\n";
    return 0;
}
\`\`\`

**Penjelasan baris per baris:**
- \`#include <iostream>\` — ambil "perkakas" bawaan C++ buat nulis/baca teks ke layar.
- \`using namespace std;\` — biar kita bisa langsung pakai \`cout\` tanpa nulis awalan tambahan tiap kali.
- \`int main() { ... }\` — ini "pintu masuk" program tadi.
- \`cout <<\` — perintah buat nampilin teks ke layar (namanya diambil dari "character output").
- \`\\n\` — pindah ke baris baru, kayak nekan tombol Enter.
- \`return 0;\` — kasih tau komputer "programnya selesai, gak ada error".

**Kata Kunci Baru:**
- **Fungsi** = kumpulan perintah yang dikasih nama, biar bisa dipanggil ulang.
- **Compile** = proses komputer menerjemahkan kode C++ jadi bahasa yang dimengerti mesin, sebelum bisa dijalankan.

**Tugas kamu:** ganti tulisannya jadi "Hello, CppForge!" lalu klik Run Code.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // Tulis kode kamu di sini
    
    return 0;
}`,
        expectedOutput: "Hello, CppForge!",
        xpReward: 50,
        coinReward: 10,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h1-1", tier: 1, content: "Gunakan cout << ... untuk mencetak.", costCoins: 5 },
          { id: "h1-2", tier: 2, content: 'cout << "Hello, CppForge!" << "\\n";', costCoins: 10 },
          { id: "h1-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, CppForge!\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-1-2",
        worldId: "world-1",
        title: "Variabel & Tipe Data Modern",
        content: `Bayangin kamu punya kotak kosong untuk menyimpan barang. Kotak itu kita panggil **Variabel**. Di C++ versi lama, sebelum masukin barang, kamu harus kasih label persis ukuran kotaknya (contoh: "ini kotak khusus teks" atau "ini kotak khusus angka"). 

Di C++ modern, ada cara instan yaitu pakai perintah \`auto\`. Komputer akan cerdas menebak sendiri ukuran kotak berdasarkan barang yang pertama kali kamu masukkan.

### Perbandingan:
| Cara Lama | Cara Modern |
|-----------|-------------|
| \`string name = "Ciko";\` | \`auto name = string{"Ciko"};\` |
| \`int level = 1;\` | \`auto level = 1;\` |

**Penjelasan baris per baris:**
- \`auto player = string{"Ciko"}\` — Kita bikin kotak bernama \`player\`, lalu langsung diisi dengan teks "Ciko". Komputer otomatis menyesuaikan.
- Tanda kurung kurawal \`{}\` di C++ modern adalah cara paling aman untuk mengisi nilai.

**Kata Kunci Baru:**
- **Variabel** = wadah atau kotak memori komputer untuk menyimpan data.
- **Tipe Data** = jenis barang yang masuk kotak (teks/string, atau angka bulat/integer).

**Tugas kamu:**
Gunakan \`auto\` untuk membuat variabel \`level\` bernilai \`1\` dan \`player\` bernilai \`"Ciko"\`. 
Lalu, cetak variabel tersebut ke layar dengan format persis seperti ini:
\`Player: Ciko | Level: 1\``,
        starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Gunakan auto untuk tipe data
    auto player = string{"Ciko"};
    auto level  = 1;
    
    // Cetak hasilnya di sini
    
    return 0;
}`,
        expectedOutput: "Player: Ciko | Level: 1",
        xpReward: 60,
        coinReward: 15,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h2-1", tier: 1, content: 'Gabungkan teks dan variabel: cout << "Player: " << player ...', costCoins: 5 },
          { id: "h2-2", tier: 2, content: 'cout << "Player: " << player << " | Level: " << level << "\\n";', costCoins: 10 },
          { id: "h2-3", tier: 3, content: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto player = string{"Ciko"};\n    auto level  = 1;\n    cout << "Player: " << player << " | Level: " << level << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-1-3",
        worldId: "world-1",
        title: "Boss Realm 1: Syntax Debugger",
        content: `🔴 **BOSS BATTLE!**

Seorang penyusup merusak file program kita! Kode C++ di bawah memiliki **3 bug** atau kesalahan penulisan. 
Sama seperti guru tata bahasa yang ketat, komputer akan langsung protes kalau titik koma atau penutup kurung ketinggalan.

### Log Error
\`\`\`text
error: missing terminating '>' character
error: expected ';' at end of declaration
error: expected ';' after expression
\`\`\`

**Penjelasan masalah:**
- C++ *sangat sensitif* dengan tanda baca. Setiap akhir dari instruksi wajib ditutup dengan titik koma (\`;\`), ibarat tanda titik di akhir sebuah kalimat.
- Tanda kurung sudut \`< >\` juga harus sepasang.

**Kata Kunci Baru:**
- **Bug** = kesalahan dalam kode yang bikin program ngambek dan gak mau jalan.
- **Syntax** = aturan penulisan grammar dari sebuah bahasa pemrograman.

**Tugas kamu:** Perbaiki semua tanda baca yang hilang biar programnya nyala lagi dan menampilkan:
\`HP: 100 | Mana: 50\``,
        starterCode: `#include <iostream
using namespace std;

int main() {
    auto hp   = 100
    auto mana = 50;
    
    cout << "HP: " << hp << " | Mana: " << mana << "\\n"
    return 0;
}`,
        expectedOutput: "HP: 100 | Mana: 50",
        xpReward: 150,
        coinReward: 50,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 120,
        hints: [
          { id: "h3-1", tier: 1, content: "Periksa baris #include, lalu pastikan setiap baris instruksi diakhiri tanda titik koma (;).", costCoins: 10 },
          { id: "h3-2", tier: 2, content: "#include <iostream>  —  tambah > penutup.\nauto hp = 100;  —  tambah titik koma.\ncout << ... << \"\\n\";  —  tambah titik koma.", costCoins: 20 },
          { id: "h3-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto hp   = 100;\n    auto mana = 50;\n    cout << "HP: " << hp << " | Mana: " << mana << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 2 — LOGIKA & PERCABANGAN
  // ══════════════════════════════════════════════════════════
  {
    id: "world-2",
    title: "Dunia 2: Logika & Percabangan",
    description: "Kuasai kontrol alur modern: if/else dan perulangan.",
    order: 2,
    difficultyTier: "Pemula",
    icon: "git-branch",
    levels: [
      {
        id: "level-2-1",
        worldId: "world-2",
        title: "If-Else & Initializer Modern",
        content: `Bayangin persimpangan jalan dengan lampu lalu lintas. Kalau hijau, jalan. Kalau merah, berhenti. Di komputer, konsep ini namanya percabangan \`if-else\`.

Menariknya, C++ punya fitur modern dimana kita bisa membuat variabel sesaat persis sebelum persimpangan itu terjadi! Kalau persimpangan udah terlewati, variabelnya ikut lenyap supaya memori komputer kita hemat.

### Contoh
\`\`\`cpp
// Variabel 'status' hanya hidup di kurung kurawal if ini
if (auto status = 200; status == 200) { 
    cout << "OK"; 
}
\`\`\`

**Penjelasan baris per baris:**
- \`if (...)\` — cek apakah kondisi di dalamnya benar.
- \`auto status = 200;\` — buat variabel sementara dulu.
- \`status == 200\` — tanda \`==\` berarti "apakah nilainya sama dengan?". Kalau iya, kerjakan yang di dalam kurung kurawal.

**Kata Kunci Baru:**
- **If-Else** = logika pengambil keputusan dalam program.
- **Scope** = umur atau batas wilayah hidup sebuah variabel di komputer.

**Tugas kamu:**
Buat logika kondisi. Jika \`score >= 75\` cetak \`LULUS\`, jika tidak, cetak \`GAGAL\`.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    auto score = 85;
    
    // Tulis kondisinya di sini
    
    return 0;
}`,
        expectedOutput: "LULUS",
        xpReward: 70,
        coinReward: 15,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h21-1", tier: 1, content: "if (score >= 75) { ... } else { ... }", costCoins: 5 },
          { id: "h21-2", tier: 2, content: 'Bisa juga: if (auto s = 85; s >= 75) cout << "LULUS\\n"; else cout << "GAGAL\\n";', costCoins: 10 },
          { id: "h21-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto score = 85;\n    if (score >= 75) {\n        cout << "LULUS\\n";\n    } else {\n        cout << "GAGAL\\n";\n    }\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-2-2",
        worldId: "world-2",
        title: "Perulangan Terstruktur (Loop)",
        content: `Komputer itu sangat cepat melakukan pekerjaan yang diulang-ulang. Bayangkan kamu dihukum menulis "Saya tidak nakal" 100 kali. Bukannya nulis manual, kamu bisa suruh mesin!

Namanya adalah perulangan \`for\`. Perintah ini punya 3 resep wajib:
1. Dari mana mulainya? (Inisiasi)
2. Sampai kapan berhentinya? (Batas)
3. Langkah tiap putarannya nambah berapa? (Increment)

### Contoh
\`\`\`cpp
for (auto i = 0; i < 3; i++) {
    cout << "Hi! "; // Akan dicetak 3 kali
}
\`\`\`

**Penjelasan resep:**
- \`auto i = 0\` — mulai dari hitungan nol.
- \`i < 3\` — selama hitungan kurang dari 3, terus putar!
- \`i++\` — setiap satu putaran beres, tambah hitungan sebanyak satu.

**Kata Kunci Baru:**
- **Loop / Perulangan** = siklus instruksi yang diulang berkali-kali.
- **Increment** = aksi menambah nilai, sering ditulis \`++\`.

**Tugas kamu:**
Gunakan perulangan untuk mencetak angka 1 sampai 5. Setiap angka harus dipisahkan oleh spasi. (Hati-hati, jangan ada spasi nyasar di ujung!).`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // Tulis for loop di sini
    for (auto i = 1; i <= 5; i++) {
        // Cetak i, perhatikan jarak spasinya
        
    }
    cout << "\\n";
    return 0;
}`,
        expectedOutput: "1 2 3 4 5",
        xpReward: 80,
        coinReward: 15,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h22-1", tier: 1, content: "Jika kamu mencetak spasi di akhir angka 5 (seperti '1 2 3 4 5 '), output akan dianggap salah karena berlebih.", costCoins: 5 },
          { id: "h22-2", tier: 2, content: 'Beri kondisi: if (i < 5) cout << i << " "; else cout << i;', costCoins: 10 },
          { id: "h22-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (auto i = 1; i <= 5; i++) {\n        cout << i;\n        if (i < 5) cout << " ";\n    }\n    cout << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-2-3",
        worldId: "world-2",
        title: "Boss Realm 2: Infinite Loop Demon",
        content: `🔴 **BOSS BATTLE!**

Program robot pertambangan kita terserang penyakit mematikan: **Infinite Loop** (perulangan tanpa ujung).
Kalau ini dibiarkan, program gak bakal berhenti jalan sampai memori komputernya hangus!

Selain \`for\`, kita juga bisa mengulang program pakai \`while\`. Loop ini akan jalan terus selama kondisinya benar.
Masalahnya pada kode ini: target nilainya gak pernah maju!

### Kenapa ini rusak?
\`\`\`cpp
while (i <= 5) {
    gold += i;
    // Nilai 'i' selalu 1, jadi (i <= 5) bakal selalu BENAR selamanya.
}
\`\`\`

**Kata Kunci Baru:**
- **Infinite Loop** = kecelakaan program akibat lupa membuat titik berhenti.

**Tugas kamu:** 
Kalahkan iblis loop abadi ini dengan memajukan nilai \`i\` menggunakan increment (\`i++\`)! Pastikan *output* mencetak akumulasi total gold dengan benar.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    auto gold = 0;
    auto i    = 1;
    
    while (i <= 5) {
        gold += i;
        // BUG ALERT: Variabel 'i' tidak pernah bertambah nilainya!
    }
    
    cout << "Total Gold: " << gold << "\\n";
    return 0;
}`,
        expectedOutput: "Total Gold: 15",
        xpReward: 180,
        coinReward: 60,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 90,
        hints: [
          { id: "h23-1", tier: 1, content: "Variabel i harus dinaikkan nilainya di setiap putaran loop.", costCoins: 10 },
          { id: "h23-2", tier: 2, content: "Tambahkan instruksi increment `i++;` di dalam while loop, tepat setelah `gold += i;`", costCoins: 20 },
          { id: "h23-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto gold = 0;\n    auto i = 1;\n    while(i <= 5) {\n        gold += i;\n        i++;\n    }\n    cout << "Total Gold: " << gold << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 3 — STRUKTUR DATA DASAR
  // ══════════════════════════════════════════════════════════
  {
    id: "world-3",
    title: "Dunia 3: Organisasi Data",
    description: "Kuasai rak data modern bernama std::vector, dan pembuatan struktur data kompleks dengan struct.",
    order: 3,
    difficultyTier: "Menengah",
    icon: "database",
    levels: [
      {
        id: "level-3-1",
        worldId: "world-3",
        title: "Kekuatan std::vector",
        content: `Bayangin laci lemari baju. Kalau laci kuno, pas dibeli ukurannya udah paten, kamu gak bisa naruh baju tambahan kalau udah penuh. Tapi di C++ modern, kita pakai laci ajaib yang elastis bernama **\`std::vector\`**.

Laci ini aman, dinamis, dan bisa ngukur batasnya sendiri.

### Contoh Laci Dinamis
\`\`\`cpp
#include <vector>

// Buat laci untuk 3 angka
vector<int> scores = {90, 80, 95};

// Mengambil barang di dalam laci pakai nomor urutnya (mulai dari 0!)
cout << scores[1];     // Cepat, ambil laci nomor urut 1 (nilai 80)
cout << scores.at(1);  // Aman, akan protes kalau lacinya kosong
\`\`\`

**Penjelasan baris per baris:**
- \`vector<int>\` — kita memesan sebuah lemari elastis khusus untuk tipe data angka (\`int\`).
- Urutan indeks komputer selalu dihitung dari \`0\`, bukan 1.

**Kata Kunci Baru:**
- **Vector** = susunan tempat penyimpanan memori berderet yang ukurannya bisa melar.
- **Indeks** = nomor antrean atau nomor kotak, dimulai dari nol.

**Tugas kamu:**
Buat sebuah vector \`scores\` berisi angka \`{90, 80, 95}\`. Cetak nilai dari laci kedua ke layar!`,
        starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores = {90, 80, 95};
    
    // Cetak elemen urutan kedua di sini (ingat, indeks mulai dari 0)
    
    return 0;
}`,
        expectedOutput: "80",
        xpReward: 90,
        coinReward: 20,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h31-1", tier: 1, content: "Karena mulai dari 0, laci kedua ada di indeks 1. Gunakan scores[1].", costCoins: 5 },
          { id: "h31-2", tier: 2, content: 'cout << scores.at(1) << "\\n";', costCoins: 10 },
          { id: "h31-3", tier: 3, content: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {90, 80, 95};\n    cout << scores[1] << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-3-2",
        worldId: "world-3",
        title: "Struct & Cetak Biru (C++20)",
        content: `Coba bayangin kamu bikin ID Card karyawan. Di situ pasti butuh Nama, Umur, dan Divisi. Daripada bikin banyak variabel terpisah, kita bungkus mereka semua ke dalam satu "cetak biru" bernama **Struct**.

C++20 membawa fitur keren di mana pas kamu mau ngisi form ID Card itu, kamu bisa sebutin nama labelnya satu-satu, jadi gak bakal salah isi (nama fiturnya *Designated Initializers*).

### Contoh C++20
\`\`\`cpp
struct Weapon {
    string name;
    int damage;
};

// Mengisi data dengan label yang eksplisit!
Weapon sword { .name = "Excalibur", .damage = 99 };
\`\`\`

**Penjelasan baris per baris:**
- \`struct Weapon { ... };\` — Ini kita baru bikin bentuk cetak birunya, belum bikin barangnya.
- \`Weapon sword { ... };\` — Ini kita bikin barang aslinya bernama \`sword\`, sambil langsung diisi datanya.

**Kata Kunci Baru:**
- **Struct** = struktur data untuk mengelompokkan berbagai variabel jadi satu kesatuan.

**Tugas kamu:**
Gunakan sintaks di atas untuk membuat objek \`Hero\` bernama \`"Bonbon"\` dengan level \`10\`.`,
        starterCode: `#include <iostream>
#include <string>
using namespace std;

struct Hero {
    string name;
    int    level;
};

int main() {
    // Inisialisasi struct dengan cara aman C++20
    Hero h { .name = "Bonbon", .level = 10 };
    
    // Cetak outputnya di sini
    
    return 0;
}`,
        expectedOutput: "Hero: Bonbon (Lvl 10)",
        xpReward: 100,
        coinReward: 25,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h32-1", tier: 1, content: 'Gunakan `h.name` dan `h.level` untuk memanggil nilai di dalam objek.', costCoins: 5 },
          { id: "h32-2", tier: 2, content: 'cout << "Hero: " << h.name << " (Lvl " << h.level << ")\\n";', costCoins: 10 },
          { id: "h32-3", tier: 3, content: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Hero { string name; int level; };\n\nint main() {\n    Hero h { .name = "Bonbon", .level = 10 };\n    cout << "Hero: " << h.name << " (Lvl " << h.level << ")\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-3-3",
        worldId: "world-3",
        title: "Boss Realm 3: Out-of-Bounds Titan",
        content: `🔴 **BOSS BATTLE!**

Kesalahan paling sering terjadi dan paling horor bagi developer pemula adalah mengakses "laci yang tidak ada".

Program ini mencoba mengambil item terakhir dari laci. Namun karena ia malas berhitung, ia memanggil laci nomor urut ke-3. Padahal karena laci dihitung dari 0, laci isinya hanya ada di nomor urut 0, 1, dan 2!

### Laporan Kerusakan Sistem
\`\`\`text
Segmentation fault (core dumped)
Invalid memory access at inventory[3]
\`\`\`

**Kata Kunci Baru:**
- **Segfault** = error mematikan saat program mencoba menyentuh wilayah memori yang bukan haknya.

**Tugas kamu:** 
Perbaiki kode ini. Untuk akses item yang paling buntut di \`vector\` secara otomatis tanpa takut salah hitung, gunakan perintah bawaan khusus: \`.back()\`.`,
        starterCode: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    vector<string> inventory = {"Sword", "Shield", "Potion"};
    
    // Bug: mengambil barang dari indeks yang kelewatan batas
    cout << "Item Terakhir: " << inventory[3] << "\\n";
    
    return 0;
}`,
        expectedOutput: "Item Terakhir: Potion",
        xpReward: 200,
        coinReward: 70,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 90,
        hints: [
          { id: "h33-1", tier: 1, content: "Vector kita isinya 3 barang. Kotaknya dinomori 0, 1, dan 2.", costCoins: 10 },
          { id: "h33-2", tier: 2, content: "Ganti inventory[3] dengan inventory.back() yang sudah pintar mengambil ujung belakang.", costCoins: 20 },
          { id: "h33-3", tier: 3, content: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> inventory = {"Sword", "Shield", "Potion"};\n    cout << "Item Terakhir: " << inventory.back() << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 4 — FUNGSI & MODULARITAS
  // ══════════════════════════════════════════════════════════
  {
    id: "world-4",
    title: "Dunia 4: Fungsi & Referensi",
    description: "Merakit blok kode rahasia (Lambda), serta efisiensi memori dengan melempar tali penunjuk (Reference).",
    order: 4,
    difficultyTier: "Menengah",
    icon: "box",
    levels: [
      {
        id: "level-4-1",
        worldId: "world-4",
        title: "Anonymous Function (Lambda)",
        content: `Biasanya, sebuah Fungsi ibarat pabrik yang butuh nama, izin, dan lahan luas buat didirikan. Tapi kadang kita butuh pabrik mini darurat sekali pakai saja. Nah, di C++ kita pakai **Lambda** — pabrik tanpa nama!

Mulai C++20, bahan baku (parameter) lambda ini bebas pakai \`auto\`. Dia bakal menyesuaikan bentuknya otomatis.

### Contoh Pabrik Mini
\`\`\`cpp
// Pabrik lambda: [] artinya "buka pabrik", () isi bahannya, {} mesin kerjanya.
auto kaliTiga = [](auto num) { 
    return num * 3; 
};
\`\`\`

**Penjelasan baris per baris:**
- \`auto kaliTiga =\` — kita simpan pabrik mini ini di dalam kotak saku.
- \`[](auto num)\` — pabrik siap menerima bahan (berupa nilai atau angka bebas).
- \`return num * 3;\` — setelah mesin bekerja, lontarkan hasilnya ke luar pabrik.

**Kata Kunci Baru:**
- **Lambda** = fungsi ekspres super ringkas yang bisa dibikin sambil lalu.

**Tugas kamu:**
Selesaikan lambda \`tambah\` yang nerima dua barang dan ngelemparkan balik hasil jumlahnya.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // Sempurnakan lambda ini
    auto tambah = [](auto a, auto b) {
        // lempar/return hasil penjumlahan a dan b
    };
    
    cout << tambah(15, 25) << "\\n";
    return 0;
}`,
        expectedOutput: "40",
        xpReward: 110,
        coinReward: 25,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h41-1", tier: 1, content: "Gunakan kata `return` untuk mengembalikan hasil. Contoh: `return a + b;`", costCoins: 5 },
          { id: "h41-2", tier: 2, content: "auto tambah = [](auto a, auto b) { return a + b; };", costCoins: 10 },
          { id: "h41-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto tambah = [](auto a, auto b) { return a + b; };\n    cout << tambah(15, 25) << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-4-2",
        worldId: "world-4",
        title: "Reference Parameters (&)",
        content: `Misal temanmu mau baca bukumu. Daripada kamu ke mesin fotokopi, membuang waktu dan kertas untuk bikin duplikat penuh, lebih logis kamu meminjamkan buku aslinya secara langsung kan?

Itulah yang terjadi kalau kita memasukkan data ke Fungsi di C++. Defaultnya, C++ akan **memfotokopi** semua data! Solusi agar kita merujuk langsung ke barang aslinya adalah menempelkan simbol \`&\` (ampersand).

### Menghindari Fotokopi Lebay
\`\`\`cpp
// Ada lambang & , artinya ini rujukan ke data aslinya!
void upgradeWeapon(string& weapon) {
    weapon = weapon + " +1";
}
\`\`\`

**Kata Kunci Baru:**
- **Pass by Value** = fungsi menerima benda fotokopian, barang asli gak terpengaruh.
- **Pass by Reference** = fungsi nerima tali langsung ke barang asli, apapun yang diubah di dalam fungsi akan ngefek ke luarnya.

**Tugas kamu:**
Sekarang, tambahkan simbol \`&\` pada posisi yang tepat di parameter fungsi \`heal\` agar HP jagoannya beneran nambah permanen!`,
        starterCode: `#include <iostream>
using namespace std;

// Tambahkan simbol reference pada parameternya
void heal(int hp) {
    hp += 50;
}

int main() {
    auto heroHp = 20;
    heal(heroHp);
    cout << "HP sekarang: " << heroHp << "\\n";
    return 0;
}`,
        expectedOutput: "HP sekarang: 70",
        xpReward: 120,
        coinReward: 30,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h42-1", tier: 1, content: "Sisipkan tanda ampersand '&' setelah kata tipe datanya.", costCoins: 5 },
          { id: "h42-2", tier: 2, content: "void heal(int& hp) { hp += 50; }", costCoins: 10 },
          { id: "h42-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nvoid heal(int& hp) {\n    hp += 50;\n}\n\nint main() {\n    auto heroHp = 20;\n    heal(heroHp);\n    cout << "HP sekarang: " << heroHp << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-4-3",
        worldId: "world-4",
        title: "Boss Realm 4: Stack Overflow Dragon",
        content: `🔴 **BOSS BATTLE!**

Ada teknik memanggil fungsi dari dalam fungsi itu sendiri, seperti menaruh cermin yang saling berhadapan. Ini disebut fungsi **Rekursif**.
Tapi awas! Kalau cerminnya gak dikasih penghalang, efek pantulannya gak akan pernah berhenti, sampai memori sirkuit meledak (dinamakan **Stack Overflow**).

### Mengapa Naga Ini Tak Bisa Dihentikan?
\`\`\`cpp
auto faktorial(int n) -> int {
    // Akan terus memanggil faktorial(4), (3), (2), lalu ke zona negatif terus-terusan!
    return n * faktorial(n - 1);
}
\`\`\`

**Kata Kunci Baru:**
- **Rekursi** = fungsi yang bertugas dengan cara memanggil dirinya sendiri versi lebih kecil.
- **Base Case** = kondisi rem darurat yang menghentikan pantulan cermin rekursi tadi.

**Tugas kamu:**
Taklukkan naga ini dengan memberikan Base Case rem darurat. Letakkan instruksi \`if (n <= 1) return 1;\` di baris pertama dari fungsinya!`,
        starterCode: `#include <iostream>
using namespace std;

// Penulisan tipe balik (return) gaya baru: trailing return type
auto faktorial(int n) -> int {
    // BUG: Segera rem dan kembalikan angka 1 jika n <= 1 !
    
    return n * faktorial(n - 1);
}

int main() {
    cout << "Faktorial 5 = " << faktorial(5) << "\\n";
    return 0;
}`,
        expectedOutput: "Faktorial 5 = 120",
        xpReward: 220,
        coinReward: 80,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 100,
        hints: [
          { id: "h43-1", tier: 1, content: "Tambahkan instruksi penghenti: `if (n <= 1) return 1;` di bagian paling atas dalam kurung kurawal fungsi.", costCoins: 10 },
          { id: "h43-2", tier: 2, content: "Pastikan kode `if` tersebut berada sebelum `return n * faktorial...` terjadi.", costCoins: 20 },
          { id: "h43-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nauto faktorial(int n) -> int {\n    if (n <= 1) return 1;\n    return n * faktorial(n - 1);\n}\n\nint main() {\n    cout << "Faktorial 5 = " << faktorial(5) << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 5 — OOP KINGDOM
  // ══════════════════════════════════════════════════════════
  {
    id: "world-5",
    title: "Dunia 5: Arsitek OOP",
    description: "Bikin cetak biru kehidupan nyata. Belajar Kelas, Pewarisan, dan Penyelubungan Data.",
    order: 5,
    difficultyTier: "Mahir",
    icon: "shield",
    levels: [
      {
        id: "level-5-1",
        worldId: "world-5",
        title: "Class & Inisiasi Otomatis",
        content: `Kalau **Struct** sebelumnya cocok buat nampung benda statis, maka **Class** itu ibarat makhluk hidup! Dia bukan cuma punya properti (data), tapi punya aksi atau *method* (fungsi). Konsep membungkus ini disebut *Object-Oriented Programming (OOP)*.

C++ modern mengizinkan kita ngasih nilai *default* ke properti tanpa perlu ngetik kode ritual yang panjang.

### Contoh Menciptakan Player
\`\`\`cpp
class Player {
    int hp = 100;   // Inisiasi nilai langsung dari blueprintnya!
public: // Bagian yang boleh diakses dari luar
    void attack() { cout << "BAM!\\n"; }
};
\`\`\`

**Penjelasan baris per baris:**
- \`class Player\` — Membuka cetak biru baru.
- \`public:\` — Akses terbuka. Siapa pun dari luar boleh manggil aksi di bawah tanda ini.

**Kata Kunci Baru:**
- **Class / Kelas** = wadah modern yang ngebungkus variabel dan fungsi sekaligus.
- **Instance / Objek** = wujud fisik/nyata yang diciptakan mengikuti desain si Class.

**Tugas kamu:**
Di dalam blok utama (\`main\`), hidupkan/ciptakan wujud fisik dari cetak biru \`Player\`, lalu suruh dia menyerang dengan memanggil fungsinya.`,
        starterCode: `#include <iostream>
using namespace std;

class Player {
public:
    void attack() { 
        cout << "Serangan C++!\\n"; 
    }
};

int main() {
    // 1. Ciptakan objek bernama p dari class Player
    // 2. Suruh p untuk melakukan aksi attack()
    
    return 0;
}`,
        expectedOutput: "Serangan C++!",
        xpReward: 130,
        coinReward: 30,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h51-1", tier: 1, content: "Ketik: `Player p;` lalu di baris bawahnya panggil `p.attack();`", costCoins: 5 },
          { id: "h51-2", tier: 2, content: "Taruh instruksi pembuatan dan panggilan itu tepat sebelum tulisan `return 0;`", costCoins: 10 },
          { id: "h51-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Player {\npublic:\n    void attack() {\n        cout << "Serangan C++!\\n";\n    }\n};\n\nint main() {\n    Player p;\n    p.attack();\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-5-2",
        worldId: "world-5",
        title: "Polymorphism dengan 'override'",
        content: `Dalam OOP, kita bisa bikin cetak biru baru berdasarkan cetak biru induk lama (*Pewarisan*). Kadang si anak mau merombak ulang jurus turun-temurun dari sang induk.

Kemampuan mengubah-ubah bentuk ini dinamakan **Polymorphism**. Di C++ modern, kita dikasih stempel pengaman bernama \`override\` buat nempelin jurus barunya, biar compiler bantu ngecek kalau-kalau kita salah ngetik nama jurus.

### Contoh Menimpa Jurus Lama
\`\`\`cpp
class Bapak {
public:
    // Kata virtual mengizinkan kelas anak untuk merombak fungsinya
    virtual void attack() { cout << "Pukul!\\n"; }
};

class Anak : public Bapak {
public:
    // Stempel override mengonfirmasi niat kita merombak
    void attack() override { cout << "Pedang!\\n"; } 
};
\`\`\`

**Kata Kunci Baru:**
- **Polymorphism** = Kemampuan fungsi yang sama memberikan perilaku berbeda tergantung siapa wujudnya.
- **Override** = Jaminan ketat bahwa kita benar-benar sedang menimpa fungsi milik induk.

**Tugas kamu:**
Minta kelas keturunan \`Warrior\` menimpa metode serangan sang \`Hero\`, ganti teriakannya menjadi \`Slash!\`.`,
        starterCode: `#include <iostream>
using namespace std;

class Hero {
public:
    virtual void attack() {
        cout << "Punch!\\n";
    }
};

class Warrior : public Hero {
public:
    // Tulis fungsi void attack() override yang mencetak "Slash!\n"
    
};

int main() {
    Warrior w;
    Hero* h = &w;  
    h->attack();   // Harus memanggil versi Warrior yang baru
    return 0;
}`,
        expectedOutput: "Slash!",
        xpReward: 140,
        coinReward: 40,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h52-1", tier: 1, content: "Dalam Warrior, buat fungsi `void attack() override { cout << \"Slash!\\n\"; }`", costCoins: 5 },
          { id: "h52-2", tier: 2, content: "Pastikan menggunakan keyword 'override' di ujung sebelum kurung kurawal fungsi.", costCoins: 10 },
          { id: "h52-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Hero {\npublic:\n    virtual void attack() { cout << "Punch!\\n"; }\n};\n\nclass Warrior : public Hero {\npublic:\n    void attack() override {\n        cout << "Slash!\\n";\n    }\n};\n\nint main() {\n    Warrior w;\n    Hero* h = &w;\n    h->attack();\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-5-3",
        worldId: "world-5",
        title: "Boss Realm 5: Encapsulation Breach",
        content: `🔴 **BOSS BATTLE!**

Gawat! Parameter detak jantung (\`hp\`) pahlawan ksatria bocor dan bisa dikendalikan oleh peretas!
Di OOP ada pertahanan mutlak yang disebut **Encapsulation (Penyelubungan)**.

Artinya: semua properti internal harusnya **\`private\`**, jangan pernah dibiarkan \`public\` terbuka. Kalau orang luar mau mengubahnya, wajib izin lewat pintu khusus penjaga yang disebut _Setter_ dan _Getter_.

C++ modern bahkan nambahin polisi bernama \`[[nodiscard]]\` buat pintu minta informasi, sehingga si penelepon bakal kena omel kalau dia tidak menggubris jawaban dari polisinya.

### Memasang Tameng
\`\`\`cpp
class Aman {
private: 
    int uang;
public:
    // Pintu penyetor
    void setUang(int s) { uang = s; } 
    // Pintu pengambil yang gak boleh diabaikan
    [[nodiscard]] int getUang() const { return uang; }
};
\`\`\`

**Kata Kunci Baru:**
- **Encapsulation** = membentengi privasi data di dalam wadahnya agar tidak dirusak dari sembarang tempat.

**Tugas kamu:** Pindahkan variabel \`hp\` menjadi private, lalu sediakan fungsi penjaga dan pemintanya. Kemudian sesuaikan cara panggilnya di dalam \`main()\`!`,
        starterCode: `#include <iostream>
using namespace std;

class Knight {
    // BUG: hp bocor ke publik! Amankan sekarang!
public:
    int hp;
};

int main() {
    Knight k;
    
    // Perbaiki kode ini! k.hp haram dipanggil langsung.
    // Harusnya panggil pintu k.setHp(80) dan k.getHp()
    k.hp = 80;
    
    cout << "Current HP: " << k.hp << "\\n";
    return 0;
}`,
        expectedOutput: "Current HP: 80",
        xpReward: 250,
        coinReward: 90,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 120,
        hints: [
          { id: "h53-1", tier: 1, content: "Kunci dulu, pindahkan `int hp;` ke bawah `private:` di dalam deklarasi Knight.", costCoins: 10 },
          { id: "h53-2", tier: 2, content: "Setelah hp private, siapkan di public:\n`void setHp(int h) { hp = h; }`\n`[[nodiscard]] int getHp() const { return hp; }`", costCoins: 20 },
          { id: "h53-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Knight {\nprivate:\n    int hp{};\npublic:\n    void setHp(int h) { hp = h; }\n    [[nodiscard]] int getHp() const { return hp; }\n};\n\nint main() {\n    Knight k;\n    k.setHp(80);\n    cout << "Current HP: " << k.getHp() << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 6 — PENGELOLAAN MEMORI (Smart Pointers)
  // ══════════════════════════════════════════════════════════
  {
    id: "world-6",
    title: "Dunia 6: Pengelolaan Memori",
    description: "Kuasai penjaga memori otomatis (Smart Pointers) agar memori komputermu tidak lagi menetes bocor.",
    order: 6,
    difficultyTier: "Mahir",
    icon: "cpu",
    levels: [
      {
        id: "level-6-1",
        worldId: "world-6",
        title: "unique_ptr — Kepemilikan Tunggal",
        content: `Zaman dulu, programmer C++ memesan ruangan memori pakai kata \`new\` dan wajib membuangnya lagi pakai kata \`delete\`. Parahnya, kalau kamu amnesia dan lupa perintah \`delete\`, memori ruangan itu akan selamanya hangus alias mengendap abadi. Penyakit legendaris ini disebut **Memory Leak**.

C++ modern merilis satpam memori pintar bernama **Smart Pointer**. Dia otomatis mencuci piring (menghapus memori) kalau perjamuan selesai. Tidak boleh lagi ada \`delete\` manual!

### Penjaga Tunggal: unique_ptr
\`\`\`cpp
#include <memory>

// Ciptakan memori pintar dengan fungsi make_unique
auto weapon = make_unique<string>("Excalibur");

// Cek isinya dengan derefensi (*)
cout << *weapon << "\\n"; 

// Voila! Kalau kurung kurawal fungsi udah tutup, 
// 'weapon' dan isinya langsung hancur dengan aman.
\`\`\`

**Penjelasan baris per baris:**
- \`make_unique\` adalah paket rapi dari C++ yang memastikan tidak ada memori bocor selama pembuatan awal.
- Simbol \`*\` di depan nama pointer dipakai untuk menembus cangkang pointer dan melihat nilai aslinya.

**Kata Kunci Baru:**
- **Smart Pointer** = pelayan memori yang pintar membuang sampah otomatis.
- **Derefensi** = mengintip isi sebenarnya dari seutas tali rujukan.

**Tugas kamu:**
Bikin sebuah \`unique_ptr\` untuk sebuah bilangan angka (\`int\`) dengan nama variabel \`damage\` berisi kekuatan \`999\`. Lalu intip dan cetak ke layar.`,
        starterCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Buat unique_ptr dengan make_unique untuk angka int
    auto damage = make_unique<int>(999);
    
    // Cetak nilai dengan menembus cangkangnya pakai simbol bintang (*)
    cout << "Damage: " << *damage << "\\n";
    return 0;
}`,
        expectedOutput: "Damage: 999",
        xpReward: 140,
        coinReward: 35,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h61-1", tier: 1, content: "Kalo mau cetak isinya, jangan lupa pakai bintang (*) di depan namanya. `cout << ... << *damage`", costCoins: 5 },
          { id: "h61-2", tier: 2, content: 'Tinggal print saja: `cout << "Damage: " << *damage << "\\n";`', costCoins: 10 },
          { id: "h61-3", tier: 3, content: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto damage = make_unique<int>(999);\n    cout << "Damage: " << *damage << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-6-2",
        worldId: "world-6",
        title: "shared_ptr — Kepemilikan Bersama",
        content: `Sesuai namanya, \`unique_ptr\` tadi orangnya pelit — satu barang cuma boleh dipegang sama satu dia doang. Gak bisa dicopy. Tapi bagaimana kalau segerombolan pemain mau melihat item pedang yang sama?

Kita butuh \`shared_ptr\`! Ia ibarat punya asisten yang mencatat ada berapa jari yang memegang pedang itu. Kalau semua jari udah lepas, baru pedangnya dihancurkan ke tempat sampah memori.

### Menghitung Jari Peminjam
\`\`\`cpp
#include <memory>

auto shield = make_shared<string>("Aegis");
auto player_lain = shield; // Wah, ikut megang tameng!

// Alat penghitung otomatis (Outputnya 2)
cout << shield.use_count(); 
\`\`\`

**Penjelasan baris per baris:**
- \`make_shared\` — buat objeknya dan siap dibagi.
- \`shield.use_count()\` — bertanya diam-diam "ini barang yang ikut megang ada berapa sih?".

**Kata Kunci Baru:**
- **Reference Counting** = sistem hitung mundur diam-diam yang dipakai buat tau kapan sampah memori udah boleh dihapus.

**Tugas kamu:**
Bikin sebuah \`shared_ptr\` untuk nyimpen teks string \`"Holy Grail"\`. Copy ke satu teman agar jadi kepemilikan ganda. Lalu minta mesin penjawab menghitung berapa total yang pegang!`,
        starterCode: `#include <iostream>
#include <memory>
#include <string>
using namespace std;

int main() {
    auto item  = make_shared<string>("Holy Grail");
    auto item2 = item; // shared ownership, jadi ada dua pemegang
    
    // Tulis print pakai count penghitung untuk tau Owners nya ada berapa
    cout << "Owners: " << item.use_count() << "\\n";
    return 0;
}`,
        expectedOutput: "Owners: 2",
        xpReward: 160,
        coinReward: 40,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h62-1", tier: 1, content: "Kamu tinggal pakai fungsi `.use_count()` ke objek `item` untuk tahu jumlahnya.", costCoins: 5 },
          { id: "h62-2", tier: 2, content: 'Format print yang tepat: `cout << "Owners: " << item.use_count() << "\\n";`', costCoins: 10 },
          { id: "h62-3", tier: 3, content: '#include <iostream>\n#include <memory>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto item  = make_shared<string>("Holy Grail");\n    auto item2 = item;\n    cout << "Owners: " << item.use_count() << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-6-3",
        worldId: "world-6",
        title: "Boss Realm 6: Memory Leak Phantom",
        content: `🔴 **BOSS BATTLE!**

Banyak developer uzur tahun 90-an masih pakai pola kuno C++98 ini dan ngotot tidak mau move on!
Kamu lihat tulisan \`new\` dan \`delete\` yang bersebaran bebas? Pola bahaya ini adalah penyebab utama komputermu lambat karena sering "bocor".

### Warisan Kuno (Gaya C++98)
\`\`\`cpp
int* p = new int(42); // Pinjam paksa ruangan
// ... trus kode di-skip tanpa buang balik.
delete p;             // Piring kotor terlupakan
\`\`\`

**Tugas kamu:** 
Kutuk kode lama di bawah ini agar naik derajat ke zaman modern! Refaktor habis-habisan dengan memanggil pelayan \`make_unique\`. Setelah dibikin modern, usir paksa kata kunci \`delete\` yang jorok itu ke tong sampah sejarah, karena pelayan barumu sanggup ngurus sisa-sisanya sendiri.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // BUG: Masih pakai alokasi kotor "new int"
    int* hp    = new int(100);
    int* mana  = new int(50);
    
    cout << "HP: " << *hp << " | Mana: " << *mana << "\\n";
    
    // UDAH GAK ZAMAN, HAPUS HAPUS HAPUS
    delete hp;
    delete mana;
    return 0;
}`,
        expectedOutput: "HP: 100 | Mana: 50",
        xpReward: 280,
        coinReward: 100,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 120,
        hints: [
          { id: "h63-1", tier: 1, content: "Ganti baris kotornya. Dari `int* hp = new int(100);` ubah ke `auto hp = make_unique<int>(100);`", costCoins: 10 },
          { id: "h63-2", tier: 2, content: "Pastikan jangan lupa `#include <memory>` di atas. Setelah itu basmi seluruh baris `delete ...` dari alam semesta kode ini.", costCoins: 20 },
          { id: "h63-3", tier: 3, content: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto hp   = make_unique<int>(100);\n    auto mana = make_unique<int>(50);\n    cout << "HP: " << *hp << " | Mana: " << *mana << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 7 — STL & ALGORITMA (Ranges C++20)
  // ══════════════════════════════════════════════════════════
  {
    id: "world-7",
    title: "Dunia 7: Gudang Senjata Algoritma",
    description: "Temukan keajaiban Ranges C++20 yang memudahkan saring dan mengurutkan data tanpa keringat.",
    order: 7,
    difficultyTier: "Expert",
    icon: "layers",
    levels: [
      {
        id: "level-7-1",
        worldId: "world-7",
        title: "Perapian Instan: ranges::sort",
        content: `**Standard Template Library (STL)** itu bagaikan tas perkakas Swiss Army Knife bawannya C++. Berisi kumpulan trik sulap dan alat pertukangan data instan siap pakai, sehingga kamu gak usah menciptakan roda dari awal lagi.

Di C++20, STL berevolusi dengan jurus baru: **Ranges**. Dengan jurus ini, kamu gak perlu lagi nulis repot-repot instruksi "mulai dari ujung depan sampai ujung buntut". Ranges bisa langsung menyapu bersih!

### Sihir Rapi-rapi
\`\`\`cpp
// Cara kuno nan rumit:
sort(data.begin(), data.end());

// ✅ Sihir cepat C++20 Ranges:
ranges::sort(data);
\`\`\`

**Penjelasan baris per baris:**
- \`ranges::sort\` — Perintah mutlak untuk "segera rapikan seluruh laci dari kecil ke gede". Nggak pake basa-basi.

**Kata Kunci Baru:**
- **STL (Standard Template Library)** = Kumpulan struktur dan algoritme bawaan C++ terbaik yang sudah diuji oleh ribuan ahli se-dunia.
- **Ranges** = Fitur mutakhir yang menelan perintah menyebalkan (begin/end) biar kode kelihatan keren.

**Tugas kamu:**
Kita punya set nilai yang berantakan: \`{50, 10, 80, 30}\`. Pakai tongkat sihir \`ranges::sort\` untuk merapikannya. Kemudian ambil laci urutan pertama (yang otomatis jadi nilai terkecil).`,
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {50, 10, 80, 30};
    
    // Taruh sihir pengurutan ranges di sini
    ranges::sort(scores);
    
    // Tampilkan siapa yang menang menempati urutan pertama
    cout << "Min Score: " << scores[0] << "\\n";
    return 0;
}`,
        expectedOutput: "Min Score: 10",
        xpReward: 160,
        coinReward: 40,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h71-1", tier: 1, content: "Ketik perintahnya `ranges::sort(scores);` saja. Praktis.", costCoins: 5 },
          { id: "h71-2", tier: 2, content: 'Sesudah itu langsung munculin dengan cout: `cout << "Min Score: " << scores[0] << "\\n";`', costCoins: 10 },
          { id: "h71-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {50, 10, 80, 30};\n    ranges::sort(scores);\n    cout << "Min Score: " << scores[0] << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-7-2",
        worldId: "world-7",
        title: "Filter Penyeleksi: count_if",
        content: `Coba ingat lagi saat kita harus nulis *loop* lima baris hanya untuk menghitung berapa orang yang lulus ujian. Sangat melelahkan, bukan?

Dengan bantuan kombinasi **Ranges** dan **Lambda** yang sudah kamu kenal, menyeleksi dan menghitung data bisa diringkas hanya jadi sebuah obrolan satu kalimat bahasa Inggris saja!

### Contoh Mesin Penghitung
\`\`\`cpp
vector<int> hp = {100, 30, 75, 15, 90};

// Hitung laci mana saja yang isinya lebih dari 50
auto jumlahYgMasihHidup = ranges::count_if(hp, [](auto x) { 
    return x > 50; 
});
\`\`\`

**Penjelasan baris per baris:**
- \`ranges::count_if\` — Tolong dong, hitungin berapa buah yang...
- \`[](auto x) { return x > 50; }\` — ... yang barang si \`x\` ini lebih besar dari 50!

Inilah gaya berfikir fungsional (Functional Programming). Kamu ngasih tau *Apa yang dimau*, dan C++ mikirin gimana nyari jalannya.

**Kata Kunci Baru:**
- **Functional Programming** = Paradigma yang lebih ngomong "aku maunya B" alih-alih merinci instruksi teknis kaku satu persatu.

**Tugas kamu:**
Dari kumpulan level \`{1, 5, 3, 8, 2, 7}\`, pasang mesin hitung \`ranges::count_if\` buat nangkap data yang melampaui angka 4!`,
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> levels = {1, 5, 3, 8, 2, 7};
    
    // Perbaiki syarat filter di mesin lambda ini
    auto highLevel = ranges::count_if(levels, [](auto x) {
        return x > 4; 
    });
    
    cout << "High Level Count: " << highLevel << "\\n";
    return 0;
}`,
        expectedOutput: "High Level Count: 3",
        xpReward: 180,
        coinReward: 45,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h72-1", tier: 1, content: "Satu-satunya yang harus diatur adalah ganti kata di return lambda-nya untuk mengecek x > 4", costCoins: 5 },
          { id: "h72-2", tier: 2, content: 'Bentuk utuhnya begini: `ranges::count_if(levels, [](auto x) { return x > 4; });`', costCoins: 10 },
          { id: "h72-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> levels = {1, 5, 3, 8, 2, 7};\n    auto highLevel = ranges::count_if(levels, [](auto x) { return x > 4; });\n    cout << "High Level Count: " << highLevel << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-7-3",
        worldId: "world-7",
        title: "Boss Realm 7: Unsorted Chaos Lord",
        content: `🔴 **BOSS BATTLE!**

Ada turnamen E-sport akbar dan papan skor utamanya rusak dilahap peretas!
Panitia pusing karena nama dan skor acak-acakan kayak gado-gado.

Kita perlu menyelamatkannya dengan \`ranges::sort\`. Tapi kali ini sihirnya gak cukup pakai tongkat biasa, soalnya datanya berpasangan nama + nilai. Kita butuh nyuntik custom fungsi (Lambda) ke tongkat kita agar dia tau patokannya.

### Tongkat Berlensa Ganda
\`\`\`cpp
// Suruh tongkat sort bandingin angka kedua dari pasangannya!
ranges::sort(pemain, [](const auto& p1, const auto& p2) {
    return p1.second > p2.second; // > berarti gede ke kecil (Descending)
});
\`\`\`

**Kata Kunci Baru:**
- **Custom Comparator** = Fungsi injeksi yang memandu mesin pengurut (contoh: ngasih tahu A lebih baik dari B).
- **Descending** = Urut turun dari langit ke bumi (Terbesar ke terkecil).

**Tugas kamu:** Si peretas curang sengaja membalikkan kode perbandingan menjadi \`<\`! Ganti balikan panahnya agar sistem mengurutkannya dari yang berhak menjadi juara 1.`,
        starterCode: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    // Array laci pasangan (Nama, Skor)
    vector<pair<string, int>> players = {
        {"Ciko", 320},
        {"Bonbon", 550},
        {"Rara", 410},
    };
    
    // Sembuhkan mantra peretas: balik arah panahnya biar nyari yang besar duluan!
    ranges::sort(players, [](const auto& a, const auto& b) {
        return a.second < b.second; // BUG: Ini urutan kecil ke besar (Ascending!)
    });
    
    cout << "Winner: " << players[0].first << "\\n";
    return 0;
}`,
        expectedOutput: "Winner: Bonbon",
        xpReward: 300,
        coinReward: 110,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 100,
        hints: [
          { id: "h73-1", tier: 1, content: "Peretas menaruh operator `<`, ubah saja menjadi `>` agar yang disorot yang lebih besar nilainya.", costCoins: 10 },
          { id: "h73-2", tier: 2, content: "Tepatnya rubah barisnya jadi `return a.second > b.second;`", costCoins: 20 },
          { id: "h73-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<pair<string, int>> players = {{"Ciko", 320}, {"Bonbon", 550}, {"Rara", 410}};\n    ranges::sort(players, [](const auto& a, const auto& b) {\n        return a.second > b.second;\n    });\n    cout << "Winner: " << players[0].first << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 8 — KONKURENSI & C++23
  // ══════════════════════════════════════════════════════════
  {
    id: "world-8",
    title: "Dunia 8: Konkurensi & Format Baru",
    description: "Multi-core processor modern dengan jthread dan revolusi cetak teks canggih std::print.",
    order: 8,
    difficultyTier: "Expert",
    icon: "crown",
    levels: [
      {
        id: "level-8-1",
        worldId: "world-8",
        title: "std::jthread — Kuli Pintar (C++20)",
        content: `Bayangin kamu di dapur ngiris bawang, dan nyuruh koki cadangan masak nasi supaya kerjanya berbarengan, dua tangan gerak serentak. Ini yang disebut dunia paralel atau **Konkurensi (Concurrency)**.

Di zaman C++11 kuno, pakai \`std::thread\` kita bagai bos pemalas yang cuma nyuruh kuli, lalu ninggalin panggung dapur sebelum dia beres. Akhirnya? Dapur meledak (Crash) kalau kita lupa manggil kuli pulang pakai instruksi \`join()\`.

Nah, C++20 merilis spesies pekerja mandiri bernama **\`std::jthread\`**. Mirip Smart Pointers, kuli satu ini sopan: kalau kerjaan utamanya selesai, dia bakal otomatis join pulang sendiri ke bosnya.

### Kuli Mandiri
\`\`\`cpp
#include <thread>

// Begitu jthread tercipta, dia langsung eksekusi tanpa babibu
jthread koki([]{
    cout << "Lagi masak nasi di belahan bumi yang lain!\\n";
});

// Ga perlu lagi teriak koki.join(). Aman sentosa!
\`\`\`

**Kata Kunci Baru:**
- **Konkurensi** = Mengeksekusi beberapa instruksi program bersama-sama di rentang waktu beriringan demi hemat durasi asalkan tidak saling injak kaki.
- **Thread** = Satuan jalur tenaga pelaksana paling tipis dalam sebuah sistem operasi.

**Tugas kamu:**
Sewa dan suruh wujud jthread menyuarakan teks \`Thread Aktif!\` lewat sebuah tas belanjaan fungsi tak bernama (Lambda).`,
        starterCode: `#include <iostream>
#include <thread>
using namespace std;

int main() {
    // Siapkan wadah jthread dengan lambda kurung siku [] 
    jthread worker([] {
        cout << "Thread Aktif!\\n";
    });
    
    // Gak ada worker.join() di sini ya! Dia udah mandiri.
    return 0;
}`,
        expectedOutput: "Thread Aktif!",
        xpReward: 200,
        coinReward: 50,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h81-1", tier: 1, content: "Jthread sangat doyan menelan block lambda: `[] { ... }` langsung saat ia baru dibuat.", costCoins: 5 },
          { id: "h81-2", tier: 2, content: 'Bikin persis kek gini:\n`jthread worker([] {\n    cout << "Thread Aktif!\\n";\n});`', costCoins: 10 },
          { id: "h81-3", tier: 3, content: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    jthread worker([] {\n        cout << "Thread Aktif!\\n";\n    });\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-8-2",
        worldId: "world-8",
        title: "std::print — Cetak Rapi C++23",
        content: `Kamu pasti jengkel banget di sepanjang perjalanan ini harus merangkai teks pakai spasi plus rantai panas berganda \`<<\`. Gak enak dibaca!

Akhirnya, standar anyar C++23 ngerilis mainan paling estetik se-jagat raya untuk mencetak obrolan ke terminal: fitur **\`std::print\`**.
Sekarang, teks, angka, maupun campuran bebas bisa dijejali lewat tanda kurung kurawal bolong \`{}\` atau sebutannya slot kosong!

### Sihir Rangkai-Kata
\`\`\`cpp
#include <print>

// Lihatlah keagungan sihir ini:
print("Hello, {}!\\n", "World");
print("HP: {}, Mana: {}\\n", 100, 50);

// Nggak usah ada lagi deh sambungan rantai panas << cout << itu.
\`\`\`

**Penjelasan kelebihan:**
- C++ akan sangat waspada mencocokkan jumlah slot \`{}\` dengan barang yang kamu lempar di koma baliknya.
- Rute jaringannya direkayasa jauh lebih ngebut dibanding si usang \`cout\`.

**Kata Kunci Baru:**
- **Placeholder \`{}\`** = Tempat kosong di dalam tulisan santai yang bakal diganti jadi wujud isi variabel yang dilempar setelahnya.

**Tugas kamu:**
Langsung rapal sihir print untuk menjanjikan \`C++ 23 Siap!\` ke dunia konsol.`,
        starterCode: `#include <print>
using namespace std;

int main() {
    // Lupakan cout. Katakan halo dengan sihir C++23!
    print("C++ 23 Siap!\\n");
    return 0;
}`,
        expectedOutput: "C++ 23 Siap!",
        xpReward: 220,
        coinReward: 55,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h82-1", tier: 1, content: "Ketik lurus aja: `print(\"C++ 23 Siap!\\n\");` karena kita pakai namespace std.", costCoins: 5 },
          { id: "h82-2", tier: 2, content: 'Pastikan file `#include <print>` sudah diketuk ya (sudah default disediakan).', costCoins: 10 },
          { id: "h82-3", tier: 3, content: '#include <print>\nusing namespace std;\n\nint main() {\n    print("C++ 23 Siap!\\n");\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-8-3",
        worldId: "world-8",
        title: "Boss Realm 8: Race Condition Maut",
        content: `🔴 **BOSS BATTLE!**

Musuh paling menakutkan ketika kamu main banyak kuli (thread) sekaligus adalah: saling serobot kerja!
Sebutannya **Race Condition**. Coba bayangin kalau si kuli A nulis papan tulis angka "1", belum sempat geser kakinya, si kuli B main serobot langsung ngapus papan yang sama dan nulis lagi dari awal! Kekacauan ini mutlak terjadi kalau tidak diatur.

Solusi dewa untuk menangkal tabrakan lalu lintas ini adalah menancapkan borgol keamanan yang bernama **\`std::mutex\`** (Mutual Exclusion). Kalau satu kuli pakai toiletnya, yang lain harus antre nunggu.

### Gembok Pintu Penjaga: lock_guard
\`\`\`cpp
mutex toilet;

void pakaiWC() {
    // Siapa cepat dia yang masuk, dan toilet auto dikunci! 
    // Sisanya numpuk nunggu giliran gembok lepas dari lock_guard ini.
    lock_guard<mutex> lock(toilet);
    cout << "Lega..\\n";
} // lock_guard otomatis buka gembok toilet waktu fungsinya tutup kurung
\`\`\`

**Kata Kunci Baru:**
- **Race Condition** = Horor memori karena dua alur thread nabrak naruh data ke ruang yang persis sama.
- **Mutex** = Token kunci izin spesial yang ngebatasin "Hanya satu yang boleh sentuh data ini".

**Tugas kamu:**
Kalahkan serobotan liar di kode \`counter++\` pada fungsi inkremen ini dengan menyihir \`lock_guard\` sebelum variabel dihitung. Ini akan memaksa thread kedua menunggu agar total genap menyentuh \`2\`.`,
        starterCode: `#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

int counter = 0;
mutex mtx; // Ini anak gembok antreannya

void increment() {
    // BUG MEMATIKAN: Serobotan aktif gara-gara ketiadaan pengawal gembok (lock_guard)!
    lock_guard<mutex> lock(mtx);
    counter++;
}

int main() {
    jthread t1(increment);
    jthread t2(increment);
    
    // Jangan ubah ini ya, boss hanya mau cek hasil akhir.
    cout << "Counter: " << counter << "\\n";
    return 0;
}`,
        expectedOutput: "Counter: 2",
        xpReward: 350,
        coinReward: 150,
        order: 3,
        isBossLevel: true,
        timeLimitSec: 150,
        hints: [
          { id: "h83-1", tier: 1, content: "Buat panggil penjaganya, sebelum tulisan `counter++` pasang penjaga gembok: `lock_guard<mutex> lock(mtx);`", costCoins: 10 },
          { id: "h83-2", tier: 2, content: "Kuli 1 bakal megang `lock`, lalu `counter` jadi 1, keluar fungsi `lock` hancur, baru kuli 2 bisa masuk. Aman!", costCoins: 20 },
          { id: "h83-3", tier: 3, content: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nint counter = 0;\nmutex mtx;\n\nvoid increment() {\n    lock_guard<mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    jthread t1(increment);\n    jthread t2(increment);\n    cout << "Counter: " << counter << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
      {
        id: "level-8-4",
        worldId: "world-8",
        title: "Contract Guardian (C++26)",
        content: `Bayangin kamu bikin aturan main yang baku sebelum nyuruh orang bertugas: "sebelum lu nyentuh alatnya, pastiin kondisi ini", dan "kalau kerjanya udah kelar, targetnya harus berwujud kayak gini".
        
C++26 (standar C++ mutakhir yang resmi disahkan Maret 2026) ngerilis jurus tempel keren buat nitipin aturan langsung ke depan fungsi, namanya **Contracts**.

Kalau ada aturan yang diselewengkan, alih-alih komputermu jadi zombie yang ngerespon ngawur, ia mendingan langsung protes meledak ngasih tau letak pastinya.

### Anatomi Janji Suci C++26
- **\`pre\`** (...) — syarat yang HARUS diyakinkan SEBELUM perintah fungsi dibacakan.
- **\`post\`** (...) — sumpah yang HARUS ditepati SETELAH seluruh fungsi rampung dan melontarkan hasil.
- **\`contract_assert\`**(...) — pemeriksaan detektif polisi di pertengahan eksekusi fungsi.

### Membaca Cetak Biru Syarat:
\`\`\`cpp
// R artinya nama slot yang menampung jawaban buat dites nanti
int heal(int hp_sekarang)
    pre (hp_sekarang >= 0)
    post (r: r > hp_sekarang)
{
    contract_assert(hp_sekarang <= 100);
    return hp_sekarang + 20;
}
\`\`\`

*(Catatan: Ini adalah sekilas info masa depan, dan sayangnya sebagian besar server compiler pabrikan gratis hari ini belum semuanya sanggup meracik bumbu C++26. Level ini dikunci demi keamanan kompilasimu!)*

**Kata Kunci Baru:**
- **Precondition (pre)** = janji syarat utama sebelum bisa menyentuh dan menjalankan fungsi.
- **Postcondition (post)** = janji mutlak bukti kualitas sesudah hasil rampung diproduksi.

**Tugas kamu:** Perhatikan dan hafalkan ilmunya, lalu coba nikmati waktu ngodingmu!`,
        starterCode: `#include <iostream>
using namespace std;

// Fitur ini masih berevolusi dan rawan meledakkan Compiler jika dipaksa run
// karena GCC16 atau Clang19 ke atas lah yang baru siap mengunyahnya.

int main() {
    cout << "C++26 Kontrak siap menanti di masa depan!" << "\\n";
    return 0;
}`,
        expectedOutput: "C++26 Kontrak siap menanti di masa depan!",
        xpReward: 0,
        coinReward: 0,
        order: 4,
        isBossLevel: false,
        hints: [
          { id: "h84-1", tier: 1, content: "Belum ada yang perlu dicoding.", costCoins: 0 },
        ],
      },
    ],
  },
];
