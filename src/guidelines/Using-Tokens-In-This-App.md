# Using Design Tokens in Your GLP-1 App

## Quick Start Guide

Yes! You can absolutely use design tokens in this app (Figma Make/Bolt). In fact, **you're already using them**! 

---

## ✅ What You Already Have

You already have design tokens set up in two places:

### 1. **CSS Variables** (`/styles/globals.css`)

```css
:root {
  /* Spoon Guru Colours */
  --ground-teal: #465E5A;
  --ground-purple: #6264A1;
  --bg-warm: #EEEBE7;
  
  /* Semantic Tokens */
  --foreground: #465E5A;
  --background: #F4F6F7;
  --primary: #6264A1;
  --border: rgba(70, 94, 90, 0.15);
  --input-background: #EEEBE7;
  --ring: #6264A1;
}
```

### 2. **TypeScript Tokens** (`/design-system/tokens.ts`)

```ts
export const colors = {
  ground: {
    teal: '#465E5A',
    purple: '#6264A1',
  },
  semantic: {
    primary: '#6264A1',
  },
};

export const spacing = {
  md: 16,
  lg: 24,
};
```

---

## 🎯 How to Use Tokens (Choose Your Style)

### Option 1: Semantic Tailwind Classes (EASIEST)

**Recommended!** These classes already work in your app:

```tsx
// ✅ Use these semantic classes
<div className="bg-background text-foreground">
<div className="bg-card text-card-foreground">
<div className="border-border">
<input className="bg-input-background">
<button className="bg-primary text-primary-foreground">
<div className="ring-ring">
```

**Example - Your Updated Header:**
```tsx
// Before (hardcoded):
<header className="bg-white border-b border-[#465E5A]/15">
  <p className="text-[#465E5A]/70">Text</p>
</header>

// After (using tokens):
<header className="bg-card border-b border-border">
  <p className="text-foreground/70">Text</p>
</header>
```

### Option 2: CSS Variables with Tailwind

Use your custom CSS variables directly:

```tsx
<div className="bg-[var(--bg-warm)]">
<div className="text-[var(--ground-teal)]">
<div className="border-[var(--ground-purple)]">
```

### Option 3: TypeScript Tokens with Inline Styles

Import and use TypeScript tokens:

```tsx
import { colors, spacing } from '../design-system/tokens';

<div style={{
  backgroundColor: colors.background.warm,
  color: colors.text.primary,
  padding: `${spacing.md}px`,
}}>
```

---

## 📝 Common Token Reference

### Colours

| What | Hardcoded | Semantic Class | CSS Variable |
|------|-----------|----------------|--------------|
| Background | `bg-[#F4F6F7]` | `bg-background` | `bg-[var(--bg-cool)]` |
| Text | `text-[#465E5A]` | `text-foreground` | `text-[var(--ground-teal)]` |
| Primary Button | `bg-[#6264A1]` | `bg-primary` | `bg-[var(--ground-purple)]` |
| Border | `border-[#465E5A]/15` | `border-border` | `border-[var(--border)]` |
| Input Background | `bg-[#EEEBE7]` | `bg-input-background` | `bg-[var(--bg-warm)]` |
| Focus Ring | `ring-[#6264A1]` | `ring-ring` | `ring-[var(--ring)]` |

### Spacing

Instead of arbitrary values, use Tailwind's default scale (which matches your tokens):

| Token | Tailwind | Value |
|-------|----------|-------|
| `spacing.xs` | `gap-1`, `p-1` | 4px |
| `spacing.sm` | `gap-2`, `p-2` | 8px |
| `spacing.md` | `gap-4`, `p-4` | 16px |
| `spacing.lg` | `gap-6`, `p-6` | 24px |
| `spacing.xl` | `gap-8`, `p-8` | 32px |

---

## 🔄 How to Refactor Your Components

### Step-by-Step Process:

1. **Open a component file** (e.g., `/components/Header.tsx`)

2. **Find hardcoded values:**
   - Colours: `#465E5A`, `#6264A1`, `#EEEBE7`
   - Arbitrary classes: `bg-[#...]`, `text-[#...]`

3. **Replace with semantic tokens:**

```tsx
// ❌ Before
<div className="bg-[#F4F6F7] text-[#465E5A] border-[#465E5A]/15">

// ✅ After
<div className="bg-background text-foreground border-border">
```

4. **Test the component** - it should look exactly the same!

---

## 💡 Real Example: I Just Updated Your Header

I updated `/components/Header.tsx` to use tokens. Here's what changed:

```tsx
// Before:
<header className="bg-white border-b border-[#465E5A]/15">
  <p className="text-[#465E5A]/70">...</p>
  <Search className="text-[#465E5A]/50" />
  <input className="bg-[#EEEBE7] border-[#465E5A]/15 focus:ring-[#6264A1]" />
</header>

// After:
<header className="bg-card border-b border-border">
  <p className="text-foreground/70">...</p>
  <Search className="text-foreground/50" />
  <input className="bg-input-background border-border focus:ring-ring" />
</header>
```

**Result:** 
- ✅ Looks exactly the same
- ✅ Easier to read
- ✅ Uses design system
- ✅ Easy to update colours globally

---

## 🎨 Should You Update Your GLP Badge Colours?

Your GLP Suitability Badge currently uses **green colours** not in the Spoon Guru palette:

```tsx
// Current (green-based):
color: '#2E7D32',       // Material Green
bgColor: '#E8F5E9',     // Light Green
```

**Options:**

### A) Keep Current Colours (GLP-specific)
If green represents "healthy/suitable" and is important for GLP-1 users, keep it.

### B) Use Spoon Guru Palette (Brand consistency)
Switch to your design system colours:

```tsx
// High Suitability
color: colors.ground.teal,      // #465E5A
bgColor: colors.ground.mint,    // #DDEFDC

// Medium Suitability  
color: colors.ground.purple,    // #6264A1
bgColor: colors.ground.blue,    // #C5DFF2

// Low Suitability
color: colors.text.tertiary,    // #465E5A at 50% opacity
bgColor: colors.background.warm, // #EEEBE7
```

I already created these tokens for you in `/design-system/tokens.ts`:

```ts
glpSuitability: {
  high: {
    background: '#DDEFDC',   // Ground Mint
    foreground: '#465E5A',   // Ground Teal
    indicator: '#465E5A',
  },
  medium: {
    background: '#C5DFF2',   // Ground Blue
    foreground: '#465E5A',
    indicator: '#6264A1',    // Ground Purple
  },
  low: {
    background: '#EEEBE7',   // Background Warm
    foreground: '#465E5A',
    indicator: 'rgba(70, 94, 90, 0.5)',
  },
}
```

---

## 🚀 Your Next Steps

### Option 1: Keep Using Current Approach (No Changes Needed)
Your app works fine! You're already using CSS variables in `globals.css`.

### Option 2: Gradual Refactoring (Recommended)
Replace hardcoded hex values with semantic tokens as you work on components:

1. ✅ Header - Already updated!
2. Next: Update BottomNav
3. Next: Update other components
4. Optional: Update GLP badge to use Spoon Guru colours

### Option 3: Complete Token Migration
Systematically update all components to use tokens. Benefits:
- Consistent design system
- Easier to maintain
- Ready for dark mode
- Ready for multi-platform (when you build native apps)

---

## 🔧 Practical Tips

### Tip 1: Use Search and Replace
In any component file:
1. Find: `bg-[#F4F6F7]` → Replace: `bg-background`
2. Find: `text-[#465E5A]` → Replace: `text-foreground`
3. Find: `border-[#465E5A]/15` → Replace: `border-border`

### Tip 2: Test as You Go
After each change, check the preview to ensure it looks the same.

### Tip 3: Start with High-Impact Components
Priority order:
1. ✅ Header (done!)
2. BottomNav (used everywhere)
3. Buttons and Cards
4. Forms and Inputs
5. Specialty components (GLP badges)

### Tip 4: Document Custom Colours
If you need colours outside the Spoon Guru palette (like your green GLP badges), add them to `/design-system/tokens.ts`:

```ts
export const colors = {
  // ... existing colours ...
  
  // GLP-specific colours (if keeping green)
  glp: {
    high: '#2E7D32',
    highBg: '#E8F5E9',
    medium: '#558B2F',
    mediumBg: '#F1F8E9',
  },
};
```

---

## 📚 Full Token List

See all available tokens in:
- `/design-system/tokens.ts` - TypeScript tokens
- `/styles/globals.css` - CSS variables
- `/guidelines/Design-Tokens-Explained.md` - Full documentation

---

## ❓ FAQ

**Q: Will using tokens break my app?**
A: No! I just updated your Header and it works perfectly.

**Q: Do I have to update everything at once?**
A: No! Update gradually as you work on components.

**Q: Can I add my own tokens?**
A: Yes! Add to `/design-system/tokens.ts` or CSS variables in `globals.css`.

**Q: What about the GLP badge green colours?**
A: Your choice! Keep green for medical context, or switch to Spoon Guru palette for brand consistency.

**Q: Will this work when I build native apps?**
A: Yes! That's the whole point. Use `/design-system/tokens.ts` in React Native too.

---

## ✨ Summary

**You already have design tokens!** They're in:
1. `/styles/globals.css` (CSS variables)
2. `/design-system/tokens.ts` (TypeScript)

**How to use them:**
- Use semantic Tailwind classes: `bg-background`, `text-foreground`, `border-border`
- Or CSS variables: `bg-[var(--ground-teal)]`
- Or TypeScript: `import { colors } from '../design-system/tokens'`

**Benefits:**
- Change colours in one place
- Consistent design
- Ready for dark mode
- Ready for native apps

**Your Header is already updated as an example!** Check it out and see if you like the approach. 🎉
