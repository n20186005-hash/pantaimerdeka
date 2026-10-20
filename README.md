# Pantai Merdeka · Laman Pelawat

Laman panduan dalam Bahasa Melayu, bahasa Inggeris dan bahasa Cina untuk Pantai Merdeka, Kota Kuala Muda, Kedah. Projek ini menggunakan **Astro 7**, **Tailwind CSS 4**, **TypeScript** dan pelaksanaan aset statik melalui **Cloudflare Workers**. Tiada pangkalan data, log masuk atau CMS diperlukan.

| Keperluan | Nilai |
| --- | --- |
| Node.js | 22.13.0 (`.node-version`); minimum 22.12.0 |
| pnpm | 9.15.5 (`packageManager`) |
| Pemasangan | `CI=1 corepack pnpm install --frozen-lockfile` |
| Semakan | `pnpm check` |
| Binaan | `pnpm build` |
| Cloudflare | `pnpm cf:deploy` selepas autentikasi Wrangler |

## Konfigurasi URL tunggal

Tambah `PUBLIC_SITE_URL` sebelum membina, contohnya `PUBLIC_SITE_URL=https://domain-anda.example`. Nilai ini ialah satu-satunya konfigurasi domain dan Astro menggunakannya untuk canonical, Open Graph, JSON-LD serta sitemap. Jika nilai tidak ditetapkan, projek menggunakan https://pantaimerdeka.com/ sebagai domain canonical.

## Penyelenggaraan kandungan

Tapak menyatakan keadaan tempatan secara berhati-hati kerana kemudahan, cuaca, jadual bot, harga dan waktu operasi boleh berubah. Foto berada dalam `public/images/` agar projek berdiri sendiri untuk pelaksanaan Cloudflare.
