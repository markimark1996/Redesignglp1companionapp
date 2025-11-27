import { useState } from 'react';
import { Book, Droplet, AlertCircle, Activity, Heart, Target, Flame, Dumbbell, UtensilsCrossed, Moon, Brain } from 'lucide-react';

type EducationTopic = 'hydration' | 'nausea' | 'diarrhoea' | 'constipation' | 'reflux' | 'health-support' | 'goal-setting';

export function Education() {
  const [activeTopic, setActiveTopic] = useState<EducationTopic>('hydration');
  const [glassesTracked, setGlassesTracked] = useState<boolean[]>(new Array(10).fill(false));

  const topics = [
    { id: 'hydration' as EducationTopic, label: 'Hydration', icon: Droplet },
    { id: 'nausea' as EducationTopic, label: 'Nausea & Vomiting', icon: AlertCircle },
    { id: 'diarrhoea' as EducationTopic, label: 'Diarrhoea', icon: Activity },
    { id: 'constipation' as EducationTopic, label: 'Constipation', icon: Activity },
    { id: 'reflux' as EducationTopic, label: 'Reflux, Heartburn & Indigestion', icon: Flame },
    { id: 'health-support' as EducationTopic, label: 'Health Support', icon: Heart },
    { id: 'goal-setting' as EducationTopic, label: 'Goal Setting', icon: Target },
  ];

  const toggleGlass = (index: number) => {
    const newGlasses = [...glassesTracked];
    newGlasses[index] = !newGlasses[index];
    setGlassesTracked(newGlasses);
  };

  return (
    <section className="py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-[#6264A1] text-white flex items-center justify-center mx-auto mb-4">
          <Book className="w-8 h-8" />
        </div>
        <h2 className="text-[#465E5A] mb-2">Health Education Hub</h2>
        <p className="text-[#465E5A]/70 text-sm max-w-2xl mx-auto">
          Comprehensive guidance and support for your health journey with evidence-based information and practical tips.
        </p>
      </div>

      {/* Topic Navigation */}
      <div className="bg-white border border-[#465E5A]/15 p-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-all ${
                  activeTopic === topic.id
                    ? 'bg-[#465E5A] text-white'
                    : 'bg-[#EEEBE7] text-[#465E5A] hover:bg-[#E5F2E4]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{topic.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      {activeTopic === 'hydration' && <HydrationContent glassesTracked={glassesTracked} onToggleGlass={toggleGlass} />}
      {activeTopic === 'nausea' && <NauseaContent />}
      {activeTopic === 'diarrhoea' && <DiarrhoeaContent />}
      {activeTopic === 'constipation' && <ConstipationContent />}
      {activeTopic === 'reflux' && <RefluxContent />}
      {activeTopic === 'health-support' && <HealthSupportContent />}
      {activeTopic === 'goal-setting' && <GoalSettingContent />}
    </section>
  );
}

function HydrationContent({ glassesTracked, onToggleGlass }: { glassesTracked: boolean[], onToggleGlass: (index: number) => void }) {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Droplet className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Stay Hydrated, Stay Healthy</h3>
        <p className="text-[#465E5A]/70 text-sm max-w-2xl mx-auto">
          If you're on a GLP-1 medication, staying well-hydrated is one of the kindest things you can do for your body right now.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-4 border-b border-[#465E5A]/15">
        <p className="text-[#465E5A]">
          Aim for about <strong>2–3 litres of fluids a day</strong>—that's roughly 10 average glasses of water. It might sound like a lot, but spreading it out over the day makes it much more manageable.
        </p>
        
        <p className="text-[#465E5A]">
          The best choice? <strong>Plain water is always a winner</strong>, but <strong>unsweetened tea or coffee</strong> can be great too. If you're looking to mix things up, <strong>nutrient-rich options like low-fat milk or soy milk</strong>, are also fantastic for giving your body a little extra nourishment while keeping you hydrated.
        </p>
        
        <p className="text-[#465E5A]">
          Try to go easy on sugary drinks, alcohol or too much caffeine. And if you're after something soothing and gentle, <strong>herbal teas</strong> (think peppermint, ginger) are lovely and comforting choices.
        </p>
        
        <p className="text-[#465E5A]">
          <strong>Small daily habits like this really add up, and your body will thank you. You've got this!</strong>
        </p>
      </div>

      {/* Three Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 border-b border-[#465E5A]/15">
        {/* Best Choices */}
        <div className="text-center">
          <div className="w-12 h-12 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-3">
            <Droplet className="w-6 h-6" />
          </div>
          <h4 className="text-[#465E5A] mb-3">Best Choices</h4>
          <ul className="space-y-2 text-sm text-[#465E5A]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Plain water</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Unsweetened tea</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Unsweetened coffee</span>
            </li>
          </ul>
        </div>

        {/* Nutrient-Rich Options */}
        <div className="text-center">
          <div className="w-12 h-12 bg-[#DDEFDC]/50 text-[#465E5A] flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6" />
          </div>
          <h4 className="text-[#465E5A] mb-3">Nutrient-Rich Options</h4>
          <ul className="space-y-2 text-sm text-[#465E5A]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Low-fat milk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Soy milk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-0.5">•</span>
              <span>Herbal teas</span>
            </li>
          </ul>
        </div>

        {/* Go Easy On */}
        <div className="text-center">
          <div className="w-12 h-12 bg-[#E3DBD1]/50 text-[#465E5A] flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="text-[#465E5A] mb-3">Go Easy On</h4>
          <ul className="space-y-2 text-sm text-[#465E5A]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#465E5A]/50 mt-0.5">⚠</span>
              <span>Sugary drinks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#465E5A]/50 mt-0.5">⚠</span>
              <span>Alcohol</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#465E5A]/50 mt-0.5">⚠</span>
              <span>Too much caffeine</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Daily Goal Tracker */}
      <div className="p-8 bg-[#F4F6F7]">
        <div className="text-center mb-6">
          <h4 className="text-[#465E5A] mb-2">Your Daily Goal</h4>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-[#6264A1] numeric" style={{ fontSize: '2rem', fontWeight: 500 }}>2-3</span>
            <span className="text-[#465E5A] text-sm">litres per day</span>
          </div>
          <p className="text-xs text-[#465E5A]/70">That's about 10 glasses spread throughout your day</p>
        </div>

        {/* Glass Tracker */}
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {glassesTracked.map((filled, index) => (
            <button
              key={index}
              onClick={() => onToggleGlass(index)}
              className={`w-10 h-10 border-2 transition-all ${
                filled
                  ? 'bg-[#6264A1] border-[#6264A1]'
                  : 'bg-white border-[#465E5A]/20 hover:border-[#6264A1]'
              }`}
              aria-label={`Glass ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-[#465E5A]/60">Track your daily progress!</p>
      </div>
    </div>
  );
}

function NauseaContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Managing Nausea & Vomiting on GLP-1 Treatment</h3>
      </div>

      {/* Info Box */}
      <div className="p-8 bg-[#F8F9FA] border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-[#465E5A]">
          <p className="leading-relaxed">
            Side effects are a common and completely normal response to GLP-1 treatment and may change over time. You don't need to suffer in silence - below are dietary tips, thoughtful suggestions and coping strategies that we hope will help. If side effects persist or you experience signs of dehydration despite the below strategies, seek guidance from your healthcare professional, who can recommend medications such as anti-nausea drugs to help you manage them further.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-4 border-b border-[#465E5A]/15">
        <p className="text-[#465E5A]">
          Feeling sick (nausea) or vomiting is a common side effect when starting GLP-1 medications or increasing your dose. Nausea and vomiting usually improves over time as your body adjusts.
        </p>
      </div>

      {/* Tips Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Tips for eating when you feel sick:</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eating Patterns Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Eating Patterns</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Try not to skip meals, as an empty stomach may worsen symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>For a small breakfast, followed by small meals at least every 3–4 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Eat slowly - take your time eating meals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Stay hydrated - sip on water throughout the day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Try ginger tea or peppermint tea</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Choose plain foods such as plain soups, bananas, scrambled eggs on toast, potatoes, pasta or rice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Try sharp tasting fluids like fruit or a tangy yoghurt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Include a source of protein with each meal (e.g. plain chicken, yoghurt, eggs, tofu)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Cold or room temperature foods may be easier to tolerate (e.g. sandwiches, salads, yoghurt)</span>
              </li>
            </ul>
          </div>

          {/* Avoid Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Avoid</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">•</span>
                <span>Very sweet, spicy, fatty, or fried foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">•</span>
                <span>High-fibre foods during the first few days of treatment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">•</span>
                <span>Strong smelling foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">•</span>
                <span>Alcohol and caffeine</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical Tips */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-4">Practical tips</h4>
        <ul className="space-y-3 text-sm text-[#465E5A]/80 max-w-3xl">
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Rest upright after eating; avoid lying down for at least 60 minutes after a meal</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Go for a short walk or get some fresh air after meals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Wear loose fitting clothing, especially around the waist</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Practise gentle relaxation techniques, like meditation or mindfulness</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Consider using an acupressure (anti-nausea) band</span>
          </li>
        </ul>
      </div>

      {/* Closing Note */}
      <div className="p-8 bg-[#F8F9FA]">
        <p className="text-sm text-[#465E5A]/80 text-center max-w-3xl mx-auto mb-6">
          These simple food and lifestyle strategies can often ease nausea and vomiting whilst ensuring you keep your body well nourished.
        </p>
        
        <div className="border-t border-[#465E5A]/15 pt-6 mt-6">
          <h5 className="text-[#465E5A] text-sm mb-3">Sources:</h5>
          <div className="space-y-1 text-xs text-[#465E5A]/60">
            <p>NHS: https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vomiting-and-morning-sickness/</p>
            <p>BMJ: Managing Nausea and Vomiting</p>
            <p>Musunuru et al., Obesity (Silver Spring). 2023;1-23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiarrhoeaContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Activity className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Managing Diarrhoea on GLP-1 Treatment</h3>
      </div>

      {/* Info Box */}
      <div className="p-8 bg-[#F8F9FA] border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-[#465E5A]">
          <p className="leading-relaxed">
            Side effects are a common and completely normal response to GLP-1 treatment and may change over time. You don't need to suffer in silence - below are dietary tips, thoughtful suggestions and coping strategies that we hope will help. If side effects persist or you experience signs of dehydration despite the below strategies, seek guidance from your healthcare professional, who can recommend medications such as anti-diarrhoea drugs to help you manage them further.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-4 border-b border-[#465E5A]/15">
        <p className="text-[#465E5A]">
          Diarrhoea can be a side effect of GLP-1 treatment, leading to loose or watery bowel movements. While a high fibre diet is generally recommended for bowel health, if you are experiencing diarrhoea, it may be helpful to temporarily reduce your fibre intake. A lower fibre diet can support recovery. Diarrhoea related fluid loss, so it's important to drink plenty of fluids to prevent dehydration.
        </p>
      </div>

      {/* Tips Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Tips for Managing Diarrhoea</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eating Patterns Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Eating Patterns</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Eat small, frequent meals every 3–4 hours, rather than large meals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Include meals with a higher water content (like soups or stews) to support hydration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Stay hydrated - sip on water throughout the day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Consider fluids with a higher water content (like soups or stews) to support hydration</span>
              </li>
            </ul>
          </div>

          {/* Foods to Avoid Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Foods to Avoid</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">⚠</span>
                <span>Products high in sugar, alcohol, or sorbitol - found in artificial sweeteners, sugar-free chewing gum, "diabetic" or reduced calorie products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">⚠</span>
                <span>Temporarily avoid high-fibre foods: wholegrain breads, brown rice, beans, lentils, seeds, nuts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">⚠</span>
                <span>Raw vegetable and raw fruits with skins or seeds (e.g. raisins nuts)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">⚠</span>
                <span>Very fatty, fatty or fried foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#465E5A]/50 mt-1">⚠</span>
                <span>Alcohol and caffeine, which can worsen diarrhoea</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Choose Gentle Foods Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Choose Gentle, Lower-Fibre Foods</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Good Options Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Good Options</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>White bread</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Peeled potatoes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Plain chicken, white fish, tofu, or eggs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Smooth yoghurt, oatmeal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Cooked, peeled fruits and vegetables (e.g. stewed apples or cooked carrots)</span>
              </li>
            </ul>
          </div>

          {/* Soluble Fibre Sources Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Soluble Fibre Sources</h5>
            <p className="text-xs text-[#465E5A]/70 mb-4 leading-relaxed">
              While insoluble fibre may aggravate diarrhoea, soluble fibre can help by absorbing water and adding bulk to stools:
            </p>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Oats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Banana</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Peeled apples (stewed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Potatoes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Soluble fibre supplements such as psyllium husk (available in pharmacies)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recovery Section */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <h4 className="text-[#465E5A] mb-4">Recovery</h4>
        <p className="text-sm text-[#465E5A]/80 leading-relaxed">
          When symptoms improve, gradually reintroduce higher-fibre foods (e.g. wholegrains, all fruits, and vegetables) to support long-term gut health.
        </p>
      </div>

      {/* Sources */}
      <div className="p-8 bg-[#F8F9FA]">
        <h5 className="text-[#465E5A] text-sm mb-3">Sources:</h5>
        <div className="space-y-1 text-xs text-[#465E5A]/60">
          <p>Mazahreh et al., Obesity (Silver Spring). 2024;1-29</p>
          <p>NHS: https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/diarrhoea-and-vomiting/</p>
          <p>WHO: Diarrhoea</p>
        </div>
      </div>
    </div>
  );
}

function ConstipationContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Activity className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Managing Constipation on GLP-1 Treatment</h3>
      </div>

      {/* Info Box */}
      <div className="p-8 bg-[#F8F9FA] border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-[#465E5A]">
          <p className="leading-relaxed">
            Side effects are a common and completely normal response to GLP-1 treatment and may change over time. You don't need to suffer in silence - below are dietary tips, thoughtful suggestions and coping strategies that we hope will help. If side effects persist or you experience signs of dehydration despite the below strategies, seek guidance from your healthcare professional, who can recommend medications such as laxatives or stool softeners to help you manage them further.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-4 border-b border-[#465E5A]/15">
        <p className="text-[#465E5A]">
          Constipation is a common side effect of GLP-1 medication. These medications can slow down how fast food moves through your stomach - which can leave you feeling 'backed up'. If this is the case it could be useful to focus on eating nutrient-dense foods to help with bowel movements — this is the opposite of what you might do with diarrhoea, and it's described by your gut and bowels.
        </p>
        <p className="text-[#465E5A]">
          Instead fibre should usually be at the centre of a healthy diet for gut health. Fibre absorbs water and makes stools easier to pass, reducing the risk of constipation.
        </p>
      </div>

      {/* Tips to Ease Constipation Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Tips to Ease Constipation on GLP-1s</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Include more fibre-rich foods */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Include more fibre-rich foods:</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Choose wholemeal bread and wholegrain breakfast cereals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Go for brown rice or wholegrain pasta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Include vegetables at most meals, and with main meals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Add legumes/pulses (e.g. chickpeas, beans) or seeds to salads & soups or as a side dish</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Keep the skins on potatoes — try with sweet potatoes, too</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Eat whole pieces of fruit, but raw veggies or fruits with skins or seeds (e.g. berries, kiwi fruit, figs) may be more helpful than juices or fruit blends.</span>
              </li>
            </ul>
          </div>

          {/* Support regular digestion */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Support regular digestion:</h5>
            <ul className="space-y-3 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Eat regular meals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Take time to eat and enjoy your meals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Use a toilet or squatting position or wearing a shh Step. Try not to routinely skip bowel movements.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Two Types of Fibre Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">There are 2 types of fibre: soluble fibre & insoluble fibre</h4>
        <p className="text-sm text-[#465E5A]/70 mb-6 leading-relaxed">
          Both fibre rich types of fibre in your diet will help achieve regular and healthier bowel movements and lower bowel cancer risk (and additional consideration):
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soluble Fibre Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Soluble Fibre</h5>
            <p className="text-sm text-[#465E5A]/70 mb-4 leading-relaxed">
              Slows digestion, makes you feel fuller for longer, and softens stools
            </p>
            <p className="text-sm text-[#465E5A] mb-3">Examples include:</p>
            <ul className="space-y-2 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Oats, barley, rye, fruit & beans, and chia/linseeds</span>
              </li>
            </ul>
          </div>

          {/* Insoluble Fibre Column */}
          <div>
            <h5 className="text-[#465E5A] mb-4">Insoluble fibre</h5>
            <p className="text-sm text-[#465E5A]/70 mb-4 leading-relaxed">
              Adds bulk and helps it move through the bowel
            </p>
            <p className="text-sm text-[#465E5A] mb-3">Examples include:</p>
            <ul className="space-y-2 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>Wholemeal flour, wheat bran, nuts, the skins of fruits and vegetables</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hydration is Essential Section */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center shrink-0">
            <Droplet className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-[#465E5A] mb-3">Hydration is essential</h4>
            <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
              When fibre absorbs water and you're not taking on enough fluids, it can actually make it harder to do a number two. Aim for 6 to 8 glasses of fluid each day, such as:
            </p>
            <div className="flex items-center gap-6 text-sm text-[#465E5A]/80">
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-[#6264A1]" />
                <span>Water</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-[#6264A1]" />
                <span>Lower-fat milk</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-[#6264A1]" />
                <span>Decaf tea & coffee</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[#465E5A]/60 italic ml-16">
          Try having a cup of water with every meal to stay nice and hydrated!
        </p>
      </div>

      {/* Activity Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#DDEFDC]/50 text-[#465E5A] flex items-center justify-center shrink-0">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-[#465E5A] mb-3">Activity can also help!</h4>
            <p className="text-sm text-[#465E5A]/80 leading-relaxed">
              Even light movement or a gentle digestive. If you regularly find that exercise helps, try gentle exercise after meals or at times that work best — even after eating, so you've set aside time for longer Movement Boosts bloodflow/activity.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#465E5A] text-white">
        <h4 className="mb-4">Summary</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Increase fibre gradually</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Choose both — go for both soluble (20g+)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>And boost physical movement as much as tolerable</span>
          </li>
        </ul>
      </div>

      {/* Sources */}
      <div className="p-8 bg-[#F8F9FA]">
        <h5 className="text-[#465E5A] text-sm mb-3">Sources:</h5>
        <div className="space-y-1 text-xs text-[#465E5A]/60">
          <p>Spoonacre K.M. J Obesity Metab Spring. 2025;1-29</p>
          <p>NHS: https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/</p>
          <p>BMJ Metadata: constipation: Divers rules for a healthy bowel</p>
        </div>
      </div>
    </div>
  );
}

function RefluxContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Flame className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Managing Reflux, Heartburn & Indigestion on GLP-1 Treatment</h3>
      </div>

      {/* Info Box */}
      <div className="p-8 bg-[#F8F9FA] border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-[#465E5A]">
          <p className="leading-relaxed border-l-4 border-[#6264A1] pl-4 bg-white p-4">
            Side effects are a common and completely normal response to GLP-1 treatment and may change over time. You don't need to suffer in silence - below are dietary tips to help you stay well-nourished. If side effects persist despite these strategies, seek guidance from your healthcare professional, who can recommend medications, such as antacid-type supplements or fibre supplements to help you manage them further.
          </p>
          <p className="leading-relaxed">
            GLP-1 medications send clear signals about how quickly your stomach empties which may feel uncomfortable for you, and heartburn or a burning feeling in your chest, rising, caused by acid reflux.
          </p>
          <p className="leading-relaxed">
            Reflux occurs when stomach contents move back into your oesophagus (the 'food pipe' with older heartburn) or a burning feeling in your chest from acid rising from your stomach acid can trigger symptoms for some people. Everyone is different — keep track of foods that trigger your symptoms.
          </p>
          <p className="leading-relaxed">
            A healthy diet is generally associated with a lower risk of acid reflux symptoms. However, everyone is different and there are certain foods that can be triggers, so the key is to be aware of the kinds of foods that might be causing you problems and adjust how and what you eat to reduce those symptoms.
          </p>
        </div>
      </div>

      {/* Tips to Reduce Reflux & Heartburn Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Tips to Reduce Reflux & Heartburn</h4>
        
        <div className="bg-[#F8F9FA] p-6 mb-6">
          <h5 className="text-[#465E5A] mb-4">Eating Patterns</h5>
          <ul className="space-y-3 text-sm text-[#465E5A]/80">
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-1">•</span>
              <span>Eat smaller, more frequent meals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-1">•</span>
              <span>Eat slowly and chew your food well</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6264A1] mt-1">•</span>
              <span>Avoid large or heavy meals, especially at night</span>
            </li>
          </ul>
        </div>

        {/* Foods to Avoid vs Include - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Foods to Limit or Avoid */}
          <div className="border-2 border-red-200 bg-red-50/30 p-6">
            <h5 className="text-[#465E5A] mb-4 flex items-center gap-2">
              <span className="text-red-500 text-xl">✗</span>
              Foods to limit or avoid:
            </h5>
            <ul className="space-y-2 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Rich, fatty foods, like curries and pies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Very hot, cold, or spicy foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Carbonated drinks (fizzy drinks)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Tomatoes and tomato-based sauces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Chocolate, caffeine and fried drinks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Peppermint or mint tea</span>
              </li>
            </ul>
          </div>

          {/* Foods to Include */}
          <div className="border-2 border-green-200 bg-green-50/30 p-6">
            <h5 className="text-[#465E5A] mb-4 flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              Foods to include:
            </h5>
            <ul className="space-y-2 text-sm text-[#465E5A]/80">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Porridge on a wholemeal toast</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Starchy foods (e.g. potato, rice)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Skinless fish or chicken (avoid battered/fried)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Skimmed or semi-skimmed milk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Low-fat dairy products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Low fat dairy or soya alternatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stay Hydrated Section */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center shrink-0">
            <Droplet className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-[#465E5A] mb-3">Stay hydrated!</h4>
            <p className="text-sm text-[#465E5A]/80 leading-relaxed">
              Drink fluids slowly. Choose water and weak teas.
            </p>
          </div>
        </div>
      </div>

      {/* Practical Tips Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <h4 className="text-[#465E5A] mb-6">Practical tips</h4>
        <ul className="space-y-3 text-sm text-[#465E5A]/80">
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Stay upright after meals - a gentle walk can help digestion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Wait at least 2-3 hours after eating before lying down</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>If symptoms occur at night, raise the head of your bed as it could aid reflux on your head</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Avoid tight fitting clothes around your waist</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#6264A1] mt-1">•</span>
            <span>Stop smoking if applicable</span>
          </li>
        </ul>
      </div>

      {/* Summary Box */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#465E5A] text-white">
        <h4 className="mb-4">Summary</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Eat smaller meals, more often</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Avoid spicy, fatty, and acidic foods</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Stay upright after eating</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Sip water between meals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Whether your symptoms and talk to your healthcare provider if symptoms persist</span>
          </li>
        </ul>
      </div>

      {/* Sources */}
      <div className="p-8 bg-[#F8F9FA]">
        <h5 className="text-[#465E5A] text-sm mb-3">Sources:</h5>
        <div className="space-y-1 text-xs text-[#465E5A]/60">
          <p>BMJ: International medical advice</p>
          <p>NHS: Indigestion/Reflux Management</p>
        </div>
      </div>
    </div>
  );
}

function HealthSupportContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Supporting Your Health on GLP-1 Medications</h3>
        <p className="text-[#465E5A]/70 text-sm max-w-3xl mx-auto">
          We are big supporters of GLP-1 medications and believe people taking them should be supported at risk, 
          managing side effects and making longer-term health choices. Creating healthy habits around food, physical 
          activity and sleep can help support any potential weight loss and health benefits beyond weight.
        </p>
      </div>

      {/* Section 1: Nutrition */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#6264A1] text-white flex items-center justify-center shrink-0 text-sm">
              1
            </div>
            <div>
              <h4 className="text-[#465E5A] mb-4">Nutrition</h4>
              <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
                GLP-1 medications are powerful tools for weight loss, but have reduced calorie metabolism – meaning your body needs fewer calories for regular body functions like digestion. Both intentional and unintentional weight loss decrease your body's energy needs. And most evidence suggests that GLP-1s enhance this decline, meaning that it's harder to maintain weight loss after stopping medication, and even more challenging to manage side-effects such as hunger or reduced appetite through the day. The best way for you to help yourself? Nutritional quality. By choosing nutritious food and focusing (where possible) on protein-rich foods you will feel fuller for longer and get good nutrient value in smaller portions – you can also help to reduce the loss of muscle mass that can accompany weight loss.
              </p>
              
              <div className="bg-[#F8F9FA] p-6 mb-4">
                <h5 className="text-[#465E5A] mb-3">Tips for a Well-Balanced diet</h5>
                <ul className="space-y-2 text-sm text-[#465E5A]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Try and eat at least one portion of protein with each meal (including snacks and drinks too)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Try to eat two (small) portions of oily fish each week (such as salmon, sardines, mackerel, fresh tuna)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Try to eat at least five servings of fruit & veg a day (but if you experience reduced appetite, we understand it can be hard to manage; so aim for 3+ portions instead!)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Base your meals around wholegrain starchy foods like breads, rice, pasta or potatoes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Avoid or limit highly processed food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Reduce saturated fat and lower your intake of sugar and salt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Physical Activity */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#6264A1] text-white flex items-center justify-center shrink-0 text-sm">
              2
            </div>
            <div>
              <h4 className="text-[#465E5A] mb-4">Physical Activity - keep moving to maintain your muscle mass</h4>
              
              <div className="space-y-4 text-sm text-[#465E5A]/80">
                <p className="leading-relaxed">
                  <strong className="text-[#465E5A]">For general health - regular physical activity works!</strong><br />
                  We ALL know that keeping physically active is good for our health, weight, sleep and mental health. Guidelines recommend that we aim for at least 150 minutes (2.5 hours) of moderate-intensity aerobic activity each week (activities that make you breathe harder than normal, like brisk walking or cycling). We also suggest including muscle-strengthening activities twice-a-week. However, some is better than nothing – even just 10 minutes of activity at a time will add up.
                </p>

                <p className="leading-relaxed">
                  <strong className="text-[#465E5A]">Why you should move:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Can help you lose more fat/weight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Can improve your mental health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Can improve digestive symptoms including constipation</span>
                  </li>
                </ul>

                <p className="leading-relaxed">
                  <strong className="text-[#465E5A]">To reduce sarcopenia:</strong><br />
                  When you lose weight, you lose both fat and muscle — but muscle is especially important to maintain with age (muscle loss with ageing is called 'sarcopenia'). A modern type of aerobic & muscle strength training called high-intensity interval training (HIIT workouts) can help to maintain lean body mass. Start Slowly: If you're new to interval training, start slow—light to moderate pace with brief breaks of exercise. If you're already active and feel comfortable, aim for 2-4 days a week with muscle-strengthening exercises (for legs, hip, back, chest, abdomen and arms) on at least 2 days per week.
                </p>

                <p className="leading-relaxed">
                  <strong className="text-[#465E5A]">We like to consider any benefits in terms levels:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>some activity is better than none (even if only for a few minutes at a time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>doing 75-150 minutes of activity each week is even better</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>doing 150-300 minutes a week is great</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>doing even more than 300 minutes a week will be of additional benefit</span>
                  </li>
                </ul>

                <p className="leading-relaxed">
                  <strong className="text-[#465E5A]">And don't forget - 5 ways activity can improve your quality of life:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Helps you to make better food choices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Improves your mood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Releases endorphins (happy, "all is good!) chemicals in your brain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Reduces insulin resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6264A1] mt-1">•</span>
                    <span>Improves heart and lung function</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Get Hydrated */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#6264A1] text-white flex items-center justify-center shrink-0 text-sm">
              3
            </div>
            <div>
              <h4 className="text-[#465E5A] mb-4">Get Hydrated - Toxins in Your Body</h4>
              
              <div className="space-y-4 text-sm text-[#465E5A]/80">
                <p className="leading-relaxed">
                  When we lose weight (whether on GLP-1 or not), the body releases stored toxins from body fat as it breaks down. Most toxins eventually leave the body through urine or stools — but staying well hydrated helps this process. More water encourages the kidneys to expel waste through sweating and urination. Research also shows that you can "assist" your liver and kidneys by hydrating well and eating (or drinking) healthily.
                </p>

                <div className="bg-[#F8F9FA] p-6">
                  <h5 className="text-[#465E5A] mb-3">Tips for supporting your body:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Drink plenty of water, aim for 6-8 cups each day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Aim to include fibre-rich, wholesome plant-based foods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Limit or avoid alcohol, caffeine, cigarettes, and highly processed foods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Get enough sleep and manage stress when you can (we know it isn't always possible - but where possible give yourself grace too!)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Strong Moves */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#6264A1] text-white flex items-center justify-center shrink-0 text-sm">
              4
            </div>
            <div>
              <h4 className="text-[#465E5A] mb-4">Strong Moves - Support your Skeleton too</h4>
              
              <div className="space-y-4 text-sm text-[#465E5A]/80">
                <p className="leading-relaxed">
                  Did you know that losing weight can also affect your bone strength? Bones adapt to the load that they bear — so, with less body weight, the skeleton has to work as hard to support you. Research has linked GLP-1 medications to slight changes in bone health in some people, so while more research is needed to fully understand this (and the long-term effects), it makes sense to be aware of and take some simple steps to maintain bone health.
                </p>

                <div className="bg-white border-l-4 border-[#6264A1] p-6 mb-4">
                  <h5 className="text-[#465E5A] mb-3">Top tips:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Get some Vitamin D in sunlight, where safe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Eat 3 portions of dairy-based foods (or fortified soya/oat-based calcium-equivalents) a day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Eat at least 5 portions of fruit and vegetables each day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Limit excess caffeine, alcohol and salt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Do 30-60 minutes of varied physical activity most days of the week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Consider taking Vitamin D supplement if needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Sleep */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#6264A1] text-white flex items-center justify-center shrink-0 text-sm">
              5
            </div>
            <div>
              <h4 className="text-[#465E5A] mb-4">Sleep</h4>
              
              <div className="space-y-4 text-sm text-[#465E5A]/80">
                <p className="leading-relaxed">
                  Did you know that sleep and weight are connected? Studies show that when people sleep less, they tend to snack more - particularly on calorie-rich foods. Sleep is also the only time you can fully restore physical and mental health. If you've been dealing with poor sleep, now is an important time to think about how to improve your sleep quality and quantity.
                </p>

                <div className="bg-[#F8F9FA] p-6">
                  <h5 className="text-[#465E5A] mb-3">Tips for supporting quality sleep:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Set a bedtime and wake-up time – and try to stick to it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Aim to get at least 7 hours sleep each night - most people need 7–9 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Get your main exposure to light during the daytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Have a warm bath or shower 1–2 hours before bedtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Make your bedroom comfortable, cool, dark and quiet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6264A1] mt-1">•</span>
                      <span>Set your screens (TV, computer, tablet, phone) aside 2 hours ahead of bedtime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#465E5A]/5">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#6264A1] pl-6">
            <p className="text-sm text-[#465E5A]/80 leading-relaxed italic">
              <strong className="text-[#465E5A] not-italic">Important:</strong> This information is general guidance only and should not replace medical advice. Whether you've been prescribed a medication for health reasons or you obtained it another way, your safety matters! Please consult with your healthcare professional before making significant changes to your diet or physical activity, especially if you have underlying health conditions or are taking other medications.
            </p>
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="p-8 bg-[#F8F9FA]">
        <h5 className="text-[#465E5A] text-sm mb-3">Sources and References:</h5>
        <div className="space-y-1 text-xs text-[#465E5A]/60">
          <p>NHS Diet Advice for Weight Loss: https://www.nhs.uk/live-well/healthy-weight/</p>
          <p>WHO Physical Activity Guidelines: https://www.who.int/news-room/fact-sheets/detail/physical-activity</p>
          <p>British Nutrition Foundation - Bone Health: https://www.nutrition.org.uk/</p>
          <p>Sleep Foundation: https://www.sleepfoundation.org/</p>
        </div>
      </div>
    </div>
  );
}

function GoalSettingContent() {
  return (
    <div className="bg-white border border-[#465E5A]/15">
      {/* Header Section */}
      <div className="text-center p-8 border-b border-[#465E5A]/15">
        <div className="w-16 h-16 bg-[#C5DFF2]/50 text-[#6264A1] flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8" />
        </div>
        <h3 className="text-[#465E5A] mb-2">Goal Setting to Support Your GLP-1 Medication Journey</h3>
        <p className="text-[#465E5A]/70 text-sm max-w-3xl mx-auto">
          You don't have to go all-in to see results — even tiny, manageable steps can help you feel more in control of your health, build healthy motivation, momentum and fun (fun).
        </p>
      </div>

      {/* Why Set Goals Section */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#465E5A] mb-4">Why Set Goals?</h4>
          <p className="text-sm text-[#465E5A]/80 leading-relaxed">
            Whether you're gradually adjusting your diet into a new norm or diving in radically - between your physical and mental wellbeing and your body - essentially it comes down to 3 SMART goal markers:
          </p>
        </div>
      </div>

      {/* Set SMART Goals Section */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#465E5A] mb-8 text-center">Set SMART Goals</h4>
          
          {/* SMART Circles */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {/* Specific */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#465E5A] text-white flex items-center justify-center mb-3 rounded-full">
                <span className="text-2xl">S</span>
              </div>
              <h5 className="text-[#465E5A] mb-1 text-sm">Specific</h5>
              <p className="text-xs text-[#465E5A]/60">Know exactly what you want to do</p>
            </div>

            {/* Measurable */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#465E5A] text-white flex items-center justify-center mb-3 rounded-full">
                <span className="text-2xl">M</span>
              </div>
              <h5 className="text-[#465E5A] mb-1 text-sm">Measurable</h5>
              <p className="text-xs text-[#465E5A]/60">Set a way to track it</p>
            </div>

            {/* Achievable */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#465E5A] text-white flex items-center justify-center mb-3 rounded-full">
                <span className="text-2xl">A</span>
              </div>
              <h5 className="text-[#465E5A] mb-1 text-sm">Achievable</h5>
              <p className="text-xs text-[#465E5A]/60">Make sure it's realistic for you</p>
            </div>

            {/* Relevant */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#465E5A] text-white flex items-center justify-center mb-3 rounded-full">
                <span className="text-2xl">R</span>
              </div>
              <h5 className="text-[#465E5A] mb-1 text-sm">Relevant</h5>
              <p className="text-xs text-[#465E5A]/60">Does it align with your health?</p>
            </div>

            {/* Timebound */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#465E5A] text-white flex items-center justify-center mb-3 rounded-full">
                <span className="text-2xl">T</span>
              </div>
              <h5 className="text-[#465E5A] mb-1 text-sm">Timebound</h5>
              <p className="text-xs text-[#465E5A]/60">Set a deadline for your goal</p>
            </div>
          </div>

          <p className="text-sm text-[#465E5A]/70 text-center italic">
            Based on some example goals, here are 6 SMART tips you could try (or modify to work for you):
          </p>
        </div>
      </div>

      {/* Movement & Strength Goals */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Movement & Strength Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            Physical activity can help prevent muscle loss, protect your bones, and even ease digestive troubles like GLP-1-related constipation.
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80 mb-6">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will go for a walk for 20 minutes, 3 times a week for the next 4 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will try a 10-minute strength-building session (see our tips section) at least once a week for the next 3 weeks to prevent muscle loss/decrease due to medication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will fit in some form of exercise (walking, cycling, yoga etc) for at least 30 minutes, 3 days this week</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-[#6264A1] p-4">
            <p className="text-xs text-[#465E5A]/70 italic">
              Note: If you have any concerns about your existing pain (starting a new physical activity) or underlying health condition, speak to your healthcare health professional.
            </p>
          </div>
        </div>
      </div>

      {/* Hydration Goals */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <Droplet className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Hydration Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            Whether supporting gut health, flushing out toxins after a weight-loss journey, easing (or avoiding) constipation.
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will drink 8 glasses of water today (this is a small target)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will track my water intake for 5 days - 7 days (1 week, or significantly for 30 days / 1 month)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Home Cooking & Nutrition Goals */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Home Cooking & Nutrition Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            Have a long think about what you "should" do, weighed up against what you're likely to actually manage, and then - most importantly - what's your feeling about it? Thinking about your personal context, energy level and appetite.
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will cook 1 healthy meal with 3+ veg tonight (i.e. a "right now" goal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will plan my meals for the week - if I'm stuck for energy, I will use the Spoon Guru recipe ideas for my weekly meal planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will make 5 meals, with at least 2 being plant based, at home for 70 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will cook a portion of fish this Thursday and watch for how to do this</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mindful Eating Goals */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Mindful Eating Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            GLP-1s help to slow digestion — and taking time to eat during your GLP-1 intake can reduce uncomfortable side effects like feeling too full, nausea or indigestion, and help you digest food more easily before getting too full.
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80 mb-6">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will take 20–30 minutes to eat my dinner instead of rushing it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will put down my fork/ cutlery during the meal to slow down my eating (ideally between every 3 mouthfuls)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will aim to take 3 weeks eating and chewing my meals slowly and well (ideally 30+ chews!)</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8F9FA] border-l-4 border-[#6264A1] p-4">
            <p className="text-xs text-[#465E5A]/70">
              I will stop and take time/be mindful before eating and identify if I'm really hungry or just eating out of habit (e.g. every 2 weeks).
            </p>
          </div>
        </div>
      </div>

      {/* Sleep Goals */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <Moon className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Sleep Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            Short sleep is associated with increased appetite, snacking (esp. high energy)
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will go to bed before 11 pm and use a wind-down routine for one day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will track my sleep for 7 consecutive days and see where I can improve</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will create a regular sleep schedule such as going to bed by 11 pm or even waking up at the same time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stress Management Goals */}
      <div className="p-8 border-b border-[#465E5A]/15">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6264A1] text-white flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-[#465E5A]">Stress Management Goals</h4>
          </div>

          <p className="text-sm text-[#465E5A]/80 leading-relaxed mb-4">
            Chronic stress can increase cortisol and sabotage your wellbeing efforts.
          </p>

          <div className="space-y-3 text-sm text-[#465E5A]/80">
            <p className="leading-relaxed"><strong className="text-[#465E5A]">Goal examples:</strong></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will try 10 relaxed slow yoga / I plan to do a 10-minute breathing or deep / 5 times a week for 2 weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will spend a little time/something I enjoy doing each day for one week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will take breaks from social media/screen on at 3–4 times</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6264A1] mt-1">•</span>
                <span>I will go on a family outing (such as a fun day) or to the cinema (good week).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Planning your first goal */}
      <div className="p-8 border-b border-[#465E5A]/15 bg-[#465E5A] text-white">
        <div className="max-w-4xl mx-auto">
          <h4 className="mb-4">Planning your first goal</h4>
          <p className="text-sm leading-relaxed mb-4">
            Don't be afraid to start ridiculously low. VERY Small things count! If your regular goal is simple, 3 deep-focus muscle goal stretching in a work meeting? It's making a committed. I discovered great value in personal goals - Especially if your current circumstances don't allow big changes. We'll help coach you towards good progress when you're in good well-thought-out stages. You might like to write it down now, to refer back to as you continue through the programme. That's something under your control – we'll provide motivational science-informed resources and be able to input (and choose different options) throughout the app - but we'll also let you do what you feel is best.
          </p>
          <p className="text-sm leading-relaxed">
            Take a moment and think about one realistic goal for the upcoming week – and remember, you don't need to pick all of them or even the "perfect one". Small wins build momentum and self-belief!
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="p-8 bg-[#F8F9FA]">
        <h5 className="text-[#465E5A] text-sm mb-3">Sources:</h5>
        <div className="space-y-1 text-xs text-[#465E5A]/60">
          <p>NHS Goal Setting: https://www.nhs.uk/</p>
          <p>SMART Goals Framework: Various Health Psychology Research</p>
        </div>
      </div>
    </div>
  );
}