import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
  const faqs = [
    { q: "Apa itu C++?", a: "C++ adalah bahasa pemrograman yang dipakai buat bikin berbagai macam software — dari game, aplikasi, sampai sistem operasi. Terkenal karena cepat dan masih banyak dipakai industri sampai sekarang." },
    { q: "Aku belum pernah ngoding sama sekali, bisa mulai dari sini?", a: "Bisa banget. CppForge dirancang dari nol, dimulai dari level paling dasar, tanpa asumsi kamu sudah tahu istilah pemrograman apapun." },
    { q: "Kenapa contoh kode di sini pakai 'using namespace std;'?", a: "Biar kamu bisa langsung pakai cout dan cin tanpa harus mikirin awalan tambahan dulu di tahap belajar. Ini cara penulisan yang valid dan memang dipakai untuk mempermudah, terutama saat belajar." },
    { q: "Apakah aku perlu install compiler C++ sendiri di laptop/HP?", a: "Tidak perlu. Begitu kamu klik 'Run Code', kode kamu langsung dijalankan di server, hasilnya muncul di layar." },
    { q: "Standar C++ apa yang dipakai di CppForge?", a: "Fondasi materi (Dunia 1-7) pakai C++17/20/23 yang sudah stabil dan didukung penuh semua compiler utama. Di Dunia 8 (Boss Realm), kamu juga akan kenalan sama Contracts — fitur dari C++26, standar C++ paling baru yang resmi disahkan Maret 2026. C++26 juga punya fitur lain seperti Reflection dan std::execution, tapi keduanya masih sangat baru dan belum dibahas mendalam di sini." },
    { q: "Kenapa jawabanku dianggap salah padahal menurutku hasilnya sama?", a: "Sistem membandingkan output secara persis — coba cek lagi spasi, huruf besar/kecil, dan tanda baca di kodemu." },
    { q: "Apa itu XP, SyntaxCoin, dan Badge?", a: "XP menunjukkan seberapa jauh progres belajarmu. SyntaxCoin adalah mata uang dalam game yang didapat dari menyelesaikan level, bisa dipakai buka hint tambahan. Badge adalah lencana pencapaian untuk momen-momen tertentu." },
    { q: "SyntaxCoin aku habis buat buka hint, gimana?", a: "Selesaikan level lain untuk dapat SyntaxCoin baru." },
    { q: "Apa itu Boss Battle?", a: "Tantangan debug kode dengan batas waktu di akhir tiap Dunia, buat menguji pemahamanmu sebelum lanjut ke Dunia berikutnya." }
  ];

  return (
    <div className="min-h-[100dvh] bg-[#09090b] font-sans text-zinc-100 flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg mb-2">
            <HelpCircle className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Frequently Asked Questions</h1>
          <p className="text-zinc-400 max-w-lg mt-2 text-sm md:text-base leading-relaxed">
            Pertanyaan yang paling sering ditanyakan seputar CppForge dan cara mainnya.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-zinc-200 hover:text-white transition-colors">
                <span>{faq.q}</span>
                <span className="transition-transform group-open:rotate-180 text-zinc-500">▼</span>
              </summary>
              <div className="p-5 pt-0 text-[15px] text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-2">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
