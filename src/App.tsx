import { useState } from 'react';
import { Header } from './components/Header';
import { Discover } from './components/Discover';
import { RecipeGrid } from './components/RecipeGrid';
import { MealPlanner } from './components/MealPlanner';
import { Progress } from './components/Progress';
import { Education } from './components/Education';
import { BottomNav } from './components/BottomNav';
import { ChatBot } from './components/ChatBot';
import { ProfileManagement } from './components/ProfileManagement';

type View = 'discover' | 'meal-plan' | 'scan' | 'favorites' | 'education' | 'goals' | 'shopping';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('discover');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileManagementOpen, setIsProfileManagementOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F7]">
      <Header 
        onOpenProfileManagement={() => setIsProfileManagementOpen(true)}
        onNavigateToGoals={() => setCurrentView('goals')}
        onNavigateToEducation={() => setCurrentView('education')}
        onNavigateToShopping={() => setCurrentView('shopping')}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {currentView === 'discover' && <Discover />}
        {currentView === 'meal-plan' && <MealPlanner />}
        {currentView === 'scan' && <PlaceholderView title="Scan" />}
        {currentView === 'favorites' && <RecipeGrid favoritesOnly />}
        {currentView === 'education' && <Education />}
        {currentView === 'goals' && <Progress />}
        {currentView === 'shopping' && <PlaceholderView title="My Shopping List" description="Your saved ingredients and products will appear here" />}
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

function PlaceholderView({ title, description }: { title: string; description?: string }) {
  return (
    <section className="py-6">
      <div className="mb-6">
        <h2 className="text-[#465E5A]">{title}</h2>
        <p className="text-[#465E5A]/70 text-sm mt-1">{description || 'Coming soon'}</p>
      </div>
      <div className="bg-white border border-[#465E5A]/15 p-12 text-center rounded-lg">
        <p className="text-[#465E5A]/60">This section is under development</p>
      </div>
    </section>
  );
}