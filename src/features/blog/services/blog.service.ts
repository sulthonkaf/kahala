import type { Article } from "../types/article.type";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "cara-memilih-snack-sehat",
    title: "Cara Memilih Snack Sehat untuk Rutinitas Padat",
    excerpt: "Panduan praktis memilih snack yang lebih mindful tanpa mengorbankan rasa.",
    category: "Healthy Guide",
    publishedAt: "2026-05-01",
    readTime: "4 min",
    coverImage: KAHALA_IMAGES.freshFruitSpread,
    author: "Kahala Editorial",
    tags: ["Daily snack", "Mindful eating", "Fruit bowl"],
    isFeatured: true,
    content:
      "Snack sehat yang baik tidak harus rumit. Untuk rutinitas padat, fokus pada tiga hal: bahan yang jelas, porsi yang masuk akal, dan rasa yang tetap enjoyable.\n\nFruit bowl bisa menjadi pilihan yang mudah dipahami karena visualnya langsung menunjukkan bahan utama. Kombinasi buah segar, tekstur yang ringan, dan sweetness yang seimbang membantu snack terasa lebih natural.\n\nAgar kebiasaan ini bertahan, pilih format yang praktis. Personal cup cocok untuk hari kerja, sharing pack cocok untuk momen bersama, dan weekly pack membantu repeat order lebih konsisten.",
  },
  {
    id: "2",
    slug: "ide-snack-untuk-meeting",
    title: "Ide Snack untuk Meeting dan Corporate Event",
    excerpt: "Pilihan snack yang rapi, praktis, dan tetap terlihat premium untuk acara kantor.",
    category: "Corporate",
    publishedAt: "2026-05-05",
    readTime: "3 min",
    coverImage: KAHALA_IMAGES.officeHealthyLunch,
    author: "Kahala Business",
    tags: ["Corporate", "Meeting snack", "Office"],
    content:
      "Untuk meeting, pilih snack yang mudah dibagikan, tidak messy, dan punya visual yang menarik. Snack yang rapi membantu meja meeting tetap bersih dan membuat pengalaman peserta lebih nyaman.\n\nFruit cup personal cocok untuk meeting formal. Sharing fruit box cocok untuk workshop, training, atau ruang pantry. Untuk event besar, paket dengan label dan jadwal delivery yang jelas akan mengurangi pekerjaan PIC.\n\nKunci corporate snack adalah prediktabilitas: jumlah pax, tanggal, lokasi, dan budget harus cepat dikunci agar operasional berjalan tenang.",
  },
  {
    id: "3",
    slug: "sweet-control-tanpa-rasa-bersalah",
    title: "Sweet Control: Menikmati Rasa Manis dengan Lebih Mindful",
    excerpt: "Cara menjaga craving tetap menyenangkan tanpa memilih snack yang terlalu berat.",
    category: "Sweet Control",
    publishedAt: "2026-05-08",
    readTime: "5 min",
    coverImage: KAHALA_IMAGES.berryBowl,
    author: "Kahala Editorial",
    tags: ["Sweet control", "Healthy habit"],
    content:
      "Sweet craving sering datang saat energi mulai turun. Daripada menahannya sepenuhnya, pendekatan yang lebih realistis adalah memilih rasa manis yang lebih ringan dan tetap memuaskan.\n\nBuah segar memberi rasa manis natural sekaligus warna dan aroma yang menggugah. Dengan porsi yang pas, snack terasa seperti reward kecil tanpa membuat tubuh terasa terlalu penuh.\n\nKahala memosisikan sweet control sebagai pengalaman yang tetap enak, bukan kompromi yang terasa hambar.",
  },
  {
    id: "4",
    slug: "weekly-pack-untuk-kebiasaan-sehat",
    title: "Kenapa Weekly Pack Membantu Kebiasaan Snack Sehat",
    excerpt: "Repeat order dan menu rotation bisa membuat healthy snacking lebih mudah dilakukan.",
    category: "Lifestyle",
    publishedAt: "2026-05-11",
    readTime: "4 min",
    coverImage: KAHALA_IMAGES.healthyPrep,
    author: "Kahala Editorial",
    tags: ["Weekly pack", "Routine"],
    content:
      "Healthy habit lebih mudah bertahan saat keputusan kecil dibuat lebih sederhana. Weekly pack mengurangi pertanyaan harian tentang snack apa yang harus dibeli.\n\nDengan menu rotation, pelanggan tetap mendapatkan variasi rasa tanpa perlu memilih dari awal setiap hari. Untuk kantor, weekly pack juga bisa membantu pantry terasa lebih fresh.\n\nFormat ini cocok untuk pelanggan yang ingin snack sehat menjadi rutinitas, bukan impuls sesekali.",
  },
  {
    id: "5",
    slug: "fruit-bowl-yang-terlihat-premium",
    title: "Membuat Fruit Bowl Terlihat Lebih Premium",
    excerpt: "Visual, warna buah, dan packaging punya peran besar dalam membangun trust.",
    category: "Brand Experience",
    publishedAt: "2026-05-14",
    readTime: "4 min",
    coverImage: KAHALA_IMAGES.marketFruitBoard,
    author: "Kahala Studio",
    tags: ["Packaging", "Brand", "Visual"],
    content:
      "Healthy snack sangat bergantung pada visual. Warna buah, potongan yang rapi, dan packaging yang bersih membuat pelanggan lebih percaya sebelum mencicipi.\n\nUntuk brand seperti Kahala, visual bukan dekorasi. Ia membantu user memahami freshness, porsi, dan kualitas dalam hitungan detik.\n\nKarena itu, website, foto produk, CTA, dan halaman detail harus bekerja bersama untuk membuat pengalaman terasa premium namun tetap mudah dibeli.",
  },
];
export async function getArticles() { return ARTICLES; }
export async function getArticleBySlug(slug: string) { return ARTICLES.find((a) => a.slug === slug) ?? null; }
