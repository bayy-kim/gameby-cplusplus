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

Kalahkan iblis *infinite loop* ini dengan memperbaiki logika hitungannya!

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

Taklukkan naga rekursif ini dengan merantai ekornya (berikan *Base Case*)!

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
