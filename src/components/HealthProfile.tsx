import { useState } from 'react';
import { X, Info } from 'lucide-react';

type DietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian';

interface HealthProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HealthProfile({ isOpen, onClose }: HealthProfileProps) {
  const [selectedDiet, setSelectedDiet] = useState<DietType>('omnivore');
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [glpTreatment, setGlpTreatment] = useState(false);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [customRestrictions, setCustomRestrictions] = useState<string[]>([]);
  const [allergyInput, setAllergyInput] = useState('');
  const [customInput, setCustomInput] = useState('');

  if (!isOpen) return null;

  const dietOptions = [
    {
      id: 'omnivore' as DietType,
      label: 'Omnivore',
      description: 'Includes both plant and animal products',
    },
    {
      id: 'vegetarian' as DietType,
      label: 'Vegetarian',
      description: 'Excludes meat and fish, includes dairy and eggs',
    },
    {
      id: 'vegan' as DietType,
      label: 'Vegan',
      description: 'Excludes all animal products',
    },
    {
      id: 'pescatarian' as DietType,
      label: 'Pescatarian',
      description: 'Includes fish but excludes other meats',
    },
  ];

  const dietaryRestrictions = ['Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Kosher', 'Halal'];

  const toggleRestriction = (restriction: string) => {
    setRestrictions((prev) =>
      prev.includes(restriction)
        ? prev.filter((r) => r !== restriction)
        : [...prev, restriction]
    );
  };

  const addAllergy = () => {
    if (allergyInput.trim()) {
      setAllergies([...allergies, allergyInput.trim()]);
      setAllergyInput('');
    }
  };

  const addCustomRestriction = () => {
    if (customInput.trim()) {
      setCustomRestrictions([...customRestrictions, customInput.trim()]);
      setCustomInput('');
    }
  };

  const handleSave = () => {
    // Save logic would go here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#465E5A]/15">
          <h2 className="text-[#465E5A]">My Health Profile</h2>
          <button
            onClick={onClose}
            className="text-[#465E5A]/60 hover:text-[#465E5A] transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Core Diet Type */}
          <div>
            <h3 className="text-[#465E5A] mb-4">Core Diet Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dietOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDiet(option.id)}
                  className={`text-left p-4 transition-all border ${
                    selectedDiet === option.id
                      ? 'bg-[#465E5A] text-white border-[#465E5A]'
                      : 'bg-white text-[#465E5A] border-[#465E5A]/20 hover:border-[#465E5A]/40'
                  }`}
                >
                  <div className="mb-1">{option.label}</div>
                  <div
                    className={`text-sm ${
                      selectedDiet === option.id ? 'text-white/80' : 'text-[#465E5A]/60'
                    }`}
                  >
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <h3 className="text-[#465E5A] mb-4">Dietary Restrictions</h3>
            <div className="flex flex-wrap gap-2">
              {dietaryRestrictions.map((restriction) => (
                <button
                  key={restriction}
                  onClick={() => toggleRestriction(restriction)}
                  className={`px-4 py-2 text-sm transition-all ${
                    restrictions.includes(restriction)
                      ? 'bg-[#465E5A] text-white'
                      : 'bg-[#EEEBE7] text-[#465E5A] hover:bg-[#E5E5E5]'
                  }`}
                >
                  {restriction}
                </button>
              ))}
            </div>
          </div>

          {/* Treatment Information */}
          <div>
            <h3 className="text-[#465E5A] mb-4">Treatment Information</h3>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={glpTreatment}
                onChange={(e) => setGlpTreatment(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#465E5A]"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[#465E5A]">
                  <span>GLP-1 Treatment</span>
                  <Info className="w-4 h-4 text-[#465E5A]/60" />
                </div>
                <p className="text-sm text-[#465E5A]/60 mt-1">
                  This helps us tailor portion sizes and meal recommendations
                </p>
              </div>
            </label>
          </div>

          {/* Food Allergies */}
          <div>
            <h3 className="text-[#465E5A] mb-4">Food Allergies</h3>
            {allergies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {allergies.map((allergy, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-[#EEEBE7] text-[#465E5A] text-sm"
                  >
                    <span>{allergy}</span>
                    <button
                      onClick={() => setAllergies(allergies.filter((_, i) => i !== index))}
                      className="text-[#465E5A]/60 hover:text-[#465E5A]"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={allergyInput}
                onChange={(e) => setAllergyInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addAllergy()}
                placeholder="Add allergy..."
                className="flex-1 px-4 py-2 border border-[#465E5A]/20 text-[#465E5A] placeholder:text-[#465E5A]/40 focus:outline-none focus:border-[#465E5A]"
              />
              <button
                onClick={addAllergy}
                className="px-6 py-2 bg-[#465E5A] text-white hover:bg-[#465E5A]/90 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Custom Restrictions */}
          <div>
            <h3 className="text-[#465E5A] mb-4">Custom Restrictions</h3>
            {customRestrictions.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {customRestrictions.map((restriction, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-[#EEEBE7] text-[#465E5A] text-sm"
                  >
                    <span>{restriction}</span>
                    <button
                      onClick={() =>
                        setCustomRestrictions(customRestrictions.filter((_, i) => i !== index))
                      }
                      className="text-[#465E5A]/60 hover:text-[#465E5A]"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomRestriction()}
                placeholder="Add custom restriction..."
                className="flex-1 px-4 py-2 border border-[#465E5A]/20 text-[#465E5A] placeholder:text-[#465E5A]/40 focus:outline-none focus:border-[#465E5A]"
              />
              <button
                onClick={addCustomRestriction}
                className="px-6 py-2 bg-[#465E5A] text-white hover:bg-[#465E5A]/90 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 p-6 border-t border-[#465E5A]/15">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-[#465E5A]/30 text-[#465E5A] hover:bg-[#465E5A]/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-[#465E5A] text-white hover:bg-[#465E5A]/90 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
