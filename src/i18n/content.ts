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
  };
  alt: AltTextSet;
  stamps: {
    intro: string;
    visit: string;
    experience: string;
    food: string;
    routes: string;
    nearby: string;
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
      title: 'Pantai Merdeka · Panduan Pesisir Kuala Muda',
      description: 'Panduan ringkas untuk menikmati Pantai Merdeka di Kota Kuala Muda, Kedah — pantai, arah, makan, kemudahan dan tempat berdekatan.',
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
        { span: 'Pemandangan jauh', title: 'Gunung Jerai', copy: 'Gunung ikonik Kedah yang kadangkala membingkai pandangan dari pesisir ketika cuaca mengizinkan.' }
      ]
    },
    faq: {
      sectionNumber: '07 — Tanya dahulu',
      eyebrow: 'FAQ',
      title: 'Jawapan ringkas sebelum bertolak.',
      copy: 'Maklumat praktikal berubah mengikut cuaca, cuti dan pengendali. Gunakan soalan ini sebagai persediaan, kemudian semak keadaan di lokasi.',
      items: [
        { q: 'Adakah masuk ke Pantai Merdeka dikenakan bayaran?', a: 'Akses ke kawasan pantai lazimnya percuma. Aktiviti, tandas, bot dan perkhidmatan gerai adalah berasingan, jadi semak terus di lokasi sebelum membuat keputusan.' },
        { q: 'Bilakah waktu yang baik untuk datang?', a: 'Bagi suasana yang lebih selesa, pilih lewat petang apabila panas berkurang dan angin laut terasa lebih baik. Keadaan cuaca serta pasang surut berubah; utamakan nasihat keselamatan di lokasi.' },
        { q: 'Bolehkah saya menaiki bot ke Tanjung Dawai?', a: 'Terdapat perkhidmatan bot yang menghubungkan kawasan ini dengan Tanjung Dawai merentasi Sungai Merbok. Jadual, tambang, keadaan cuaca dan operasi adalah tertakluk kepada pengendali setempat.' },
        { q: 'Ada tempat makan dan tandas?', a: 'Gerai makanan dan tandas awam dilaporkan berada berhampiran pantai. Pilihan, waktu operasi dan caj tandas boleh berubah mengikut hari serta pengendali.' },
        { q: 'Adakah sesuai untuk berkhemah semalaman?', a: 'Rancang Pantai Merdeka sebagai lawatan sehari kecuali anda telah mengesahkan penginapan atau tapak perkhemahan yang sah secara berasingan.' }
      ]
    },
    footer: {
      disclaimer: 'Tapak ini ialah panduan pelawat tidak rasmi dan tidak berafiliasi dengan mana-mana pihak berkuasa, pengendali tarikan atau Google. Maklumat kemudahan, cuaca, bot dan perniagaan boleh berubah; sahkan terus sebelum lawatan.',
      links: { plan: 'Rancang', directions: 'Arah', faq: 'FAQ' }
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
      title: 'Pantai Merdeka · A Coastal Field Guide to Kuala Muda',
      description: 'A concise visitor guide to Pantai Merdeka in Kota Kuala Muda, Kedah — shore access, directions, nearby eating, facilities and adjacent coastal stops.',
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
        { span: 'Distant view', title: 'Gunung Jerai', copy: 'The iconic Kedah peak that occasionally frames the coastal horizon when the weather permits.' }
      ]
    },
    faq: {
      sectionNumber: '07 — Ask first',
      eyebrow: 'FAQ',
      title: 'Short answers before you leave.',
      copy: 'Practical information shifts with the weather, holidays and operator decisions. Use these questions as preparation, then confirm conditions on site.',
      items: [
        { q: 'Is entry to Pantai Merdeka charged?', a: 'Access to the shore area is generally free of charge. Activities, toilets, boats and stall services are separate, so verify directly on site before making any decision.' },
        { q: 'When is a good time to come?', a: 'For a more comfortable atmosphere, choose late afternoon when the heat eases and the sea breeze is usually more pleasant. Weather and tides change; prioritise on-site safety advice.' },
        { q: 'Can I take a boat to Tanjung Dawai?', a: 'Boat services connect the area with Tanjung Dawai across the Sungai Merbok estuary. Schedules, fares, weather and operations are at the discretion of local operators.' },
        { q: 'Are there places to eat and toilets?', a: 'Food stalls and public toilets are reported near the shore. Selection, opening hours and toilet charges may vary by day and by operator.' },
        { q: 'Is this a suitable place for overnight camping?', a: 'Plan Pantai Merdeka as a day visit unless you have separately confirmed accommodation or a registered camping site in advance.' }
      ]
    },
    footer: {
      disclaimer: 'This site is an unofficial visitor guide and is not affiliated with any authority, attraction operator or Google. Facilities, weather, boats and business details can change; confirm directly before visiting.',
      links: { plan: 'Plan', directions: 'Directions', faq: 'FAQ' }
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
      title: 'Pantai Merdeka · 吉打居林海岸实地指南',
      description: '一份关于吉打州瓜拉慕达县 Kota Kuala Muda 境内 Pantai Merdeka（独立海滩）的简明访客指南，涵盖海岸进入、交通方向、邻近饮食、公共设施及周边沿海站点。',
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
        { span: '远方轮廓', title: 'Gunung Jerai（杰来山）', copy: '吉打州标志性山峰，在天气允许时，偶可从海岸一带望见其轮廓。' }
      ]
    },
    faq: {
      sectionNumber: '07 — 出发前先问',
      eyebrow: '常见问题',
      title: '出发前的简明回答。',
      copy: '实用信息会随天气、节假日与运营方决策而变化。以下问题仅作准备参考，最终请以现场核实为准。',
      items: [
        { q: '进入 Pantai Merdeka 是否收费？', a: '海滩区域一般可免费进入。活动项目、洗手间、乘船及摊位服务为独立计费项目，作出决定前请在现场直接核实。' },
        { q: '什么时段到访较为合适？', a: '若追求更舒适的体验，可选择下午晚些时候，此时暑热缓解，海风通常更宜人。天气与潮汐均会变化；请优先遵循现场安全指引。' },
        { q: '是否可以乘船前往 Tanjung Dawai？', a: '目前有船班服务横越 Sungai Merbok（莫博河）河口，连接本区域与 Tanjung Dawai。班次、票价、天气条件与运营安排，均以当地运营方为准。' },
        { q: '附近是否有餐饮与洗手间？', a: '据报海滩近处设有饮食摊位与公共洗手间。可供选择的品类、开放时间与洗手间收费，会因日期与运营方而异。' },
        { q: '这里适合通宵露营吗？', a: '除非您已另行确认住宿或已登记的露营场地，否则建议将 Pantai Merdeka 作为日间行程。' }
      ]
    },
    footer: {
      disclaimer: '本站为非官方访客指南，与任何主管机构、景点运营方或 Google 无关联。设施、天气、船班与商户信息可能变更；到访前请直接核实。',
      links: { plan: '规划', directions: '交通', faq: '常见问题' }
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
