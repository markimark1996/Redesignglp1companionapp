# Cross-Platform Design Strategy
## GLP-1 Companion App: Web & Native

This document outlines how to use the Spoon Guru design system across both web and native mobile platforms.

---

## 1. Design System Foundation

### Core Design Tokens (Platform Agnostic)

These values remain consistent across all platforms:

**Colours**
- Ground Teal: `#465E5A`
- Ground Purple: `#6264A1`
- Ground Mint: `#DDEFDC`
- Ground Blue: `#C5DFF2`
- Electric Blue: `#B2D4EE`
- Electric Green: `#E5F2E4`
- Electric Purple: `#9697C0`
- Background Beige: `#E3DBD1`
- Background Warm: `#EEEBE7`
- Background Cool: `#F4F6F7`

**Typography**
- Font Family: Maison Neue (web: Inter fallback)
- Base Size: 16px
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Line Height: 1.5

**Spacing Scale**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

**Border Radius**
- Sharp rectangles: 2-4px maximum (following Spoon Guru guidelines)

---

## 2. Responsive Web Strategy

### Current Web Implementation
Your existing React + Tailwind CSS application is already optimised for responsive web use:

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Adaptive Layout:**
```tsx
// Current pattern in App.tsx
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
```

**Navigation Pattern:**
- Mobile: Bottom navigation (5 items) + Header with search
- Desktop: Same bottom nav pattern (can be adapted to side nav if needed)

### Web-Specific Considerations

1. **Desktop Enhancements:**
   - Consider adding a sidebar navigation for larger screens
   - Expand header to show more context
   - Use hover states for interactive elements

2. **Tablet Optimisation:**
   - Maintain bottom navigation
   - Increase card sizes and spacing
   - Show more content in grid layouts

---

## 3. Native Mobile Strategy

### React Native Approach (Recommended)

**Option A: React Native with Shared Logic**
- Share business logic and state management
- Rebuild UI components using React Native primitives
- Use `react-navigation` for native navigation patterns

**Option B: Expo (Easiest Migration)**
- Use Expo for cross-platform development
- Leverage `expo-router` for file-based routing
- Use `react-native-reanimated` for animations

### Component Translation Guide

#### Web → Native Component Mapping

| Web (Tailwind/HTML) | React Native | Notes |
|---------------------|--------------|-------|
| `<div>` | `<View>` | Basic container |
| `<span>`, `<p>` | `<Text>` | All text must be in Text component |
| `<button>` | `<Pressable>` or `<TouchableOpacity>` | Use Pressable for modern API |
| `className` | `style` prop | Use StyleSheet.create() |
| `flexbox` (Tailwind) | `flexbox` (Native) | Similar but with defaults |
| `absolute positioning` | `absolute positioning` | Works similarly |
| Hover states | Active/Pressed states | Touch-based interaction |

#### Example Component Translation

**Web Version (Current):**
```tsx
<button className="bg-[#6264A1] text-white px-4 py-2 rounded">
  Add to List
</button>
```

**Native Version:**
```tsx
import { Pressable, Text, StyleSheet } from 'react-native';

<Pressable style={styles.button}>
  <Text style={styles.buttonText}>Add to List</Text>
</Pressable>

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6264A1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
```

### Navigation Pattern Differences

**Web (Current):**
- Bottom navigation with view switching
- Header always visible
- Sheet/Dialog overlays for modals

**Native iOS:**
- Tab bar at bottom (similar to current)
- Native navigation bar at top
- Modal presentations slide up
- Swipe-back gesture support

**Native Android:**
- Material Design bottom navigation
- Top app bar with actions
- Back button in navigation bar
- FAB for primary actions (optional)

---

## 4. Shared Component Architecture

### Recommended Folder Structure

```
/design-system
  /tokens
    colors.ts          # Shared colour tokens
    spacing.ts         # Shared spacing scale
    typography.ts      # Font sizes, weights, families
    
  /components
    /web               # Web-specific implementations
      Button.tsx
      Card.tsx
      BottomNav.tsx
      
    /native            # Native-specific implementations
      Button.tsx
      Card.tsx
      TabBar.tsx
      
    /shared            # Business logic, hooks
      useRecipes.ts
      useHealthProfile.ts
      types.ts
```

### Shared Design Tokens Example

```typescript
// /design-system/tokens/colors.ts
export const colors = {
  ground: {
    teal: '#465E5A',
    purple: '#6264A1',
    mint: '#DDEFDC',
    blue: '#C5DFF2',
  },
  electric: {
    blue: '#B2D4EE',
    green: '#E5F2E4',
    purple: '#9697C0',
  },
  background: {
    beige: '#E3DBD1',
    warm: '#EEEBE7',
    cool: '#F4F6F7',
  },
};

// /design-system/tokens/spacing.ts
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
};
```

---

## 5. Platform-Specific UI Patterns

### Bottom Navigation

**Web (Current Implementation):**
- 5 items: Discover, Meal Plan, Scan, Favourites, Profile
- Fixed at bottom
- Icons + labels
- Active state with colour change

**iOS Native Guidelines:**
- Use `UITabBarController` or React Navigation's Bottom Tabs
- System font for labels
- SF Symbols for icons (or custom SVGs)
- Safe area insets for iPhone notch/home indicator

**Android Native Guidelines:**
- Material 3 Navigation Bar
- Material Icons
- Ripple effect on press
- System navigation bar spacing

### Header

**Web (Current Implementation):**
- Logo (left)
- Search bar (center)
- User menu (right)

**Native Recommendations:**
- iOS: Use large title navigation bar with inline search
- Android: Use top app bar with search action
- Both: User profile accessible via navigation menu or profile tab

### Cards & Lists

**Consistent Across Platforms:**
- Sharp rectangular borders (2-4px radius)
- Same colour palette
- Same spacing scale
- Same typography hierarchy

**Platform Adaptations:**
- Web: Hover states, cursor pointer
- Native: Press states, haptic feedback
- Native: Pull-to-refresh support

---

## 6. Specific Feature Considerations

### GLP-1 Suitability Badges

**Current Web Design:**
```tsx
<div className="inline-flex items-center gap-1 px-2 py-1 bg-[#DDEFDC] text-[#465E5A] border border-[#465E5A]/15">
  <span className="w-2 h-2 rounded-full bg-[#465E5A]"></span>
  <span className="text-xs">High</span>
</div>
```

**Native Equivalent:**
```tsx
<View style={styles.badge}>
  <View style={styles.indicator} />
  <Text style={styles.badgeText}>High</Text>
</View>

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#DDEFDC',
    borderWidth: 1,
    borderColor: 'rgba(70, 94, 90, 0.15)',
    borderRadius: 2,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#465E5A',
  },
  badgeText: {
    fontSize: 12,
    color: '#465E5A',
  },
});
```

### Protein Tracking

**Web:** Progress bars with Recharts
**Native:** Use `react-native-svg` with similar chart components

### Shopping List

**Web:** Checkbox interactions with click/tap
**Native:** SwipeListView for swipe-to-delete actions (iOS/Android pattern)

---

## 7. Implementation Roadmap

### Phase 1: Token Extraction
1. Extract all design tokens from CSS variables to shared TS/JS files
2. Create platform-agnostic constants
3. Document all colour, spacing, typography values

### Phase 2: Component Audit
1. List all existing web components
2. Identify which need native equivalents
3. Prioritise core components (Button, Card, Input, Badge)

### Phase 3: Native Setup
1. Set up React Native or Expo project
2. Install necessary libraries (navigation, vector icons)
3. Configure fonts (Maison Neue or appropriate native fonts)

### Phase 4: Parallel Development
1. Build native components matching web design
2. Share business logic and API layers
3. Test on iOS and Android devices

### Phase 5: Platform Optimisation
1. Add platform-specific animations
2. Implement native gestures (swipe, long-press)
3. Optimise performance for mobile

---

## 8. Testing Strategy

### Web Testing
- Browser compatibility (Chrome, Safari, Firefox, Edge)
- Responsive breakpoints (mobile, tablet, desktop)
- Touch interactions on touch-screen devices

### Native Testing
- iOS simulator + physical devices (iPhone 12+)
- Android emulator + physical devices (various manufacturers)
- Tablet sizes (iPad, Android tablets)
- Different OS versions

### Design Consistency Testing
- Side-by-side visual comparisons
- Colour accuracy across platforms
- Typography rendering
- Spacing and alignment

---

## 9. British English Consistency

Ensure the following spellings across all platforms:

- Colour (not color)
- Personalised (not personalized)
- Fibre (not fiber)
- Favourite (not favorite)
- Centre (not center)
- Programme (not program - in health context)

**Implementation:**
- Use i18n libraries with en-GB locale
- Maintain string constants in shared files
- Code review checklist for British English

---

## 10. Accessibility

### Web (WCAG 2.1 AA)
- Colour contrast ratios (4.5:1 minimum)
- Keyboard navigation
- Screen reader support (ARIA labels)
- Focus indicators

### Native
- iOS VoiceOver support
- Android TalkBack support
- Dynamic text sizing
- High contrast mode support

---

## 11. Resources & Tools

### Design
- Figma for cross-platform design files
- Share components and styles in Figma library

### Development
- **Web:** React + Tailwind CSS (current)
- **Native:** React Native + React Navigation
- **Shared:** TypeScript for type safety

### Testing
- **Web:** Cypress, Playwright
- **Native:** Detox, Jest
- **Visual:** Percy, Chromatic

---

## Summary

Your current web application is well-structured for responsive web use. To extend to native:

1. **Extract design tokens** into platform-agnostic files
2. **Choose React Native** for code sharing with your existing React web app
3. **Rebuild UI components** using native primitives, maintaining the same design language
4. **Share business logic** (hooks, utilities, types) between platforms
5. **Adapt navigation patterns** to platform conventions while maintaining your brand
6. **Test thoroughly** on both platforms and various devices

The Spoon Guru design system with its specific colours, sharp rectangles, and clean aesthetic will translate well to native platforms. The key is maintaining the design tokens while adapting the implementation details to each platform's strengths.
