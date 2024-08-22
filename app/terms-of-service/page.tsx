import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Syarat dan Ketentuan Layanan
      </h1>
      <p className="text-gray-700 mb-6">
        Terakhir diperbarui: <span className="font-semibold">21 Agustus 2024</span>
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          1. Penerimaan Syarat
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk mematuhi Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan salah satu ketentuan, Anda dilarang menggunakan layanan kami.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          2. Deskripsi Layanan
        </h2>
        <p className="text-gray-700 leading-relaxed">
          CognifyVerse menyediakan berbagai alat berbasis AI untuk membantu Anda dalam menciptakan, mengoptimalkan, dan mengelola konten. Layanan ini dapat mencakup, namun tidak terbatas pada, generator konten, alat optimasi SEO, dan alat manajemen konten.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          3. Akun Pengguna
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Untuk menggunakan beberapa fitur dari layanan kami, Anda mungkin perlu membuat akun. Anda bertanggung jawab untuk menjaga kerahasiaan akun Anda dan bertanggung jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          4. Privasi
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Privasi Anda sangat penting bagi kami. Harap tinjau <Link href="/privacy" className="text-blue-500 hover:underline">Kebijakan Privasi</Link> kami yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          5. Batasan Tanggung Jawab
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Layanan kami disediakan "sebagaimana adanya" tanpa jaminan apapun. Kami tidak bertanggung jawab atas kerusakan apapun yang timbul dari penggunaan layanan kami.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          6. Perubahan pada Syarat dan Ketentuan
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Kami berhak untuk mengubah atau memperbarui Syarat dan Ketentuan ini kapan saja. Setiap perubahan akan diberitahukan kepada Anda melalui email atau melalui pemberitahuan di situs kami.
        </p>
      </section>

      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Hubungi Kami
        </h1>
        <p className="text-gray-700 mb-8">
          Jika Anda memiliki pertanyaan atau memerlukan bantuan lebih lanjut, jangan ragu untuk menghubungi kami melalui WhatsApp:
        </p>
        <a
          href="https://wa.me/6281213528024"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Hubungi Kami di WhatsApp
        </a>
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-500">&copy; 2024 CognifyVerse. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}
