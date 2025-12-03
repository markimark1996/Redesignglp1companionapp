/**
 * Before & After: Using Design Tokens
 * Real examples from your GLP-1 app components
 */

import { Search, Heart, Calendar, User, Compass } from 'lucide-react';
import { colors, spacing } from './tokens';

// =============================================================================
// EXAMPLE 1: HEADER COMPONENT
// =============================================================================

// ❌ BEFORE (Hardcoded values)
export function HeaderBefore() {
  return (
    <header className="bg-white border-b border-[#465E5A]/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <p className="text-xs text-[#465E5A]/70">Your GLP-1 Nutrition Companion</p>
          <Search className="text-[#465E5A]/50" />
        </div>
        <div className="pb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 bg-[#EEEBE7] border border-[#465E5A]/15 focus:ring-2 focus:ring-[#6264A1]"
          />
        </div>
      </div>
    </header>
  );
}

// ✅ AFTER (Using tokens - semantic classes)
export function HeaderAfter() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <p className="text-xs text-foreground/70">Your GLP-1 Nutrition Companion</p>
          <Search className="text-foreground/50" />
        </div>
        <div className="pb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 bg-input-background border border-border focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
    </header>
  );
}

/**
 * Benefits:
 * - Easier to read: "bg-card" vs "bg-white"
 * - Consistent: All borders use same token
 * - Themeable: Can add dark mode by changing CSS variables
 * - Maintainable: Update colour once, changes everywhere
 */

// =============================================================================
// EXAMPLE 2: BUTTON COMPONENT
// =============================================================================

// ❌ BEFORE (Hardcoded values)
export function ButtonBefore({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-[#6264A1] text-white border border-[#6264A1] hover:bg-[#6264A1]/90 rounded">
      {children}
    </button>
  );
}

// ✅ AFTER (Using tokens)
export function ButtonAfter({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 rounded">
      {children}
    </button>
  );
}

// ✅ ALTERNATIVE: Using TypeScript tokens (good for React Native)
export function ButtonWithTS({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: `${spacing.sm}px ${spacing.md}px`,
        backgroundColor: colors.semantic.primary,
        color: colors.semantic.primaryForeground,
        border: `1px solid ${colors.semantic.primary}`,
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  );
}

// =============================================================================
// EXAMPLE 3: CARD COMPONENT
// =============================================================================

// ❌ BEFORE (Hardcoded values)
export function RecipeCardBefore() {
  return (
    <div className="bg-white border border-[#465E5A]/15 p-4 hover:shadow-md transition-shadow">
      <img src="/recipe.jpg" alt="Recipe" className="w-full h-48 object-cover mb-3" />
      <h3 className="text-[#465E5A] mb-2">High Protein Chicken Bowl</h3>
      <p className="text-[#465E5A]/70 text-sm">Perfect for GLP-1 users</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="px-2 py-1 bg-[#DDEFDC] text-[#465E5A] text-xs border border-[#465E5A]/15">
          High Suitability
        </span>
      </div>
    </div>
  );
}

// ✅ AFTER (Using tokens)
export function RecipeCardAfter() {
  return (
    <div className="bg-card border border-border p-4 hover:shadow-md transition-shadow">
      <img src="/recipe.jpg" alt="Recipe" className="w-full h-48 object-cover mb-3" />
      <h3 className="text-foreground mb-2">High Protein Chicken Bowl</h3>
      <p className="text-foreground/70 text-sm">Perfect for GLP-1 users</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs border border-border">
          High Suitability
        </span>
      </div>
    </div>
  );
}

// =============================================================================
// EXAMPLE 4: BOTTOM NAVIGATION
// =============================================================================

// ❌ BEFORE (Hardcoded values)
export function BottomNavBefore() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#465E5A]/15">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center gap-1">
          <Compass className="w-6 h-6 text-[#6264A1]" />
          <span className="text-xs text-[#6264A1]">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Calendar className="w-6 h-6 text-[#465E5A]/60" />
          <span className="text-xs text-[#465E5A]/60">Meal Plan</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6 text-[#465E5A]/60" />
          <span className="text-xs text-[#465E5A]/60">Favourites</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-[#465E5A]/60" />
          <span className="text-xs text-[#465E5A]/60">Profile</span>
        </button>
      </div>
    </nav>
  );
}

// ✅ AFTER (Using tokens)
export function BottomNavAfter() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center gap-1">
          <Compass className="w-6 h-6 text-primary" />
          <span className="text-xs text-primary">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Calendar className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Meal Plan</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Favourites</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Profile</span>
        </button>
      </div>
    </nav>
  );
}

// =============================================================================
// EXAMPLE 5: GLP SUITABILITY BADGE (Option to use Spoon Guru colours)
// =============================================================================

// ❌ CURRENT (Green colours not in Spoon Guru palette)
export function GlpBadgeCurrent() {
  return (
    <div
      className="inline-flex items-center gap-1 px-2 py-1 border"
      style={{
        backgroundColor: '#E8F5E9',  // Material Green 50
        color: '#2E7D32',            // Material Green 800
        borderColor: 'rgba(46, 125, 50, 0.2)',
      }}
    >
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2E7D32' }}></span>
      <span className="text-xs">High</span>
    </div>
  );
}

// ✅ OPTION A: Use Spoon Guru palette (brand consistency)
export function GlpBadgeSpoonGuru() {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground border border-border rounded-sm">
      <span className="w-2 h-2 rounded-full bg-foreground"></span>
      <span className="text-xs">High</span>
    </div>
  );
}

// ✅ OPTION B: Use custom GLP tokens (keep green but tokenized)
export function GlpBadgeCustomTokens() {
  // Add these to your tokens.ts:
  const glpColors = {
    high: { bg: '#E8F5E9', fg: '#2E7D32' },
    medium: { bg: '#F1F8E9', fg: '#558B2F' },
    low: { bg: '#F9FBE7', fg: '#9E9D24' },
  };
  
  return (
    <div
      className="inline-flex items-center gap-1 px-2 py-1 border rounded-sm"
      style={{
        backgroundColor: glpColors.high.bg,
        color: glpColors.high.fg,
        borderColor: `${glpColors.high.fg}20`,
      }}
    >
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: glpColors.high.fg }}></span>
      <span className="text-xs">High</span>
    </div>
  );
}

// =============================================================================
// EXAMPLE 6: FORM INPUT
// =============================================================================

// ❌ BEFORE (Hardcoded values)
export function FormInputBefore() {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[#465E5A]">Protein Goal (g/day)</label>
      <input
        type="number"
        className="w-full px-3 py-2 bg-[#EEEBE7] border border-[#465E5A]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#6264A1] focus:border-transparent"
        placeholder="80"
      />
      <p className="text-xs text-[#465E5A]/60">Recommended: 60-100g per day</p>
    </div>
  );
}

// ✅ AFTER (Using tokens)
export function FormInputAfter() {
  return (
    <div className="space-y-2">
      <label className="text-sm text-foreground">Protein Goal (g/day)</label>
      <input
        type="number"
        className="w-full px-3 py-2 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        placeholder="80"
      />
      <p className="text-xs text-muted-foreground">Recommended: 60-100g per day</p>
    </div>
  );
}

// =============================================================================
// SIDE-BY-SIDE VISUAL COMPARISON
// =============================================================================

/**
 * All "After" examples look IDENTICAL to "Before" examples
 * The difference is in the code quality and maintainability:
 * 
 * READABILITY:
 * - "bg-card" is clearer than "bg-white"
 * - "text-foreground" is clearer than "text-[#465E5A]"
 * - "border-border" is clearer than "border-[#465E5A]/15"
 * 
 * CONSISTENCY:
 * - All components use same token names
 * - No magic hex values scattered everywhere
 * - Design system enforced automatically
 * 
 * MAINTAINABILITY:
 * - Change token once, updates everywhere
 * - Add dark mode by updating CSS variables
 * - Easy to experiment with colour schemes
 * 
 * SCALABILITY:
 * - Same tokens work on web and native
 * - Can generate style guides from tokens
 * - Can validate designs against tokens
 */

// =============================================================================
// COMPARISON TABLE
// =============================================================================

/**
 * | Aspect | Before (Hardcoded) | After (Tokens) |
 * |--------|-------------------|----------------|
 * | Code Length | Same | Same |
 * | Visual Output | Identical | Identical |
 * | Readability | Hex codes hard to read | Semantic names clear |
 * | Consistency | Manual, error-prone | Automatic, enforced |
 * | Dark Mode | Requires full refactor | Change CSS variables |
 * | Multi-platform | Duplicate values | Share tokens |
 * | Branding Update | Find & replace hundreds of lines | Update few tokens |
 * | Learning Curve | None | 5 minutes |
 */

// =============================================================================
// MIGRATION CHECKLIST
// =============================================================================

/**
 * To migrate a component from hardcoded to tokens:
 * 
 * 1. [ ] Find all hardcoded hex colours
 * 2. [ ] Replace with semantic tokens:
 *        - #F4F6F7 → bg-background
 *        - #465E5A → text-foreground
 *        - #6264A1 → bg-primary
 *        - #EEEBE7 → bg-input-background
 *        - rgba(70,94,90,0.15) → border-border
 * 3. [ ] Test component looks identical
 * 4. [ ] Commit changes
 * 
 * Time per component: ~5 minutes
 * Total components in app: ~15-20
 * Total migration time: 1-2 hours
 */

// =============================================================================
// BENEFITS REALIZED
// =============================================================================

/**
 * After migrating all components to tokens:
 * 
 * ✅ IMMEDIATE BENEFITS:
 * - Code is more readable
 * - Design system is enforced
 * - New developers understand faster
 * - Less copy-paste errors
 * 
 * ✅ MEDIUM-TERM BENEFITS:
 * - Can add dark mode in 30 minutes
 * - Can rebrand in 1 hour
 * - Can A/B test colour schemes easily
 * - Design and code stay in sync
 * 
 * ✅ LONG-TERM BENEFITS:
 * - Can build native apps using same tokens
 * - Can generate documentation automatically
 * - Can validate designs against code
 * - Can scale to multiple products
 */
