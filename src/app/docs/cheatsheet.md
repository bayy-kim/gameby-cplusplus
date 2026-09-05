# C++ Modern Cheat Sheet

Gunakan dokumen ini sebagai panduan cepat (referensi) saat Anda sedang mengerjakan misi di **GAMEBY_C++**.
Dokumen ini merangkum sintaks dan praktik terbaik C++ modern (C++17, C++20, C++23).

---

## 1. Fondasi C++ Modern

### Struktur Dasar Program
Di C++ modern, hindari penggunaan `std::` berulang kali jika Anda sedang belajar atau menulis skrip cepat. Gunakan `using namespace std;` untuk membuat kode lebih bersih.

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!\\n";
    return 0;
}
\`\`\`

### Menghindari `std::endl`
\`endl\` memaksa program untuk melakukan proses "flush" pada buffer memori. Ini sangat lambat jika digunakan dalam perulangan. Gunakan karakter newline \`\\n\` sebagai gantinya.

\`\`\`cpp
// ❌ Jangan gunakan ini
cout << "Baris satu" << endl;

// ✅ Gunakan ini (Jauh lebih cepat)
cout << "Baris satu\\n";
\`\`\`

---

## 2. Variabel & Logika

### Kata Kunci `auto`
Biarkan *compiler* menebak tipe data secara otomatis.

\`\`\`cpp
auto name = "Ciko";        // const char*
auto level = 1;            // int
auto score = 85.5;         // double
auto isAlive = true;       // bool
auto player = string{"Ana"}; // std::string eksplisit
\`\`\`

### If-Else dengan Initializer (C++17)
Bermanfaat untuk menjaga cakupan (scope) variabel agar tidak "bocor" ke luar if.

\`\`\`cpp
if (auto score = getScore(); score >= 75) {
    cout << "LULUS\\n";
} else {
    cout << "GAGAL: " << score << "\\n";
}
// Variabel 'score' sudah tidak ada di memori pada baris ini (Aman!)
\`\`\`

---

## 3. Struktur Data & Perulangan

### Jangan Gunakan C-Style Array
Selalu gunakan \`std::vector\` untuk array dinamis, atau \`std::array\` untuk array berukuran tetap.

\`\`\`cpp
#include <vector>
using namespace std;

// Membuat vector
vector<string> items = {"Pedang", "Perisai", "Ramuan"};

// Menambahkan elemen baru
items.push_back("Peta");

// Mengakses elemen terakhir
cout << items.back() << "\\n";
\`\`\`

### Range-Based For Loop
Melakukan iterasi atau perulangan melalui elemen-elemen struktur data menjadi jauh lebih sederhana tanpa berurusan dengan indeks secara manual.

\`\`\`cpp
vector<int> scores = {90, 80, 95};

// ❌ Cara Lama (rawan salah ketik batas index)
for (int i = 0; i < scores.size(); i++) {
    cout << scores[i] << " ";
}

// ✅ Cara Modern (Bersih dan Aman)
for (auto& s : scores) {
    cout << s << " ";
}
\`\`\`

---

## 4. Smart Pointers (Anti Memory Leak)

C++ tidak memiliki *Garbage Collector* seperti Java atau C#. Jika Anda menggunakan \`new\`, Anda **wajib** memanggil \`delete\`. 
Di C++ modern, kita **SANGAT DILARANG** menggunakan \`new\`/\`delete\`. Gunakan \`std::make_unique\` dari pustaka \`<memory>\`.

\`\`\`cpp
#include <memory>
using namespace std;

int main() {
    // Memori dialokasikan secara dinamis
    auto weaponDamage = make_unique<int>(999);
    
    cout << "Damage: " << *weaponDamage << "\\n";
    
    // TIDAK PERLU DELETE!
    // Memori otomatis dibersihkan saat program mencapai blok penutup '}'
    return 0;
}
\`\`\`

---

## 5. Algoritma (Ranges C++20)

Pustaka \`<algorithm>\` kini jauh lebih ringkas. Anda tidak perlu lagi mengetikkan `.begin()` dan `.end()`.

\`\`\`cpp
#include <algorithm>
#include <vector>
using namespace std;

vector<int> nums = {5, 2, 8, 1, 9};

// ❌ Cara C++ lama
sort(nums.begin(), nums.end());

// ✅ Cara C++20 Ranges
ranges::sort(nums);
\`\`\`
