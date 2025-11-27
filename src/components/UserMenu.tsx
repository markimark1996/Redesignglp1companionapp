import { User, Settings, HeartPulse, LogOut, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface UserMenuProps {
  onOpenProfileManagement: () => void;
}

export function UserMenu({ onOpenProfileManagement }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSignOut = () => {
    // Sign out logic here
    console.log('Signing out...');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-[#EEEBE7] rounded transition-colors"
      >
        <div className="w-8 h-8 bg-[#6264A1] rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#465E5A] transition-transform hidden sm:block ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border-2 border-[#465E5A]/10 shadow-lg z-50">
          {/* User Info */}
          <div className="p-4 border-b border-[#465E5A]/10 bg-[#C5DFF2]/10">
            <p className="text-[#465E5A]">Sarah Johnson</p>
            <p className="text-xs text-[#465E5A]/60 mt-1">sarah.johnson@email.com</p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              onClick={() => {
                onOpenProfileManagement();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#465E5A] hover:bg-[#DDEFDC]/30 transition-colors text-left"
            >
              <HeartPulse className="w-5 h-5 text-[#6264A1]" />
              <div>
                <p className="text-sm">My Health Profile</p>
                <p className="text-xs text-[#465E5A]/60">Manage dietary preferences</p>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#465E5A] hover:bg-[#DDEFDC]/30 transition-colors text-left"
            >
              <Settings className="w-5 h-5 text-[#6264A1]" />
              <div>
                <p className="text-sm">Account Settings</p>
                <p className="text-xs text-[#465E5A]/60">Personal information</p>
              </div>
            </button>
          </div>

          {/* Sign Out */}
          <div className="border-t border-[#465E5A]/10">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#465E5A] hover:bg-[#DDEFDC]/30 transition-colors text-left"
            >
              <LogOut className="w-5 h-5 text-[#465E5A]/60" />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
