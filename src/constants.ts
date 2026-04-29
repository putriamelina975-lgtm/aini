export interface Ingredient {
  item: string;
  amount: string;
}

export interface Instruction {
  step: number;
  text: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  duration: string; // e.g. "30 min"
  difficulty: 'Mudah' | 'Sedang' | 'Ahli';
  servings: number;
  description: string;
  image: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
}

export const CATEGORIES = ['Semua', 'Sarapan', 'Makan Siang', 'Makan Malam', 'Cemilan', 'Minuman'];

export const RECIPES: Recipe[] = [
  {
    id: 'nasi-goreng-spesial',
    title: 'Nasi Goreng Spesial',
    category: 'Makan Malam',
    duration: '20 min',
    difficulty: 'Mudah',
    servings: 2,
    description: 'Nasi goreng klasik Indonesia dengan telur mata sapi dan kerupuk.',
    image: 'https://images.unsplash.com/photo-1512058560366-cd2429555614?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { item: 'Nasi putih dingin', amount: '2 piring' },
      { item: 'Bawang merah, cincang', amount: '3 siung' },
      { item: 'Bawang putih, cincang', amount: '2 siung' },
      { item: 'Kecap manis', amount: '2 sdm' },
      { item: 'Garam & merica', amount: 'Secukupnya' }
    ],
    instructions: [
      { step: 1, text: 'Tumis bawang merah dan bawang putih hingga harum.' },
      { step: 2, text: 'Masukkan nasi putih, aduk rata.' },
      { step: 3, text: 'Tambahkan kecap manis, garam, dan merica. Aduk terus hingga merata.' },
      { step: 4, text: 'Sajikan dengan telur mata sapi di atasnya.' }
    ]
  },
  {
    id: 'sate-ayam-madura',
    title: 'Sate Ayam Madura',
    category: 'Makan Malam',
    duration: '45 min',
    difficulty: 'Sedang',
    servings: 4,
    description: 'Sate ayam dengan bumbu kacang kental yang gurih dan manis.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { item: 'Daging ayam fillet', amount: '500g' },
      { item: 'Kacang tanah goreng', amount: '200g' },
      { item: 'Kecap manis', amount: '5 sdm' },
      { item: 'Bawang putih', amount: '3 siung' },
      { item: 'Kemiri', amount: '2 butir' }
    ],
    instructions: [
      { step: 1, text: 'Potong ayam kotak-kotak, tusuk dengan tusukan sate.' },
      { step: 2, text: 'Haluskan bumbu kacang, bawang, dan kemiri.' },
      { step: 3, text: 'Bakar sate sambil diolesi bumbu hingga matang.' },
      { step: 4, text: 'Sajikan dengan sisa bumbu kacang dan irisan bawang merah.' }
    ]
  },
  {
    id: 'gado-gado',
    title: 'Gado-Gado Betawi',
    category: 'Makan Siang',
    duration: '30 min',
    difficulty: 'Mudah',
    servings: 2,
    description: 'Salad khas Indonesia dengan sayuran rebus dan bumbu kacang.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { item: 'Toge, direbus', amount: '100g' },
      { item: 'Kacang panjang, potong & rebus', amount: '100g' },
      { item: 'Tahu & Tempe goreng', amount: 'Secukupnya' },
      { item: 'Bumbu kacang instan/buat sendiri', amount: '200ml' }
    ],
    instructions: [
      { step: 1, text: 'Susun semua sayuran dan tahu tempe di piring.' },
      { step: 2, text: 'Siram dengan bumbu kacang kental.' },
      { step: 3, text: 'Taburi kerupuk dan bawang goreng.' }
    ]
  },
  {
    id: 'jus-alpukat',
    title: 'Jus Alpukat Cokelat',
    category: 'Minuman',
    duration: '10 min',
    difficulty: 'Mudah',
    servings: 1,
    description: 'Jus alpukat kental dengan hiasan susu kental manis cokelat.',
    image: 'https://images.unsplash.com/photo-1549210646-659f143734b4?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { item: 'Alpukat matang', amount: '1 buah' },
      { item: 'Gula pasir', amount: '1 sdm' },
      { item: 'Es batu', amount: 'Secukupnya' },
      { item: 'SKM Cokelat', amount: 'Secukupnya' }
    ],
    instructions: [
      { step: 1, text: 'Blender alpukat, gula, dan es batu hingga halus.' },
      { step: 2, text: 'Hiasi dinding gelas dengan SKM cokelat.' },
      { step: 3, text: 'Tuang jus ke dalam gelas dan sajikan dingin.' }
    ]
  },
  {
      id: 'pisang-goreng',
      title: 'Pisang Goreng Pasir',
      category: 'Cemilan',
      duration: '15 min',
      difficulty: 'Mudah',
      servings: 3,
      description: 'Cemilan krispi favorit di sore hari.',
      image: 'https://images.unsplash.com/photo-1590483734724-38817540c89e?auto=format&fit=crop&q=80&w=800',
      ingredients: [
          { item: 'Pisang kepok', amount: '4 buah' },
          { item: 'Tepung terigu', amount: '5 sdm' },
          { item: 'Tepung roti', amount: 'Secukupnya' },
          { item: 'Gula pasir', amount: '1 sdm' }
      ],
      instructions: [
          { step: 1, text: 'Potong pisang menjadi 2 bagian.' },
          { step: 2, text: 'Celupkan ke adonan tepung terigu cair.' },
          { step: 3, text: 'Balur dengan tepung roti hingga rata.' },
          { step: 4, text: 'Goreng hingga kuning keemasan.' }
      ]
  }
];
