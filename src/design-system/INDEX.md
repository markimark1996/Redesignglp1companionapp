# Design Tokens - Complete Index

Everything you need to know about design tokens in your GLP-1 app.

---

## 🚀 Start Here

**New to design tokens?**
1. Read: [`/README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md) (5 min overview)
2. Read: [`/guidelines/Using-Tokens-In-This-App.md`](../guidelines/Using-Tokens-In-This-App.md) (practical guide)
3. Look at: `/components/Header.tsx` (real example)

**Want to refactor a component?**
1. Use: [`/design-system/quick-reference.md`](./quick-reference.md) (cheat sheet)
2. Reference: [`/design-system/VISUAL-GUIDE.md`](./VISUAL-GUIDE.md) (visual examples)

**Planning to build native apps?**
1. Read: [`/guidelines/Cross-Platform-Strategy.md`](../guidelines/Cross-Platform-Strategy.md)
2. Study: `/design-system/examples/` folder

---

## 📚 Documentation Files

### Essential Guides (Read These)

| File | Purpose | Time | Audience |
|------|---------|------|----------|
| [`README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md) | Quick start & FAQ | 5 min | Everyone |
| [`Using-Tokens-In-This-App.md`](../guidelines/Using-Tokens-In-This-App.md) | How to use tokens in your app | 10 min | Developers |
| [`quick-reference.md`](./quick-reference.md) | Cheat sheet for refactoring | 2 min | Developers |
| [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md) | Visual colour/spacing reference | 5 min | Designers/Devs |

### Deep Dives (Optional)

| File | Purpose | Time | Audience |
|------|---------|------|----------|
| [`Design-Tokens-Explained.md`](../guidelines/Design-Tokens-Explained.md) | What tokens are and why | 15 min | Everyone |
| [`Cross-Platform-Strategy.md`](../guidelines/Cross-Platform-Strategy.md) | Web + Native strategy | 20 min | Technical leads |
| [`navigation-comparison.md`](./examples/navigation-comparison.md) | Web vs Native navigation | 10 min | Developers |

---

## 💻 Code Files

### Token Definitions

| File | What's Inside | When to Use |
|------|---------------|-------------|
| [`tokens.ts`](./tokens.ts) | TypeScript token definitions | Import in components, use for React Native |
| `/styles/globals.css` | CSS custom properties | Auto-loaded, already working in Tailwind |

### Examples & Comparisons

| File | What's Inside | When to Use |
|------|---------------|-------------|
| [`before-after-examples.tsx`](./before-after-examples.tsx) | Side-by-side comparisons | Learn refactoring patterns |
| [`web-button-example.tsx`](./examples/web-button-example.tsx) | Web button with tokens | Copy for new components |
| [`native-button-example.tsx`](./examples/native-button-example.tsx) | React Native button | Copy for mobile apps |
| [`glp-badge-comparison.tsx`](./examples/glp-badge-comparison.tsx) | GLP badge web + native | Understand multi-platform |

---

## 🎯 By Task

### "I want to understand what design tokens are"

1. [`README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md) - Quick overview
2. [`Design-Tokens-Explained.md`](../guidelines/Design-Tokens-Explained.md) - Detailed explanation
3. [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md) - See the colours and spacing

### "I want to refactor my components to use tokens"

1. [`quick-reference.md`](./quick-reference.md) - Token cheat sheet
2. [`Using-Tokens-In-This-App.md`](../guidelines/Using-Tokens-In-This-App.md) - Step-by-step guide
3. [`before-after-examples.tsx`](./before-after-examples.tsx) - Real examples
4. `/components/Header.tsx` - Working example

### "I want to build native apps"

1. [`Cross-Platform-Strategy.md`](../guidelines/Cross-Platform-Strategy.md) - Full strategy
2. [`tokens.ts`](./tokens.ts) - Shared tokens for all platforms
3. [`native-button-example.tsx`](./examples/native-button-example.tsx) - React Native example
4. [`navigation-comparison.md`](./examples/navigation-comparison.md) - Navigation patterns

### "I want a quick reference while coding"

1. [`quick-reference.md`](./quick-reference.md) - **Print this!**
2. [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md) - Visual reference

### "I want to understand the Spoon Guru design system"

1. [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md) - Colour palette and usage
2. `/styles/globals.css` - See all CSS variables
3. [`tokens.ts`](./tokens.ts) - All values in TypeScript

---

## 📖 File Descriptions

### 1. README-DESIGN-TOKENS.md
**What:** Overview and FAQ  
**Read if:** You're new to design tokens  
**Contains:**
- What design tokens are
- How to extract them (already done!)
- How to use them in this app
- Real example from your Header
- FAQ

### 2. Using-Tokens-In-This-App.md
**What:** Practical guide for your current app  
**Read if:** You want to start using tokens today  
**Contains:**
- Step-by-step instructions
- Common token reference
- How to refactor components
- Tips and best practices

### 3. quick-reference.md
**What:** Cheat sheet for developers  
**Read if:** You're refactoring components  
**Contains:**
- Token replacement table
- Common patterns
- Component checklist
- Quick examples

### 4. VISUAL-GUIDE.md
**What:** Visual reference for colours and spacing  
**Read if:** You need to see the design system  
**Contains:**
- Colour palette with hex codes
- Spacing scale visualized
- Component patterns
- Before/after comparisons

### 5. Design-Tokens-Explained.md
**What:** Deep dive into design tokens  
**Read if:** You want to understand the concept fully  
**Contains:**
- What tokens are and why
- How they work
- Benefits for your app
- Extraction examples

### 6. Cross-Platform-Strategy.md
**What:** Complete guide for web + native  
**Read if:** You're planning to build native apps  
**Contains:**
- Token architecture
- Component translation guide
- Navigation patterns
- Implementation roadmap

### 7. tokens.ts
**What:** TypeScript token definitions  
**Use when:** Importing tokens in components  
**Contains:**
- All colour values
- Spacing scale
- Typography tokens
- GLP-1 specific tokens

### 8. before-after-examples.tsx
**What:** Side-by-side code comparisons  
**Use when:** Learning refactoring patterns  
**Contains:**
- Header, Button, Card, Nav examples
- Before (hardcoded) vs After (tokens)
- Benefits explained

### 9. web-button-example.tsx
**What:** Button component using tokens  
**Use when:** Creating new buttons  
**Contains:**
- Tailwind version
- Inline styles version
- Usage examples

### 10. native-button-example.tsx
**What:** React Native button with tokens  
**Use when:** Building mobile apps  
**Contains:**
- React Native StyleSheet
- Same design as web
- Platform-specific notes

### 11. glp-badge-comparison.tsx
**What:** GLP suitability badge across platforms  
**Use when:** Building badges or understanding multi-platform  
**Contains:**
- Web version
- Native version
- Design specifications

### 12. navigation-comparison.md
**What:** Navigation patterns comparison  
**Use when:** Planning navigation for web/mobile  
**Contains:**
- Current web implementation
- iOS recommendations
- Android recommendations
- Code examples

---

## 🎨 Design System Files

```
/design-system/
├── INDEX.md                          ← You are here!
├── tokens.ts                         ← Token definitions
├── quick-reference.md                ← Cheat sheet
├── VISUAL-GUIDE.md                   ← Visual reference
├── before-after-examples.tsx         ← Code comparisons
│
├── /examples/
│   ├── web-button-example.tsx        ← Web component
│   ├── native-button-example.tsx     ← Native component
│   ├── glp-badge-comparison.tsx      ← Cross-platform badge
│   └── navigation-comparison.md      ← Navigation patterns
│
/guidelines/
├── Using-Tokens-In-This-App.md       ← Practical guide
├── Design-Tokens-Explained.md        ← Conceptual guide
└── Cross-Platform-Strategy.md        ← Multi-platform guide

/README-DESIGN-TOKENS.md              ← Start here!
/styles/globals.css                   ← CSS variables (working!)
```

---

## ⏱️ Reading Time Estimates

### Quick Start (30 minutes)
1. README-DESIGN-TOKENS.md (5 min)
2. Using-Tokens-In-This-App.md (10 min)
3. quick-reference.md (2 min)
4. Look at Header.tsx example (3 min)
5. Try refactoring one component (10 min)

### Full Understanding (2 hours)
- All essential guides (30 min)
- VISUAL-GUIDE.md (10 min)
- Design-Tokens-Explained.md (15 min)
- Study all examples (30 min)
- Refactor 3-5 components (35 min)

### Multi-Platform Planning (4 hours)
- Everything above (2 hours)
- Cross-Platform-Strategy.md (30 min)
- Navigation comparison (15 min)
- Study native examples (30 min)
- Plan architecture (45 min)

---

## 🎯 Quick Actions

### I want to...

**...understand tokens in 5 minutes**
→ Read [`README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md)

**...refactor a component right now**
→ Use [`quick-reference.md`](./quick-reference.md)

**...see the colour palette**
→ Open [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md)

**...copy token values**
→ Open [`tokens.ts`](./tokens.ts)

**...see before/after examples**
→ Open [`before-after-examples.tsx`](./before-after-examples.tsx)

**...learn about multi-platform**
→ Read [`Cross-Platform-Strategy.md`](../guidelines/Cross-Platform-Strategy.md)

**...get all CSS variables**
→ Open `/styles/globals.css`

---

## ✅ Checklist: Understanding Design Tokens

- [ ] Read README-DESIGN-TOKENS.md
- [ ] Understand what tokens are (named variables for design)
- [ ] Know the three ways to use tokens (semantic classes, CSS vars, TS imports)
- [ ] Looked at updated Header.tsx example
- [ ] Have quick-reference.md bookmarked
- [ ] Tried refactoring one component
- [ ] Understand the benefits (consistency, maintainability, multi-platform)

---

## 🔗 External Resources

### Spoon Guru Design System
- Colours: Ground (Mint, Teal, Purple, Blue), Electric, Backgrounds
- Typography: Maison Neue (Inter fallback)
- Borders: Sharp rectangles (2-4px radius)

### GLP-1 Specific
- Suitability levels: High, Medium, Low (British English)
- Protein tracking
- Medication-friendly meal badges

---

## 📝 Notes

### What's Already Done ✅
- ✅ Design tokens extracted to `tokens.ts`
- ✅ CSS variables working in `globals.css`
- ✅ Header component updated with tokens
- ✅ Complete documentation created
- ✅ Examples for web and native
- ✅ Quick reference created
- ✅ Visual guide created

### Next Steps (Optional)
1. Read the guides
2. Refactor components gradually
3. Use tokens for new components
4. Plan native apps using same tokens

---

## 🆘 Help & Support

### Common Questions

**Q: Where do I start?**
A: Read [`README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md) first.

**Q: How do I use tokens in a component?**
A: Check [`Using-Tokens-In-This-App.md`](../guidelines/Using-Tokens-In-This-App.md).

**Q: What token should I use for [X]?**
A: Look at [`quick-reference.md`](./quick-reference.md).

**Q: What colours are available?**
A: See [`VISUAL-GUIDE.md`](./VISUAL-GUIDE.md).

**Q: How do I build native apps?**
A: Read [`Cross-Platform-Strategy.md`](../guidelines/Cross-Platform-Strategy.md).

---

## 🎉 Summary

You now have:
- ✅ Complete design token system
- ✅ TypeScript and CSS definitions
- ✅ Comprehensive documentation
- ✅ Practical examples
- ✅ Quick references
- ✅ Multi-platform strategy
- ✅ Working example (Header.tsx)

**Everything you need to use design tokens in your GLP-1 app!**

**Start here:** [`README-DESIGN-TOKENS.md`](../README-DESIGN-TOKENS.md)

---

*Last updated: December 2025*
