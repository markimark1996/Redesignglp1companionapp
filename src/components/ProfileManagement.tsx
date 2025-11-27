import { useState } from 'react';
import { Check, Plus, X, Info, User, ShieldAlert, Pill, Activity, ChevronRight } from 'lucide-react';

type CoreDietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescetarian' | 'lacto-vegetarian' | 'ovo-vegetarian';

interface ProfileData {
  coreDiet: CoreDietType | null;
  faithBased: string[];
  healthPreferences: string[];
  allergens: string[];
  customAllergens: string[];
  onGlp1: boolean;
  symptoms: string[];
}

interface ProfileManagementProps {
  isOpen?: boolean;
  onClose: () => void;
  initialData?: Partial<ProfileData>;
}

export function ProfileManagement({ isOpen = true, onClose, initialData }: ProfileManagementProps) {
  const [profileData, setProfileData] = useState<ProfileData>({
    coreDiet: initialData?.coreDiet || null,
    faithBased: initialData?.faithBased || [],
    healthPreferences: initialData?.healthPreferences || [],
    allergens: initialData?.allergens || [],
    customAllergens: initialData?.customAllergens || [],
    onGlp1: initialData?.onGlp1 || false,
    symptoms: initialData?.symptoms || [],
  });

  const [customAllergenInput, setCustomAllergenInput] = useState('');

  if (!isOpen) return null;

  // Core diet options
  const coreDietOptions = [
    { 
      id: 'omnivore' as CoreDietType, 
      label: 'Omnivore', 
      description: 'Eats all types of food including meat, fish, and plants' 
    },
    { 
      id: 'vegetarian' as CoreDietType, 
      label: 'Vegetarian', 
      description: 'No meat or fish, includes dairy and eggs' 
    },
    { 
      id: 'vegan' as CoreDietType, 
      label: 'Vegan', 
      description: 'No animal products including dairy and eggs' 
    },
    { 
      id: 'pescetarian' as CoreDietType, 
      label: 'Pescetarian', 
      description: 'No meat, includes fish, dairy, and eggs' 
    },
    { 
      id: 'lacto-vegetarian' as CoreDietType, 
      label: 'Lacto-vegetarian', 
      description: 'No meat, fish, or eggs, includes dairy' 
    },
    { 
      id: 'ovo-vegetarian' as CoreDietType, 
      label: 'Ovo-vegetarian', 
      description: 'No meat, fish, or dairy, includes eggs' 
    },
  ];

  // Faith-based & Ethical
  const faithBasedOptions = ['Halal', 'Kosher', 'Organic'];

  // Health & Nutrition Preferences
  const healthPreferenceOptions = [
    'Low Salt',
    'Low Fat',
    'Low Sugar',
    'Low Saturated Fat',
    'High Fibre',
    'Source of Fibre',
  ];

  // Allergens
  const allergenOptions = [
    'Milk-free',
    'Lactose-free',
    'Egg-free',
    'Soya-free',
    'Tree Nuts',
    'Peanuts-free',
    'Gluten-free',
    'Wheat-free',
    'Shellfish-free',
    'Sesame-free',
    'Fish-free',
  ];

  // Symptoms
  const symptomOptions = [
    'Nausea and/or Vomiting',
    'Diarrhoea',
    'Constipation',
    'Indigestion / Heartburn / Reflux',
    'Reduced Appetite',
    'Gas or Bloating',
    'Fatigue',
  ];

  const handleCoreDietSelect = (dietType: CoreDietType) => {
    setProfileData({ ...profileData, coreDiet: dietType });
  };

  const toggleSelection = (category: keyof ProfileData, value: string) => {
    const currentArray = profileData[category] as string[];
    if (currentArray.includes(value)) {
      setProfileData({
        ...profileData,
        [category]: currentArray.filter((item) => item !== value),
      });
    } else {
      setProfileData({
        ...profileData,
        [category]: [...currentArray, value],
      });
    }
  };

  const addCustomAllergen = () => {
    if (customAllergenInput.trim() && !profileData.customAllergens.includes(customAllergenInput.trim())) {
      setProfileData({
        ...profileData,
        customAllergens: [...profileData.customAllergens, customAllergenInput.trim()],
      });
      setCustomAllergenInput('');
    }
  };

  const removeCustomAllergen = (allergen: string) => {
    setProfileData({
      ...profileData,
      customAllergens: profileData.customAllergens.filter((a) => a !== allergen),
    });
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving profile:', profileData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#465E5A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6" />
            <div>
              <h2 className="text-xl">My Profile Management</h2>
              <p className="text-sm text-white/80 mt-1">Personalise your dietary preferences and health profile</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* 1. Core Diet Type */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg text-[#465E5A]">Core Diet Type</h3>
              <div className="group relative">
                <Info className="w-4 h-4 text-[#6264A1] cursor-help" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-[#465E5A] text-white p-3 text-xs leading-relaxed shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  Choose your primary eating pattern. You can only select one.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#465E5A]"></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#465E5A]/60 mb-4">Select your foundational eating pattern</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coreDietOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleCoreDietSelect(option.id)}
                  className={`p-4 border-2 text-left transition-all group hover:border-[#6264A1] ${
                    profileData.coreDiet === option.id
                      ? 'border-[#6264A1] bg-[#C5DFF2]/20'
                      : 'border-[#465E5A]/20 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#465E5A]">{option.label}</span>
                        {profileData.coreDiet === option.id && (
                          <Check className="w-5 h-5 text-[#6264A1] flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-[#465E5A]/60 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* 2. Dietary Restrictions & Preferences */}
          <section>
            <h3 className="text-lg text-[#465E5A] mb-4">Dietary Restrictions & Preferences</h3>

            {/* Faith-based & Ethical */}
            <div className="mb-6">
              <h4 className="text-sm text-[#465E5A] mb-3">Faith-based & Ethical</h4>
              <div className="flex flex-wrap gap-2">
                {faithBasedOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleSelection('faithBased', option)}
                    className={`px-4 py-2 text-sm transition-all ${
                      profileData.faithBased.includes(option)
                        ? 'bg-[#6264A1] text-white'
                        : 'bg-[#465E5A]/10 text-[#465E5A] hover:bg-[#465E5A]/20'
                    }`}
                  >
                    {option}
                    {profileData.faithBased.includes(option) && (
                      <Check className="w-4 h-4 inline-block ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Health & Nutrition Preferences */}
            <div>
              <h4 className="text-sm text-[#465E5A] mb-3">Health & Nutrition Preferences</h4>
              <div className="flex flex-wrap gap-2">
                {healthPreferenceOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleSelection('healthPreferences', option)}
                    className={`px-4 py-2 text-sm transition-all ${
                      profileData.healthPreferences.includes(option)
                        ? 'bg-[#6264A1] text-white'
                        : 'bg-[#465E5A]/10 text-[#465E5A] hover:bg-[#465E5A]/20'
                    }`}
                  >
                    {option}
                    {profileData.healthPreferences.includes(option) && (
                      <Check className="w-4 h-4 inline-block ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Allergens & Intolerances */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-[#465E5A]" />
              <h3 className="text-lg text-[#465E5A]">Allergens & Intolerances</h3>
            </div>
            <p className="text-sm text-[#465E5A]/60 mb-4">Select items you need to avoid</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {allergenOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleSelection('allergens', option)}
                  className={`px-4 py-2 text-sm transition-all ${
                    profileData.allergens.includes(option)
                      ? 'bg-[#6264A1] text-white'
                      : 'bg-[#465E5A]/10 text-[#465E5A] hover:bg-[#465E5A]/20'
                  }`}
                >
                  {option}
                  {profileData.allergens.includes(option) && (
                    <Check className="w-4 h-4 inline-block ml-2" />
                  )}
                </button>
              ))}
            </div>

            {/* Custom Allergens */}
            <div className="mt-4">
              <label className="text-sm text-[#465E5A] mb-2 block">Custom Avoidances</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customAllergenInput}
                  onChange={(e) => setCustomAllergenInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomAllergen()}
                  placeholder="Add custom avoidance..."
                  className="flex-1 px-4 py-2 border-2 border-[#465E5A]/20 focus:border-[#6264A1] focus:outline-none text-sm"
                />
                <button
                  onClick={addCustomAllergen}
                  className="px-4 py-2 bg-[#6264A1] text-white hover:bg-[#6264A1]/90 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>

              {/* Custom Allergen Tags */}
              {profileData.customAllergens.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {profileData.customAllergens.map((allergen) => (
                    <div
                      key={allergen}
                      className="px-3 py-2 bg-[#DDEFDC] text-[#465E5A] text-sm flex items-center gap-2"
                    >
                      {allergen}
                      <button
                        onClick={() => removeCustomAllergen(allergen)}
                        className="hover:text-[#6264A1]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* 4. GLP-1 Treatment */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Pill className="w-5 h-5 text-[#465E5A]" />
              <h3 className="text-lg text-[#465E5A]">GLP-1 Treatment</h3>
            </div>

            <label className="flex items-start gap-4 p-4 border-2 border-[#465E5A]/20 bg-[#C5DFF2]/10 cursor-pointer group hover:border-[#6264A1] transition-colors">
              <input
                type="checkbox"
                checked={profileData.onGlp1}
                onChange={(e) => setProfileData({ ...profileData, onGlp1: e.target.checked })}
                className="mt-1 w-5 h-5 accent-[#6264A1] cursor-pointer"
              />
              <div className="flex-1">
                <span className="text-[#465E5A] block mb-1">I am on GLP-1 treatment</span>
                <p className="text-xs text-[#465E5A]/60 leading-relaxed">
                  This helps tailor portion sizes, meal timing, and symptom-sensitive recommendations.
                </p>
              </div>
            </label>
          </section>

          {/* 5. Current Symptoms */}
          {profileData.onGlp1 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-[#465E5A]" />
                <h3 className="text-lg text-[#465E5A]">Current Symptoms</h3>
              </div>
              <p className="text-sm text-[#465E5A]/60 mb-4">
                Select any symptoms you're currently experiencing
              </p>

              <div className="flex flex-wrap gap-2">
                {symptomOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleSelection('symptoms', option)}
                    className={`px-4 py-2 text-sm transition-all ${
                      profileData.symptoms.includes(option)
                        ? 'bg-[#6264A1] text-white'
                        : 'bg-[#465E5A]/10 text-[#465E5A] hover:bg-[#465E5A]/20'
                    }`}
                  >
                    {option}
                    {profileData.symptoms.includes(option) && (
                      <Check className="w-4 h-4 inline-block ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t-2 border-[#465E5A]/10 p-6 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white border-2 border-[#465E5A]/20 text-[#465E5A] hover:bg-[#465E5A]/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!profileData.coreDiet}
            className="px-6 py-3 bg-[#6264A1] text-white hover:bg-[#6264A1]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Save Changes
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}