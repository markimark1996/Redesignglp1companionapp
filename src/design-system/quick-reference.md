# Design Tokens Quick Reference

Use this as a cheat sheet when updating your components.

---

## 🎨 Colour Tokens

### Replace These Hex Codes:

| Old (Hardcoded) | New (Semantic Token) | What It's For |
|-----------------|---------------------|---------------|
| `bg-white` or `bg-[#ffffff]` | `bg-card` | Cards, headers, nav |
| `bg-[#F4F6F7]` | `bg-background` | Page background |
| `bg-[#EEEBE7]` | `bg-input-background` | Input fields |
| `bg-[#6264A1]` | `bg-primary` | Primary buttons |
| `bg-[#DDEFDC]` | `bg-accent` | Accent/highlight areas |
| `text-[#465E5A]` | `text-foreground` | Primary text |
| `text-[#465E5A]/70` | `text-foreground/70` | Secondary text |
| `text-[#465E5A]/50` | `text-foreground/50` | Tertiary text |
| `text-white` | `text-primary-foreground` | Text on primary bg |
| `border-[#465E5A]/15` | `border-border` | All borders |
| `ring-[#6264A1]` | `ring-ring` | Focus rings |

### Full Semantic Token List:

```tsx
// Backgrounds
bg-background        // #F4F6F7 - Page background
bg-card              // #ffffff - Cards, headers
bg-input-background  // #EEEBE7 - Input fields
bg-primary           // #6264A1 - Primary buttons
bg-secondary         // #B2D4EE - Secondary buttons
bg-accent            // #DDEFDC - Highlights
bg-muted             // #EEEBE7 - Muted areas

// Text
text-foreground      // #465E5A - Primary text
text-card-foreground // #465E5A - Text on cards
text-primary         // #6264A1 - Primary colour text
text-primary-foreground // #ffffff - Text on primary bg
text-muted-foreground   // #465E5A - Muted text

// Borders
border-border        // rgba(70,94,90,0.15) - Standard borders

// Focus/Active
ring-ring            // #6264A1 - Focus rings
```

---

## 📐 Spacing Tokens

Use Tailwind's built-in scale (matches your design tokens):

| Token Value | Tailwind | Pixels | Use For |
|-------------|----------|--------|---------|
| `xs` (4px) | `p-1`, `gap-1`, `m-1` | 4px | Tight spacing |
| `sm` (8px) | `p-2`, `gap-2`, `m-2` | 8px | Small spacing |
| `md` (16px) | `p-4`, `gap-4`, `m-4` | 16px | Standard spacing |
| `lg` (24px) | `p-6`, `gap-6`, `m-6` | 24px | Large spacing |
| `xl` (32px) | `p-8`, `gap-8`, `m-8` | 32px | Extra large spacing |
| `2xl` (48px) | `p-12`, `gap-12`, `m-12` | 48px | Section spacing |

---

## 🔤 Typography

**Don't** use arbitrary text sizes. Use defaults or these tokens:

| Size | Tailwind | Use For |
|------|----------|---------|
| 12px | `text-xs` | Labels, captions |
| 14px | `text-sm` | Small text |
| 16px | `text-base` (default) | Body text |
| 18px | `text-lg` | Large body |
| 20px | `text-xl` | Headings |
| 24px | `text-2xl` | Large headings |

**Font weights** (use sparingly):
- `font-normal` (400) - Default
- `font-medium` (500) - Emphasis (already default for headings/buttons in your CSS)

---

## 🎯 Common Patterns

### Pattern 1: White Card on Grey Background

```tsx
// Before
<div className="bg-[#F4F6F7]">
  <div className="bg-white border border-[#465E5A]/15 p-4">
    <h3 className="text-[#465E5A]">Title</h3>
    <p className="text-[#465E5A]/70">Description</p>
  </div>
</div>

// After
<div className="bg-background">
  <div className="bg-card border border-border p-4">
    <h3 className="text-foreground">Title</h3>
    <p className="text-foreground/70">Description</p>
  </div>
</div>
```

### Pattern 2: Input Field

```tsx
// Before
<input className="bg-[#EEEBE7] border border-[#465E5A]/15 focus:ring-[#6264A1]" />

// After
<input className="bg-input-background border border-border focus:ring-ring" />
```

### Pattern 3: Primary Button

```tsx
// Before
<button className="bg-[#6264A1] text-white hover:bg-[#6264A1]/90">

// After
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
```

### Pattern 4: Navigation Item (Active/Inactive)

```tsx
// Before
{isActive ? (
  <span className="text-[#6264A1]">Discover</span>
) : (
  <span className="text-[#465E5A]/60">Discover</span>
)}

// After
{isActive ? (
  <span className="text-primary">Discover</span>
) : (
  <span className="text-muted-foreground">Discover</span>
)}
```

### Pattern 5: Badge/Pill

```tsx
// Before
<span className="px-2 py-1 bg-[#DDEFDC] text-[#465E5A] border border-[#465E5A]/15">

// After
<span className="px-2 py-1 bg-accent text-accent-foreground border border-border">
```

---

## 📋 Component Checklist

When refactoring a component:

```
[ ] Replace bg-white → bg-card
[ ] Replace bg-[#F4F6F7] → bg-background
[ ] Replace bg-[#EEEBE7] → bg-input-background
[ ] Replace bg-[#6264A1] → bg-primary
[ ] Replace text-[#465E5A] → text-foreground
[ ] Replace text-[#465E5A]/70 → text-foreground/70
[ ] Replace border-[#465E5A]/15 → border-border
[ ] Replace ring-[#6264A1] → ring-ring
[ ] Test component looks identical
```

---

## 💡 Pro Tips

### Tip 1: Opacity is Preserved
You can still use opacity with tokens:
```tsx
text-foreground/70    // 70% opacity
bg-primary/90         // 90% opacity
border-border/50      // 50% opacity
```

### Tip 2: Use CSS Variables for Custom Values
If you need the raw Spoon Guru colours:
```tsx
bg-[var(--ground-teal)]
bg-[var(--ground-purple)]
bg-[var(--electric-blue)]
```

### Tip 3: Hover States
Tokens work with hover, focus, active states:
```tsx
hover:bg-primary/90
focus:ring-ring
active:bg-primary/80
```

### Tip 4: Search and Replace
In VS Code / your editor:
1. Cmd/Ctrl + F to search
2. Search: `bg-\[#F4F6F7\]`
3. Replace: `bg-background`
4. Replace All in current file

---

## 🚀 Migration Order

Suggested order to update components (highest impact first):

1. ✅ **Header** - Already done!
2. **BottomNav** - Used on every page
3. **Button components** - Used everywhere
4. **Card components** - Recipe cards, profile cards
5. **Form inputs** - Health profile, goals
6. **Badges** - GLP suitability badges
7. **Modals/Dialogs** - ChatBot, ProfileManagement
8. **Specialty components** - MealPlanner, Progress charts

---

## 📊 Visual Reference

### Spoon Guru Palette

```
Ground Colours (Primary):
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  Mint    │ │   Teal   │ │  Purple  │ │   Blue   │
│ #DDEFDC  │ │ #465E5A  │ │ #6264A1  │ │ #C5DFF2  │
└──────────┘ └──────────┘ └──────────┘ └──────────┘

Electric Colours (Secondary):
┌──────────┐ ┌──────────┐ ┌──────────┐
│   Blue   │ │  Green   │ │  Purple  │
│ #B2D4EE  │ │ #E5F2E4  │ │ #9697C0  │
└──────────┘ └──────────┘ └──────────┘

Background Colours:
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Beige   │ │   Warm   │ │   Cool   │
│ #E3DBD1  │ │ #EEEBE7  │ │ #F4F6F7  │
└──────────┘ └──────────┘ └──────────┘
```

---

## 🔗 Related Files

- **Full Explanation**: `/guidelines/Design-Tokens-Explained.md`
- **Usage Guide**: `/guidelines/Using-Tokens-In-This-App.md`
- **Examples**: `/design-system/before-after-examples.tsx`
- **Token Definitions**: `/design-system/tokens.ts`
- **CSS Variables**: `/styles/globals.css`
- **Cross-Platform Guide**: `/guidelines/Cross-Platform-Strategy.md`

---

## 📝 Example Component Refactor

**Before:**
```tsx
export function RecipeCard() {
  return (
    <div className="bg-white border border-[#465E5A]/15 p-4">
      <h3 className="text-[#465E5A] mb-2">Recipe Title</h3>
      <p className="text-[#465E5A]/70 text-sm">Description</p>
      <button className="mt-3 px-4 py-2 bg-[#6264A1] text-white">
        Add to Meal Plan
      </button>
    </div>
  );
}
```

**After:**
```tsx
export function RecipeCard() {
  return (
    <div className="bg-card border border-border p-4">
      <h3 className="text-foreground mb-2">Recipe Title</h3>
      <p className="text-foreground/70 text-sm">Description</p>
      <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground">
        Add to Meal Plan
      </button>
    </div>
  );
}
```

**Time:** 2 minutes  
**Lines changed:** 4  
**Visual difference:** None (looks identical)  
**Benefit:** Now uses design system! 🎉

---

## ❓ Quick FAQ

**Q: Do I need to update everything at once?**  
A: No! Update as you work on components.

**Q: Will it look different?**  
A: No! Tokens use the exact same colours you already have.

**Q: What if I need a colour not in the tokens?**  
A: Add it to `/design-system/tokens.ts` or use inline hex for truly one-off cases.

**Q: Can I still use Tailwind classes?**  
A: Yes! Tokens work perfectly with Tailwind.

**Q: Is this worth the effort?**  
A: YES! 2 hours of refactoring saves weeks when you add dark mode or build native apps.

---

**Print this page and keep it handy while refactoring!** 📄
