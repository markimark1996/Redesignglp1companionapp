# Navigation Patterns: Web vs Native

This document shows how your current 5-tab navigation translates across platforms.

## Current Navigation Structure

Your app has 5 main sections:
1. **Discover** - Recipes and Products (tabbed view)
2. **Meal Plan** - Weekly meal planning
3. **Scan** - Barcode scanning (placeholder)
4. **Favourites** - Saved recipes
5. **Profile** - Health Profile, Goals, Education, Shopping List

---

## Web Implementation (Current)

### Bottom Navigation Bar
```tsx
// /components/BottomNav.tsx (Current implementation)
<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#465E5A]/15">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-around items-center h-16">
      {/* 5 navigation items */}
      <button onClick={() => onViewChange('discover')}>
        <Compass className="w-6 h-6" />
        <span className="text-xs">Discover</span>
      </button>
      {/* ... other nav items ... */}
    </div>
  </div>
</nav>
```

### Characteristics:
- Fixed at bottom of viewport
- Always visible
- Icon + label for each item
- Active state with colour change (#6264A1)
- Works on mobile, tablet, and desktop

---

## React Native iOS Implementation

### Using React Navigation Bottom Tabs

```tsx
// App.tsx (React Native)
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Compass, Calendar, Scan, Heart, User } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#6264A1',      // Ground Purple
          tabBarInactiveTintColor: '#465E5A',    // Ground Teal (60% opacity)
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: 'rgba(70, 94, 90, 0.15)',
            paddingBottom: 8,                     // iOS safe area
            height: 64,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '400',
          },
          headerStyle: {
            backgroundColor: '#ffffff',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(70, 94, 90, 0.15)',
          },
          headerTintColor: '#465E5A',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 18,
          },
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Compass color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Meal Plan"
          component={MealPlanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Calendar color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Scan color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Heart color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

### iOS-Specific Features:
- Safe area insets automatically handled
- Swipe-back gesture for nested screens
- Large title option for headers
- Native animations and transitions
- Haptic feedback on tab press

---

## React Native Android Implementation

### Same code, different appearance

Android automatically applies Material Design styling:

```tsx
// Same Tab.Navigator code as iOS, but with Material-specific tweaks:

<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#6264A1',
    tabBarInactiveTintColor: 'rgba(70, 94, 90, 0.6)',
    tabBarStyle: {
      backgroundColor: '#ffffff',
      borderTopWidth: 0,                    // Material doesn't use top border
      elevation: 8,                         // Material shadow
      height: 56,                           // Material standard height
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: 'Roboto',                 // System font
    },
    headerStyle: {
      backgroundColor: '#6264A1',           // Material often uses coloured header
      elevation: 4,
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
    },
  }}
>
  {/* Same Tab.Screen components */}
</Tab.Navigator>
```

### Android-Specific Features:
- Ripple effect on tab press
- Material elevation shadows
- System back button support
- Status bar colour coordination

---

## Navigation Comparison Table

| Feature | Web | iOS Native | Android Native |
|---------|-----|------------|----------------|
| Position | Fixed bottom | Bottom tabs | Bottom navigation bar |
| Height | 64px | 64px + safe area | 56px |
| Background | White | White | White (or coloured) |
| Active colour | #6264A1 | #6264A1 | #6264A1 |
| Inactive colour | #465E5A/60 | #465E5A/60 | #465E5A/60 |
| Animation | CSS transition | Native spring | Ripple effect |
| Icon size | 24px | 24pt | 24dp |
| Label size | 12px | 12pt | 12sp |
| Border | Top border | Top border | Elevation shadow |

---

## Profile Tab - Nested Navigation

Your Profile tab contains multiple sections. Here's how to handle it:

### Web (Current)
```tsx
// Single component with conditional rendering
function Profile() {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  return (
    <div>
      {activeSection === 'dashboard' && <ProfileDashboard />}
      {activeSection === 'health' && <HealthProfile />}
      {activeSection === 'shopping' && <ShoppingList />}
      {/* etc */}
    </div>
  );
}
```

### Native - Stack Navigator within Tab
```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#465E5A',
      }}
    >
      <ProfileStack.Screen 
        name="ProfileDashboard" 
        component={ProfileDashboardScreen}
        options={{ title: 'Profile' }}
      />
      <ProfileStack.Screen 
        name="HealthProfile" 
        component={HealthProfileScreen}
        options={{ title: 'My Health Profile' }}
      />
      <ProfileStack.Screen 
        name="ShoppingList" 
        component={ShoppingListScreen}
        options={{ title: 'My Shopping List' }}
      />
      <ProfileStack.Screen 
        name="Goals" 
        component={GoalsScreen}
        options={{ title: 'Goals' }}
      />
      <ProfileStack.Screen 
        name="Education" 
        component={EducationScreen}
        options={{ title: 'Education' }}
      />
    </ProfileStack.Navigator>
  );
}

// Then use ProfileStackScreen in your Tab.Screen
<Tab.Screen 
  name="Profile" 
  component={ProfileStackScreen}
  options={{
    headerShown: false, // Let stack navigator handle headers
  }}
/>
```

---

## Search Functionality

### Web (Current)
```tsx
// Header with search bar always visible
<header className="sticky top-0 bg-white border-b">
  <input 
    type="search" 
    placeholder="Search recipes, products..."
    className="w-full px-4 py-2"
  />
</header>
```

### iOS Native
```tsx
// Option 1: Search in navigation bar (recommended)
<Tab.Screen
  name="Discover"
  component={DiscoverScreen}
  options={{
    headerSearchBarOptions: {
      placeholder: 'Search recipes, products...',
      tintColor: '#6264A1',
      textColor: '#465E5A',
    },
  }}
/>

// Option 2: Inline search component
// <SearchBar> component at top of screen
```

### Android Native
```tsx
// Option 1: Search in toolbar (Material)
<Tab.Screen
  name="Discover"
  component={DiscoverScreen}
  options={({ navigation }) => ({
    headerRight: () => (
      <IconButton
        icon="magnify"
        onPress={() => navigation.navigate('Search')}
      />
    ),
  })}
/>

// Option 2: Expandable search (Material pattern)
// SearchBar expands from toolbar action
```

---

## Recommendations

### For Multi-Platform Development

1. **Use React Native with Expo** (easiest path)
   - Start with: `npx create-expo-app@latest`
   - Use `expo-router` for file-based routing
   - Share business logic with web app

2. **Shared Code Structure**
   ```
   /shared
     /hooks          - useRecipes, useHealthProfile
     /utils          - calculations, formatting
     /types          - TypeScript interfaces
     /api            - API calls
     
   /web
     /components     - React + Tailwind components
     
   /native
     /screens        - React Native screens
     /components     - React Native components
   ```

3. **Navigation Libraries**
   - Web: Keep current state-based approach OR use React Router
   - Native: Use `@react-navigation/native` (industry standard)

4. **Design Consistency**
   - Use shared design tokens (your `/design-system/tokens.ts`)
   - Test side-by-side regularly
   - Document any necessary platform differences

5. **Platform-Specific Enhancements**
   - iOS: Add pull-to-refresh on lists
   - Android: Add swipe-to-dismiss on cards
   - Both: Add haptic feedback on important actions
   - Both: Support system dark mode (future)

---

## Migration Priority

If building native apps:

1. **Phase 1: Core Navigation**
   - Set up tab navigator
   - Create empty screens for all 5 tabs
   - Apply design tokens

2. **Phase 2: Discover Tab**
   - Recipe grid with images
   - Product listings
   - Tabbed interface (Recipes/Products)
   - GLP suitability badges

3. **Phase 3: Profile & Health**
   - Health profile forms
   - Goal setting
   - Shopping list
   - Education content

4. **Phase 4: Meal Planning**
   - Calendar view
   - Drag-and-drop meal assignment
   - Nutrition summaries

5. **Phase 5: Advanced Features**
   - Barcode scanning
   - Push notifications
   - Offline support
   - Biometric authentication

---

## Testing Navigation

### Web Checklist
- [ ] Bottom nav visible on all screen sizes
- [ ] Active tab clearly indicated
- [ ] Smooth transitions between views
- [ ] Back button works in browser
- [ ] Deep linking to specific views

### iOS Checklist
- [ ] Safe area insets respected (notch, home indicator)
- [ ] Tab bar doesn't overlap content
- [ ] Swipe-back gesture works on nested screens
- [ ] Status bar colour appropriate
- [ ] Landscape orientation handled

### Android Checklist
- [ ] System back button works correctly
- [ ] Navigation bar colour coordinated
- [ ] Material animations feel natural
- [ ] Different screen sizes handled (fold, tablet)
- [ ] Gesture navigation supported
