# Design Tokens Visual Guide

A visual reference for understanding and using design tokens in your GLP-1 app.

---

## 🎨 Colour Palette

### Spoon Guru Ground Colours (Primary)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  MINT                TEAL                PURPLE             BLUE│
│  #DDEFDC             #465E5A             #6264A1          #C5DFF2│
│  ░░░░░░░░            ████████            ████████         ░░░░░░░│
│  Light Green         Dark Teal           Purple           Light Blue│
│  Accent/Success      Primary Text        Primary Action   Accent│
│                      Borders                                    │
└─────────────────────────────────────────────────────────────────┘
```

### Electric Colours (Secondary)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ELECTRIC BLUE      ELECTRIC GREEN      ELECTRIC PURPLE         │
│  #B2D4EE            #E5F2E4             #9697C0                 │
│  ░░░░░░░░           ░░░░░░░░            ████████                │
│  Soft Blue          Pale Green          Muted Purple            │
│  Secondary Action   Subtle Highlight    Secondary Element       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Background Colours

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  BEIGE              WARM                COOL                    │
│  #E3DBD1            #EEEBE7             #F4F6F7                 │
│  ░░░░░░░░           ░░░░░░░░            ░░░░░░░░                │
│  Warm Beige         Warm Grey           Cool Grey               │
│  Alt Background     Input Fields        Page Background         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏷️ Token Mapping

### The Three Ways to Use Each Colour

| Colour | Hex Code | CSS Variable | Semantic Token | Use For |
|--------|----------|--------------|----------------|---------|
| **Ground Teal** | `#465E5A` | `var(--ground-teal)` | `text-foreground` | Primary text, icons |
| **Ground Purple** | `#6264A1` | `var(--ground-purple)` | `bg-primary` | Primary buttons, active states |
| **Cool Grey** | `#F4F6F7` | `var(--bg-cool)` | `bg-background` | Page backgrounds |
| **Warm Grey** | `#EEEBE7` | `var(--bg-warm)` | `bg-input-background` | Input fields |
| **White** | `#ffffff` | - | `bg-card` | Cards, headers, nav bars |
| **Mint** | `#DDEFDC` | `var(--ground-mint)` | `bg-accent` | Success, highlights |
| **Border** | `rgba(70,94,90,0.15)` | `var(--border)` | `border-border` | All borders |

---

## 📐 Spacing Scale

```
┌────┐  xs (4px)   - Tiny gap, minimal spacing
├────┤  
├────┤  
└────┘

┌────────┐  sm (8px)   - Small spacing, tight layouts
├────────┤  
├────────┤  
└────────┘

┌────────────────┐  md (16px)  - Standard spacing
├────────────────┤  DEFAULT for most layouts
├────────────────┤  
└────────────────┘

┌────────────────────────┐  lg (24px)  - Generous spacing
├────────────────────────┤  Between sections
├────────────────────────┤  
└────────────────────────┘

┌────────────────────────────────┐  xl (32px)  - Large spacing
├────────────────────────────────┤  Major sections
├────────────────────────────────┤  
└────────────────────────────────┘

┌────────────────────────────────────────────────┐  2xl (48px)
├────────────────────────────────────────────────┤  Very large gaps
├────────────────────────────────────────────────┤  Page sections
└────────────────────────────────────────────────┘
```

**In Tailwind:**
- `gap-1` / `p-1` / `m-1` = 4px (xs)
- `gap-2` / `p-2` / `m-2` = 8px (sm)
- `gap-4` / `p-4` / `m-4` = 16px (md) ← Most common
- `gap-6` / `p-6` / `m-6` = 24px (lg)
- `gap-8` / `p-8` / `m-8` = 32px (xl)

---

## 🔘 Border Radius (Sharp Rectangles)

```
┌─────────────┐
│ sm: 2px     │  Very sharp (indicators, pills)
└─────────────┘

┌──────────────┐
│ md: 4px      │  Standard (buttons, inputs, cards)
└──────────────┘

┌───────────────┐
│ lg: 4px       │  Same as md (Spoon Guru style)
└───────────────┘

  ●  full: 50%     Circles (badges, indicators)
```

**Spoon Guru Design:** Use minimal rounding (2-4px) for sharp, modern rectangles.

---

## 🎯 Component Patterns

### Pattern 1: Page Layout

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                           bg-card                │
│ border-b border-border                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ CONTENT                          bg-background          │
│ (Cool grey #F4F6F7)                                     │
│                                                         │
│  ┌───────────────────────────────────────────┐         │
│  │ CARD                     bg-card           │         │
│  │ border border-border                       │         │
│  │                                            │         │
│  │ text-foreground                            │         │
│  └───────────────────────────────────────────┘         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ BOTTOM NAV                       bg-card                │
│ border-t border-border                                  │
└─────────────────────────────────────────────────────────┘
```

### Pattern 2: Button States

```
┌──────────────────────┐
│ PRIMARY BUTTON       │  bg-primary text-primary-foreground
│ #6264A1 / White      │  
└──────────────────────┘

┌──────────────────────┐
│ PRIMARY HOVER        │  bg-primary/90 (slightly lighter)
│ 90% opacity          │  
└──────────────────────┘

┌──────────────────────┐
│ SECONDARY BUTTON     │  bg-secondary text-secondary-foreground
│ #B2D4EE / #465E5A    │  
└──────────────────────┘

┌──────────────────────┐
│ OUTLINE BUTTON       │  bg-transparent border-border
│ Border only          │  text-foreground
└──────────────────────┘
```

### Pattern 3: Input Field

```
┌─────────────────────────────────────────┐
│  🔍  Search recipes...                  │  bg-input-background
│                                         │  border-border
│  #EEEBE7 background                     │  focus:ring-ring
│  #465E5A text                           │  
└─────────────────────────────────────────┘
       ^
       └─ Icon: text-foreground/50
```

### Pattern 4: Navigation Item

```
ACTIVE STATE:
┌─────┐
│  🧭 │  text-primary (#6264A1)
└─────┘
Discover

INACTIVE STATE:
┌─────┐
│  📅 │  text-muted-foreground (#465E5A/60)
└─────┘
Meal Plan
```

### Pattern 5: GLP Suitability Badge

```
HIGH:
┌─────────────────┐
│ ● High          │  bg: #DDEFDC (Mint)
│                 │  text: #465E5A (Teal)
└─────────────────┘  indicator: #465E5A

MEDIUM:
┌─────────────────┐
│ ● Medium        │  bg: #C5DFF2 (Blue)
│                 │  text: #465E5A (Teal)
└─────────────────┘  indicator: #6264A1 (Purple)

LOW:
┌─────────────────┐
│ ◌ Low           │  bg: #EEEBE7 (Warm)
│                 │  text: #465E5A (Teal)
└─────────────────┘  indicator: #465E5A/50 (Faded)
```

---

## 🔄 Before & After Comparison

### Example: Recipe Card

**BEFORE (Hardcoded):**
```tsx
<div className="bg-white border border-[#465E5A]/15 p-4">
  <h3 className="text-[#465E5A] mb-2">Chicken Bowl</h3>
  <p className="text-[#465E5A]/70 text-sm">High protein meal</p>
  <span className="px-2 py-1 bg-[#DDEFDC] text-[#465E5A]">
    High Suitability
  </span>
  <button className="bg-[#6264A1] text-white px-4 py-2">
    Add to Plan
  </button>
</div>
```

**AFTER (Using Tokens):**
```tsx
<div className="bg-card border border-border p-4">
  <h3 className="text-foreground mb-2">Chicken Bowl</h3>
  <p className="text-foreground/70 text-sm">High protein meal</p>
  <span className="px-2 py-1 bg-accent text-accent-foreground">
    High Suitability
  </span>
  <button className="bg-primary text-primary-foreground px-4 py-2">
    Add to Plan
  </button>
</div>
```

**Visual Result:** IDENTICAL! ✅

**Code Benefits:**
- ✅ More readable
- ✅ Uses design system
- ✅ Easy to update globally
- ✅ Ready for theming

---

## 📊 Token Usage Statistics

In your current app:

```
Most Used Colours:
┌──────────────────────────────────────┐
│ #465E5A (Teal)        ████████████████│ 45%  → text-foreground
│ #6264A1 (Purple)      ████████        │ 20%  → bg-primary
│ #EEEBE7 (Warm)        ██████          │ 15%  → bg-input-background
│ #F4F6F7 (Cool)        ████            │ 10%  → bg-background
│ rgba(70,94,90,0.15)   ████            │ 10%  → border-border
└──────────────────────────────────────┘

Replace these with tokens = 100% design system coverage! 🎯
```

---

## 🎨 Colour Psychology (GLP-1 Context)

### Why These Colours Work for GLP-1:

**Teal (#465E5A):**
- Calming, professional
- Medical/health context
- Easy on eyes for daily use

**Purple (#6264A1):**
- Trust, quality
- Distinctive without being aggressive
- Good for call-to-action

**Mint (#DDEFDC):**
- Healthy, fresh
- Perfect for "suitable" indicators
- Positive association

**Warm Grey (#EEEBE7):**
- Neutral, comfortable
- Doesn't compete with content
- Easy on eyes for form fields

---

## 🌓 Future: Dark Mode Preview

With tokens, adding dark mode is easy. Example:

```css
/* Light mode (current) */
:root {
  --background: #F4F6F7;
  --foreground: #465E5A;
  --card: #ffffff;
}

/* Dark mode (future - just add this!) */
.dark {
  --background: #465E5A;
  --foreground: #EEEBE7;
  --card: #3A4A47;
}
```

All components automatically switch! No code changes needed! 🌙

---

## 📱 Multi-Platform Visual

The same design, different platforms:

```
┌─────────────────────────────────────────────────────────────┐
│ WEB (Current)                                               │
│ ┌─────────────────────┐                                     │
│ │ Browser Window      │                                     │
│ │ ┌─────────────────┐ │                                     │
│ │ │ Header          │ │ bg-card                             │
│ │ ├─────────────────┤ │                                     │
│ │ │ Content         │ │ bg-background                       │
│ │ │                 │ │                                     │
│ │ ├─────────────────┤ │                                     │
│ │ │ Bottom Nav      │ │ bg-card                             │
│ │ └─────────────────┘ │                                     │
│ └─────────────────────┘                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ iOS (Future)                                                │
│  ┌───────────┐                                              │
│  │ ┌───────┐ │                                              │
│  │ │Header │ │ Same: bg-card, border-border                 │
│  │ ├───────┤ │                                              │
│  │ │Content│ │ Same: bg-background, text-foreground         │
│  │ │       │ │                                              │
│  │ ├───────┤ │                                              │
│  │ │Tab Bar│ │ Same: bg-card, active = text-primary         │
│  │ └───────┘ │                                              │
│  │    ┌───┐  │ <- Home indicator                            │
│  └───────────┘                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Android (Future)                                            │
│  ┌───────────┐                                              │
│  │ ┌───────┐ │                                              │
│  │ │AppBar │ │ Same: bg-primary or bg-card                  │
│  │ ├───────┤ │                                              │
│  │ │Content│ │ Same: bg-background, text-foreground         │
│  │ │       │ │                                              │
│  │ ├───────┤ │                                              │
│  │ │NavBar │ │ Same: bg-card, ripple effects                │
│  │ └───────┘ │                                              │
│  │  ◁ ○ ▷   │ <- System navigation                         │
│  └───────────┘                                              │
└─────────────────────────────────────────────────────────────┘

Same tokens, same colours, same spacing = Consistent brand! ✨
```

---

## 🎯 Quick Token Selector

**I need to style...**

| Element | Use This Token |
|---------|---------------|
| Page background | `bg-background` |
| White card/panel | `bg-card` |
| Primary button | `bg-primary text-primary-foreground` |
| Input field background | `bg-input-background` |
| Main text | `text-foreground` |
| Subtle text | `text-foreground/70` |
| Very subtle text | `text-foreground/50` |
| Border | `border-border` |
| Focus ring | `focus:ring-ring` |
| Success/positive | `bg-accent text-accent-foreground` |
| Active nav item | `text-primary` |
| Inactive nav item | `text-muted-foreground` |

---

## ✨ Design System at a Glance

```
YOUR GLP-1 APP DESIGN SYSTEM
┌─────────────────────────────────────────────────────┐
│                                                     │
│  COLOURS                                            │
│  ├─ 4 Ground colours (primary palette)             │
│  ├─ 3 Electric colours (secondary palette)         │
│  ├─ 3 Background colours                           │
│  └─ Semantic tokens (primary, foreground, etc.)    │
│                                                     │
│  SPACING                                            │
│  ├─ 6 sizes: xs, sm, md, lg, xl, 2xl              │
│  └─ Based on 4px grid (4, 8, 16, 24, 32, 48)      │
│                                                     │
│  TYPOGRAPHY                                         │
│  ├─ Font: Maison Neue / Inter fallback            │
│  ├─ Sizes: 12px - 36px                            │
│  └─ Weights: 400 (regular), 500 (medium)          │
│                                                     │
│  BORDERS                                            │
│  ├─ Radius: 2-4px (sharp rectangles)              │
│  └─ Colour: rgba(70,94,90,0.15) subtle            │
│                                                     │
│  SPECIAL                                            │
│  └─ GLP-1 suitability badges (3 levels)           │
│                                                     │
└─────────────────────────────────────────────────────┘

All defined in: /design-system/tokens.ts
All working in: /styles/globals.css
```

---

**Print this page for a visual reference while coding!** 🖨️
