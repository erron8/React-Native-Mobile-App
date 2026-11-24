# Folio

Folio adalah prototipe aplikasi mobile bertema koleksi inspirasi visual. Proyek ini dibuat untuk UTS Aplikasi Berbasis Platform dengan React Native, Expo, dan JavaScript.

## Layar dan navigasi

Lima tab utama menggunakan Bottom Tab Navigation dari Expo Router.

- **Home** menampilkan feed dengan filter kategori.
- **Search** menampilkan topik dan rekomendasi pin.
- **Add** menampilkan prototipe form unggah foto.
- **Notifications** menampilkan contoh aktivitas dalam grup Today dan Yesterday.
- **Profile** menampilkan profil dan empat board.

Ketuk kartu di Home untuk membuka **Pin Detail** lewat Stack Navigation. ID kartu menentukan foto, judul, kategori, dan deskripsi yang ditampilkan. Panah kembali di header membawa ke Home.

## Cara menjalankan

Gunakan Node.js 22.13 atau lebih baru pada lini 22. Jalankan dari folder proyek.

```sh
npm ci
npm start
```

Pindai QR dengan Expo Go untuk SDK 58, atau tekan `a` untuk membuka aplikasi di emulator Android.

## Aset dan referensi

Folio memakai ikon Lucide serta font DM Sans dan DM Serif Display. Placeholder selama pengembangan menggunakan Placehold.co. [Lucide](https://lucide.dev/) · [DM Fonts](https://github.com/googlefonts/dm-fonts) · [Placehold.co](https://placehold.co/)

Foto yang dikreditkan ke fotografer Unsplash menggunakan lisensi standar Unsplash. [Unsplash License](https://unsplash.com/license)

**Home**

- Grey Hour — [Cat Han](https://unsplash.com/photos/black-and-gray-round-container-on-brown-wooden-table-URi_yR9qtgs)
- Realistic Art — [Elias Vieren](https://unsplash.com/photos/modern-abstract-metal-sculpture-with-curved-intertwined-forms-FQvkNfLQeNU)
- Elegant Vase — [Mary Skrynnikova](https://unsplash.com/photos/a-white-vase-sitting-on-top-of-a-table-uluH5a0sRdw)
- Shapes — [Lea L](https://unsplash.com/photos/geometric-shapes-on-light-surface-q--99IzY8Lw)

**Search**

- Night Photography — [Natalie Chaney](https://unsplash.com/photos/starry-night-over-zion-mountains-zhUzdTgtRP8)
- Studio Objects — [Rabie Madaci](https://unsplash.com/photos/home-decor-lot-skx1Rn6LW9I)
- Everyday Style — [Heather Ford](https://unsplash.com/photos/pair-of-brown-leather-flats-and-white-ceramic-mug-Tw9iB8TGRGI)
- Midnight Drive — [Davyd Markovskyi](https://unsplash.com/photos/person-in-gray-long-sleeve-shirt-driving-car-vbE-_5S7wBw)
- City From Above — [Lerone Pieters](https://unsplash.com/photos/aerial-view-of-a-brightly-lit-city-at-dusk-VHXs4-7AuJI)

**Profile**

- Cover — [Cedric Letsch](https://unsplash.com/photos/los-angeles-skyline-with-palm-trees-UZVlSjrIJ3o)
- Board 1 — [Gilley Aguilar](https://unsplash.com/photos/a-basketball-rests-on-a-blue-court-V4m-ZPTz5hs) · [Marius Kriz](https://unsplash.com/photos/basketball-hoop-on-a-court-at-sunset-JBsK9rJEccA)
- Board 2 — [Matt Aylward](https://unsplash.com/photos/golfer-swinging-club-on-green-course-Nmh-pEBRt2Y) · [Welcome](https://unsplash.com/photos/lawnmower-on-golf-course-green-08Ipbe8GpWw)
- Board 3 — [Kinshuk Bose](https://unsplash.com/photos/selective-focus-photography-of-lying-short-coated-black-and-tan-dog-pkgznCMKDXo) · [Lukáš Vaňátko](https://unsplash.com/photos/a-close-up-of-a-dog-with-its-mouth-open-kvwkpNwwc74)
- Board 4 — [Casey Lee](https://unsplash.com/photos/salmon-fillet-with-salsa-and-red-wine-awj7sRviVXo) · [Victoria Shes](https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY)

### Referensi desain

Inspirasi utama Folio adalah aplikasi mobile Pinterest, terutama tampilan feed pin dan pengelompokan pin ke dalam board. [Pinterest di Google Play](https://play.google.com/store/apps/details?id=com.pinterest)

Referensi UI/UX mobile dari X

- [@WasimShips](https://x.com/WasimShips/status/2120851846214684747)
- [@uiuxbyvicko](https://x.com/uiuxbyvicko/status/2123302753749614908/photo/1)
- [@uiuxjosh](https://x.com/uiuxjosh/status/2122599398714589601)
- [@HenrykMatthew](https://x.com/HenrykMatthew/status/1923095249523539977)
