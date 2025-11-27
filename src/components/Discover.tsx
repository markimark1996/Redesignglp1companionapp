import { useState } from 'react';
import { RecipeGrid } from './RecipeGrid';

type DiscoverTab = 'recipes' | 'products';

export function Discover() {
  const [activeTab, setActiveTab] = useState<DiscoverTab>('recipes');

  return (
    <section className="py-6">
      {/* Header with Tabs */}
      <div className="mb-6">
        <h2 className="text-[#465E5A] mb-4">Discover</h2>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-[#465E5A]/15">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-6 py-3 transition-all relative ${
              activeTab === 'recipes'
                ? 'text-[#6264A1]'
                : 'text-[#465E5A]/60 hover:text-[#465E5A]'
            }`}
          >
            Recipes
            {activeTab === 'recipes' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6264A1]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 transition-all relative ${
              activeTab === 'products'
                ? 'text-[#6264A1]'
                : 'text-[#465E5A]/60 hover:text-[#465E5A]'
            }`}
          >
            Products
            {activeTab === 'products' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6264A1]" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'recipes' && <RecipeGrid />}
      {activeTab === 'products' && (
        <div className="bg-white border border-[#465E5A]/15 p-12 text-center rounded-lg">
          <p className="text-[#465E5A]/60">Product discovery coming soon</p>
          <p className="text-sm text-[#465E5A]/50 mt-2">
            Browse GLP-1 friendly products from your favourite retailers
          </p>
        </div>
      )}
    </section>
  );
}
