import { Dialog, DialogContent, DialogTitle, DialogClose, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Heart, CalendarPlus, X, Dumbbell, Droplet, Flame, Scale } from "lucide-react";
import { GlpSuitabilityBadge } from "./GlpSuitabilityBadge";
import { Recipe } from "./RecipeGrid";
import { useState } from "react";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: Recipe | null;
}

export function RecipeModal({ isOpen, onClose, recipe }: RecipeModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToMealPlan, setIsAddedToMealPlan] = useState(false);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'method' | 'nutrition'>('ingredients');

  if (!recipe) return null;

  // Calculate percentage for nutrient bars (based on 2000 calorie diet)
  const getNutrientPercentage = (nutrient: string, value: number) => {
    const dailyValues: { [key: string]: number } = {
      protein: 50,
      carbs: 275,
      fat: 78,
      saturatedFat: 20,
      fibre: 28,
      sugar: 50,
      sodium: 2300
    };
    return Math.min((value / dailyValues[nutrient]) * 100, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl p-0 gap-0 overflow-hidden border-none bg-white max-h-[95vh] flex flex-col">
        <DialogTitle className="sr-only">{recipe.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed recipe view for {recipe.title}, including ingredients, nutritional information, and cooking instructions.
        </DialogDescription>
        
        {/* Fixed Close Button */}
        <DialogClose className="fixed top-4 right-4 z-50 w-10 h-10 bg-white/95 hover:bg-white text-[#465E5A] flex items-center justify-center transition-all hover:scale-105 shadow-lg">
          <span className="sr-only">Close</span>
          <X className="w-5 h-5" />
        </DialogClose>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Hero Image Section */}
          <div className="relative h-64 md:h-80 bg-[#EEEBE7] shrink-0">
            <ImageWithFallback
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* GLP Badge - Prominent Position */}
            {recipe.isGlpFriendly && (
              <div className="absolute top-6 left-6 z-10">
                <GlpSuitabilityBadge 
                  level={recipe.glpSuitability} 
                  variant="full" 
                  showDetails={false} 
                />
              </div>
            )}
            
            {/* Title & Quick Meta Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <h2 className="text-white text-3xl md:text-4xl mb-4 tracking-tight">
                {recipe.title}
              </h2>
              <div className="flex items-center gap-4 md:gap-6 text-white/90 flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">{recipe.time} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{recipe.likes.toLocaleString()} saves</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Stats Bar */}
          <div className="grid grid-cols-3 gap-px bg-[#465E5A]/10">
            <div className="bg-white px-4 md:px-6 py-4 md:py-5">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#6264A1]/10 flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 md:w-5 md:h-5 text-[#6264A1]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#465E5A]/60">Protein</span>
              </div>
              <p className="text-xl md:text-2xl text-[#465E5A] md:ml-12">{recipe.protein}g</p>
            </div>
            <div className="bg-white px-4 md:px-6 py-4 md:py-5">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#6264A1]/10 flex items-center justify-center">
                  <Droplet className="w-4 h-4 md:w-5 md:h-5 text-[#6264A1]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#465E5A]/60">Fibre</span>
              </div>
              <p className="text-xl md:text-2xl text-[#465E5A] md:ml-12">{recipe.fibre}g</p>
            </div>
            <div className="bg-white px-4 md:px-6 py-4 md:py-5">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#6264A1]/10 flex items-center justify-center">
                  <Flame className="w-4 h-4 md:w-5 md:h-5 text-[#6264A1]" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#465E5A]/60">Calories</span>
              </div>
              <p className="text-xl md:text-2xl text-[#465E5A] md:ml-12">{recipe.calories}</p>
            </div>
          </div>

          {/* GLP Details Section */}
          {recipe.isGlpFriendly && (
            <div className="bg-gradient-to-br from-[#E5F2E4] to-[#DDEFDC] px-6 md:px-8 py-5 md:py-6 border-y border-[#465E5A]/5">
              <GlpSuitabilityBadge 
                level={recipe.glpSuitability} 
                variant="full" 
                showDetails={true} 
              />
            </div>
          )}

          {/* Main Content Area */}
          <div className="px-6 md:px-8 py-6 md:py-8">
            {/* Dietary Attributes */}
            {recipe.dietaryAttributes && recipe.dietaryAttributes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-[#465E5A]/70">Dietary Information:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recipe.dietaryAttributes.map((attribute, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#E5F2E4] text-[#465E5A] text-sm rounded-full border border-[#465E5A]/10"
                    >
                      {attribute}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs Navigation */}
            <div className="flex gap-1 mb-6 md:mb-8 bg-[#F4F6F7] p-1">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`flex-1 py-3 px-4 md:px-6 transition-all ${
                  activeTab === 'ingredients' 
                    ? 'bg-white text-[#465E5A] shadow-sm' 
                    : 'text-[#465E5A]/60 hover:text-[#465E5A]/80'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('method')}
                className={`flex-1 py-3 px-4 md:px-6 transition-all ${
                  activeTab === 'method' 
                    ? 'bg-white text-[#465E5A] shadow-sm' 
                    : 'text-[#465E5A]/60 hover:text-[#465E5A]/80'
                }`}
              >
                Method
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`flex-1 py-3 px-4 md:px-6 transition-all ${
                  activeTab === 'nutrition' 
                    ? 'bg-white text-[#465E5A] shadow-sm' 
                    : 'text-[#465E5A]/60 hover:text-[#465E5A]/80'
                }`}
              >
                Nutrition Facts
              </button>
            </div>

            {/* Tab Content */}
            <div className="mb-6">
              {activeTab === 'ingredients' && (
                <div className="space-y-2">
                  {recipe.ingredients?.map((ingredient, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 px-4 py-3 hover:bg-[#F4F6F7] transition-colors"
                    >
                      <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#6264A1]" />
                      </div>
                      <span className="text-[#465E5A] leading-relaxed">{ingredient}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'method' && (
                <div className="space-y-6">
                  {recipe.instructions?.map((instruction, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-5">
                      <div className="shrink-0 w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
                        <span className="text-lg">{idx + 1}</span>
                      </div>
                      <p className="text-[#465E5A] leading-relaxed pt-2">{instruction}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'nutrition' && recipe.nutrition && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="border-b-4 border-[#465E5A] pb-2">
                    <h3 className="text-2xl text-[#465E5A]">Nutrition Facts</h3>
                    <p className="text-sm text-[#465E5A]/70 mt-1">Per serving</p>
                  </div>

                  {/* Calories - Large Display */}
                  <div className="border-b-2 border-[#465E5A]/20 pb-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[#465E5A]">Calories</span>
                      <span className="text-4xl text-[#465E5A]">{recipe.calories}</span>
                    </div>
                  </div>

                  {/* Nutrient Breakdown */}
                  <div className="space-y-5">
                    {/* Protein */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-[#6264A1]" />
                          <span className="text-[#465E5A]">Protein</span>
                        </div>
                        <span className="text-[#465E5A]">{recipe.protein}g</span>
                      </div>
                      <div className="h-3 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#6264A1] transition-all"
                          style={{ width: `${getNutrientPercentage('protein', recipe.protein)}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#465E5A]/60 mt-1 block">
                        {Math.round(getNutrientPercentage('protein', recipe.protein))}% of daily value
                      </span>
                    </div>

                    {/* Carbohydrates */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#465E5A]">Carbohydrates</span>
                        <span className="text-[#465E5A]">{recipe.nutrition.carbs}g</span>
                      </div>
                      <div className="h-3 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#B2D4EE] transition-all"
                          style={{ width: `${getNutrientPercentage('carbs', recipe.nutrition.carbs)}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#465E5A]/60 mt-1 block">
                        {Math.round(getNutrientPercentage('carbs', recipe.nutrition.carbs))}% of daily value
                      </span>
                    </div>

                    {/* Sugar (indented) */}
                    <div className="ml-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#465E5A] text-sm">of which Sugars</span>
                        <span className="text-[#465E5A] text-sm">{recipe.nutrition.sugar}g</span>
                      </div>
                      <div className="h-2 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#C5DFF2] transition-all"
                          style={{ width: `${getNutrientPercentage('sugar', recipe.nutrition.sugar)}%` }}
                        />
                      </div>
                    </div>

                    {/* Fibre */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Droplet className="w-4 h-4 text-[#6264A1]" />
                          <span className="text-[#465E5A]">Fibre</span>
                        </div>
                        <span className="text-[#465E5A]">{recipe.fibre}g</span>
                      </div>
                      <div className="h-3 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#DDEFDC] transition-all"
                          style={{ width: `${getNutrientPercentage('fibre', recipe.fibre)}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#465E5A]/60 mt-1 block">
                        {Math.round(getNutrientPercentage('fibre', recipe.fibre))}% of daily value
                      </span>
                    </div>

                    {/* Fat */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#465E5A]">Fat</span>
                        <span className="text-[#465E5A]">{recipe.nutrition.fat}g</span>
                      </div>
                      <div className="h-3 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#9697C0] transition-all"
                          style={{ width: `${getNutrientPercentage('fat', recipe.nutrition.fat)}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#465E5A]/60 mt-1 block">
                        {Math.round(getNutrientPercentage('fat', recipe.nutrition.fat))}% of daily value
                      </span>
                    </div>

                    {/* Saturated Fat (indented) */}
                    <div className="ml-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#465E5A] text-sm">of which Saturates</span>
                        <span className="text-[#465E5A] text-sm">{recipe.nutrition.saturatedFat}g</span>
                      </div>
                      <div className="h-2 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#B2D4EE] transition-all"
                          style={{ width: `${getNutrientPercentage('saturatedFat', recipe.nutrition.saturatedFat)}%` }}
                        />
                      </div>
                    </div>

                    {/* Sodium */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#465E5A]">Sodium</span>
                        <span className="text-[#465E5A]">{recipe.nutrition.sodium}mg</span>
                      </div>
                      <div className="h-3 bg-[#F4F6F7] overflow-hidden">
                        <div 
                          className="h-full bg-[#E3DBD1] transition-all"
                          style={{ width: `${getNutrientPercentage('sodium', recipe.nutrition.sodium)}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#465E5A]/60 mt-1 block">
                        {Math.round(getNutrientPercentage('sodium', recipe.nutrition.sodium))}% of daily value
                      </span>
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="border-t border-[#465E5A]/10 pt-4 flex items-start gap-2">
                    <Scale className="w-4 h-4 text-[#465E5A]/50 mt-0.5 shrink-0" />
                    <p className="text-xs text-[#465E5A]/60 leading-relaxed">
                      Daily values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs and GLP-1 medication requirements.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-[#465E5A]/10 px-6 md:px-8 py-6 bg-white sticky bottom-0">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button 
                onClick={() => setIsAddedToMealPlan(!isAddedToMealPlan)}
                className={`py-3 md:py-4 px-4 md:px-6 border-2 transition-all ${
                  isAddedToMealPlan 
                    ? 'bg-[#E5F2E4] border-[#465E5A] text-[#465E5A]' 
                    : 'border-[#465E5A]/20 text-[#465E5A] hover:border-[#465E5A]/40 hover:bg-[#F4F6F7]'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <CalendarPlus className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{isAddedToMealPlan ? 'Added to Plan' : 'Add to Meal Plan'}</span>
                </div>
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`py-3 md:py-4 px-4 md:px-6 transition-all ${
                  isFavorite
                    ? 'bg-[#FFEAEA] text-red-600 border-2 border-red-200'
                    : 'bg-[#6264A1] text-white hover:bg-[#465E5A]'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  <span className="text-sm md:text-base">{isFavorite ? 'Recipe Saved' : 'Save Recipe'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
