import { useState } from 'react';
import { Heart, Clock, Users, Bookmark, SlidersHorizontal, Sparkles, CalendarPlus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlpSuitabilityBadge, type GlpSuitabilityLevel } from './GlpSuitabilityBadge';

interface Recipe {
  id: number;
  title: string;
  image: string;
  protein: number;
  fibre: number;
  calories: number;
  time: number;
  servings: number;
  likes: number;
  isGlpFriendly: boolean;
  glpSuitability: GlpSuitabilityLevel;
  tags: string[];
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Mediterranean Power Bowl',
    image: 'https://images.unsplash.com/photo-1622484212239-7f8a0d790847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcHJvdGVpbiUyMGJvd2x8ZW58MXx8fHwxNjQwOTk1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 35,
    fibre: 8,
    calories: 420,
    time: 25,
    servings: 2,
    likes: 870,
    isGlpFriendly: true,
    glpSuitability: 3,
    tags: ['High Protein', 'High Fibre', 'GLP-1 Friendly'],
  },
  {
    id: 2,
    title: 'Grilled Chicken Garden Salad',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHNhbGFkfGVufDF8fHx8MTY0MDk5NTYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 42,
    fibre: 6,
    calories: 380,
    time: 20,
    servings: 1,
    likes: 1245,
    isGlpFriendly: true,
    glpSuitability: 3,
    tags: ['High Protein', 'Low Calorie', 'Quick'],
  },
  {
    id: 3,
    title: 'Herb-Crusted Salmon with Roasted Vegetables',
    image: 'https://images.unsplash.com/photo-1746783840967-738ea85b0f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjB2ZWdldGFibGVzJTIwZGlubmVyfGVufDF8fHx8MTY0MDk5NTYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 38,
    fibre: 7,
    calories: 445,
    time: 35,
    servings: 2,
    likes: 2103,
    isGlpFriendly: true,
    glpSuitability: 3,
    tags: ['High Protein', 'Omega-3', 'Dinner'],
  },
  {
    id: 4,
    title: 'Protein-Packed Veggie Scramble',
    image: 'https://images.unsplash.com/photo-1611730437448-f273048b4be1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwYnJlYWtmYXN0JTIwZWdnc3xlbnwxfHx8fDE2NDA5OTU2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 28,
    fibre: 5,
    calories: 320,
    time: 15,
    servings: 1,
    likes: 945,
    isGlpFriendly: true,
    glpSuitability: 3,
    tags: ['High Protein', 'Breakfast', 'Quick'],
  },
  {
    id: 5,
    title: 'Greek Yogurt Parfait with Berries',
    image: 'https://images.unsplash.com/photo-1618798513386-fedeb5c30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHlvZ3VydCUyMGJlcnJpZXN8ZW58MXx8fHwxNjQwOTk1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 22,
    fibre: 6,
    calories: 280,
    time: 5,
    servings: 1,
    likes: 1567,
    isGlpFriendly: true,
    glpSuitability: 2,
    tags: ['High Protein', 'Snack', 'No Cook'],
  },
  {
    id: 6,
    title: 'Lean Turkey & Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1693996045300-521e9d08cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFuJTIwcHJvdGVpbiUyMG1lYWx8ZW58MXx8fHwxNjQwOTk1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    protein: 40,
    fibre: 9,
    calories: 465,
    time: 30,
    servings: 2,
    likes: 1834,
    isGlpFriendly: true,
    glpSuitability: 3,
    tags: ['High Protein', 'High Fibre', 'Meal Prep'],
  },
];

interface RecipeGridProps {
  favoritesOnly?: boolean;
}

export function RecipeGrid({ favoritesOnly }: RecipeGridProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filters = ['GLP-1 Friendly', 'High Protein', 'High Fibre', 'Quick', 'Low Calorie', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[#465E5A]">
            {favoritesOnly ? 'Your Favorites' : 'Recommended for You'}
          </h2>
          <p className="text-[#465E5A]/70 text-sm mt-1">
            {favoritesOnly ? 'Recipes you loved' : 'Personalised meals to support your journey'}
          </p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#465E5A]/15 rounded hover:bg-[#E5F2E4] transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#465E5A]" />
          <span className="text-[#465E5A] text-sm">Filters</span>
          {selectedFilters.length > 0 && (
            <span className="px-2 py-0.5 bg-[#DDEFDC] text-[#465E5A] text-xs numeric">
              {selectedFilters.length}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="mb-6 p-4 bg-white border border-[#465E5A]/15">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilters((prev) =>
                    prev.includes(filter)
                      ? prev.filter((f) => f !== filter)
                      : [...prev, filter]
                  );
                }}
                className={`px-4 py-2 rounded text-sm transition-all ${
                  selectedFilters.includes(filter)
                    ? 'bg-[#6264A1] text-white'
                    : 'bg-[#EEEBE7] text-[#465E5A] hover:bg-[#E5F2E4]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-white border border-[#465E5A]/15 rounded hover:bg-[#E5F2E4] transition-colors text-[#465E5A]">
          Load More Recipes
        </button>
      </div>
    </section>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isAddedToMealPlan, setIsAddedToMealPlan] = useState(false);

  return (
    <article className="group bg-white border border-[#465E5A]/15 overflow-hidden hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EEEBE7]">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {recipe.isGlpFriendly && (
            <GlpSuitabilityBadge level={recipe.glpSuitability} variant="compact" />
          )}
          {recipe.protein >= 30 && (
            <span className="px-2.5 py-1 bg-[#465E5A] text-white text-xs">
              High Protein
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsAddedToMealPlan(!isAddedToMealPlan)}
            className="w-9 h-9 bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <CalendarPlus
              className={`w-4 h-4 ${isAddedToMealPlan ? 'fill-[#6264A1] text-[#6264A1]' : 'text-[#465E5A]'}`}
            />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-9 h-9 bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#465E5A]'}`}
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[#465E5A] mb-3 line-clamp-2">{recipe.title}</h3>

        {/* GLP-1 Suitability Rating */}
        {recipe.isGlpFriendly && (
          <div className="mb-4">
            <GlpSuitabilityBadge level={recipe.glpSuitability} variant="full" showDetails={true} />
          </div>
        )}

        {/* Nutrition Info */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-[#DDEFDC]/30">
            <p className="text-[#465E5A] text-sm numeric">{recipe.protein}g</p>
            <p className="text-xs text-[#465E5A]/70">Protein</p>
          </div>
          <div className="text-center p-2 bg-[#E5F2E4]/50">
            <p className="text-[#465E5A] text-sm numeric">{recipe.fibre}g</p>
            <p className="text-xs text-[#465E5A]/70">Fibre</p>
          </div>
          <div className="text-center p-2 bg-[#C5DFF2]/30">
            <p className="text-[#465E5A] text-sm numeric">{recipe.calories}</p>
            <p className="text-xs text-[#465E5A]/70">Cal</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-[#465E5A]/70 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="numeric">{recipe.time} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span className="numeric">{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span className="numeric">{recipe.likes.toLocaleString()}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-2.5 bg-[#6264A1] text-white hover:bg-[#465E5A] transition-colors">
          View Recipe
        </button>
      </div>
    </article>
  );
}