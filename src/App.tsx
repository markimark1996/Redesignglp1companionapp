import { useState } from 'react';
import { Header } from './components/Header';
import { Discover } from './components/Discover';
import { RecipeGrid } from './components/RecipeGrid';
import { MealPlanner } from './components/MealPlanner';
import { Profile } from './components/Profile';
import { BottomNav } from './components/BottomNav';
import { ChatBot } from './components/ChatBot';
import { ProfileManagement } from './components/ProfileManagement';

type View = 'discover' | 'meal-plan' | 'scan' | 'favorites' | 'profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('discover');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileManagementOpen, setIsProfileManagementOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F7]">
      <Header 
        onOpenProfileManagement={() => setIsProfileManagementOpen(true)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {currentView === 'discover' && <Discover />}
        {currentView === 'meal-plan' && <MealPlanner />}
        {currentView === 'scan' && <PlaceholderView title="Scan" />}
        {currentView === 'favorites' && <RecipeGrid favoritesOnly />}
        {currentView === 'profile' && <Profile onOpenProfileManagement={() => setIsProfileManagementOpen(true)} />}
      </main>

      <BottomNav 
        currentView={currentView} 
        onViewChange={setCurrentView}
        onOpenChat={() => setIsChatOpen(true)}
      />
      
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <ProfileManagement isOpen={isProfileManagementOpen} onClose={() => setIsProfileManagementOpen(false)} />
    </div>
  );
}

function PlaceholderView({ title }: { title: string }) {
  return (
    <section className="py-6">
      <div className="mb-6">
        <h2 className="text-[#465E5A]">{title}</h2>
        <p className="text-[#465E5A]/70 text-sm mt-1">Coming soon</p>
      </div>
      <div className="bg-white border border-[#465E5A]/15 p-12 text-center">
        <p className="text-[#465E5A]/60">This section is under development</p>
      </div>
    </section>
  );
}