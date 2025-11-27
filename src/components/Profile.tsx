import { HeartPulse, Target, BookOpen, ShoppingCart, ChevronRight } from 'lucide-react';
import { Progress } from './Progress';
import { Education } from './Education';
import { useState } from 'react';

interface ProfileProps {
  onOpenProfileManagement: () => void;
}

type ProfileSection = 'overview' | 'goals' | 'education';

export function Profile({ onOpenProfileManagement }: ProfileProps) {
  const [currentSection, setCurrentSection] = useState<ProfileSection>('overview');

  if (currentSection === 'goals') {
    return (
      <div className="py-6">
        <button 
          onClick={() => setCurrentSection('overview')}
          className="mb-4 text-[#6264A1] hover:text-[#6264A1]/80 transition-colors flex items-center gap-1"
        >
          ← Back to Profile
        </button>
        <Progress />
      </div>
    );
  }

  if (currentSection === 'education') {
    return (
      <div className="py-6">
        <button 
          onClick={() => setCurrentSection('overview')}
          className="mb-4 text-[#6264A1] hover:text-[#6264A1]/80 transition-colors flex items-center gap-1"
        >
          ← Back to Profile
        </button>
        <Education />
      </div>
    );
  }

  return (
    <section className="py-6 space-y-6">
      {/* Profile Header */}
      <div className="mb-6">
        <h2 className="text-[#465E5A]">My Profile</h2>
        <p className="text-[#465E5A]/70 text-sm mt-1">Manage your health journey</p>
      </div>

      {/* Quick Stats Card */}
      <div className="bg-gradient-to-br from-[#6264A1] to-[#6264A1]/80 p-6 rounded-lg text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-white/90 text-sm">Weekly Progress</h3>
            <p className="text-2xl mt-1">6/7 Days</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg">
            <Target className="w-6 h-6" />
          </div>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: '86%' }}></div>
        </div>
        <p className="text-white/80 text-sm mt-2">Great work! You're staying on track.</p>
      </div>

      {/* Main Menu Items */}
      <div className="space-y-3">
        {/* Health Profile */}
        <button
          onClick={onOpenProfileManagement}
          className="w-full bg-white border border-[#465E5A]/15 p-4 rounded-lg hover:border-[#6264A1] hover:shadow-sm transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#DDEFDC] p-3 rounded-lg">
              <HeartPulse className="w-6 h-6 text-[#6264A1]" />
            </div>
            <div className="text-left">
              <h3 className="text-[#465E5A]">My Health Profile</h3>
              <p className="text-sm text-[#465E5A]/70">GLP-1 medication & dietary preferences</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#465E5A]/40 group-hover:text-[#6264A1] transition-colors" />
        </button>

        {/* Goals & Progress */}
        <button
          onClick={() => setCurrentSection('goals')}
          className="w-full bg-white border border-[#465E5A]/15 p-4 rounded-lg hover:border-[#6264A1] hover:shadow-sm transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#DDEFDC] p-3 rounded-lg">
              <Target className="w-6 h-6 text-[#6264A1]" />
            </div>
            <div className="text-left">
              <h3 className="text-[#465E5A]">Goals & Progress</h3>
              <p className="text-sm text-[#465E5A]/70">Track your nutrition and wellness goals</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#465E5A]/40 group-hover:text-[#6264A1] transition-colors" />
        </button>

        {/* Education Hub */}
        <button
          onClick={() => setCurrentSection('education')}
          className="w-full bg-white border border-[#465E5A]/15 p-4 rounded-lg hover:border-[#6264A1] hover:shadow-sm transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#DDEFDC] p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-[#6264A1]" />
            </div>
            <div className="text-left">
              <h3 className="text-[#465E5A]">Education Hub</h3>
              <p className="text-sm text-[#465E5A]/70">Learn about GLP-1 nutrition</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#465E5A]/40 group-hover:text-[#6264A1] transition-colors" />
        </button>

        {/* Shopping List */}
        <button
          className="w-full bg-white border border-[#465E5A]/15 p-4 rounded-lg hover:border-[#6264A1] hover:shadow-sm transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#DDEFDC] p-3 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-[#6264A1]" />
            </div>
            <div className="text-left">
              <h3 className="text-[#465E5A]">My Shopping List</h3>
              <p className="text-sm text-[#465E5A]/70">Saved ingredients and products</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#465E5A]/40 group-hover:text-[#6264A1] transition-colors" />
        </button>
      </div>

    </section>
  );
}
