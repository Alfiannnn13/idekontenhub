export default [
  {
    name: "Youtube Judul SEO",
    desc: "Alat AI yang membantu lo bikin judul SEO YouTube yang menarik dan optimal, sesuai dengan konten video lo.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Berikan 5 ide judul YouTube yang dioptimalkan SEO berdasarkan kata kunci dan deskripsi yang diberikan",
    form: [
      {
        label: "Masukkan kata kunci topik video YouTube lo",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Masukkan draft deskripsi YouTube di sini",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Deskripsi",
    desc: "AI yang membantu lo bikin deskripsi YouTube yang menarik dan relevan untuk video lo.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Buat deskripsi YouTube yang menarik dan relevan, tambahkan emoji untuk menambah daya tarik, berdasarkan topic dan outline yang diberikan.",
    form: [
      {
        label: 'Masukkan deskripsi video YouTube lo di sini',
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Masukkan draft deskripsi YouTube di sini",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "AI yang membantu lo bikin tag YouTube yang relevan dan efektif untuk video lo.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Buatkan 10 tag YouTube yang relevan dalam format poin berdasarkan title dan outline video",

    form: [
      {
        label: "Masukan Judul Youtube",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Masukkan rencana video YouTube di sini (Opsional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Alat yang membantu lo membuat postingan Instagram dengan ide dan teks yang siap pakai",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Buatkan 4 postingan Instagram berdasarkan keywords yang diberikan, hasilkan dalam format teks kaya yang siap untuk di-posting.",
    form: [
      {
        label: "Masukkan kata kunci buat postingan lo",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Hashtag Instagram",
    desc: "Alat yang membantu lo bikin hashtag Instagram yang relevan dan trending untuk meningkatkan jangkauan postingan lo",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Buatkan 15 hashtag Instagram yang trending berdasarkan kata kunci yang diberikan, hasilkan dalam format teks kaya yang siap digunakan.",
    form: [
      {
        label: "Masukkan kata kunci untuk hashtag Instagram lo",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Ide",
    desc: "AI yang kasih lo ide kreatif untuk postingan atau reel Instagram, supaya konten lo selalu fresh dan menarik.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Buatkan 5-10 ide postingan atau reel Instagram berdasarkan kata kunci atau topik yang diberikan, mengikuti tren terbaru, dan hasilkan dalam format teks kaya yang siap digunakan.",
    form: [
      {
        label: "Masukkan kata kunci / topik untuk ide Instagram lo",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Judul Blog",
    desc: "AI yang menghasilkan judul blog berdasarkan informasi blogmu.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Buatkan 5 judul blog yang SEO-friendly berdasarkan niche dan textarea yang diberikan, dan tampilkan hasilnya dalam format teks kaya yang siap digunakan.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Masukkan topik blog lo",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Masukkan rencana blog lo",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Konten Blog",
    desc: "AI yang jadi penulis judul blog pribadi lo, bikin judul yang menarik dan bisa viral berdasarkan konten blog lo dalam bahasa yang lo pilih.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Buatkan konten blog yang lengkap dan menarik berdasarkan topic dan textarea yang diberikan dalam format teks kaya yang siap di-publish.",
    form: [
      {
        label: "Masukkan topik blog lo",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Masukkan rencana blog di sini",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Ide Topik Blog",
    desc: "Alat AI yang jadi asisten pribadi lo dalam menentukan ide topik blog, bikin ide-ide menarik.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Buatkan 5 ide topik blog terbaik dalam format poin berdasarkan niche yang diberikan tanpa deskripsi tambahan, dan tampilkan hasilnya dalam format teks kaya.",
    form: [
      {
        label: "Masukkan Topik",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },

  {
    name: "Tulis Ulang Artikel (Tanpa Plagiarisme)",
    desc: "Gunakan alat ini untuk menulis ulang artikel atau posting blog yang ada agar bebas dari plagiarisme dan dapat menghindari detektor AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Tulis ulang artikel atau posting blog yang diberikan agar bebas dari plagiarisme dan dapat menghindari detektor AI. Tampilkan hasilnya dalam format editor teks kaya.",
    form: [
      {
        label:
          "🤖 Berikan artikel, posting blog, atau konten lain yang ingin ditulis ulang.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Alat praktis ini menyempurnakan tulisan Anda, menghilangkan kesalahan dan redundansi untuk hasil yang jelas dan mudah dibaca. Alat ini juga menawarkan analisis nada secara menyeluruh dan menyarankan pilihan kata yang lebih baik.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Tulis ulang teks yang diberikan tanpa kesalahan tata bahasa dan secara profesional dalam format editor teks kaya.",
    form: [
      {
        label: "Masukkan teks yang ingin Anda perbaiki atau tingkatkan",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Tambahkan Emoji ke Teks",
    desc: "AI ini menambahkan emoji ke teks Anda, membuatnya lebih menarik dan ekspresif. Cocok untuk mempercantik postingan blog atau konten lain.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Tambahkan emoji ke teks yang diberikan berdasarkan outline dan tulis ulang dalam format editor teks kaya",
    form: [
      {
        label: "Masukkan teks yang ingin ditambahkan emoji",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },

  {
    name: "Pemeriksaan Tata Bahasa Inggris",
    desc: "Model AI untuk memperbaiki tata bahasa Inggris Anda dengan menyediakan teks yang ingin diperiksa.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Perbaiki tata bahasa teks yang diberikan dan hasilkan dalam format editor teks kaya",
    form: [
      {
        label: "Masukkan teks untuk memperbaiki tata bahasa",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "Model AI untuk menghasilkan kode pemrograman dalam bahasa apa pun.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
    "Berdasarkan deskripsi kode dari pengguna, tulis kode dan hasilkan dalam format blok kode di editor teks kaya",
    form: [
      {
        label: "Masukkan deskripsi kode yang diinginkan beserta bahasa pemrogramannya",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Model AI untuk menjelaskan kode pemrograman dalam bahasa apa pun.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Berdasarkan deskripsi kode dari pengguna, jelaskan kode tersebut baris per baris dan hasilkan dalam format blok kode di editor teks kaya",
    form: [
      {
        label: "Masukkan kode yang ingin lo pahami",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Alat ini menganalisis input Anda, seperti pesan kesalahan dan potongan kode, untuk menemukan dan memperbaiki bug, serta memberikan solusi dan alternatif secara jelas dan mudah dipahami.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Berdasarkan input kode dari pengguna, temukan bug dalam kode tersebut dan berikan solusi serta hasilkan dalam format blok kode di editor teks kaya",
    form: [
      {
        label: "Masukkan kode yang mau lo uji tes bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Kesulitan menemukan tagline yang sempurna untuk merek Anda? Biarkan alat AI kami membantu Anda membuat tagline yang menonjol.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Berdasarkan nama produk dan deskripsi dari pengguna, buat 5-10 tagline menarik untuk produk bisnis dan tampilkan dalam format editor teks kaya",
    form: [
      {
        label: "Nama Produk/Merek",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Apa yang lo jual / Pemasaran",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Deskripsi Produk",
    desc: "Ini adalah ahli SEO berbasis AI Anda, yang membuat deskripsi produk e-commerce yang menarik dan kaya kata kunci untuk meningkatkan penjualan online Anda.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Berdasarkan nama produk dan deskripsi dari pengguna, buat deskripsi singkat untuk produk e-commerce dan tampilkan dalam format editor teks kaya",
    form: [
      {
        label: "Nama Produk",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Detail Produk",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];