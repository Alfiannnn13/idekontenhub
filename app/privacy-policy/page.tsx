import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Kebijakan Privasi</h1>
        <p className="text-lg text-gray-700 mb-6">
        Terakhir diperbarui: <span className="font-semibold">21 Agustus 2024</span>
        </p>
        <p className="text-gray-700 mb-4">
          Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan kepada kami saat menggunakan situs web kami.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Informasi yang Kami Kumpulkan</h2>
        <p className="text-gray-700 mb-4">
          Kami mengumpulkan berbagai jenis informasi untuk berbagai tujuan guna menyediakan dan meningkatkan Layanan kami kepada Anda. Informasi yang kami kumpulkan meliputi:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Informasi Pribadi: Nama, alamat email, nomor telepon, dll.</li>
          <li>Informasi Penggunaan: Data tentang bagaimana Anda menggunakan situs web kami.</li>
          <li>Informasi Teknis: Alamat IP, jenis perangkat, browser yang digunakan, dll.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Penggunaan Informasi</h2>
        <p className="text-gray-700 mb-4">
          Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Menyediakan dan memelihara Layanan kami.</li>
          <li>Menganalisis penggunaan Layanan untuk meningkatkan pengalaman pengguna.</li>
          <li>Berkomunikasi dengan Anda, termasuk memberikan pembaruan dan informasi terkait Layanan.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Keamanan Data</h2>
        <p className="text-gray-700 mb-4">
          Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, kami tidak dapat menjamin keamanan mutlak dari data Anda.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Hak Anda</h2>
        <p className="text-gray-700 mb-4">
          Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus informasi pribadi Anda yang kami simpan. Anda juga dapat meminta untuk membatasi penggunaan data pribadi Anda.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Perubahan Kebijakan Privasi</h2>
        <p className="text-gray-700 mb-4">
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di situs web kami. Anda disarankan untuk secara berkala memeriksa Kebijakan Privasi ini untuk perubahan.
        </p>

        
      </section>
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Hubungi Kami
        </h1>
        <p className="text-gray-700 mb-8">
        Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui WhatsApp
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
    </div>
  );
}
