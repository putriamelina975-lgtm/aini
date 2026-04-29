import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Recipe } from '../constants';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  if (!recipe) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row border border-natural-border"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-natural-bg/40 hover:bg-natural-bg backdrop-blur-md rounded-full text-natural-brand md:border md:border-natural-border transition-colors shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Left Side: Sidebar style Info & Ingredients */}
          <aside className="w-full md:w-80 shrink-0 bg-natural-bg p-8 flex flex-col gap-10 md:overflow-y-auto border-r border-natural-border">
              <div className="space-y-4">
                <span className="text-natural-accent text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">Bahan-bahan Utama</span>
                <div className="bg-white p-6 rounded-2xl border border-natural-border shadow-sm space-y-4">
                    <ul className="space-y-4">
                        {recipe.ingredients.map((ing, idx) => (
                            <li key={idx} className="flex justify-between items-start gap-4 text-xs font-medium">
                                <span className="text-gray-500">{ing.item}</span>
                                <span className="text-natural-brand font-bold text-right">{ing.amount}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-natural-brand border border-natural-border shadow-sm">
                          <Clock className="w-6 h-6" />
                      </div>
                      <div>
                          <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Waktu Masak</p>
                          <p className="text-sm font-bold text-natural-brand">{recipe.duration}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-natural-brand border border-natural-border shadow-sm">
                          <Users className="w-6 h-6" />
                      </div>
                      <div>
                          <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Porsi Hidangan</p>
                          <p className="text-sm font-bold text-natural-brand">{recipe.servings} Orang</p>
                      </div>
                  </div>
              </div>
          </aside>

          {/* Main Side: Hero & Steps */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 bg-white">
            <div className="flex justify-between items-start flex-col lg:flex-row gap-8">
              <div className="max-w-md space-y-4">
                <span className="text-natural-accent text-xs font-bold uppercase tracking-[0.2em] block">
                  {recipe.category}
                </span>
                <h2 className="text-5xl font-serif font-bold text-natural-brand italic leading-tight">
                    {recipe.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed italic">{recipe.description}</p>
              </div>

              <div className="w-32 h-32 md:w-48 md:h-48 bg-natural-bg rounded-[40px] rotate-3 overflow-hidden border-8 border-white shadow-xl flex-shrink-0">
                <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-10">
                <h3 className="text-natural-accent text-xs font-bold uppercase tracking-[0.2em] pt-8 border-t border-natural-border">Langkah-langkah Memasak</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {recipe.instructions.map((step) => (
                    <div key={step.step} className="flex gap-6 group">
                      <span className="text-5xl font-serif text-natural-border font-bold transition-colors group-hover:text-natural-accent">
                        {step.step < 10 ? `0${step.step}` : step.step}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-natural-brand text-sm">Langkah {step.step}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className="mt-8 flex justify-between items-center py-8 border-t border-natural-border">
                <button className="bg-natural-brand text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-natural-brand/10 hover:bg-natural-brand/90 transition-all">
                    Selesai & Sajikan
                </button>
                <div className="hidden lg:flex -space-x-3 items-center">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" />
                        </div>
                    ))}
                    <div className="pl-4 text-[10px] font-bold text-natural-brand uppercase tracking-widest">+1.2k orang baru saja mencoba</div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
