# Design Tokens - Your Questions Answered

## What are Design Tokens?

**Design tokens are named variables for your design values** (colours, spacing, fonts). Instead of hardcoding `#6264A1` everywhere, you use a name like `colors.primary` or the Tailwind class `bg-primary`.

**Think of it like this:**
- ❌ Bad: Using random phone numbers throughout your code
- ✅ Good: Saving contacts with names and calling them by name

Same with design:
- ❌ Bad: `bg-[#6264A1]` scattered everywhere
- ✅ Good: `bg-primary` used consistently

---

## Can I Use Tokens in This App (Bolt/Figma Make)?

**YES! You already are!** 🎉

You have design tokens in two places:

### 1. CSS Variables (in `/styles/globals.css`)
```css
:root {
  --ground-teal: #465E5A;
  --ground-purple: #6264A1;
  --foreground: #465E5A;
  --primary: #6264A1;
  --border: rgba(70, 94, 90, 0.15);
}
```

### 2. TypeScript Tokens (in `/design-system/tokens.ts`)
```ts
export const colors = {
  ground: { teal: '#465E5A', purple: '#6264A1' },
  semantic: { primary: '#6264A1' },
};
```

---

## How Do I Extract Design Tokens?

### You Don't Need To - I Already Did It For You! ✅

I've created:
1. ✅ `/design-system/tokens.ts` - Complete TypeScript tokens
2. ✅ Updated `/styles/globals.css` - CSS variables (you already had these!)
3. ✅ Updated `/components/Header.tsx` - Example using tokens

### What I Extracted:

| Design Element | Token |
|----------------|-------|
| Spoon Guru Teal (#465E5A) | `colors.ground.teal` |
| Spoon Guru Purple (#6264A1) | `colors.ground.purple` |
| Background Warm (#EEEBE7) | `colors.background.warm` |
| All spacing values | `spacing.xs` through `spacing.2xl` |
| Border radius | `borderRadius.sm` = 2px (sharp) |
| GLP-1 suitability colours | `colors.glpSuitability.high/medium/low` |

---

## How to Use Tokens (3 Easy Ways)

### Method 1: Semantic Tailwind Classes (Easiest!)

```tsx
// Instead of:
<div className="bg-white text-[#465E5A] border-[#465E5A]/15">

// Use:
<div className="bg-card text-foreground border-border">
```

**These classes already work in your app right now!**

### Method 2: CSS Variables

```tsx
// Instead of:
<div className="bg-[#6264A1]">

// Use:
<div className="bg-[var(--ground-purple)]">
```

### Method 3: TypeScript Tokens

```tsx
import { colors, spacing } from './design-system/tokens';

<div style={{
  backgroundColor: colors.semantic.primary,
  padding: `${spacing.md}px`,
}}>
```

---

## What Files Should I Look At?

### 📚 Documentation (Read These)

1. **START HERE:** `/guidelines/Using-Tokens-In-This-App.md`
   - How to use tokens in your current app
   - Step-by-step guide
   - Your Header is already updated as an example!

2. **QUICK REFERENCE:** `/design-system/quick-reference.md`
   - Cheat sheet for refactoring
   - Common patterns
   - Before/after examples

3. **DEEP DIVE:** `/guidelines/Design-Tokens-Explained.md`
   - What tokens are and why they matter
   - Full explanation with examples

4. **MULTI-PLATFORM:** `/guidelines/Cross-Platform-Strategy.md`
   - How to use tokens for web AND native apps
   - React Native examples
   - Navigation comparisons

### 💻 Code Files (Reference These)

1. **Token Definitions:** `/design-system/tokens.ts`
   - All design tokens in TypeScript
   - Can be imported in components

2. **CSS Variables:** `/styles/globals.css`
   - CSS custom properties
   - Already working in your Tailwind classes

3. **Examples:** `/design-system/examples/`
   - Web button example
   - Native button example
   - GLP badge comparison
   - Before/after examples

---

## Show Me a Real Example!

### Your Header Component (Already Updated!)

**Before:**
```tsx
<header className="bg-white border-b border-[#465E5A]/15">
  <p className="text-[#465E5A]/70">Your GLP-1 Nutrition Companion</p>
  <input className="bg-[#EEEBE7] border-[#465E5A]/15 focus:ring-[#6264A1]" />
</header>
```

**After (Using Tokens):**
```tsx
<header className="bg-card border-b border-border">
  <p className="text-foreground/70">Your GLP-1 Nutrition Companion</p>
  <input className="bg-input-background border-border focus:ring-ring" />
</header>
```

**Result:**
- ✅ Looks exactly the same visually
- ✅ Code is easier to read
- ✅ Uses design system consistently
- ✅ Ready for dark mode / theme changes

Check `/components/Header.tsx` to see it live!

---

## What Are the Benefits?

### 1. **Consistency**
Everyone uses the same colours/spacing automatically

### 2. **Easy Updates**
Change one token → updates everywhere
- Rebrand: 5 minutes instead of 5 hours
- Add dark mode: 30 minutes instead of 3 days

### 3. **Better Code**
```tsx
bg-primary               // Clear what it does
vs
bg-[#6264A1]            // Random hex code
```

### 4. **Multi-Platform Ready**
Same tokens work for:
- ✅ Web (current app)
- ✅ iOS app (future)
- ✅ Android app (future)

---

## Do I Need to Change Anything Now?

**No!** Your app works perfectly as-is.

**But if you want to improve it:**

1. **Quick Win (5 min):** Read `/guidelines/Using-Tokens-In-This-App.md`
2. **Easy Refactor (1-2 hours):** Update components to use semantic tokens
3. **Full Migration (future):** Use tokens when building native apps

---

## Step-by-Step: How to Use Tokens

### Step 1: Open Any Component

For example, `/components/BottomNav.tsx`

### Step 2: Find Hardcoded Values

Look for:
- `bg-[#6264A1]` - Hardcoded purple
- `text-[#465E5A]` - Hardcoded teal
- `border-[#465E5A]/15` - Hardcoded border

### Step 3: Replace with Tokens

Use the quick reference:
- `bg-[#6264A1]` → `bg-primary`
- `text-[#465E5A]` → `text-foreground`
- `border-[#465E5A]/15` → `border-border`

### Step 4: Check the Preview

It should look **exactly the same**!

### Done! 🎉

One component refactored. Repeat for others as you work on them.

---

## Common Tokens You'll Use

### Colours
```tsx
bg-background          // Page background (#F4F6F7)
bg-card               // White cards (#ffffff)
bg-primary            // Purple buttons (#6264A1)
bg-input-background   // Input fields (#EEEBE7)
text-foreground       // Dark teal text (#465E5A)
border-border         // Subtle borders (rgba...)
```

### Spacing (use Tailwind's scale)
```tsx
gap-1   gap-2   gap-4   gap-6   gap-8   gap-12
p-1     p-2     p-4     p-6     p-8     p-12
m-1     m-2     m-4     m-6     m-8     m-12
```

---

## For Building Native Apps (Future)

When you want to build iOS/Android apps:

1. ✅ Use `/design-system/tokens.ts` in React Native
2. ✅ Import same colours/spacing
3. ✅ Maintain exact same design

**Example:**
```tsx
// Web (current)
<div className="bg-primary text-primary-foreground">

// React Native (future)
import { colors } from './design-system/tokens';
<View style={{ backgroundColor: colors.semantic.primary }}>
  <Text style={{ color: colors.semantic.primaryForeground }}>
```

Same design system, different platform! 🚀

---

## Resources Created for You

### 📖 Guides (Read in This Order)
1. **This file** - Overview and FAQ
2. `/guidelines/Using-Tokens-In-This-App.md` - How to use right now
3. `/design-system/quick-reference.md` - Cheat sheet
4. `/guidelines/Design-Tokens-Explained.md` - Deep dive
5. `/guidelines/Cross-Platform-Strategy.md` - Web + Native

### 💻 Code Resources
1. `/design-system/tokens.ts` - Token definitions
2. `/styles/globals.css` - CSS variables
3. `/design-system/examples/` - Example code
4. `/design-system/before-after-examples.tsx` - Side-by-side comparisons

### 🎯 Updated Components
1. `/components/Header.tsx` - **Already updated with tokens!**

---

## Quick FAQ

**Q: What are design tokens?**  
A: Named variables for colours, spacing, fonts instead of hardcoded values.

**Q: How do I extract them?**  
A: Already done! They're in `/design-system/tokens.ts` and `/styles/globals.css`.

**Q: Can I use them in this app?**  
A: Yes! You already are. Use semantic Tailwind classes like `bg-primary`.

**Q: Do I need to change my code?**  
A: No, but it's better if you do (easier to maintain).

**Q: How long does it take?**  
A: ~5 minutes per component, 1-2 hours total for whole app.

**Q: Will it look different?**  
A: No! Exact same visual appearance.

**Q: Can I use these for native apps?**  
A: Yes! That's the whole point. Same tokens, multiple platforms.

**Q: Where do I start?**  
A: Read `/guidelines/Using-Tokens-In-This-App.md` then look at the updated Header component.

---

## Next Steps

1. ✅ **Read** `/guidelines/Using-Tokens-In-This-App.md` (5 minutes)
2. ✅ **Look** at `/components/Header.tsx` to see tokens in action
3. ✅ **Try** updating one component (use quick reference)
4. ✅ **Decide** if you want to refactor more components
5. ✅ **Use** tokens for any new components you create

---

## Summary

- ✅ Design tokens = Named variables for design values
- ✅ You already have them in `/design-system/tokens.ts` and CSS
- ✅ Use semantic Tailwind classes: `bg-primary`, `text-foreground`, `border-border`
- ✅ Header component already updated as example
- ✅ Benefits: Consistency, easy updates, multi-platform ready
- ✅ Migration: Optional but recommended (1-2 hours total)

**Start here:** `/guidelines/Using-Tokens-In-This-App.md`

**Questions?** All answers are in the guides! 📚
