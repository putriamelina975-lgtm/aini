import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Leaf, 
  ChefHat, 
  Filter, 
  ArrowRight,
  Utensils,
  Plus,
  Flame,
  Globe,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { CATEGORIES, RECIPES, Recipe } from './constants';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import AiniAI from './components/AiniAI';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter(recipe => {
      const matchesCategory = selectedCategory === 'Semua' || recipe.category === selectedCategory;
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-natural-brand rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="font-serif text-xl italic leading-none">A</span>
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-tight text-natural-brand">
              Aini<span className="text-natural-accent italic">Masakan</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-widest text-gray-400">
            <a href="#" className="text-natural-brand border-b-2 border-natural-accent pb-1">Beranda</a>
            <a href="#" className="hover:text-natural-brand transition-colors">Resep Populer</a>
            <a href="#" className="hover:text-natural-brand transition-colors">Tips Dapur</a>
            <a href="#" className="hover:text-natural-brand transition-colors">Tentang Aini</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-900">
              <Search size={22} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-[#f0ede6] px-4 py-2 rounded-full border border-transparent focus-within:border-natural-accent focus-within:bg-white transition-all">
                <Search size={16} className="text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Cari resep..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm w-48 text-natural-text"
                />
            </div>
            <button className="p-2.5 bg-natural-brand text-white rounded-full hover:bg-natural-brand/90 transition-all shadow-md">
                <Plus size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative bg-white pt-16 pb-24 overflow-hidden border-b border-natural-border" id="hero">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-natural-bg text-natural-accent rounded-full text-xs font-bold uppercase tracking-widest border border-natural-border">
                <Leaf size={14} className="fill-natural-accent/20" />
                Dapur Penuh Inspirasi
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-serif text-natural-brand leading-[1.1] font-bold">
                Masak Itu <span className="text-natural-accent italic">Mudah</span> & Menyenangkan.
              </h2>
              
              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                Temukan koleksi resep pilihan Aini yang dirancang untuk kebahagiaan keluarga Anda. Dari hidangan tradisional hingga kreasi modern.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-natural-brand text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-natural-brand/90 transition-all shadow-xl shadow-natural-brand/20 uppercase tracking-widest text-sm">
                  Lihat Menu <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-natural-brand border-2 border-natural-border rounded-2xl font-bold hover:bg-natural-bg transition-all uppercase tracking-widest text-sm">
                  Tanya Tips
                </button>
              </div>

              <div className="flex items-center gap-8 pt-12">
                <div>
                  <div className="text-3xl font-serif font-bold text-natural-brand italic">500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">Resep</div>
                </div>
                <div className="w-px h-10 bg-natural-border" />
                <div>
                  <div className="text-3xl font-serif font-bold text-natural-brand italic">10k+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">Koki Aktif</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative w-full aspect-square md:aspect-square bg-natural-bg rounded-[40px] rotate-3 overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Delicious Food"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-12 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-natural-border"
              >
                <div className="p-3 bg-natural-bg text-natural-brand rounded-2xl">
                    <Flame size={24} />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-natural-accent uppercase tracking-widest mb-1">Populer Hari Ini</p>
                    <h4 className="font-serif font-bold text-lg text-natural-brand italic">Nasi Goreng Kampung</h4>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Recipes Grid Section */}
        <section className="bg-natural-bg py-24" id="recipes">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <span className="text-natural-accent text-xs font-bold uppercase tracking-[0.2em]">Pilihan Terbaik</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-natural-brand italic font-bold">Koleksi Terpopuler</h2>
                        <p className="text-gray-500 max-w-lg leading-relaxed">Pilih kategori kesukaanmu dan temukan keajaiban rasa yang menanti.</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-natural-border">
                        <Filter size={18} className="text-gray-400 ml-2" />
                        <div className="flex gap-1">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                        selectedCategory === cat 
                                        ? 'bg-natural-brand text-white shadow-md' 
                                        : 'text-gray-400 hover:text-natural-brand hover:bg-natural-bg'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard 
                                key={recipe.id} 
                                recipe={recipe} 
                                onClick={() => setSelectedRecipe(recipe)} 
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredRecipes.length === 0 && (
                    <div className="text-center py-32 space-y-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                            <Utensils size={32} />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900">Resep tidak ditemukan</h3>
                        <p className="text-gray-500">Coba ganti kata kunci pencarian atau kategori Anda.</p>
                        <button 
                            onClick={() => {setSelectedCategory('Semua'); setSearchQuery('');}}
                            className="text-green-600 font-bold underline underline-offset-4"
                        >
                            Bersihkan Filter
                        </button>
                    </div>
                )}
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#e9e4d9] text-natural-brand pt-24 pb-12 border-t border-natural-border">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-natural-brand rounded-full flex items-center justify-center text-white">
                            <span className="font-serif text-xl italic leading-none">A</span>
                        </div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight">
                            Aini<span className="text-natural-accent italic">Masakan</span>
                        </h1>
                    </div>
                    <p className="text-gray-600 max-w-md leading-relaxed italic">
                        "Kami percaya bahwa makanan adalah perayaan kehidupan. Misi kami adalah membawa kemudahan memasak dan kelezatan hidangan ke setiap dapur di dunia."
                    </p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-natural-brand hover:bg-natural-accent hover:text-white transition-all">
                            <Instagram size={18} />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-natural-brand hover:bg-natural-accent hover:text-white transition-all">
                            <Facebook size={18} />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-natural-brand hover:bg-natural-accent hover:text-white transition-all">
                            <Twitter size={18} />
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] text-natural-accent">Menu Utama</h4>
                    <ul className="space-y-4 text-gray-500 font-medium text-sm">
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Resep Terkini</a></li>
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Diet Sehat</a></li>
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Cemilan Sore</a></li>
                    </ul>
                </div>

                <div className="space-y-8">
                    <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] text-natural-accent">Hubungi Aini</h4>
                    <ul className="space-y-4 text-gray-500 font-medium text-sm">
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Pusat Bantuan</a></li>
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-natural-brand transition-colors">Email Kami</a></li>
                    </ul>
                </div>
            </div>

            <div className="pt-12 border-t border-natural-border flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#5a5a40]/60">
                    &copy; 2026 AINI MASAKAN RECIPES. SEMUA HAK DILINDUNGI.
                </p>
                <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[#5a5a40]/60">
                    <span>Sop Buntut</span>
                    <span className="text-natural-accent">Sate Madura</span>
                    <span>Gado-Gado</span>
                </div>
            </div>
        </div>
      </footer>

      {/* Components */}
      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
      <AiniAI />
    </div>
  );
}
