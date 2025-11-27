import { Compass, Calendar, ScanLine, Heart, User, MessageCircle } from 'lucide-react';

type View = 'discover' | 'meal-plan' | 'scan' | 'favorites' | 'profile';

interface BottomNavProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onOpenChat: () => void;
}

export function BottomNav({ currentView, onViewChange, onOpenChat }: BottomNavProps) {
  const navItems: { view: View; icon: typeof Compass; label: string }[] = [
    { view: 'discover', icon: Compass, label: 'Discover' },
    { view: 'meal-plan', icon: Calendar, label: 'Meal Plan' },
    { view: 'scan', icon: ScanLine, label: 'Scan' },
    { view: 'favorites', icon: Heart, label: 'Favorites' },
    { view: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#465E5A]/15 z-50">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex items-center justify-around h-16">
            {navItems.map(({ view, icon: Icon, label }) => {
              const isActive = currentView === view;
              return (
                <button
                  key={view}
                  onClick={() => onViewChange(view)}
                  className={`flex flex-col items-center justify-center gap-1 px-2 py-2 transition-all ${
                    isActive
                      ? 'text-[#6264A1]'
                      : 'text-[#465E5A]/60 hover:text-[#465E5A]'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'fill-[#DDEFDC]' : ''}`}
                  />
                  <span className="text-xs">{label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#6264A1]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Floating Chat Button */}
      <button
        onClick={onOpenChat}
        className="fixed bottom-20 right-4 sm:right-6 lg:right-8 w-14 h-14 bg-[#6264A1] text-white rounded-full shadow-lg hover:bg-[#6264A1]/90 transition-all hover:scale-105 z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}