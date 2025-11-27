import { Calendar, Plus, ChefHat } from 'lucide-react';

export function MealPlanner() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[#465E5A]">Weekly Meal Plan</h2>
          <p className="text-[#465E5A]/70 text-sm mt-1">Plan your meals ahead for better results</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6264A1] text-white rounded hover:bg-[#465E5A] transition-all">
          <ChefHat className="w-4 h-4" />
          <span>Auto-Generate Plan</span>
        </button>
      </div>

      {/* Calendar View */}
      <div className="bg-white border border-[#465E5A]/15 overflow-hidden">
        <div className="grid grid-cols-8 border-b border-[#465E5A]/15">
          <div className="p-4 border-r border-[#465E5A]/15 bg-[#EEEBE7]">
            <span className="text-sm text-[#465E5A]">Meal</span>
          </div>
          {days.map((day) => (
            <div key={day} className="p-4 text-center border-r last:border-r-0 border-[#465E5A]/15 bg-[#EEEBE7]">
              <span className="text-[#465E5A]">{day}</span>
            </div>
          ))}
        </div>

        {meals.map((meal, mealIndex) => (
          <div key={meal} className="grid grid-cols-8 border-b last:border-b-0 border-[#465E5A]/15">
            <div className="p-4 border-r border-[#465E5A]/15 bg-[#EEEBE7] flex items-center">
              <span className="text-sm text-[#465E5A]">{meal}</span>
            </div>
            {days.map((day, dayIndex) => (
              <div
                key={`${meal}-${day}`}
                className="p-2 border-r last:border-r-0 border-[#465E5A]/15 min-h-[100px]"
              >
                {(mealIndex === 0 && dayIndex < 3) || (mealIndex === 1 && dayIndex < 4) ? (
                  <div className="bg-[#E5F2E4] border border-[#DDEFDC] p-2 cursor-pointer hover:bg-[#DDEFDC] transition-colors h-full">
                    <p className="text-xs text-[#465E5A] line-clamp-2 mb-1">
                      {mealIndex === 0 ? 'Greek Yogurt Bowl' : 'Grilled Chicken Salad'}
                    </p>
                    <span className="text-xs text-[#6264A1] numeric">
                      {mealIndex === 0 ? '280 cal' : '380 cal'}
                    </span>
                  </div>
                ) : (
                  <button className="w-full h-full flex items-center justify-center hover:bg-[#EEEBE7] transition-colors group">
                    <Plus className="w-5 h-5 text-[#465E5A]/30 group-hover:text-[#465E5A]" />
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Weekly Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-[#465E5A]/15 p-4">
          <p className="text-sm text-[#465E5A]/70 mb-1">Planned Meals</p>
          <p className="text-[#465E5A] numeric">7 of 28</p>
          <div className="w-full h-2 bg-[#EEEBE7] mt-2">
            <div className="w-1/4 h-full bg-[#6264A1]" />
          </div>
        </div>
        <div className="bg-white border border-[#465E5A]/15 p-4">
          <p className="text-sm text-[#465E5A]/70 mb-1">Avg. Daily Protein</p>
          <p className="text-[#465E5A] numeric">68g</p>
          <p className="text-xs text-[#6264A1] mt-1">On target</p>
        </div>
        <div className="bg-white border border-[#465E5A]/15 p-4">
          <p className="text-sm text-[#465E5A]/70 mb-1">Avg. Daily Calories</p>
          <p className="text-[#465E5A] numeric">1,420</p>
          <p className="text-xs text-[#6264A1] mt-1">Within range</p>
        </div>
      </div>
    </section>
  );
}