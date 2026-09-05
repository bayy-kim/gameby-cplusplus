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
        content: `Selamat datang di **C++ Modern**! Di C++ terbaru kita tidak perlu menulis \`std::\` berulang kali jika menggunakan *namespace*.
        
Setiap program C++ **wajib** memiliki satu fungsi \`main()\`. Program akan dieksekusi mulai dari dalam kurung kurawal fungsi tersebut.

### Contoh Program
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Selamat datang di CppForge!\\n";
    return 0;
}
\`\`\`

### Misi Kamu
Gunakan \`cout\` untuk mencetak sapaan pertamamu ke konsol.

**Kenapa \`"\\n"\` lebih baik dari \`endl\`?**
\`endl\` memaksa sistem untuk *flush* buffer setiap baris (sangat lambat). \`"\\n"\` cukup untuk mencetak *newline* biasa.

**Tugas:**
Cetak teks \`Hello, CppForge!\` ke layar diikuti dengan *newline*.`,
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
        content: `Di C++ modern (sejak C++11), kita bisa menggunakan \`auto\` agar *compiler* secara cerdas menebak tipe datanya. Ini membuat kode jauh lebih bersih dan terhindar dari *error mismatch* tipe data.

### Perbandingan:
| Cara Lama | Cara Modern |
|-----------|-------------|
| \`std::string name = "Ciko";\` | \`auto name = string{"Ciko"};\` |
| \`int level = 1;\` | \`auto level = 1;\` |

**Tugas:**
Gunakan \`auto\` untuk membuat variabel \`level\` bernilai \`1\` dan \`player\` bernilai \`"Ciko"\`. 
Lalu, cetak variabel tersebut dengan format gabungan:
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

Seorang penyusup merusak file *source code* sistem pertahanan awal kita! Kode C++ di bawah memiliki **3 bug** sintaks. 
Jika kamu mencoba menjalankannya sekarang, *compiler* akan menolak karena aturan penulisan yang ketat di C++.

### Log Error Compiler
\`\`\`text
error: missing terminating '>' character
error: expected ';' at end of declaration
error: expected ';' after expression
\`\`\`

Perbaiki semuanya agar sistem pertahanan menyala kembali dan outputnya sesuai target!

**Petunjuk Identifikasi Bug:** 
1. Perhatikan cara menutup *directive* include.
2. C++ *wajib* diakhiri dengan apa di setiap akhir baris (statement)?
3. Apakah kamu sudah menambahkan penutup kutip pada string?`,
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
          { id: "h3-1", tier: 1, content: "Periksa tag penutup #include dan titik koma (;) yang hilang.", costCoins: 10 },
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
    description: "Kuasai kontrol alur modern: if/else, switch dengan initializer C++17, dan range-based loop.",
    order: 2,
    difficultyTier: "Pemula",
    icon: "git-branch",
    levels: [
      {
        id: "level-2-1",
        worldId: "world-2",
        title: "If-Else & Initializer Modern",
        content: `C++17 memperkenalkan **if with initializer** — kamu bisa mendeklarasikan variabel langsung di dalam parameter \`if\`! Ini sangat berguna agar variabel tersebut tidak "bocor" (tinggal di memori) ke baris kode selanjutnya jika sudah tidak dibutuhkan.

### Contoh C++17:
\`\`\`cpp
// Variabel 'status' hanya ada di blok if ini
if (auto status = getStatus(); status == 200) { 
    cout << "OK"; 
}
\`\`\`

**Tugas:**
Buat deklarasi kondisi \`if-else\` tradisional atau modern. Jika \`score >= 75\` cetak \`LULUS\`, selainnya cetak \`GAGAL\`.`,
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
        content: `Komputer sangat cepat melakukan hal berulang. Perulangan \`for\` klasik memiliki 3 bagian: \`for (Inisiasi; Kondisi Batas; Increment)\`.

\`\`\`cpp
for (auto i = 0; i < 3; i++) {
    cout << "Hi! "; // Akan dicetak 3 kali
}
\`\`\`

**Tugas:**
Gunakan perulangan untuk mencetak angka 1 sampai 5. Setiap angka harus **dipisahkan oleh spasi** (namun perhatikan agar outputnya rapi sesuai target!).`,
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
          { id: "h22-1", tier: 1, content: "Jika kamu mencetak spasi di akhir angka 5 (seperti '1 2 3 4 5 '), output akan gagal karena ada spasi lebih.", costCoins: 5 },
          { id: "h22-2", tier: 2, content: 'Beri kondisi: if (i < 5) cout << i << " "; else cout << i;', costCoins: 10 },
          { id: "h22-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (auto i = 1; i <= 5; i++) {\n        cout << i;\n        if (i < 5) cout << " ";\n    }\n    cout << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-2-3",
        worldId: "world-2",
        title: "Boss Realm 2: Infinite Loop Demon",
        content: `🔴 **BOSS BATTLE!**

Program robot pertambangan ini error! Ia terjebak dalam **infinite loop** (perulangan tanpa henti) yang akan menyebabkan memori jebol. 
Masalahnya ada pada penggunaan instruksi \`while\`.

### Kode yang Rusak
\`\`\`cpp
while (i <= 5) {
    gold += i;
    // Variabel 'i' tidak bertambah! Loop ini abadi.
}
\`\`\`

Kalahkan iblis *infinite loop* ini dengan menambahkan *increment* (\`i++\`) agar logika hitungannya bergeser!

**Tugas:** Pastikan *output* mencetak akumulasi total gold dengan benar.`,
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
    description: "Kuasai array modern, std::vector, manipulasi teks, dan struct dengan designated initializers C++20.",
    order: 3,
    difficultyTier: "Menengah",
    icon: "database",
    levels: [
      {
        id: "level-3-1",
        worldId: "world-3",
        title: "Kekuatan std::vector",
        content: `Di C++ modern, kita **sangat disarankan** meninggalkan array klasik ala C (\`int arr[]\`) dan beralih menggunakan **\`std::vector\`**. Kenapa? Karena \`vector\` ukurannya bisa diubah-ubah secara dinamis dan memiliki pengecekan batas aman (Boundary Check).

\`\`\`cpp
#include <vector>
// ✅ Cara modern & aman
vector<int> scores = {90, 80, 95};

// Mengakses data bisa pakai [] atau .at()
cout << scores[1];     // Lebih cepat
cout << scores.at(1);  // Lebih aman (Mencegah crash aplikasi)
\`\`\`

**Tugas:**
Buat sebuah vector \`scores\` berisi angka \`{90, 80, 95}\`. Cetak elemen kedua (ingat, indeks komputer dimulai dari 0!).`,
        starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores = {90, 80, 95};
    
    // Cetak elemen indeks ke-1 di sini
    
    return 0;
}`,
        expectedOutput: "80",
        xpReward: 90,
        coinReward: 20,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h31-1", tier: 1, content: "Gunakan scores[1] atau scores.at(1).", costCoins: 5 },
          { id: "h31-2", tier: 2, content: 'cout << scores.at(1) << "\\n";', costCoins: 10 },
          { id: "h31-3", tier: 3, content: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {90, 80, 95};\n    cout << scores[1] << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-3-2",
        worldId: "world-3",
        title: "Struct & Designated Initializers (C++20)",
        content: `\`Struct\` adalah fondasi awal menyusun objek kompleks. Di C++20, menginisialisasi nilai ke dalam properti struct menjadi jauh lebih ekspresif berkat fitur *Designated Initializers*. Kita dapat menyebutkan properti apa yang sedang diisi!

\`\`\`cpp
struct Weapon {
    string name;
    int damage;
};

// ✅ C++20 Designated initializer
Weapon sword { .name = "Excalibur", .damage = 99 };
\`\`\`

**Tugas:**
Gunakan sintaks di atas untuk membuat objek \`Hero\` bernama \`"Bonbon"\` dan berlevel \`10\`.`,
        starterCode: `#include <iostream>
#include <string>
using namespace std;

struct Hero {
    string name;
    int    level;
};

int main() {
    // Inisialisasi struct ala C++20
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
          { id: "h32-1", tier: 1, content: 'Gunakan cout << "Hero: " << h.name ...', costCoins: 5 },
          { id: "h32-2", tier: 2, content: 'cout << "Hero: " << h.name << " (Lvl " << h.level << ")\\n";', costCoins: 10 },
          { id: "h32-3", tier: 3, content: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Hero { string name; int level; };\n\nint main() {\n    Hero h { .name = "Bonbon", .level = 10 };\n    cout << "Hero: " << h.name << " (Lvl " << h.level << ")\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-3-3",
        worldId: "world-3",
        title: "Boss Realm 3: Out-of-Bounds Titan",
        content: `🔴 **BOSS BATTLE!**

Kesalahan paling mematikan dalam menggunakan *Array* adalah mengakses kotak laci (indeks) yang tidak ada. Akibatnya: program **CRASH (Segfault)** atau ter-hack!

Program ini mencoba mengambil item terakhir. Namun ia memanggil indeks 3. Padahal jumlah data hanya 3. (Indeks: 0, 1, 2).

### Crash Report
\`\`\`text
Segmentation fault (core dumped)
Invalid memory access at inventory[3]
\`\`\`

**Tugas:** Perbaiki kode ini. Untuk akses item terakhir di \`std::vector\` secara instan dan modern, gunakan fungsi bawaan \`.back()\`.`,
        starterCode: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    vector<string> inventory = {"Sword", "Shield", "Potion"};
    
    // Bug: mengakses indeks di luar batas vector
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
          { id: "h33-1", tier: 1, content: "Vector berisi 3 elemen → maka indeks terjauh hanyalah 2.", costCoins: 10 },
          { id: "h33-2", tier: 2, content: "Ganti inventory[3] dengan inventory[2] atau inventory.back().", costCoins: 20 },
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
    title: "Dunia 4: Fungsi C++ Modern",
    description: "Merakit blok kode. Memahami Auto Parameter (Lambda), Reference vs Value, dan Rekursi.",
    order: 4,
    difficultyTier: "Menengah",
    icon: "box",
    levels: [
      {
        id: "level-4-1",
        worldId: "world-4",
        title: "Anonymous Function (Lambda)",
        content: `C++ Modern sangat sering menggunakan fungsi yang tak bernama yang bisa disimpan dalam variabel, disebut **Lambda Expression**. Sejak C++20, parameter lambda bisa langsung memakai kata kunci \`auto\`. Sangat sakti untuk membuat *callback* atau kode singkat.

\`\`\`cpp
// Format: [] (parameter) { isi kode }
auto kaliTiga = [](auto num) { 
    return num * 3; 
};
\`\`\`

**Tugas:**
Buatlah sebuah lambda bernama \`tambah\` yang menerima dua argumen dan mengembalikan hasil penjumlahannya. Terapkan lambda tersebut di dalam blok \`cout\`.`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // Sempurnakan lambda ini
    auto tambah = [](auto a, auto b) {
        // kembalikan hasil penjumlahan
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
          { id: "h41-1", tier: 1, content: "Di dalam kurung kurawal lambda, tulis `return a + b;`", costCoins: 5 },
          { id: "h41-2", tier: 2, content: "auto tambah = [](auto a, auto b) { return a + b; };", costCoins: 10 },
          { id: "h41-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto tambah = [](auto a, auto b) { return a + b; };\n    cout << tambah(15, 25) << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-4-2",
        worldId: "world-4",
        title: "Reference Parameters (&)",
        content: `Saat melempar variabel ke sebuah fungsi biasa, komputer akan *menggandakan* (copy) memori dari data tersebut (*Pass by Value*). Ini membuang memori jika objeknya besar seperti \`std::vector\`.

Solusinya: gunakan karakter \`&\` pada parameter agar komputer merujuk ke memori asli (*Pass by Reference*).

\`\`\`cpp
// Akan mengubah teks aslinya!
void upgradeWeapon(string& weapon) {
    weapon = weapon + " +1";
}
\`\`\`

**Tugas:**
Jadikan argumen fungsi \`heal\` sebagai *reference* sehingga efek penambahan \`+50\` HP berlaku permanen pada variabel \`heroHp\`.`,
        starterCode: `#include <iostream>
using namespace std;

// Tambahkan operator & pada parameternya
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
          { id: "h42-1", tier: 1, content: "Cukup tambahkan simbol ampersand '&' di parameter: void heal(int& hp)", costCoins: 5 },
          { id: "h42-2", tier: 2, content: "void heal(int& hp) { hp += 50; }", costCoins: 10 },
          { id: "h42-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nvoid heal(int& hp) {\n    hp += 50;\n}\n\nint main() {\n    auto heroHp = 20;\n    heal(heroHp);\n    cout << "HP sekarang: " << heroHp << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-4-3",
        worldId: "world-4",
        title: "Boss Realm 4: Stack Overflow Dragon",
        content: `🔴 **BOSS BATTLE!**

Fungsi rekursif ini dirancang memanggil dirinya sendiri. Tetapi ia tidak memiliki pengecualian (*Base Case*). Ia akan terus menerus turun hingga memori komputer hancur (disebut **Stack Overflow**).

### Rekursi Tanpa Batas
\`\`\`cpp
auto faktorial(int n) -> int {
    // Akan terus memanggil faktorial(4), (3), (2), (1), (0), (-1), (-2)...
    return n * faktorial(n - 1);
}
\`\`\`

Taklukkan naga rekursif ini dengan merantai ekornya! Berikan *Base Case* berupa instruksi \`if (n <= 1) return 1;\` di awal fungsi.

**Expected Output:** \`Faktorial 5 = 120\``,
        starterCode: `#include <iostream>
using namespace std;

// Penulisan tipe return modern ala C++ (Trailing return type)
auto faktorial(int n) -> int {
    // BUG: Segera kembalikan angka 1 jika n <= 1 !
    
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
          { id: "h43-1", tier: 1, content: "Tambahkan instruksi penghenti: if (n <= 1) return 1;", costCoins: 10 },
          { id: "h43-2", tier: 2, content: "Pastikan kode `if` tersebut berada di baris pertama sebelum `return n * faktorial...`", costCoins: 20 },
          { id: "h43-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nauto faktorial(int n) -> int {\n    if (n <= 1) return 1;\n    return n * faktorial(n - 1);\n}\n\nint main() {\n    cout << "Faktorial 5 = " << faktorial(5) << "\\n";\n    return 0;\n}', costCoins: 30 },
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
    description: "Kuasai Smart Pointer modern: unique_ptr, shared_ptr, dan weak_ptr. Tidak ada lagi new/delete manual.",
    order: 6,
    difficultyTier: "Mahir",
    icon: "cpu",
    levels: [
      {
        id: "level-6-1",
        worldId: "world-6",
        title: "unique_ptr — Kepemilikan Eksklusif",
        content: `Di C++ modern, kita **DILARANG** menggunakan `new` dan `delete` secara manual. Kenapa? Karena jika kita lupa memanggil `delete`, memori akan "bocor" selamanya — disebut **Memory Leak**.

Solusinya adalah **Smart Pointer** yang secara otomatis membebaskan memori saat sudah tidak dibutuhkan.

### unique_ptr — Satu Pemilik Saja
\`\`\`cpp
#include <memory>

// ✅ Modern: Gunakan make_unique<>()
auto weapon = make_unique<string>("Excalibur");
cout << *weapon << "\\n"; // Derefensi dengan *

// weapon akan otomatis dihapus saat keluar scope
// TIDAK PERLU delete!
\`\`\`

**Mengapa \`make_unique\` bukan \`new\`?**
\`make_unique\` lebih aman karena exception-safe dan hanya butuh satu baris.

**Tugas:**
Buat \`unique_ptr<int>\` bernama \`damage\` dengan nilai \`999\` menggunakan \`make_unique\`, lalu cetak nilainya.`,
        starterCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Buat unique_ptr dengan make_unique
    auto damage = make_unique<int>(999);
    
    // Cetak nilai dengan derefensi (*)
    cout << "Damage: " << *damage << "\\n";
    return 0;
}`,
        expectedOutput: "Damage: 999",
        xpReward: 140,
        coinReward: 35,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h61-1", tier: 1, content: "Gunakan `*damage` untuk mengakses nilai di dalam pointer.", costCoins: 5 },
          { id: "h61-2", tier: 2, content: 'cout << "Damage: " << *damage << "\\n";', costCoins: 10 },
          { id: "h61-3", tier: 3, content: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nint main() {\n    auto damage = make_unique<int>(999);\n    cout << "Damage: " << *damage << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-6-2",
        worldId: "world-6",
        title: "shared_ptr — Kepemilikan Bersama",
        content: `Berbeda dengan \`unique_ptr\` yang hanya boleh punya satu pemilik, **\`shared_ptr\`** memungkinkan banyak pemilik berbagi satu objek di memori. Objek baru benar-benar dihapus saat pemilik terakhir lepas.

Cara kerjanya menggunakan **Reference Counting** — menghitung berapa banyak \`shared_ptr\` yang menunjuk ke objek yang sama.

\`\`\`cpp
#include <memory>

auto shield = make_shared<string>("Aegis");
auto shield2 = shield; // Salin pointer, bukan data!

cout << shield.use_count(); // Output: 2 (ada 2 pemilik)
cout << *shield;            // Output: Aegis
\`\`\`

**Tugas:**
Buat \`shared_ptr<string>\` bernama \`item\` berisi \`"Holy Grail"\`. Salin ke \`item2\`. Lalu cetak jumlah pemiliknya menggunakan \`.use_count()\`.`,
        starterCode: `#include <iostream>
#include <memory>
#include <string>
using namespace std;

int main() {
    auto item  = make_shared<string>("Holy Grail");
    auto item2 = item; // shared ownership
    
    // Cetak jumlah pemilik (use_count)
    cout << "Owners: " << item.use_count() << "\\n";
    return 0;
}`,
        expectedOutput: "Owners: 2",
        xpReward: 160,
        coinReward: 40,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h62-1", tier: 1, content: "Gunakan `.use_count()` pada shared_ptr untuk mendapat jumlah pemilik.", costCoins: 5 },
          { id: "h62-2", tier: 2, content: 'cout << "Owners: " << item.use_count() << "\\n";', costCoins: 10 },
          { id: "h62-3", tier: 3, content: '#include <iostream>\n#include <memory>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto item  = make_shared<string>("Holy Grail");\n    auto item2 = item;\n    cout << "Owners: " << item.use_count() << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-6-3",
        worldId: "world-6",
        title: "Boss Realm 6: Memory Leak Phantom",
        content: `🔴 **BOSS BATTLE!**

Kode warisan ini menggunakan **\`new\` dan \`delete\` secara manual** — pola berbahaya yang sudah **DILARANG** di C++ modern!

Bayangkan jika fungsi ini dipanggil ribuan kali: setiap kali \`delete\` terlewat, memori sebesar 4 byte hilang selamanya. Dalam program server yang berjalan berhari-hari, ini bisa menghabiskan RAM!

### Kode yang Sudah Usang (C++98 Style)
\`\`\`cpp
int* p = new int(42); // Alokasi manual di heap
// ... jika exception terjadi di sini, delete tidak dipanggil!
delete p;             // Rawan lupa atau terlewati
\`\`\`

**Tugas:** Refaktor kode ini sepenuhnya menggunakan \`unique_ptr\` dan \`make_unique\`. Hapus semua \`new\` dan \`delete\` manual!`,
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // BUG: Menggunakan new/delete manual — gaya C++98!
    int* hp    = new int(100);
    int* mana  = new int(50);
    
    cout << "HP: " << *hp << " | Mana: " << *mana << "\\n";
    
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
          { id: "h63-1", tier: 1, content: "Ganti `int* hp = new int(100);` dengan `auto hp = make_unique<int>(100);`", costCoins: 10 },
          { id: "h63-2", tier: 2, content: "Setelah pakai make_unique, hapus baris `delete hp;` dan `delete mana;` — tidak dibutuhkan lagi.", costCoins: 20 },
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
    title: "Dunia 7: STL & Algoritma",
    description: "Manfaatkan kekuatan std::ranges C++20 untuk sort, filter, transform data tanpa menulis loop manual.",
    order: 7,
    difficultyTier: "Expert",
    icon: "layers",
    levels: [
      {
        id: "level-7-1",
        worldId: "world-7",
        title: "std::ranges::sort — Urutkan Data",
        content: `**Standard Template Library (STL)** adalah gudang senjata C++: koleksi *container*, *iterator*, dan *algoritma* siap pakai yang sudah sangat dioptimalkan.

Di C++20, STL mendapat tambahan besar berupa **Ranges** — cara menulis algoritma yang jauh lebih bersih dan readable. Tidak perlu lagi menyebut `.begin()` dan `.end()`!

### Perbandingan:
\`\`\`cpp
// Cara Lama (C++98/11)
sort(v.begin(), v.end());

// ✅ Cara Modern C++20 (Ranges)
ranges::sort(v);
\`\`\`

**Tugas:**
Urutkan vector \`scores = {50, 10, 80, 30}\` menggunakan \`ranges::sort\`. Lalu cetak elemen pertama (nilai terkecil setelah diurutkan).`,
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> scores = {50, 10, 80, 30};
    
    // Gunakan ranges::sort untuk mengurutkan
    ranges::sort(scores);
    
    // Cetak elemen pertama (terkecil)
    cout << "Min Score: " << scores[0] << "\\n";
    return 0;
}`,
        expectedOutput: "Min Score: 10",
        xpReward: 160,
        coinReward: 40,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h71-1", tier: 1, content: "Setelah ranges::sort, elemen terkecil ada di indeks [0].", costCoins: 5 },
          { id: "h71-2", tier: 2, content: 'ranges::sort(scores);\ncout << "Min Score: " << scores[0] << "\\n";', costCoins: 10 },
          { id: "h71-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {50, 10, 80, 30};\n    ranges::sort(scores);\n    cout << "Min Score: " << scores[0] << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-7-2",
        worldId: "world-7",
        title: "std::ranges::count_if — Filter Kondisi",
        content: `Salah satu operasi paling umum adalah **menghitung atau menyaring elemen** yang memenuhi kondisi tertentu. Dengan \`ranges::count_if\` dan Lambda, ini menjadi satu baris ekspresif!

\`\`\`cpp
vector<int> hp = {100, 30, 75, 15, 90};

// Hitung elemen yang nilainya > 50
auto alive = ranges::count_if(hp, [](auto x) { return x > 50; });
// alive = 3
\`\`\`

Pola ini adalah **Functional Programming** — kamu mendeklarasikan APA yang ingin dihitung, bukan BAGAIMANA caranya secara manual dengan loop.

**Tugas:**
Dari vector \`levels = {1, 5, 3, 8, 2, 7}\`, hitung berapa elemen yang nilainya **lebih dari 4** menggunakan \`ranges::count_if\`.`,
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> levels = {1, 5, 3, 8, 2, 7};
    
    // Hitung elemen yang > 4
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
          { id: "h72-1", tier: 1, content: "Nilai yang > 4 dari {1,5,3,8,2,7} adalah: 5, 8, 7 → total 3 elemen.", costCoins: 5 },
          { id: "h72-2", tier: 2, content: 'auto highLevel = ranges::count_if(levels, [](auto x) { return x > 4; });\ncout << "High Level Count: " << highLevel << "\\n";', costCoins: 10 },
          { id: "h72-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> levels = {1, 5, 3, 8, 2, 7};\n    auto highLevel = ranges::count_if(levels, [](auto x) { return x > 4; });\n    cout << "High Level Count: " << highLevel << "\\n";\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-7-3",
        worldId: "world-7",
        title: "Boss Realm 7: Unsorted Chaos Lord",
        content: `🔴 **BOSS BATTLE!**

Sistem penghargaan turnamen rusak! Ia harus mencari nama pemain dengan skor tertinggi, tapi datanya **berantakan dan tidak terurut**.

Programmu harus:
1. Urutkan vector pasangan \`{nama, skor}\` berdasarkan skor secara **menurun** (*descending*).
2. Cetak nama pemenang (elemen pertama setelah diurutkan).

### Alat yang Dibutuhkan:
\`\`\`cpp
// Urutkan dengan custom comparator
ranges::sort(players, [](const auto& a, const auto& b) {
    return a.second > b.second; // Descending (besar dulu)
});
\`\`\`

**Expected Output:** \`Winner: Bonbon\``,
        starterCode: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    vector<pair<string, int>> players = {
        {"Ciko", 320},
        {"Bonbon", 550},
        {"Rara", 410},
    };
    
    // Urutkan berdasarkan skor menurun (besar ke kecil)
    // Perbaiki lambda comparatornya!
    ranges::sort(players, [](const auto& a, const auto& b) {
        return a.second < b.second; // BUG: ini ascending, bukan descending!
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
          { id: "h73-1", tier: 1, content: "Bug-nya ada di tanda perbandingan `<` dalam lambda. Untuk descending, harus `>`.", costCoins: 10 },
          { id: "h73-2", tier: 2, content: "Ganti `a.second < b.second` menjadi `a.second > b.second`", costCoins: 20 },
          { id: "h73-3", tier: 3, content: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<pair<string, int>> players = {{\"Ciko\", 320}, {\"Bonbon\", 550}, {\"Rara\", 410}};\n    ranges::sort(players, [](const auto& a, const auto& b) {\n        return a.second > b.second;\n    });\n    cout << "Winner: " << players[0].first << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DUNIA 8 — KONKURENSI & C++23
  // ══════════════════════════════════════════════════════════
  {
    id: "world-8",
    title: "Dunia 8: Konkurensi & C++23",
    description: "Tingkat tertinggi: std::thread, std::jthread C++20, mutex, dan fitur terbaru C++23 seperti std::print.",
    order: 8,
    difficultyTier: "Expert",
    icon: "crown",
    levels: [
      {
        id: "level-8-1",
        worldId: "world-8",
        title: "std::jthread — Thread Modern (C++20)",
        content: `Konkurensi (Concurrency) memungkinkan program menjalankan banyak tugas secara bersamaan memanfaatkan multi-core CPU.

**\`std::thread\`** (C++11) adalah dasar, namun punya masalah: kita **wajib** memanggil \`.join()\` secara manual, dan jika lupa, program crash!

**\`std::jthread\`** (C++20) hadir sebagai solusi: ia **otomatis** memanggil \`.join()\` saat keluar scope — seperti smart pointer tapi untuk thread!

\`\`\`cpp
#include <thread>

// jthread otomatis join saat scope berakhir
jthread t([]{
    cout << "Hello dari thread lain!\\n";
});
// Tidak perlu t.join() manual!
\`\`\`

**Tugas:**
Buat \`jthread\` yang mencetak teks \`Thread Aktif!\` dari dalam lambda.`,
        starterCode: `#include <iostream>
#include <thread>
using namespace std;

int main() {
    // Buat jthread dengan lambda
    jthread worker([] {
        cout << "Thread Aktif!\\n";
    });
    
    // jthread otomatis join — tidak perlu worker.join()
    return 0;
}`,
        expectedOutput: "Thread Aktif!",
        xpReward: 200,
        coinReward: 50,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h81-1", tier: 1, content: "jthread menerima lambda sebagai argumen konstruktor. Lambda adalah `[]{...}`.", costCoins: 5 },
          { id: "h81-2", tier: 2, content: 'jthread worker([] {\n    cout << "Thread Aktif!\\n";\n});', costCoins: 10 },
          { id: "h81-3", tier: 3, content: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    jthread worker([] {\n        cout << "Thread Aktif!\\n";\n    });\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-8-2",
        worldId: "world-8",
        title: "std::print — Output Modern (C++23)",
        content: `C++23 memperkenalkan **\`std::print\`** — pengganti modern untuk \`printf\` dan pelengkap \`cout\`. Sintaksnya lebih bersih, type-safe, dan mendukung format string seperti Python!

\`\`\`cpp
#include <print>

// C++23: Type-safe, mirip Python f-string
print("Hello, {}!\\n", "World");
print("HP: {}, Mana: {}\\n", 100, 50);

// Tidak perlu << atau format manual!
\`\`\`

**Keunggulan \`std::print\`:**
- Tidak bisa salah tipe (type-safe) seperti \`printf("%d", str)\` yang bisa crash.
- Lebih cepat dari \`cout\` karena tidak perlu chaining \`<<\`.

**Tugas:**
Gunakan \`std::print\` untuk mencetak pesan \`C++ 23 Siap!\` ke konsol.`,
        starterCode: `#include <print>
using namespace std;

int main() {
    // Gunakan print() dari C++23
    print("C++ 23 Siap!\\n");
    return 0;
}`,
        expectedOutput: "C++ 23 Siap!",
        xpReward: 220,
        coinReward: 55,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h82-1", tier: 1, content: "Cukup tulis: print(\"C++ 23 Siap!\\n\");", costCoins: 5 },
          { id: "h82-2", tier: 2, content: '#include <print>\nusing namespace std;\n\nint main() {\n    print("C++ 23 Siap!\\n");\n    return 0;\n}', costCoins: 10 },
          { id: "h82-3", tier: 3, content: '#include <print>\nusing namespace std;\n\nint main() {\n    print("C++ 23 Siap!\\n");\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-8-3",
        worldId: "world-8",
        title: "Boss Final: Race Condition Overlord",
        content: `🔴 **BOSS FINAL — GRANDMASTER CHALLENGE!**

Ini adalah musuh terbesar dalam pemrograman konkuren: **Race Condition** — ketika dua thread mencoba mengubah data yang sama secara bersamaan, menghasilkan nilai yang tidak bisa diprediksi dan sangat sulit di-debug!

\`\`\`
Thread 1: baca counter (nilai: 0)
Thread 2: baca counter (nilai: 0)
Thread 1: tulis counter = 0 + 1 = 1
Thread 2: tulis counter = 0 + 1 = 1  ← Harusnya 2, bukan 1!
\`\`\`

Solusinya adalah **\`std::mutex\`** (Mutual Exclusion) — kunci yang memastikan hanya satu thread yang boleh mengakses data kritis pada satu waktu.

**Tugas:**
Perbaiki kode ini dengan menambahkan \`mutex\` dan \`lock_guard\` di dalam loop thread sehingga nilai \`counter\` akhir selalu tepat \`2\`.`,
        starterCode: `#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

int counter = 0;
mutex mtx; // Penjaga data

void increment() {
    // BUG: Tidak ada lock! Bisa terjadi race condition.
    counter++;
}

int main() {
    jthread t1(increment);
    jthread t2(increment);
    // jthread otomatis join di akhir scope
    
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
          { id: "h83-1", tier: 1, content: "Di dalam fungsi `increment()`, tambahkan `lock_guard<mutex> lock(mtx);` sebelum `counter++`.", costCoins: 10 },
          { id: "h83-2", tier: 2, content: "void increment() {\n    lock_guard<mutex> lock(mtx);\n    counter++;\n}", costCoins: 20 },
          { id: "h83-3", tier: 3, content: '#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nint counter = 0;\nmutex mtx;\n\nvoid increment() {\n    lock_guard<mutex> lock(mtx);\n    counter++;\n}\n\nint main() {\n    jthread t1(increment);\n    jthread t2(increment);\n    cout << "Counter: " << counter << "\\n";\n    return 0;\n}', costCoins: 30 },
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
    description: "Membangun cetak biru dunia. Memahami Class, Access Modifier, Polymorphism, dan Encapsulation.",
    order: 5,
    difficultyTier: "Mahir",
    icon: "shield",
    levels: [
      {
        id: "level-5-1",
        worldId: "world-5",
        title: "Default Member Initializer",
        content: `Konsep OOP berputar di *Class* yang menaungi data (property) dan fungsi (method). Di C++ modern, *property* dapat memiliki nilai asal secara langsung saat dideklarasikan di kelasnya, menghemat pengetikan panjang di *Constructor*.

\`\`\`cpp
class Player {
    int hp = 100;   // ✅ default member initializer (C++11/14+)
public:
    void attack() { cout << "Serangan!\\n"; }
};
\`\`\`

**Tugas:**
Buat objek (instance) dari class \`Player\` di dalam fungsi utama, lalu panggil metode serangannya untuk memunculkan sapaan serangan \`Serangan C++!\`.`,
        starterCode: `#include <iostream>
using namespace std;

class Player {
public:
    void attack() { 
        cout << "Serangan C++!\\n"; 
    }
};

int main() {
    // 1. Buat instansi Player
    // 2. Panggil p.attack()
    
    return 0;
}`,
        expectedOutput: "Serangan C++!",
        xpReward: 130,
        coinReward: 30,
        order: 1,
        isBossLevel: false,
        hints: [
          { id: "h51-1", tier: 1, content: "Ketik: Player p;\nlalu di bawahnya ketik: p.attack();", costCoins: 5 },
          { id: "h51-2", tier: 2, content: "Jangan lupa ini ada di dalam blok fungsi `int main()`. Class Player sudah benar strukturnya.", costCoins: 10 },
          { id: "h51-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Player {\npublic:\n    void attack() {\n        cout << "Serangan C++!\\n";\n    }\n};\n\nint main() {\n    Player p;\n    p.attack();\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-5-2",
        worldId: "world-5",
        title: "Polymorphism dengan 'override'",
        content: `*Polymorphism* (banyak bentuk) memungkinkan class anak menimpa (*override*) fungsi dari class ayahnya secara dinamis. Di C++ Modern, sangat diwajibkan menuliskan atribut \`override\` agar kompilator tahu kita berniat menimpa, bukan sekadar salah ketik!

**Tugas:**
Minta kelas anak \`Warrior\` menimpa metode virtual \`attack()\` dari kelas \`Hero\` dan menempelkan tulisan \`Slash!\`.`,
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
    // Tulis fungsi void attack() override { ... }
    
};

int main() {
    Warrior w;
    Hero* h = &w;  // Akses lewat pointer parent
    h->attack();   // Harus memanggil versi Warrior
    return 0;
}`,
        expectedOutput: "Slash!",
        xpReward: 140,
        coinReward: 40,
        order: 2,
        isBossLevel: false,
        hints: [
          { id: "h52-1", tier: 1, content: "Dalam Warrior, buat: void attack() override { cout << \"Slash!\\n\"; }", costCoins: 5 },
          { id: "h52-2", tier: 2, content: "Pastikan menggunakan keyword 'override' di ujung deklarasi metode.", costCoins: 10 },
          { id: "h52-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Hero {\npublic:\n    virtual void attack() { cout << "Punch!\\n"; }\n};\n\nclass Warrior : public Hero {\npublic:\n    void attack() override {\n        cout << "Slash!\\n";\n    }\n};\n\nint main() {\n    Warrior w;\n    Hero* h = &w;\n    h->attack();\n    return 0;\n}', costCoins: 20 },
        ],
      },
      {
        id: "level-5-3",
        worldId: "world-5",
        title: "Boss Realm 5: Encapsulation Breach",
        content: `🔴 **BOSS BATTLE!**

Ada pelanggaran data parah! Properti \`hp\` milik sang Knight bisa diakses bebas dari luar kelas karena level aksusnya salah!
Dalam teori Encapsulation (Penyelubungan), properti sebaiknya \`private\`, dan hanya bisa dibaca/diubah lewat _Getter/Setter_.

Lebih kuat lagi: di C++17, atribut khusus \`[[nodiscard]]\` ditambahkan ke depan fungsi getter agar pemrogram tidak mengabaikan data balasan (*return value*).

**Tugas:** Amankan \`hp\` dan ciptakan *Getter* \`getHp()\` yang aman.`,
        starterCode: `#include <iostream>
using namespace std;

class Knight {
    // BUG: hp masih public! Turunkan privasinya.
public:
    int hp;
};

int main() {
    Knight k;
    
    // Perbaiki kode ini: harusnya k.setHp(80) dan k.getHp()
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
          { id: "h53-1", tier: 1, content: "Pindahkan `int hp;` ke bagian `private:` di dalam kelas Knight.", costCoins: 10 },
          { id: "h53-2", tier: 2, content: "Lalu buat di public:\nvoid setHp(int h) { hp = h; }\n[[nodiscard]] int getHp() const { return hp; }", costCoins: 20 },
          { id: "h53-3", tier: 3, content: '#include <iostream>\nusing namespace std;\n\nclass Knight {\nprivate:\n    int hp{};\npublic:\n    void setHp(int h) { hp = h; }\n    [[nodiscard]] int getHp() const { return hp; }\n};\n\nint main() {\n    Knight k;\n    k.setHp(80);\n    cout << "Current HP: " << k.getHp() << "\\n";\n    return 0;\n}', costCoins: 30 },
        ],
      },
    ],
  },
];
