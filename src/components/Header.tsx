import { Search, ShoppingCart, HeartPulse } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { UserMenu } from './UserMenu';
import logoImage from 'figma:asset/d924029a855390500bb4822d0a8f02ef9f5dadb5.png';

interface HeaderProps {
  onOpenProfileManagement: () => void;
}

export function Header({ onOpenProfileManagement }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[#465E5A]/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src={logoImage} 
              alt="Spoon Guru Logo" 
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-xs text-[#465E5A]/70">Your GLP-1 Nutrition Companion</p>
            </div>
          </div>

          {/* Navigation Menu Items */}
          <nav className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-[#465E5A] hover:bg-[#E5F2E4] rounded transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#6264A1]" />
              <span>My Shopping List</span>
            </button>
            <button 
              onClick={onOpenProfileManagement}
              className="flex items-center gap-2 px-4 py-2 text-[#465E5A] hover:bg-[#E5F2E4] rounded transition-colors"
            >
              <HeartPulse className="w-5 h-5 text-[#6264A1]" />
              <span>My Health Profile</span>
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <UserMenu onOpenProfileManagement={onOpenProfileManagement} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#465E5A]/50" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or dietary needs..."
              className="w-full pl-10 pr-4 py-3 bg-[#EEEBE7] border border-[#465E5A]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#6264A1] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}