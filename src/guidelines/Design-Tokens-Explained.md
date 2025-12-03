# Design Tokens Explained

## What Are Design Tokens?

Design tokens are **named constants** that store your design decisions. Instead of using raw values like `#6264A1` or `16px` throughout your code, you use meaningful names like `colors.ground.purple` or `spacing.md`.

### Before (Hardcoded Values):
```tsx
// Header.tsx - Line 12
<header className="bg-white border-b border-[#465E5A]/15">
```

### After (Using Tokens):
```tsx
import { colors } from '../design-system/tokens';

<header className="bg-white border-b border-[var(--ground-teal)]/15">
// or with inline styles:
<header style={{ borderBottom: `1px solid ${colors.border.default}` }}>
```

---

## Why Use Design Tokens?

### 1. **Single Source of Truth**
Change one value, update everywhere automatically.

**Example:** If Spoon Guru updates their purple from `#6264A1` to `#7375B2`, you change it in ONE place:

```ts
// design-system/tokens.ts
export const colors = {
  ground: {
    purple: '#7375B2',  // Changed here once
  }
}

// Now ALL buttons, badges, and borders update automatically! ✨
```

### 2. **Consistency**
Everyone uses the exact same colours, spacing, and fonts.

**Without tokens:** Developer A uses `px-4`, Developer B uses `px-3`, Designer uses 16px
**With tokens:** Everyone uses `spacing.md` (which equals 16px)

### 3. **Easy Theme Switching**
Support dark mode, high contrast, or different brands easily.

```ts
const lightTheme = {
  background: '#F4F6F7',
  text: '#465E5A',
};

const darkTheme = {
  background: '#465E5A',
  text: '#EEEBE7',
};
```

### 4. **Platform Agnostic**
Use the same tokens for web, iOS, and Android.

```ts
// design-system/tokens.ts
export const spacing = { md: 16 };

// Web (Tailwind)
<div className="p-4">  // 4 × 4px = 16px

// Web (inline styles)
<div style={{ padding: `${spacing.md}px` }}>

// React Native
<View style={{ padding: spacing.md }}>

// iOS (Swift - after conversion)
let padding = spacing.md  // 16 points

// Android (Kotlin - after conversion)
val padding = spacing.md.dp  // 16dp
```

---

## Extracting Tokens from Your Existing Code

Let me show you the **hardcoded values in your current app** and how to extract them:

### 🎨 Colours Currently in Your Code

| Where Used | Hardcoded Value | Token Name |
|------------|----------------|------------|
| Border colours | `#465E5A/15` | `colors.border.default` |
| Text primary | `#465E5A` | `colors.text.primary` |
| Text secondary | `#465E5A/70` | `colors.text.secondary` |
| Background input | `#EEEBE7` | `colors.background.warm` |
| Primary button | `#6264A1` | `colors.semantic.primary` |
| Focus ring | `#6264A1` | `colors.border.focus` |

### Example: Header Component

**Current code (hardcoded):**
```tsx
// /components/Header.tsx
<header className="bg-white border-b border-[#465E5A]/15">
  <Search className="text-[#465E5A]/50" />
  <input className="bg-[#EEEBE7] border-[#465E5A]/15 focus:ring-[#6264A1]" />
  <p className="text-[#465E5A]/70">Your GLP-1 Nutrition Companion</p>
</header>
```

**With tokens:**
```tsx
import { colors } from '../design-system/tokens';

<header className="bg-white border-b border-[var(--ground-teal)]/15">
  <Search className="text-[var(--ground-teal)]/50" />
  <input className="bg-[var(--bg-warm)] border-[var(--ground-teal)]/15 focus:ring-[var(--ground-purple)]" />
  <p className="text-[var(--ground-teal)]/70">Your GLP-1 Nutrition Companion</p>
</header>
```

Or with Tailwind + CSS variables (already in your globals.css):
```tsx
<header className="bg-white border-b border-border">
  <Search className="text-foreground/50" />
  <input className="bg-input-background border-border focus:ring-ring" />
  <p className="text-foreground/70">Your GLP-1 Nutrition Companion</p>
</header>
```

---

## How to Use Tokens (3 Methods)

### Method 1: CSS Variables (Recommended for Tailwind)

You already have these in `/styles/globals.css`!

```css
/* Your existing CSS variables */
:root {
  --ground-teal: #465E5A;
  --ground-purple: #6264A1;
  --bg-warm: #EEEBE7;
  --border: rgba(70, 94, 90, 0.15);
}
```

Use in Tailwind classes:
```tsx
<div className="bg-[var(--bg-warm)] text-[var(--ground-teal)]">
```

Or use the semantic tokens:
```tsx
<div className="bg-input-background text-foreground border-border">
```

### Method 2: TypeScript Tokens (Recommended for React Native)

```tsx
import { colors, spacing } from '../design-system/tokens';

// Inline styles
<div style={{
  backgroundColor: colors.background.warm,
  color: colors.text.primary,
  padding: `${spacing.md}px`,
}}>
```

### Method 3: Tailwind Config (Advanced)

Add tokens to Tailwind config for custom classes:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'ground-teal': '#465E5A',
        'ground-purple': '#6264A1',
      },
    },
  },
};
```

Then use:
```tsx
<div className="bg-ground-teal text-white">
```

---

## Your Current Setup

✅ **Good news!** You already have design tokens in `/styles/globals.css`:

```css
:root {
  /* Spoon Guru Color Palette */
  --ground-mint: #DDEFDC;
  --ground-teal: #465E5A;
  --ground-purple: #6264A1;
  --ground-blue: #C5DFF2;
  --electric-blue: #B2D4EE;
  --electric-green: #E5F2E4;
  --electric-purple: #9697C0;
  --bg-beige: #E3DBD1;
  --bg-warm: #EEEBE7;
  --bg-cool: #F4F6F7;
}
```

You also have semantic tokens:
```css
:root {
  --background: #F4F6F7;
  --foreground: #465E5A;
  --primary: #6264A1;
  --border: rgba(70, 94, 90, 0.15);
  --input-background: #EEEBE7;
}
```

---

## How to Start Using Your Tokens

### Option A: Use CSS Variables (Easiest - No Code Changes Needed)

Your Tailwind classes can already use CSS variables:

```tsx
// Instead of:
<div className="bg-[#EEEBE7]">

// Use:
<div className="bg-[var(--bg-warm)]">
```

### Option B: Use Semantic Classes (Cleanest)

```tsx
// Instead of:
<div className="bg-[#F4F6F7] text-[#465E5A]">

// Use:
<div className="bg-background text-foreground">
```

These are already defined in your `globals.css` via the `@theme inline` directive!

---

## Practical Example: Updating One Component

Let me update your Header component to use tokens:

### Before:
```tsx
export function Header() {
  return (
    <header className="bg-white border-b border-[#465E5A]/15 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        <p className="text-xs text-[#465E5A]/70">Your GLP-1 Nutrition Companion</p>
        <Search className="text-[#465E5A]/50" />
        <input className="bg-[#EEEBE7] border border-[#465E5A]/15 focus:ring-2 focus:ring-[#6264A1]" />
      </div>
    </header>
  );
}
```

### After (Using Tokens):
```tsx
export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        <p className="text-xs text-foreground/70">Your GLP-1 Nutrition Companion</p>
        <Search className="text-foreground/50" />
        <input className="bg-input-background border border-border focus:ring-2 focus:ring-ring" />
      </div>
    </header>
  );
}
```

---

## Benefits in Your GLP-1 App

### 1. **Easy Brand Updates**
If Spoon Guru changes their design system:
- Update `/design-system/tokens.ts` once
- All 20+ components update automatically

### 2. **Consistent GLP-1 Badges**
Currently your GLP badges use green colours:
```tsx
color: '#2E7D32',       // Not in Spoon Guru palette
bgColor: '#E8F5E9',     // Not in Spoon Guru palette
```

With tokens:
```tsx
color: colors.ground.teal,      // From palette
bgColor: colors.ground.mint,    // From palette
```

### 3. **Multi-Platform (Web + Native)**
When you build iOS/Android apps:
```ts
// Same tokens work everywhere
import { colors } from './design-system/tokens';

// Web
<div style={{ color: colors.text.primary }}>

// React Native
<Text style={{ color: colors.text.primary }}>

// iOS Swift (converted)
let textColor = UIColor(hex: "#465E5A")

// Android Kotlin (converted)
val textColor = Color.parseColor("#465E5A")
```

### 4. **Dark Mode (Future)**
Add dark theme easily:
```css
.dark {
  --background: #465E5A;
  --foreground: #EEEBE7;
  --primary: #9697C0;
}
```

All components automatically switch!

---

## Next Steps

### Immediate (Keep Current Code Working):
1. ✅ You already have tokens in `/styles/globals.css`
2. ✅ You already have semantic classes working (`bg-background`, `text-foreground`)
3. ✅ Optional: Add TypeScript tokens from `/design-system/tokens.ts` for type safety

### Optional Refactoring (Gradual):
1. Replace hardcoded hex values with CSS variables
2. Use semantic Tailwind classes instead of arbitrary values
3. Extract component-specific values (GLP badge colours) to tokens

### For Multi-Platform (Future):
1. Use `/design-system/tokens.ts` as shared source
2. Import tokens in both web and React Native
3. Build native apps with same design system

---

## Quick Reference

### Your Token Files:

| File | Purpose | Usage |
|------|---------|-------|
| `/styles/globals.css` | CSS variables for web | `bg-[var(--ground-teal)]` |
| `/design-system/tokens.ts` | TypeScript tokens | `import { colors }` |
| Tailwind classes | Semantic classes | `bg-background` `text-foreground` |

### Common Tokens You Already Have:

```css
/* Colours */
--ground-teal: #465E5A        → text-[var(--ground-teal)] or text-foreground
--ground-purple: #6264A1      → text-[var(--ground-purple)] or text-primary
--bg-warm: #EEEBE7            → bg-[var(--bg-warm)] or bg-input-background
--bg-cool: #F4F6F7            → bg-[var(--bg-cool)] or bg-background

/* Semantic */
--border: rgba(70,94,90,0.15) → border-border
--primary: #6264A1            → bg-primary text-primary
--foreground: #465E5A         → text-foreground
```

### Example Component:
```tsx
// Old way (hardcoded):
<button className="bg-[#6264A1] text-white border border-[#465E5A]/15">

// New way (with tokens):
<button className="bg-primary text-primary-foreground border border-border">
```

**Result:** Easier to read, maintain, and scale! 🚀
