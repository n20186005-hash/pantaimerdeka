import type { LocaleKey } from './config';

export interface AltTextSet {
  hero: string;
  sunset: string;
  walkway: string;
  shade: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContentDictionary {
  meta: {
    title: string;
    description: string;
    skipToContent: string;
    brandLabel: string;
    shareImageAlt: string;
  };
  nav: {
    plan: string;
    food: string;
    directions: string;
    faq: string;
  };
  localeSwitch: {
    label: string;
  };
  hero: {
    region: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    coordsLabel: string;
    coordsValue: string;
    accessLabel: string;
    accessValue: string;
    scrollNote: string;
  };
  intro: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    facts: {
      location: { label: string; value: string };
      entry: { label: string; value: string };
      suitable: { label: string; value: string };
      note: { label: string; value: string };
    };
    caption: string;
  };
  visit: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    items: { label: string; value: string }[];
    leaveNoTrace: string;
    fieldNote: {
      lines: [string, string, string];
      tip: string;
    };
  };
  experience: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    walkwayTag: string;
    items: { title: string; copy: string }[];
  };
  food: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    items: { title: string; copy: string }[];
    caption: string;
  };
  routes: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    cards: { span: string; title: string; copy: string }[];
    mapLabel: string;
  };
  nearby: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    cards: { span: string; title: string; copy: string }[];
  };
  gallery: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    photos: string[];
  };
  faq: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    copy: string;
    items: FaqItem[];
  };
  footer: {
    disclaimer: string;
    links: { plan: string; directions: string; faq: string };
    legal: { privacy: string; terms: string; cookies: string };
    copyright: string;
    imageRights: string;
  };
  legal: {
    privacy: {
      meta: { title: string; description: string };
      pageTitle: string;
      updated: string;
      intro: string;
      sections: { heading: string; paragraphs: string[]; list?: string[] }[];
    };
    terms: {
      meta: { title: string; description: string };
      pageTitle: string;
      updated: string;
      intro: string;
      sections: { heading: string; paragraphs: string[]; list?: string[] }[];
    };
    cookies: {
      meta: { title: string; description: string };
      pageTitle: string;
      updated: string;
      intro: string;
      categories: { name: string; chip: string; status: string; desc: string; items?: { name: string; chip: string; status: string; desc: string }[] }[];
      management: { title: string; paragraphs: string[]; actions: { save: string; reject: string } };
    };
  };
  alt: AltTextSet;
  stamps: {
    intro: string;
    visit: string;
    experience: string;
    food: string;
    routes: string;
    nearby: string;
    gallery: string;
    faq: string;
  };
  jsonLd: {
    placeName: string;
    placeDescription: string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
    openingHoursLabel: string;
    ratingNote: string;
    faqType: string;
  };
}

export const dictionary: Record<LocaleKey, ContentDictionary> = {
  ms: {
    meta: {
      title: 'Pantai Merdeka Kedah · Panduan Pantai, Bot Tanjung Dawai & Chalet',
      description: 'Panduan Pantai Merdeka, Kedah: arah ke pantai, bot penambang ke Tanjung Dawai, chalet & homestay berdekatan, makanan laut, serta tempat menarik seperti Pulau Sayak.',
      skipToContent: 'Lompat ke kandungan',
      brandLabel: 'Pantai Merdeka, kembali ke permulaan',
      shareImageAlt: 'Pemandangan pantai dan laut di Pantai Merdeka'
    },
    nav: { plan: 'Rancang', food: 'Makan', directions: 'Arah', faq: 'FAQ' },
    localeSwitch: { label: 'Bahasa' },
    hero: {
      region: 'Kota Kuala Muda · Kedah',
      title: 'Laut, angin & petang yang panjang.',
      lede: 'Pantai Merdeka ialah tempat untuk tiba perlahan, membentang tikar, makan sesuatu yang hangat dan menunggu warna langit berubah.',
      primaryCta: 'Cari arah',
      secondaryCta: 'Rancang lawatan',
      coordsLabel: 'Koordinat',
      coordsValue: '5.666111° U\n100.367500° T',
      accessLabel: 'Akses kawasan',
      accessValue: 'Setiap hari\nSepanjang hari',
      scrollNote: 'Ikut garisan air'
    },
    intro: {
      sectionNumber: '01 — Kenali pantai',
      eyebrow: 'Seperti yang ada',
      title: 'Bukan resort. Itulah pesonanya.',
      copy: 'Di pesisir Kuala Muda, Pantai Merdeka lebih dekat kepada ritual keluarga hujung minggu daripada destinasi yang dibina-bina. Ruangnya terbuka, suasananya kampung dan petangnya paling sesuai dinikmati tanpa tergesa-gesa.',
      facts: {
        location: { label: 'Lokasi', value: '08500 Kota Kuala Muda, Kedah' },
        entry: { label: 'Masuk', value: 'Kawasan pantai lazimnya percuma' },
        suitable: { label: 'Sesuai untuk', value: 'Berjalan, berkelah & melihat senja' },
        note: { label: 'Nota', value: 'Kemudahan beroperasi mengikut pengendali' }
      },
      caption: 'DATANG UNTUK CAHAYA PETANG, TINGGAL UNTUK ANGIN LAUT'
    },
    visit: {
      sectionNumber: '02 — Rancang hari',
      eyebrow: 'Nota praktikal',
      title: 'Petang yang mudah, jika tahu apa hendak dibawa.',
      copy: 'Ambil yang perlu, jangka cuaca panas pada tengah hari dan simpan ruang untuk spontan. Pantai ini lebih baik sebagai lawatan santai daripada jadual yang padat.',
      items: [
        { label: 'Masa terbaik', value: 'Lewat petang hingga senja untuk cahaya yang lebih lembut dan angin laut yang lazimnya lebih selesa.' },
        { label: 'Tempoh tinggal', value: 'Rancang sekitar 2–4 jam untuk bersiar, berkelah, makan dan melihat langit berubah.' },
        { label: 'Bayaran', value: 'Akses pantai dilaporkan percuma; bawa wang kecil untuk tandas, makanan, aktiviti atau bot jika ada.' },
        { label: 'Parkir', value: 'Kawasan letak kereta berhampiran pantai biasanya tersedia. Hujung minggu dan cuti boleh lebih sibuk; tiba awal jika perlu.' }
      ],
      leaveNoTrace: 'Jaga pantai bersama-sama. Bawa pulang sampah, gunakan tong yang ada dan jangan memberi makan hidupan liar yang menghampiri kawasan pelawat.',
      fieldNote: {
        lines: ['Nota lapangan', 'Kuala Muda', 'Pesisir Kedah'],
        tip: 'Tip ringkas: bawa topi, air minuman, tikar dan sedikit wang tunai. Periksa cuaca, keadaan laut dan arahan keselamatan setempat sebelum masuk ke air.'
      }
    },
    experience: {
      sectionNumber: '03 — Buat perlahan',
      eyebrow: 'Ritma pantai',
      title: 'Biarkan hari bergerak seperti ombak.',
      walkwayTag: 'Ruang terbuka, rentak sendiri',
      items: [
        { title: 'Berjalan di tepi air', copy: 'Pilih kasut yang sesuai untuk permukaan pesisir dan nikmati garis air mengikut keadaan pasang surut.' },
        { title: 'Hampar tikar', copy: 'Ruang pantai sesuai untuk keluarga yang mahu berehat, makan ringan dan membiarkan anak-anak bermain di kawasan yang dipantau.' },
        { title: 'Tunggu senja', copy: 'Pemandangan terbuka ke laut menjadikan lewat petang alasan yang cukup untuk tidak pulang terlalu awal.' },
        { title: 'Fikir sebelum berenang', copy: 'Keadaan air berubah-ubah. Pilih aktiviti air hanya apabila cuaca, arus dan arahan keselamatan setempat mengizinkan.' }
      ]
    },
    food: {
      sectionNumber: '04 — Rasa sekitar',
      eyebrow: 'Makan di pesisir',
      title: 'Mulakan dengan apa yang dekat.',
      copy: 'Gerai di sekitar pantai memudahkan makanan ringkas selepas bersiar. Untuk pilihan lebih luas, teruskan perjalanan ke pekan pesisir berdekatan.',
      items: [
        { title: 'Makanan laut setempat', copy: 'Pilihan lazim di kawasan pesisir; tanya ketersediaan, harga dan cara masakan terus di gerai atau restoran.' },
        { title: 'Gerai minuman & snek', copy: 'Sesuai untuk berhenti pendek. Waktu operasi boleh berbeza antara hari biasa dan hujung minggu.' },
        { title: 'Tanjung Dawai', copy: 'Seberang Sungai Merbok ialah pilihan logik untuk meneruskan hari dengan suasana pekan nelayan dan pilihan makan yang lain.' }
      ],
      caption: 'Cadangan: semak waktu operasi terus dengan perniagaan pilihan anda, khususnya pada hari bekerja atau ketika cuaca buruk.'
    },
    routes: {
      sectionNumber: '05 — Sampai ke sini',
      eyebrow: 'Arah & pergerakan',
      title: 'Pilih jalan yang paling masuk akal untuk hari anda.',
      copy: 'Pantai Merdeka paling mudah dikunjungi dengan kenderaan sendiri. Gunakan peta untuk keadaan trafik semasa dan sahkan sambungan awam dengan operator sebelum bertolak.',
      cards: [
        { span: 'Dari udara', title: 'Lapangan Terbang Antarabangsa Pulau Pinang', copy: 'Teruskan dengan kereta sewa atau e-panggilan; laluan darat paling praktikal untuk sampai ke Kota Kuala Muda.' },
        { span: 'Dengan bas', title: 'Sungai Petani sebagai titik sambung', copy: 'Dari terminal bandar, sambung dengan teksi, e-panggilan atau pengangkutan yang telah diatur ke pantai.' },
        { span: 'Dengan teksi', title: 'Tempah perjalanan terus', copy: 'Tetapkan titik ambil balik terlebih dahulu kerana liputan e-panggilan boleh berbeza di kawasan pesisir.' },
        { span: 'Dengan kereta', title: 'Ikut peta ke Pantai Merdeka', copy: 'Laluan berturap membawa hingga ke kawasan pantai; ikut papan tanda dan arahan setempat ketika tiba.' }
      ],
      mapLabel: 'Peta Google · Bahasa Melayu'
    },
    nearby: {
      sectionNumber: '06 — Teruskan perjalanan',
      eyebrow: 'Di sekitar Kuala Muda',
      title: 'Ada lagi di seberang dan sepanjang pesisir.',
      copy: 'Jadikan pantai sebagai sebahagian daripada hari yang lebih luas, bukan satu-satunya hentian.',
      cards: [
        { span: 'Merentasi sungai', title: 'Tanjung Dawai', copy: 'Pekan pesisir yang dihubungkan oleh bot merentasi Sungai Merbok, tertakluk kepada operasi semasa.' },
        { span: 'Jejak alam', title: 'Muara Merbok', copy: 'Kawasan sungai dan pesisir yang mengingatkan bahawa Kuala Muda dibentuk oleh air, bakau dan kampung nelayan.' },
        { span: 'Pemandangan jauh', title: 'Gunung Jerai', copy: 'Gunung ikonik Kedah yang kadangkala membingkai pandangan dari pesisir ketika cuaca mengizinkan.' },
        { span: 'Pulau berdekatan', title: 'Pulau Sayak', copy: 'Pulau kecil berhampiran Tanjung Dawai yang dikenali dengan hidangan makanan laut seperti mee udang; semak waktu dan ketersediaan terus di lokasi.' }
      ]
    },
    gallery: {
      sectionNumber: '07 — Galeri lapangan',
      eyebrow: 'Gambar sebenar',
      title: 'Rekaan garis air, dalam 13 bingkai.',
      copy: 'Seretan gambar pantai sebenar Pantai Merdeka — dicatat tanpa penapis komersial, untuk memberikan gambaran keadaan tempat sebelum lawatan anda.',
      photos: [
        'Pemandangan luas pesisir Pantai Merdeka dengan langit cerah dan hamparan pasir',
        'Garisan pantai Pantai Merdeka dengan warna laut biru kehijauan dan ombak kecil',
        'Pohon-pohon pesisir di sepanjang laluan tepi Pantai Merdeka',
        'Cahaya petang lembut menyentuh permukaan laut Pantai Merdeka',
        'Hamparan pasir Pantai Merdeka dilihat dari sudut rendah, bersebelahan air',
        'Pemandangan ke arah laut terbuka Pantai Merdeka pada waktu siang',
        'Kawasan berteduh dengan pepohon di sekitar Pantai Merdeka',
        'Laluan berjalan menghubungkan kawasan letak kereta dengan pantai',
        'Langit petang berwarna jingga kebiruan di atas permukaan Pantai Merdeka',
        'Ombak kecil menyentuh garis pasir Pantai Merdeka',
        'Pemandangan luas ke persekitaran kampung pesisir berhampiran Pantai Merdeka',
        'Cahaya senja menyinari pokok-pokok tepi Pantai Merdeka',
        'Laut Selat Melaka dilihat dari pantai Pantai Merdeka, cuaca tenang'
      ]
    },
    faq: {
      sectionNumber: '08 — Tanya dahulu',
      eyebrow: 'FAQ',
      title: 'Jawapan ringkas sebelum bertolak.',
      copy: 'Maklumat praktikal berubah mengikut cuaca, cuti dan pengendali. Gunakan soalan ini sebagai persediaan, kemudian semak keadaan di lokasi.',
      items: [
        { q: 'Adakah masuk ke Pantai Merdeka dikenakan bayaran?', a: 'Akses ke kawasan pantai lazimnya percuma. Aktiviti, tandas, bot dan perkhidmatan gerai adalah berasingan, jadi semak terus di lokasi sebelum membuat keputusan.' },
        { q: 'Bilakah waktu yang baik untuk datang?', a: 'Bagi suasana yang lebih selesa, pilih lewat petang apabila panas berkurang dan angin laut terasa lebih baik. Keadaan cuaca serta pasang surut berubah; utamakan nasihat keselamatan di lokasi.' },
        { q: 'Bolehkah saya menaiki bot ke Tanjung Dawai?', a: 'Terdapat perkhidmatan bot yang menghubungkan kawasan ini dengan Tanjung Dawai merentasi Sungai Merbok. Jadual, tambang, keadaan cuaca dan operasi adalah tertakluk kepada pengendali setempat.' },
        { q: 'Ada tempat makan dan tandas?', a: 'Gerai makanan dan tandas awam dilaporkan berada berhampiran pantai. Pilihan, waktu operasi dan caj tandas boleh berubah mengikut hari serta pengendali.' },
        { q: 'Adakah sesuai untuk berkhemah semalaman?', a: 'Rancang Pantai Merdeka sebagai lawatan sehari kecuali anda telah mengesahkan penginapan atau tapak perkhemahan yang sah secara berasingan.' },
        { q: 'Berapa tambang dan jadual bot ke Tanjung Dawai?', a: 'Bot penambang merentasi Sungai Merbok ke Tanjung Dawai dikendalikan oleh pengusaha tempatan. Tambang, jadual dan operasi boleh berubah mengikut musim dan cuaca; semak terus di jeti sebelum menyeberang.' },
        { q: 'Ada chalet atau homestay berdekatan?', a: 'Kawasan sekitar Pantai Merdeka dan Tanjung Dawai menawarkan pilihan chalet, homestay dan penginapan ringkas. Kadar dan ketersediaan berbeza mengikut musim; sahkan terus dengan pengusaha pilihan anda.' },
        { q: 'Apakah menarik di Pulau Sayak?', a: 'Pulau Sayak berhampiran Tanjung Dawai terkenal dengan hidangan makanan laut seperti mee udang. Waktu, caj dan pilihan boleh berubah — semak terus dengan pengusaha tempatan sebelum melawat.' }
      ]
    },
    footer: {
      disclaimer: 'Tapak ini ialah panduan pelawat tidak rasmi dan tidak berafiliasi dengan Majlis Perbandaran Kota Kuala Muda, Lembaga Pelancongan Negeri Kedah, Tourism Malaysia, mana-mana pengendali tarikan atau Google. Maklumat kemudahan, cuaca, bot dan perniagaan boleh berubah; sahkan terus sebelum lawatan.',
      links: { plan: 'Rancang', directions: 'Arah', faq: 'FAQ' },
      legal: { privacy: 'Privasi', terms: 'Terma', cookies: 'Kuki' },
      copyright: '© 2026 Panduan Pelawat Pantai Merdeka · Hak cipta terpelihara.',
      imageRights: 'Hak cipta dan hak harta intelek semua gambar yang dipaparkan di laman ini kekal milik penggambar asal.'
    },
    legal: {
      privacy: {
        meta: { title: 'Dasar Privasi · Panduan Pelawat Pantai Merdeka', description: 'Dasar privasi rasmi untuk Panduan Pelawat Pantai Merdeka, Kota Kuala Muda — jenis data yang dikumpul, penggunaan, pihak ketiga dan hak anda di bawah Akta Perlindungan Data Peribadi 2010 (APDP) serta GDPR.' },
        pageTitle: 'Dasar Privasi',
        updated: 'Masa kemas kini terakhir: Ogos 2026',
        intro: 'Panduan Pelawat Pantai Merdeka yang diselenggara di bawah inisiatif panduan pelawat tidak rasmi untuk pesisir Kuala Muda, Kedah komited untuk melindungi privasi pelawat. Dasar ini menerangkan jenis data minimum yang dikumpul, cara ia digunakan, pihak ketiga yang terlibat, serta hak anda di bawah Akta Perlindungan Data Peribadi 2010 (Malaysia) dan, jika berkenaan, Peraturan Perlindungan Data Am (GDPR) Kesatuan Eropah.',
        sections: [
          { heading: 'Maklumat yang kami kumpul', paragraphs: ['Kami hanya mengumpul data minimum yang perlu untuk penyampaian kandungan dan fungsi laman yang stabil. Dalam keadaan biasa, set data ini mungkin terdiri daripada perkara berikut:'], list: ['Data log pelayaran standard: alamat IP, jenis penyemak imbas, halaman yang diminta, rujukan keluar dan masa lawatan', 'Kuki teknikal yang perlu dan storan tempatan (localStorage) untuk mengingati keutamaan bahasa atau tetapan persetujuan kuki jika dinyatakan', 'Maklumat yang diberikan secara sukarela melalui borang hubungan atau emel, sekiranya anda memilih untuk menghubungi kami'] },
          { heading: 'Cara maklumat digunakan', paragraphs: ['Data yang dikumpul digunakan secara eksklusif untuk tujuan berikut, tanpa penyeragaman iklan bertarget pada pihak pertama:'], list: ['Memperbaiki kandungan, struktur dan kebolehgunaan laman berdasarkan pola penggunaan agregat', 'Memantau kestabilan pelayan, mengenal pasti ralat dan mengoptimumkan penghantaran sumber statik', 'Menyah balik permintaan, soalan atau maklum balas pelawat', 'Mematuhi kewajipan undang-undang yang dikenakan kepada penerbit laman di Malaysia'] },
          { heading: 'Perkhidmatan pihak ketiga', paragraphs: ['Laman ini boleh memuatkan kandungan terbenam atau prasyarat luar yang dikendalikan oleh pihak ketiga. Setiap perkhidmatan ini mempunyai dasar privasi sendiri yang berasingan dan bebas daripada dasar ini.'], list: ['Peta Google (Google Maps): benam peta untuk arah lokasi Pantai Merdeka; boleh menetapkan kuki pihak ketiga bawah domain Google LLC', 'Prestasi dan penghantaran sumber pada platform penerbitan Cloudflare Pages; log capaian terurus mengikut dasar privasi Cloudflare', 'Tiada analitik tingkah laku pihak pertama (contoh: Google Analytics) diaktifkan secara lalai; sekiranya diaktifkan kemudian, persetujuan eksplisit akan diminta terlebih dahulu'] },
          { heading: 'Hak anda', paragraphs: ['Bergantung kepada tempat kediaman dan undang-undang yang terpakai, anda mungkin berhak terhadap perkara berikut:'], list: ['Mengakses salinan data peribadi yang berkaitan dengan anda yang dipegang oleh penerbit laman', 'Meminta pembetulan atau penghapusan data peribadi yang tidak tepat, tidak lengkap atau tidak lagi diperlukan', 'Membantah pemprosesan yang berdasarkan kepentingan sah atau membuat pilihan mengenai persetujuan pemprosesan', 'Mengemukakan aduan kepada Pihak Berkuasa Perlindungan Data Malaysia di bawah Kementerian Komunikasi dan Digital, atau kepada badan penyelia perlindungan data yang berwibawa di Kesatuan Eropah jika berkenaan'] },
          { heading: 'Perubahan kepada dasar ini', paragraphs: ['Kami boleh mengemas kini Dasar Privasi ini dari semasa ke semasa untuk mencerminkan perubahan teknikal, struktur undang-undang atau penambahan perkhidmatan. Tarikh kemas kini terakhir yang dipaparkan di atas menandakan semakan terbaru.'] }
        ]
      },
      terms: {
        meta: { title: 'Terma Penggunaan · Panduan Pelawat Pantai Merdeka', description: 'Terma dan syarat penggunaan untuk Panduan Pelawat Pantai Merdeka, Kota Kuala Muda — kandungan rujukan, penafian ketepatan, hak harta intelek dan had liabiliti.' },
        pageTitle: 'Terma Penggunaan',
        updated: 'Masa kemas kini terakhir: Ogos 2026',
        intro: 'Dengan mengakses atau menggunakan laman Panduan Pelawat Pantai Merdeka ini, anda bersetuju untuk terikat dengan Terma Penggunaan berikut. Laman ini diterbitkan di bawah inisiatif panduan pelawat tidak rasmi yang berdiri sendiri dan tidak berafiliasi dengan Majlis Perbandaran Kota Kuala Muda, Lembaga Pelancongan Negeri Kedah, Tourism Malaysia mahupun mana-mana pengendali tarikan komersial.',
        sections: [
          { heading: 'Penggunaan kandungan', paragraphs: ['Semua kandungan laman termasuk teks, gambar rajah, tajuk dan susun atur adalah untuk tujuan maklumat am sahaja. Laman ini tidak bertujuan sebagai nasihat perjalanan profesional, nasihat undang-undang atau saranan kewangan.'] },
          { heading: 'Ketepatan maklumat', paragraphs: ['Kami berusaha untuk menyiarkan maklumat yang tepat dan semasa mengenai Pantai Merdeka dan sekitar Kuala Muda. Walau bagaimanapun, kami tidak memberikan jaminan sama ada tersurat atau tersirat mengenai kelengkapan, ketepatan, kebolehpercayaan atau kesesuaian maklumat tersebut.'], list: ['Waktu operasi, tambang bot, yuran tempat letak kereta, kadar bayaran kemudahan dan senarai perniagaan tempatan boleh berubah pada bila-bila masa tanpa notis awal', 'Anda disyorkan secara tegas untuk mengesahkan maklumat penting terus dengan pihak berkuasa tempatan, pengendali tarikan atau perniagaan pilihan anda sebelum memulakan perjalanan'] },
          { heading: 'Hak harta intelek', paragraphs: ['Reka bentuk laman, seni grafik asal, struktur maklumat dan semua teks editorial yang dihasilkan khas untuk Panduan Pelawat Pantai Merdeka adalah hak cipta penerbit projek.', 'Hak cipta dan hak harta intelek semua gambar yang dipaparkan di laman ini (termasuk galeri lapangan Pantai Merdeka) kekal milik penggambar asal. Penggunaan semula gambar sedemikian di luar konteks laman ini memerlukan kebenaran bertulis daripada pemegang hak cipta masing-masing.'], list: ['Data peta dan peta benam digunakan menurut Terma Perkhidmatan Google Maps yang sedia ada', 'Rujukan nama pihak ketiga, jenama dan agensi kerajaan dibuat secara adil tanpa niat untuk menuntut pengiktirafan atau hubungan gabungan'] },
          { heading: 'Had liabiliti', paragraphs: ['Laman ini disediakan berdasarkan "apa adanya" dan "sebagaimana yang sedia ada" tanpa sebarang jaminan, sama ada tersurat atau tersirat, termasuk tetapi tidak terhad kepada jaminan boleh diperdagangkan dan kesesuaian untuk tujuan tertentu.'], list: ['Dalam skop maksimum yang dibenarkan oleh undang-undang Malaysia, penerbit laman tidak akan bertanggungjawab atas apa-apa kerugian langsung, tidak langsung, sampingan, khas atau akibat yang timbul daripada atau berkaitan dengan penggunaan laman ini', 'Had ini termasuk, tanpa mengehadkan, keputusan perjalanan yang dibuat berdasarkan kandungan laman, gangguan capaian, ketiadaan perkhidmatan atau kerosakan kepada peranti semasa capaian'] },
          { heading: 'Pautan luar', paragraphs: ['Laman ini boleh mengandungi pautan ke laman web luar yang dikendalikan oleh pihak ketiga. Kami tidak mengawal dan tidak bertanggungjawab ke atas kandungan, dasar privasi atau amalan mana-mana laman luar yang dipautkan. Lawatan anda ke laman luar adalah atas risiko anda sendiri.'] },
          { heading: 'Perubahan terma', paragraphs: ['Terma Penggunaan ini boleh disemak dari semasa ke semasa. Penggunaan laman yang berterusan selepas semakan terma diterbitkan menandakan penerimaan anda terhadap semakan tersebut.'] }
        ]
      },
      cookies: {
        meta: { title: 'Tetapan Kuki · Panduan Pelawat Pantai Merdeka', description: 'Penjelasan kategori kuki yang digunakan di laman Panduan Pelawat Pantai Merdeka, kuki perlu, pilihan, penganalisis dan pemasaran, serta cara menguruskan persetujuan.' },
        pageTitle: 'Tetapan Kuki',
        updated: 'Masa kemas kini terakhir: Ogos 2026',
        intro: 'Panduan Pelawat Pantai Merdeka menggunakan teknologi storan ringan seperti kuki dan localStorage hanya pada tahap minimum untuk mengekalkan fungsi teras laman. Halaman ini menerangkan setiap kategori yang mungkin wujud, item dalam kategori tersebut dan status lalai semasa penerbitan.',
        categories: [
          { name: 'Kuki Perlu', chip: 'Kategori', status: 'Sentiasa aktif', desc: 'Kuki dan storan tempatan ini adalah kritikal untuk fungsi asas laman termasuk keselamatan capaian, pengesahan tetapan persetujuan kuki dan kebolehan menukar pilihan bahasa antara muka tanpa memerlukan skrip luar.', items: [
            { name: 'Kuki Persetujuan', chip: 'Perlu', status: 'Sentiasa aktif', desc: 'Menyimpan catatan pilihan persetujuan kuki yang telah dinyatakan oleh pelawat sekiranya dialog persetujuan disediakan; ia tidak disediakan untuk tujuan penjejakan luar.' },
            { name: 'Keutamaan Antaramuka', chip: 'Perlu', status: 'Aktif jika ditetapkan', desc: 'Mengingati pilihan bahasa penyemak imbas dan tetapan mod visual (jika ditambah kemudian) supaya tetapan anda dikekalkan di antara halaman.' }
          ]},
          { name: 'Kuki Analitik', chip: 'Kategori', status: 'Lalai: tidak aktif', desc: 'Kuki yang dikendalikan oleh perkhidmatan analitik untuk mengagregatkan data tingkah laku pelawat secara tanpa nama. Dalam versi semasa penerbitan, tiada pakej analitik pihak pertama (contoh: Google Analytics) dipasang. Jika analitik diaktifkan kemudian, ia hanya berfungsi selepas persetujuan eksplisit.', items: [
            { name: 'Analitik Prestasi Laman', chip: 'Pilihan', status: 'Tidak aktif', desc: 'Didaftarkan sebagai kemungkinan susun atur hadapan; tiada skrip semakan atau pengagregatan data dipasang semasa kemas kini terakhir.' }
          ]},
          { name: 'Kuki Keutamaan', chip: 'Kategori', status: 'Lalai: tidak aktif', desc: 'Kuki pilihan untuk mengingati tetapan visual atau pilihan susun atur. Pada masa ini, tiada kuki keutamaan tambahan diletakkan oleh skrip pertama laman.', items: [
            { name: 'Keutamaan Pengguna', chip: 'Pilihan', status: 'Tidak aktif', desc: 'Ditugaskan untuk kegunaan ciri keutamaan visual pada masa hadapan, jika ditambah.' }
          ]},
          { name: 'Kuki Pemasaran', chip: 'Kategori', status: 'Lalai: tidak aktif', desc: 'Kuki iklan bertarget dan penjejakan kempen pemasaran. Tiada kuki pemasaran diletakkan oleh Panduan Pelawat Pantai Merdeka. Sekiranya ditambah kemudian, persetujuan eksplisit akan diperlukan.', items: [
            { name: 'Iklan Peribadi', chip: 'Pemasaran', status: 'Tidak aktif', desc: 'Ditetapkan untuk menandakan tidak sebarang iklan bertarget berdasarkan minat pelawat; kekal tidak aktif pada versi semasa.' }
          ]},
          { name: 'Kuki Pihak Ketiga', chip: 'Kategori', status: 'Di luar kawalan penerbit', desc: 'Peta benam Google Maps dan sumber pramuat Google Fonts boleh menetapkan kuki pihak ketiga di bawah domain Google LLC untuk tujuan keselamatan, pengesahan sesi dan kustomisasi peta. Kuki ini tidak boleh dilumpuhkan melalui tetapan pihak pertama laman ini.', items: [] }
        ],
        management: { title: 'Pengurusan Persetujuan', paragraphs: ['Anda boleh mengubah tetapan kuki pada bila-bila masa dengan menyunting pilihan penyemak imbas anda. Sila rujuk dokumentasi rasmi penyemak imbas pilihan anda untuk langkah memadam atau menyekat kuki. Harap maklum bahawa menyekat kuki perlu boleh menjejaskan sebahagian fungsi laman.', 'Jika dialog persetujuan kuki disediakan dalam kemas kini akan datang, dua tindakan berikut akan disediakan:'], actions: { save: 'Simpan Keutamaan', reject: 'Tolak Semua' } }
      }
    },
    alt: {
      hero: 'Pemandangan pantai dan laut di Pantai Merdeka',
      sunset: 'Langit senja di atas laut Pantai Merdeka',
      walkway: 'Laluan tepi laut dan pepohon di Pantai Merdeka',
      shade: 'Pokok-pokok teduh di tepi Pantai Merdeka'
    },
    stamps: {
      intro: '05°39′58″U · 100°22′03″T',
      visit: 'CAP LAPANGAN · PETANG',
      experience: 'GARIS AIR · 02—04 JAM',
      food: 'WARUNG · PESISIR',
      routes: 'LALUAN · DARAT & AIR',
      nearby: 'MERBOK · KUALA MUDA',
      gallery: 'GALERI · 13 BINGKAI',
      faq: 'SEMAK DI LOKASI'
    },
    jsonLd: {
      placeName: 'Pantai Merdeka',
      placeDescription: 'Panduan ringkas untuk menikmati Pantai Merdeka di Kota Kuala Muda, Kedah — pantai, arah, makan, kemudahan dan tempat berdekatan.',
      streetAddress: 'Pantai Merdeka',
      addressLocality: 'Kota Kuala Muda',
      postalCode: '08500',
      addressRegion: 'Kedah',
      addressCountry: 'MY',
      openingHoursLabel: 'Akses kawasan',
      ratingNote: 'Penilaian dikumpulkan daripada direktori pelawat pihak ketiga dan tertakluk kepada perubahan.',
      faqType: 'Soalan Lazim'
    }
  },
  en: {
    meta: {
      title: 'Pantai Merdeka Kedah · Beach Guide, Tanjung Dawai Ferry & Chalets',
      description: 'A visitor guide to Pantai Merdeka, Kedah — directions to the shore, the ferry to Tanjung Dawai, nearby chalets & homestays, seafood, and nearby stops like Pulau Sayak.',
      skipToContent: 'Skip to content',
      brandLabel: 'Pantai Merdeka, return to the top',
      shareImageAlt: 'Coastal and seascape view at Pantai Merdeka'
    },
    nav: { plan: 'Plan', food: 'Eat', directions: 'Directions', faq: 'FAQ' },
    localeSwitch: { label: 'Language' },
    hero: {
      region: 'Kota Kuala Muda · Kedah',
      title: 'Sea, wind and a long afternoon.',
      lede: 'Pantai Merdeka is a place to arrive slowly, unroll a mat, eat something warm and wait for the sky to change colour.',
      primaryCta: 'Get directions',
      secondaryCta: 'Plan the visit',
      coordsLabel: 'Coordinates',
      coordsValue: '5.666111° N\n100.367500° E',
      accessLabel: 'Area access',
      accessValue: 'Every day\nThroughout the day',
      scrollNote: 'Follow the tide line'
    },
    intro: {
      sectionNumber: '01 — Know the shore',
      eyebrow: 'As it is',
      title: 'Not a resort. That is the point.',
      copy: 'On the Kuala Muda coast, Pantai Merdeka sits closer to the weekend family ritual than to a purpose-built tourist estate. Its grounds are open, the mood is village and the afternoons are best enjoyed without haste.',
      facts: {
        location: { label: 'Location', value: '08500 Kota Kuala Muda, Kedah' },
        entry: { label: 'Entry', value: 'Shore access is generally free of charge' },
        suitable: { label: 'Best for', value: 'Walking, picnics & watching dusk' },
        note: { label: 'Note', value: 'Facilities operate at the operator\'s discretion' }
      },
      caption: 'COME FOR THE LATE LIGHT, STAY FOR THE SEA WIND'
    },
    visit: {
      sectionNumber: '02 — Plan the day',
      eyebrow: 'Practical notes',
      title: 'An uncomplicated afternoon, if you pack the right things.',
      copy: 'Take only what you need, expect midday heat and leave room for spontaneity. This shore works better as a relaxed visit than as a packed schedule.',
      items: [
        { label: 'Best timing', value: 'Late afternoon until dusk, for softer light and the more comfortable sea breeze that usually settles in.' },
        { label: 'Length of stay', value: 'Plan for roughly 2–4 hours to stroll, picnic, eat and watch the sky turn.' },
        { label: 'Payments', value: 'Shore access is reported as free; carry small cash for toilets, food, activities or boat rides if available.' },
        { label: 'Parking', value: 'Parking near the shore is usually available. Weekends and holidays can be busier; arrive early if needed.' }
      ],
      leaveNoTrace: 'Care for the shore together. Take your waste with you, use the bins provided and do not feed wildlife that approaches visitor areas.',
      fieldNote: {
        lines: ['Field note', 'Kuala Muda', 'Kedah coast'],
        tip: 'Quick tip: bring a hat, drinking water, a mat and a little cash. Check the weather, sea conditions and local safety guidance before entering the water.'
      }
    },
    experience: {
      sectionNumber: '03 — Move slowly',
      eyebrow: 'Shore rhythm',
      title: 'Let the day move like the tide.',
      walkwayTag: 'Open ground, your own pace',
      items: [
        { title: 'Walk along the water line', copy: 'Choose footwear suited to the coastal surface and follow the tide line as it advances or recedes.' },
        { title: 'Spread a mat', copy: 'The open grounds are suitable for families wanting to rest, eat lightly and let children play in supervised areas.' },
        { title: 'Wait for dusk', copy: 'The unobstructed sea view gives late afternoon a reason of its own to stay a little longer.' },
        { title: 'Think before swimming', copy: 'Water conditions change. Choose water activities only when weather, currents and local safety advice allow.' }
      ]
    },
    food: {
      sectionNumber: '04 — Taste the vicinity',
      eyebrow: 'Eating on the coast',
      title: 'Start with what is closest.',
      copy: 'Food stalls near the shore make a light meal straightforward after a walk. For a wider range, continue into the nearby coastal towns.',
      items: [
        { title: 'Local seafood', copy: 'A common choice in coastal districts; confirm availability, pricing and cooking method directly at the stall or restaurant.' },
        { title: 'Drink stalls & snacks', copy: 'Good for short stops. Operating hours can differ between weekdays and weekends.' },
        { title: 'Tanjung Dawai', copy: 'Across the Sungai Merbok estuary, Tanjung Dawai is a logical continuation of the day with its fishing-town atmosphere and additional eating options.' }
      ],
      caption: 'Suggestion: confirm operating hours directly with your chosen establishment, especially on weekdays or during poor weather.'
    },
    routes: {
      sectionNumber: '05 — Getting here',
      eyebrow: 'Directions & movement',
      title: 'Choose the route that makes most sense for your day.',
      copy: 'Pantai Merdeka is most conveniently reached by private vehicle. Use the map for live traffic conditions and confirm public transport connections with the operator before departure.',
      cards: [
        { span: 'By air', title: 'Penang International Airport', copy: 'Continue with a rental car or ride-hailing service; the overland route is the most practical way to reach Kota Kuala Muda.' },
        { span: 'By bus', title: 'Sungai Petani as transfer point', copy: 'From the town terminal, connect with taxi, ride-hailing or pre-arranged transport onward to the shore.' },
        { span: 'By taxi', title: 'Book the return leg first', copy: 'Confirm a return collection point in advance, as ride-hailing coverage can vary in coastal areas.' },
        { span: 'By car', title: 'Follow the map to Pantai Merdeka', copy: 'A paved road leads down to the coastal area; follow local signage and on-site instructions upon arrival.' }
      ],
      mapLabel: 'Google Map · Bahasa Melayu interface'
    },
    nearby: {
      sectionNumber: '06 — Continue the journey',
      eyebrow: 'Around Kuala Muda',
      title: 'There is more, across the river and along the coast.',
      copy: 'Treat the shore as one part of a longer day, not as the only stop.',
      cards: [
        { span: 'Across the river', title: 'Tanjung Dawai', copy: 'A coastal town linked by small boats across the Sungai Merbok estuary, subject to current operating schedules.' },
        { span: 'Watershed walk', title: 'Muara Merbok', copy: 'The river and coastal hinterland that reminds visitors Kuala Muda was shaped by water, mangroves and fishing villages.' },
        { span: 'Distant view', title: 'Gunung Jerai', copy: 'The iconic Kedah peak that occasionally frames the coastal horizon when the weather permits.' },
        { span: 'Nearby island', title: 'Pulau Sayak', copy: 'A small island near Tanjung Dawai known for seafood dishes such as prawn noodle (mee udang); confirm hours and availability on site.' }
      ]
    },
    gallery: {
      sectionNumber: '07 — Field gallery',
      eyebrow: 'Actual photography',
      title: 'The tide line, recorded in thirteen frames.',
      copy: 'A sequence of genuine Pantai Merdeka coastal photographs — documented without commercial filters, to give visitors an unmediated sense of the place before arrival.',
      photos: [
        'Wide view of the Pantai Merdeka shoreline under clear sky, extending along the sand',
        'Pantai Merdeka tide line with blue-green coastal water and small breaking waves',
        'Coastal trees and vegetation along the edge path at Pantai Merdeka',
        'Soft late-afternoon light touching the sea surface at Pantai Merdeka',
        'Low-angle view of the Pantai Merdeka sand stretch next to the water',
        'Open sea view from Pantai Merdeka during daylight hours',
        'Shaded tree-covered area in the immediate vicinity of Pantai Merdeka',
        'Pedestrian walkway linking the parking vicinity with the Pantai Merdeka shore',
        'Late sky with warm orange and blue tones above the Pantai Merdeka coast',
        'Small tide-driven waves touching the Pantai Merdeka sand edge',
        'Wide view of the adjacent coastal village setting around Pantai Merdeka',
        'Golden dusk light falling on the bordering trees at Pantai Merdeka',
        'Calm view of the Strait of Malacca littoral from Pantai Merdeka, settled weather'
      ]
    },
    faq: {
      sectionNumber: '08 — Ask first',
      eyebrow: 'FAQ',
      title: 'Short answers before you leave.',
      copy: 'Practical information shifts with the weather, holidays and operator decisions. Use these questions as preparation, then confirm conditions on site.',
      items: [
        { q: 'Is entry to Pantai Merdeka charged?', a: 'Access to the shore area is generally free of charge. Activities, toilets, boats and stall services are separate, so verify directly on site before making any decision.' },
        { q: 'When is a good time to come?', a: 'For a more comfortable atmosphere, choose late afternoon when the heat eases and the sea breeze is usually more pleasant. Weather and tides change; prioritise on-site safety advice.' },
        { q: 'Can I take a boat to Tanjung Dawai?', a: 'Boat services connect the area with Tanjung Dawai across the Sungai Merbok estuary. Schedules, fares, weather and operations are at the discretion of local operators.' },
        { q: 'Are there places to eat and toilets?', a: 'Food stalls and public toilets are reported near the shore. Selection, opening hours and toilet charges may vary by day and by operator.' },
        { q: 'Is this a suitable place for overnight camping?', a: 'Plan Pantai Merdeka as a day visit unless you have separately confirmed accommodation or a registered camping site in advance.' },
        { q: 'What are the ferry fare and schedule to Tanjung Dawai?', a: 'The ferry across the Sungai Merbok estuary to Tanjung Dawai is run by local operators. Fares, schedules and operations can shift with season and weather; confirm directly at the jetty before crossing.' },
        { q: 'Are there chalets or homestays nearby?', a: 'Around Pantai Merdeka and Tanjung Dawai you will find chalets, homestays and simple accommodations. Rates and availability vary by season; verify directly with your chosen operator.' },
        { q: 'What is worth seeing at Pulau Sayak?', a: 'Pulau Sayak, near Tanjung Dawai, is known for seafood dishes such as prawn noodle (mee udang). Hours, charges and choices can change — check directly with local operators before visiting.' }
      ]
    },
    footer: {
      disclaimer: 'This site is an unofficial visitor guide and is not affiliated with Majlis Perbandaran Kota Kuala Muda (MPKM), Lembaga Pelancongan Negeri Kedah, Tourism Malaysia, any attraction operator or Google. Facilities, weather, boats and business details can change; confirm directly before visiting.',
      links: { plan: 'Plan', directions: 'Directions', faq: 'FAQ' },
      legal: { privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies' },
      copyright: '© 2026 Pantai Merdeka Visitor Guide. All rights reserved.',
      imageRights: 'Proprietary rights and copyright in all photographs displayed on this site remain vested in their respective original photographers.'
    },
    legal: {
      privacy: {
        meta: { title: 'Privacy Policy · Pantai Merdeka Visitor Guide', description: 'Official privacy policy for the Pantai Merdeka Visitor Guide, Kota Kuala Muda — data collected, usage, third parties and your rights under the Malaysian Personal Data Protection Act 2010 and the EU GDPR.' },
        pageTitle: 'Privacy Policy',
        updated: 'Last updated: August 2026',
        intro: 'The Pantai Merdeka Visitor Guide, published under an independent, non-commercial coastal visitor-guide initiative for the Kuala Muda shoreline, is committed to protecting the privacy of every visitor. This policy describes the minimum data collected, how it is used, the third parties involved and your rights under the Personal Data Protection Act 2010 (Malaysia) and, where applicable, the General Data Protection Regulation (GDPR) of the European Union.',
        sections: [
          { heading: 'Information we collect', paragraphs: ['We only collect the minimum data necessary for the reliable delivery of content and stable functioning of the site. Under ordinary circumstances this dataset may include the following:'], list: ['Standard access-log data: IP address, browser type, pages requested, referring URL and visit timestamp', 'Necessary technical cookies and browser localStorage used to remember interface-language preference or explicit cookie-consent choice when offered', 'Any information you submit voluntarily through a contact form or by email, should you choose to reach out'] },
          { heading: 'How we use your information', paragraphs: ['The data collected is used exclusively for the following purposes, with no first-party targeted advertising pipelines:'], list: ['Improving site content, structure and usability based on aggregated usage patterns', 'Monitoring server stability, identifying errors and optimising static-asset delivery', 'Responding to requests, queries or visitor feedback', 'Complying with the legal obligations incumbent on a Malaysian-based web publisher'] },
          { heading: 'Third-party services', paragraphs: ['The site may include embedded content or external preconditions handled by third parties. Each such service maintains its own independent privacy policy, separate from this one.'], list: ['Google Maps: embedded maps used for Pantai Merdeka location directions; may set third-party cookies under the Google LLC domain', 'Cloudflare Pages platform for performance and asset delivery; access logs handled in accordance with the Cloudflare Privacy Policy', 'No first-party behavioural analytics package (for example, Google Analytics) is enabled by default; should one be activated in a later build, explicit consent will be requested first'] },
          { heading: 'Your rights', paragraphs: ['Depending on your jurisdiction and the applicable law, you may be entitled to the following:'], list: ['Requesting access to a copy of any personal data the site publisher holds relating to you', 'Requesting the correction or erasure of personal data that is inaccurate, incomplete or no longer required', 'Objecting to processing based on legitimate interest, or registering a preference regarding consent-based processing', 'Submitting a complaint to the Malaysian Personal Data Protection Commissioner under the Ministry of Communications and Digital, or to a competent EU supervisory authority where GDPR applies'] },
          { heading: 'Changes to this policy', paragraphs: ['We may update this Privacy Policy from time to time to reflect technical changes, regulatory updates or the addition of new services. The "Last updated" date shown above denotes the most recent revision.'] }
        ]
      },
      terms: {
        meta: { title: 'Terms of Service · Pantai Merdeka Visitor Guide', description: 'Terms and conditions of use for the Pantai Merdeka Visitor Guide, Kota Kuala Muda — reference content, accuracy disclaimers, intellectual property and liability limitation.' },
        pageTitle: 'Terms of Service',
        updated: 'Last updated: August 2026',
        intro: 'By accessing or using the Pantai Merdeka Visitor Guide website, you agree to be bound by these Terms of Service. This site is published under a standalone, unofficial visitor-guide initiative and is not affiliated with the Majlis Perbandaran Kota Kuala Muda, Lembaga Pelancongan Negeri Kedah, Tourism Malaysia or any commercial attraction operator.',
        sections: [
          { heading: 'Use of content', paragraphs: ['All site content, including text, diagrams, headings and layout, is for general informational purposes only. The site is not intended as professional travel advice, legal advice or financial recommendation of any kind.'] },
          { heading: 'Accuracy of information', paragraphs: ['We strive to publish accurate and current information concerning Pantai Merdeka and the surrounding Kuala Muda coastal district. However, we make no representations or warranties, express or implied, as to the completeness, accuracy, reliability or suitability of that information.'], list: ['Operating hours, boat fares, parking rates, amenity fees and local-business listings may change at any time without prior notice', 'You are strongly encouraged to confirm critical information directly with the local authority, attraction operator or chosen establishment before undertaking your journey'] },
          { heading: 'Intellectual property', paragraphs: ['The site design, original graphic artwork, information architecture and all editorial text produced for the Pantai Merdeka Visitor Guide are the copyright of the project publisher.', 'Proprietary rights and copyright in all photographs displayed on this site — including the Pantai Merdeka field gallery — remain vested in their respective original photographers. Reproduction of these images outside this site requires prior written consent from each individual copyright holder.'], list: ['Map data and embedded map widgets are used in accordance with the prevailing Google Maps Terms of Service', 'All third-party names, trademarks and government agencies are referenced fairly, without any claim of endorsement or affiliation'] },
          { heading: 'Limitation of liability', paragraphs: ['The site is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.'], list: ['To the fullest extent permitted under Malaysian law, the site publisher shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages arising out of or in connection with the use of this site', 'This limitation includes, without limitation, travel decisions made on the basis of site content, service interruptions, unavailability of the service or damage to your access device during use'] },
          { heading: 'External links', paragraphs: ['This site may contain links to external websites operated by third parties. We do not control and assume no responsibility for the content, privacy policies or practices of any linked third-party website. Your visit to any external website is undertaken entirely at your own risk.'] },
          { heading: 'Revisions to terms', paragraphs: ['These Terms of Service may be revised from time to time. Continued use of the site following the publication of revised terms constitutes your acceptance of the updated text.'] }
        ]
      },
      cookies: {
        meta: { title: 'Cookie Settings · Pantai Merdeka Visitor Guide', description: 'Explanation of cookie categories used on the Pantai Merdeka Visitor Guide — necessary, preference, analytics and marketing cookies, plus consent management.' },
        pageTitle: 'Cookie Settings',
        updated: 'Last updated: August 2026',
        intro: 'The Pantai Merdeka Visitor Guide deploys lightweight storage technologies such as cookies and browser localStorage only at the minimum level required to preserve core functionality. This page explains each possible category, the items within them and their default status at the time of publication.',
        categories: [
          { name: 'Necessary Cookies', chip: 'Category', status: 'Always active', desc: 'These cookies and local storage entries are critical for the site\'s baseline functioning, including access security, cookie-consent verification and the ability to preserve interface-language preference without relying on external scripts.', items: [
            { name: 'Consent Cookie', chip: 'Necessary', status: 'Always active', desc: 'Stores a record of the explicit cookie preferences chosen by the visitor whenever a consent dialog is presented; it is never used for cross-site tracking purposes.' },
            { name: 'Interface Preference', chip: 'Necessary', status: 'Active if set', desc: 'Remembers the browser language selection and any visual-mode preference (if added in a future release) so that your settings persist across pages.' }
          ]},
          { name: 'Analytics Cookies', chip: 'Category', status: 'Default: inactive', desc: 'Cookies operated by analytics services that aggregate visitor behavioural data on an anonymous basis. In the current published build, no first-party analytics package — for example, Google Analytics — is installed. Should analytics ever be activated, it will only function after explicit opt-in consent has been obtained.', items: [
            { name: 'Site Performance Analytics', chip: 'Optional', status: 'Inactive', desc: 'Registered as a placeholder for a possible future frontend arrangement; no auditing script or data aggregation pipeline is installed at the time of the last update.' }
          ]},
          { name: 'Preference Cookies', chip: 'Category', status: 'Default: inactive', desc: 'Preference-related cookies used to remember visual or layout choices. At present, no additional preference cookies are emitted by the site\'s first-party scripts.', items: [
            { name: 'User Preferences', chip: 'Optional', status: 'Inactive', desc: 'Reserved for future visual-preference features, should such functionality be added.' }
          ]},
          { name: 'Marketing Cookies', chip: 'Category', status: 'Default: inactive', desc: 'Targeted advertising cookies and marketing-campaign tracking. No marketing cookies are placed by the Pantai Merdeka Visitor Guide. Should any be added at a later date, explicit opt-in consent will be required first.', items: [
            { name: 'Personalised Advertising', chip: 'Marketing', status: 'Inactive', desc: 'Placeholder indicating that no interest-based advertising is served on this site; remains in inactive state in the current build.' }
          ]},
          { name: 'Third-party Cookies', chip: 'Category', status: 'Outside publisher control', desc: 'The Google Maps embedded widget and Google Fonts preconnect sources may set third-party cookies under the Google LLC domain for security, session-authentication and map-customisation purposes. These cookies cannot be disabled via the first-party settings controls offered by this site.', items: [] }
        ],
        management: { title: 'Consent Management', paragraphs: ['You can change your cookie settings at any time by modifying your browser-level options. Please refer to the official documentation of your chosen browser for step-by-step instructions on how to delete or block cookies. Note that blocking necessary cookies may impair some site functionality.', 'If a cookie-consent banner is provided in a future release, the following actions will be surfaced:'], actions: { save: 'Save Preferences', reject: 'Reject All' } }
      }
    },
    alt: {
      hero: 'Coastal and seascape view at Pantai Merdeka',
      sunset: 'Dusk sky above the sea at Pantai Merdeka',
      walkway: 'Coastal walkway and shaded trees at Pantai Merdeka',
      shade: 'Shaded tree cover at the edge of Pantai Merdeka'
    },
    stamps: {
      intro: '05°39′58″N · 100°22′03″E',
      visit: 'FIELD STAMP · LATE AFTERNOON',
      experience: 'TIDE LINE · 02—04 HRS',
      food: 'STALL · COASTAL',
      routes: 'ROUTE · LAND & WATER',
      nearby: 'MERBOK · KUALA MUDA',
      gallery: 'FIELD GALLERY · 13 FRAMES',
      faq: 'VERIFY ON SITE'
    },
    jsonLd: {
      placeName: 'Pantai Merdeka',
      placeDescription: 'A concise visitor guide to Pantai Merdeka in Kota Kuala Muda, Kedah — shore access, directions, nearby eating, facilities and adjacent coastal stops.',
      streetAddress: 'Pantai Merdeka',
      addressLocality: 'Kota Kuala Muda',
      postalCode: '08500',
      addressRegion: 'Kedah',
      addressCountry: 'MY',
      openingHoursLabel: 'Area access hours',
      ratingNote: 'Ratings are aggregated from third-party visitor directories and are subject to change.',
      faqType: 'Frequently Asked Questions'
    }
  },
  zh: {
    meta: {
      title: 'Pantai Merdeka（独立海滩）吉打 · 海岸指南、Tanjung Dawai 渡轮与住宿',
      description: '吉打州 Pantai Merdeka（独立海滩）访客指南：交通方向、前往 Tanjung Dawai 的渡轮、周边 chalet 与 homestay、海鲜，以及 Pulau Sayak 等邻近景点。',
      skipToContent: '跳到正文',
      brandLabel: 'Pantai Merdeka，返回页首',
      shareImageAlt: 'Pantai Merdeka（独立海滩）沿岸与海面景观'
    },
    nav: { plan: '规划', food: '饮食', directions: '交通', faq: '常见问题' },
    localeSwitch: { label: '语言' },
    hero: {
      region: 'Kota Kuala Muda · Kedah',
      title: '海风与漫长的午后。',
      lede: 'Pantai Merdeka（独立海滩）是一处适合缓慢抵达、铺开席垫、吃些热食、静静等待天色转换的海滨。',
      primaryCta: '查看路线',
      secondaryCta: '规划行程',
      coordsLabel: '坐标',
      coordsValue: '北纬 5.666111°\n东经 100.367500°',
      accessLabel: '区域开放',
      accessValue: '全年开放\n无固定时段限制',
      scrollNote: '沿潮汐线前行'
    },
    intro: {
      sectionNumber: '01 — 认识海岸',
      eyebrow: '如实所见',
      title: '它并非度假村，这恰恰是它的魅力。',
      copy: '在 Kuala Muda（瓜拉慕达）沿海地带，Pantai Merdeka 更贴近周末家庭聚会的日常仪式，而非精心营造的旅游地产。场地开阔，氛围朴素如乡村，其午后最适合在不匆忙的状态下度过。',
      facts: {
        location: { label: '位置', value: '08500 Kota Kuala Muda, Kedah（吉打州瓜拉慕达县）' },
        entry: { label: '入场', value: '海滩区域通常免费进入' },
        suitable: { label: '适合', value: '散步、野餐与观赏黄昏' },
        note: { label: '备注', value: '配套设施依运营方当日安排而定' }
      },
      caption: '为傍晚的柔光而来，为海风而停留'
    },
    visit: {
      sectionNumber: '02 — 安排一日',
      eyebrow: '实用提示',
      title: '只要准备得当，午后可以很简单。',
      copy: '带上必需品，预计中午日照偏强，并为即兴停留留出空间。这片海岸更适合作为松弛之行，而非紧凑的打卡日程。',
      items: [
        { label: '最佳时段', value: '下午晚些时候直至黄昏，光线较柔和，海风也通常较为舒适。' },
        { label: '建议停留', value: '约 2–4 小时，用于漫步、野餐、进食并观察天色转换。' },
        { label: '费用', value: '海滩进入据报免费；建议携带小额现金，以支付洗手间、饮食、活动或乘船费用（如提供）。' },
        { label: '停车', value: '近岸通常设有停车区。周末与假期可能较拥挤，必要时请提早抵达。' }
      ],
      leaveNoTrace: '请共同爱护海岸。将垃圾带走，使用指定垃圾桶，勿投喂靠近游客区的野生动物。',
      fieldNote: {
        lines: ['实地记录', 'Kuala Muda', 'Kedah 海岸'],
        tip: '简要建议：携带帽子、饮用水、席垫与少量现金。下水前请核实天气、海况与现场安全指引。'
      }
    },
    experience: {
      sectionNumber: '03 — 缓慢前行',
      eyebrow: '潮汐节奏',
      title: '让一天像潮水般流动。',
      walkwayTag: '开阔场地，自定步速',
      items: [
        { title: '沿水线行走', copy: '选择适合潮间带地表的鞋履，跟随潮汐的进退而前行。' },
        { title: '铺开席垫', copy: '开阔场地适合家庭短暂休息、轻食，并让孩童在可监护区域活动。' },
        { title: '等待黄昏', copy: '无遮挡的海面视野，让傍晚本身成为值得多停留片刻的理由。' },
        { title: '游泳前三思', copy: '海水状态多变。仅在天气、洋流与当地安全指引允许时选择水上活动。' }
      ]
    },
    food: {
      sectionNumber: '04 — 邻近风味',
      eyebrow: '海岸饮食',
      title: '从最近的地方开始。',
      copy: '近岸的饮食摊位使散步后的一餐变得便捷。若需要更丰富的选择，可继续前往周边的沿海市镇。',
      items: [
        { title: '本地海鲜', copy: '沿海地区常见的选择；请直接向摊位或餐厅确认供给、价格与烹调方式。' },
        { title: '饮品摊位与小吃', copy: '适合短暂停留。营业时间在工作日与周末之间可能有所差异。' },
        { title: 'Tanjung Dawai', copy: '越过 Sungai Merbok（莫博河）河口，Tanjung Dawai 以渔港氛围与额外饮食选择，构成当日行程的自然延伸。' }
      ],
      caption: '建议：尤其在工作日或恶劣天气期间，请直接向意向商户确认营业时间。'
    },
    routes: {
      sectionNumber: '05 — 抵达此处',
      eyebrow: '方向与动线',
      title: '选择对你的日程最合理的路径。',
      copy: 'Pantai Merdeka 最便于以私人车辆抵达。请参阅地图获取实时交通状况，并在出发前向运营商确认公共交通接驳。',
      cards: [
        { span: '航空', title: 'Penang International Airport（槟城国际机场）', copy: '转以租车或网约车继续行程；陆路是抵达 Kota Kuala Muda 最实际的方式。' },
        { span: '巴士', title: '以 Sungai Petani（双溪大年）为转乘点', copy: '从市区客运总站，转乘出租车、网约车或事先安排的车辆前往海岸。' },
        { span: '出租车', title: '先预定返程接送', copy: '请提前确认回程乘车点；沿海地区的网约车覆盖范围可能存在差异。' },
        { span: '自驾', title: '沿地图导航至 Pantai Merdeka', copy: '有铺装道路直达近岸区域；抵达后请遵照路标与现场指示行进。' }
      ],
      mapLabel: 'Google 地图 · 马来语界面'
    },
    nearby: {
      sectionNumber: '06 — 延续旅程',
      eyebrow: 'Kuala Muda 周边',
      title: '河的对岸，与沿海一线，还有更多去处。',
      copy: '将这片海滩视作更长一天的一部分，而非唯一停留点。',
      cards: [
        { span: '跨河而行', title: 'Tanjung Dawai', copy: '以小艇横越 Sungai Merbok（莫博河）河口相连的沿海小镇，班次以现行运营时刻为准。' },
        { span: '水文足迹', title: 'Muara Merbok（莫博河口）', copy: '这片河流与沿海腹地提醒访客：Kuala Muda 的地貌由水流、红树林与渔村共同塑造。' },
        { span: '远方轮廓', title: 'Gunung Jerai（杰来山）', copy: '吉打州标志性山峰，在天气允许时，偶可从海岸一带望见其轮廓。' },
        { span: '邻近小岛', title: 'Pulau Sayak', copy: '邻近 Tanjung Dawai 的小岛，以虾面（mee udang）等海鲜料理闻名；请于现场直接核实营业时间与供应情况。' }
      ]
    },
    gallery: {
      sectionNumber: '07 — 实地相册',
      eyebrow: '实景记录',
      title: '潮汐的轮廓，十三帧如实记录。',
      copy: '一组未经过商业化调色修饰的 Pantai Merdeka（独立海滩）实拍影像，用于在到访前为访客提供未经中介的实地环境参考。',
      photos: [
        'Pantai Merdeka（独立海滩）沿岸全景，晴日天空下的沙滩绵延',
        'Pantai Merdeka（独立海滩）水际线，蓝绿色近岸海水与细碎波浪',
        'Pantai Merdeka（独立海滩）边缘路径沿线的海岸植被与树木',
        '午后柔光落在 Pantai Merdeka（独立海滩）海面之上',
        '以低角度拍摄 Pantai Merdeka（独立海滩）紧邻水边的沙带',
        '日间从 Pantai Merdeka（独立海滩）望向外海的开阔视野',
        'Pantai Merdeka（独立海滩）近旁的树荫遮蔽区域',
        '连接停车邻近区与 Pantai Merdeka（独立海滩）岸线的步行道',
        'Pantai Merdeka（独立海滩）海岸上方橙蓝交织的傍晚天色',
        '潮水驱动的细浪触及 Pantai Merdeka（独立海滩）沙缘',
        'Pantai Merdeka（独立海滩）毗邻的渔村沿海环境全景',
        'Pantai Merdeka（独立海滩）界线上的林木在金色黄昏下',
        'Pantai Merdeka（独立海滩）望向马六甲海峡（Selat Melaka）近岸海域，天气稳定'
      ]
    },
    faq: {
      sectionNumber: '08 — 出发前先问',
      eyebrow: '常见问题',
      title: '出发前的简明回答。',
      copy: '实用信息会随天气、节假日与运营方决策而变化。以下问题仅作准备参考，最终请以现场核实为准。',
      items: [
        { q: '进入 Pantai Merdeka 是否收费？', a: '海滩区域一般可免费进入。活动项目、洗手间、乘船及摊位服务为独立计费项目，作出决定前请在现场直接核实。' },
        { q: '什么时段到访较为合适？', a: '若追求更舒适的体验，可选择下午晚些时候，此时暑热缓解，海风通常更宜人。天气与潮汐均会变化；请优先遵循现场安全指引。' },
        { q: '是否可以乘船前往 Tanjung Dawai？', a: '目前有船班服务横越 Sungai Merbok（莫博河）河口，连接本区域与 Tanjung Dawai。班次、票价、天气条件与运营安排，均以当地运营方为准。' },
        { q: '附近是否有餐饮与洗手间？', a: '据报海滩近处设有饮食摊位与公共洗手间。可供选择的品类、开放时间与洗手间收费，会因日期与运营方而异。' },
        { q: '这里适合通宵露营吗？', a: '除非您已另行确认住宿或已登记的露营场地，否则建议将 Pantai Merdeka 作为日间行程。' },
        { q: '前往 Tanjung Dawai 的渡轮票价与班次如何？', a: '横越 Sungai Merbok（莫博河）河口、连接 Tanjung Dawai 的渡轮由当地运营方经营。票价、班次与运营安排会随季节与天气变动；过江前请直接向码头核实。' },
        { q: '附近是否有 chalet 或 homestay？', a: 'Pantai Merdeka 与 Tanjung Dawai 周边提供 chalet、homestay 及简易住宿选择。价格与可订状态随季节而异；请直接向意向商户确认。' },
        { q: 'Pulau Sayak 有什么可看？', a: '邻近 Tanjung Dawai 的 Pulau Sayak 以虾面（mee udang）等海鲜料理闻名。营业时间、收费与选择可能变动；到访前请直接向当地运营方核实。' }
      ]
    },
    footer: {
      disclaimer: '本站为非官方访客指南，与 Majlis Perbandaran Kota Kuala Muda（瓜拉慕达市议会，MPKM）、Lembaga Pelancongan Negeri Kedah（吉打州旅游局）、Tourism Malaysia（马来西亚旅游促进局）、任何景点运营方或 Google 均无关联。设施、天气、船班与商户信息可能变更；到访前请直接核实。',
      links: { plan: '规划', directions: '交通', faq: '常见问题' },
      legal: { privacy: '隐私政策', terms: '服务条款', cookies: 'Cookie 设置' },
      copyright: '© 2026 Pantai Merdeka 访客指南（吉打瓜拉慕达） · 保留所有权利。',
      imageRights: '本网站所展示的所有图片之产权与版权，均归各自原摄影者所有。'
    },
    legal: {
      privacy: {
        meta: { title: '隐私政策 · Pantai Merdeka 访客指南', description: '吉打州瓜拉慕达县 Pantai Merdeka 访客指南的官方隐私政策——涵盖收集数据种类、用途、第三方服务及依据《2010 年马来西亚个人数据保护法》与欧盟 GDPR 您所享有的权利。' },
        pageTitle: '隐私政策',
        updated: '最后更新：2026 年 8 月',
        intro: 'Pantai Merdeka 访客指南由一项独立、非营利的吉打沿海访客资讯计划运营，始终致力于保护每位访客的隐私。本政策阐明本项目收集数据的最低范围、使用方式、涉及第三方，以及在《2010 年个人数据保护法》（马来西亚）与适用情形下欧盟《通用数据保护条例》（GDPR）之下，您所享有的各项权利。',
        sections: [
          { heading: '我们收集的信息', paragraphs: ['我们仅收集稳定交付内容与维持网站基本功能所必需的最低限度数据。在常规场景下，数据集可能包含以下类别：'], list: ['标准访问日志：IP 地址、浏览器类型、请求页面、来源 URL 与访问时间戳', '必要的技术 Cookie 与浏览器本地存储（localStorage），用于记录语言界面偏好或在您主动确认后的 Cookie 同意选择', '若您选择通过联系表单或邮件主动与我们沟通，则包括您自愿提交的任何信息'] },
          { heading: '我们如何使用您的信息', paragraphs: ['收集到的数据仅专用于以下目的，本项目不构建任何第一方定向广告通道：'], list: ['基于聚合使用模式，改进内容、结构与整体可用性', '监测服务稳定性、定位异常并优化静态资源分发', '回应访客的请求、问询与反馈', '履行马来西亚境内网站发布者应承担的法定义务'] },
          { heading: '第三方服务', paragraphs: ['本网站可能嵌入由第三方运营的内容或外部前置资源。每项第三方服务均各自维护独立的隐私政策，与本政策彼此分离。'], list: ['Google 地图（Google Maps）：用于 Pantai Merdeka 坐标与位置导航的嵌入地图；可能在 Google LLC 旗下域名设置第三方 Cookie', 'Cloudflare Pages 发布平台：用于性能与静态资源分发，访问日志按 Cloudflare 隐私政策处理', '默认未启用任何第一方行为分析套件（例如 Google Analytics）；如后续构建中引入，将先取得明确的 opt-in 同意'] },
          { heading: '您的权利', paragraphs: ['根据您的司法辖区与适用法律，您可能有权主张以下权利：'], list: ['请求获取网站发布者持有的、与您相关的个人数据副本', '要求对不准确、不完整或不再必要的个人数据进行更正或删除', '对基于合法利益的处理提出反对，或在基于同意的处理中行使同意偏好', '向马来西亚通讯及数字部下属的个人数据保护专员办公室提出投诉；在 GDPR 适用的情形下，向具有管辖权的欧盟成员国监管机构投诉'] },
          { heading: '本政策的修订', paragraphs: ['我们可能不时更新本隐私政策，以反映技术变更、监管新规或新增服务。顶部所示「最后更新」日期代表当前最新一次修订。'] }
        ]
      },
      terms: {
        meta: { title: '服务条款 · Pantai Merdeka 访客指南', description: '吉打瓜拉慕达 Pantai Merdeka 访客指南的服务使用条款——信息用途、准确性免责、知识产权归属与责任限制。' },
        pageTitle: '服务条款',
        updated: '最后更新：2026 年 8 月',
        intro: '访问或使用 Pantai Merdeka 访客指南网站，即表示您同意受以下服务条款的约束。本网站由一项独立的非官方访客资讯计划发布，与 Majlis Perbandaran Kota Kuala Muda（瓜拉慕达市议会）、Lembaga Pelancongan Negeri Kedah（吉打州旅游局）、Tourism Malaysia（马来西亚旅游促进局）及任何商业景点运营方均无附属或合作关系。',
        sections: [
          { heading: '内容使用', paragraphs: ['本网站的全部文字、图示、标题与版式仅用于一般信息目的，不构成任何专业旅行建议、法律意见或财务层面的推荐。'] },
          { heading: '信息的准确性', paragraphs: ['我们尽力发布关于 Pantai Merdeka 及周边吉打瓜拉慕达沿海区域的准确且合时宜的信息。但对于所载信息的完整性、准确性、可靠性或适用性，我们不作任何明示或默示的担保。'], list: ['运营时间、船班票价、停车收费、设施费用与本地商户名录，皆可在无事先通知的情形下随时变更', '强烈建议您在启程前通过地方主管部门、景点运营者或目标商户的官方渠道，当面核实关键信息'] },
          { heading: '知识产权', paragraphs: ['专为 Pantai Merdeka 访客指南创作的网站设计、原始图形作品、信息架构与全部编辑文案，其著作权归项目出版方所有。', '本网站所展示的所有图片（包括 Pantai Merdeka 实地相册十三帧），其产权与版权均归各自原摄影者所有。在本网站之外的任何再使用，均需事先获得相应著作权持有人的书面授权。'], list: ['地图数据与嵌入地图组件，按现行 Google Maps 服务条款使用', '对第三方名称、商标及政府机构的任何引用，均为客观陈述，不构成背书或隶属主张'] },
          { heading: '责任限制', paragraphs: ['本网站按「现状」及「现有」基础提供，不附带任何明示或默示的担保，包括但不限于适销性与特定用途适用性的默示担保。'], list: ['在马来西亚法律允许的最大限度内，网站出版方不对因使用本网站而直接或间接引起的任何直接、间接、偶然、特殊、后果性或惩罚性损害承担责任', '本责任限制包括但不限于：依据本网站内容做出的旅行决策、服务中断、无法访问、或在浏览期间对您接入设备造成的损害'] },
          { heading: '外部链接', paragraphs: ['本网站可能包含指向第三方运营网站的链接。我们对任何被链接外部网站的内容、隐私政策或运营做法不具控制权，亦不承担任何责任。您对外部网站的访问，风险自行承担。'] },
          { heading: '条款修订', paragraphs: ['本服务条款或可不时修订。修订版本发布后对网站的继续使用，视为您接受更新后的文本。'] }
        ]
      },
      cookies: {
        meta: { title: 'Cookie 设置 · Pantai Merdeka 访客指南', description: 'Pantai Merdeka 访客指南的 Cookie 分类说明——必要、偏好、分析、营销四类及其各自子项，以及偏好管理与默认状态。' },
        pageTitle: 'Cookie 设置',
        updated: '最后更新：2026 年 8 月',
        intro: 'Pantai Merdeka 访客指南仅在维持核心功能所需的最低限度内，部署 Cookie 与浏览器 localStorage 等轻量存储技术。本页逐类说明可能存在的用途、对应子项，以及发布时的默认启用状态。',
        categories: [
          { name: '必要 Cookie', chip: '类别', status: '始终保持活跃', desc: '此类 Cookie 与本地存储项，对网站的基准运行至关重要，包括访问安全、Cookie 同意的留存记录，以及无需外部脚本即可跨页面保持的语言界面偏好。', items: [
            { name: '同意记录', chip: '必要', status: '始终保持活跃', desc: '在您通过同意对话框（若提供）明确表达偏好后，记录该选择；绝不用于跨域追踪。' },
            { name: '界面偏好', chip: '必要', status: '设置后活跃', desc: '记忆语言切换选项，以及未来版本可能引入的视觉模式开关，确保设置在页面跳转后保持一致。' }
          ]},
          { name: '分析型 Cookie', chip: '类别', status: '默认：未激活', desc: '由分析服务运营、用于匿名聚合访客行为数据的 Cookie。在当前公开发布版本中，并未安装任何第一方分析套件（如 Google Analytics）；如后续启用，将严格依赖 opt-in 明示同意。', items: [
            { name: '站点性能分析', chip: '可选', status: '未激活', desc: '仅作为未来前端布局可能引入的占位名称；至本政策最后更新日止，未安装任何审计脚本或数据聚合管道。' }
          ]},
          { name: '偏好 Cookie', chip: '类别', status: '默认：未激活', desc: '用于记忆视觉或版式自定义项的偏好型 Cookie。当前，网站第一方脚本未发出任何额外的偏好 Cookie。', items: [
            { name: '用户偏好', chip: '可选', status: '未激活', desc: '预留给未来视觉偏好功能使用，若届时引入的话。' }
          ]},
          { name: '营销 Cookie', chip: '类别', status: '默认：未激活', desc: '面向定向广告与营销活动衡量的追踪 Cookie。Pantai Merdeka 访客指南不投放营销 Cookie；若未来引入，将首先获得明确的 opt-in 同意。', items: [
            { name: '个性化广告', chip: '营销', status: '未激活', desc: '占位说明当前站点不投放基于兴趣的个性化广告；在当前构建版本中保持未启用。' }
          ]},
          { name: '第三方 Cookie', chip: '类别', status: '出版方无法直接控制', desc: 'Google 地图嵌入组件与 Google Fonts 预连接资源，可能出于安全、会话认证或地图定制目的，在 Google LLC 域下设置第三方 Cookie。此类 Cookie 无法通过本站提供的第一方设置面板直接禁用。', items: [] }
        ],
        management: { title: '同意管理', paragraphs: ['您可随时通过修改浏览器层级的选项来调整 Cookie 设置。具体删除或阻止 Cookie 的操作步骤，请参阅您所用浏览器的官方文档。请注意，阻止必要 Cookie 可能影响部分网站功能。', '若在未来版本中提供交互式 Cookie 同意横幅，则将出现以下两种操作：'], actions: { save: '保存偏好设置', reject: '拒绝一切' } }
      }
    },
    alt: {
      hero: 'Pantai Merdeka（独立海滩）沿岸与海面景观',
      sunset: 'Pantai Merdeka（独立海滩）海面上方的黄昏天色',
      walkway: 'Pantai Merdeka（独立海滩）的滨海步道与树荫',
      shade: 'Pantai Merdeka（独立海滩）边缘的树荫覆盖'
    },
    stamps: {
      intro: '05°39′58″N · 100°22′03″E',
      visit: '实地戳记 · 午后时段',
      experience: '潮汐线 · 02—04 小时',
      food: '沿岸 · 食摊',
      routes: '路线 · 水陆两线',
      nearby: 'MERBOK · KUALA MUDA',
      gallery: '实地相册 · 拾叁帧',
      faq: '以现场核实为准'
    },
    jsonLd: {
      placeName: 'Pantai Merdeka（独立海滩）',
      placeDescription: '一份关于吉打州瓜拉慕达县 Kota Kuala Muda 境内 Pantai Merdeka（独立海滩）的简明访客指南，涵盖海岸进入、交通方向、邻近饮食、公共设施及周边沿海站点。',
      streetAddress: 'Pantai Merdeka',
      addressLocality: 'Kota Kuala Muda',
      postalCode: '08500',
      addressRegion: 'Kedah',
      addressCountry: 'MY',
      openingHoursLabel: '区域开放时段',
      ratingNote: '评分来源于第三方访客名录聚合数据，可能随时变动。',
      faqType: '常见问题'
    }
  }
};

export function getContent(locale: LocaleKey): ContentDictionary {
  return dictionary[locale];
}
