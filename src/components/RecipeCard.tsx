import React from 'react';
import { motion } from 'motion/react';
import { Play, UtensilsCrossed, ChefHat, Heart } from 'lucide-react';
import { Recipe } from '../constants';

export interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group relative h-[450px] bg-white rounded-[2rem] overflow-hidden recipe-shadow transition-all duration-500 cursor-pointer"
      id={`recipe-${recipe.id}`}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-natural-brand/90 via-natural-brand/40 to-transparent" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

      {/* Floating Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
          {recipe.category}
        </span>
      </div>

      <button className="absolute top-6 right-6 z-10 p-2.5 bg-white/10 hover:bg-natural-accent text-white backdrop-blur-md rounded-full transition-all duration-300 shadow-sm border border-white/20">
        <Heart size={18} fill="currentColor" className="fill-transparent group-hover:fill-current" />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-4">
        <div className="space-y-1">
          <h3 className="text-3xl font-serif font-bold italic leading-tight group-hover:text-natural-accent transition-colors">
            {recipe.title}
          </h3>
          <p className="text-white/70 text-sm line-clamp-2 italic font-light leading-relaxed">
            {recipe.description}
          </p>
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <UtensilsCrossed size={14} className="text-natural-accent" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat size={14} className="text-natural-accent" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{recipe.duration}</span>
          </div>
        </div>

        <div
          className="w-full bg-white text-natural-brand py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-natural-accent group-hover:text-white uppercase tracking-widest text-xs"
        >
          Lihat Cara Masak
          <Play size={10} className="fill-current" />
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
