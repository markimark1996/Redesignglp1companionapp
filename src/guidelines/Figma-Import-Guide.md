# How to Import Figma Designs

Complete guide to getting a Figma file link and importing designs into your app.

---

## 🎨 What is Figma Import?

Figma Make can import designs directly from Figma and convert them into React + Tailwind CSS code. This is incredibly powerful for:
- Converting designs to working code
- Starting with a professional design
- Maintaining design consistency
- Rapid prototyping

---

## 📋 Quick Steps

1. **Open your design in Figma** (figma.com)
2. **Select the frame/component** you want to import
3. **Copy the link** (Share button or URL)
4. **Paste in Figma Make** (this app)
5. **Let AI convert to code** automatically

---

## 🔗 How to Get a Figma File Link

### Method 1: From Figma Web/Desktop App

#### Step 1: Open Your Figma File
- Go to [figma.com](https://figma.com)
- Open the file you want to import
- Or create a new design

#### Step 2: Select What to Import

**Option A: Select a Specific Frame**
1. Click on the frame/component you want
2. Make sure it's selected (blue outline)
3. This will import just that frame

**Option B: Select Multiple Frames**
1. Hold Shift and click multiple frames
2. Or drag to select multiple elements

**Option C: Import Entire Page**
1. Don't select anything specific
2. The whole canvas/page will be considered

#### Step 3: Get the Link

**Method 3A: Share Button**
```
1. Click "Share" button (top right)
2. Click "Copy link"
3. Link looks like: https://www.figma.com/file/ABC123/Project-Name
```

**Method 3B: Browser URL**
```
1. Just copy the URL from your browser
2. Make sure you're viewing the right page/frame
3. URL format: https://www.figma.com/file/[FILE-ID]/[FILE-NAME]
```

**Method 3C: Right-Click on Frame**
```
1. Right-click on a frame in Figma
2. Select "Copy link to selection"
3. This gives a direct link to that frame
4. Format: https://www.figma.com/file/ABC123/Name?node-id=123:456
```

---

## 🎯 Best Method for Figma Make

**Recommended: Copy link to specific frame**

```
✅ BEST: Right-click frame → "Copy link to selection"
   Example: https://www.figma.com/file/ABC123/GLP1-App?node-id=1:234

✅ GOOD: Select frame and copy page URL
   Example: https://www.figma.com/file/ABC123/GLP1-App

❌ AVOID: Linking to prototype mode or dev mode
   Make sure you're in design mode
```

---

## 📱 Link Format Examples

### Valid Figma Links:

```
✅ File link:
https://www.figma.com/file/ABC123DEF456/My-Design-File

✅ Specific node/frame:
https://www.figma.com/file/ABC123/File-Name?node-id=1:2

✅ Design link (redirects to file):
https://www.figma.com/design/ABC123/File-Name

✅ Community file:
https://www.figma.com/community/file/1234567890/Template-Name
```

### Invalid Links (Won't Work):

```
❌ Prototype link:
https://www.figma.com/proto/ABC123/...

❌ FigJam board:
https://www.figma.com/board/ABC123/...

❌ Local/Draft file without sharing enabled

❌ Private file you don't have access to
```

---

## 🔐 Sharing & Permissions

### Make Sure Your File is Accessible

**Option 1: Anyone with Link (Recommended)**
```
1. Click "Share" in Figma
2. Change to "Anyone with the link"
3. Set permission to "can view"
4. Copy link
```

**Option 2: Public Community File**
```
1. Publish to Figma Community
2. Use the community link
3. Anyone can import
```

**Important:**
- Figma Make needs to access the file
- "Anyone with link" with view access is sufficient
- You don't need to add Figma Make as a specific user

---

## 🎨 Preparing Your Figma Design for Import

### Best Practices:

#### 1. Use Frames (Not Groups)
```
✅ Create frames for each component/screen
❌ Don't use loose groups
```

#### 2. Name Your Layers
```
✅ "Header"
✅ "Navigation Bar"
✅ "Recipe Card"
❌ "Rectangle 123"
❌ "Frame 456"
```

#### 3. Use Auto Layout
```
✅ Apply auto layout to containers
✅ Set proper padding and spacing
   → Converts better to Flexbox/Tailwind
```

#### 4. Organize Properly
```
✅ Group related elements
✅ Use consistent naming
✅ Flatten unnecessary nesting
```

#### 5. Export Settings
```
✅ Ensure images are included
✅ Check that SVGs are properly formatted
✅ Use web-friendly fonts
```

#### 6. Keep It Simple for First Import
```
✅ Start with one screen/component
✅ Test the import
✅ Then import more complex designs
```

---

## 💻 How to Import in Figma Make

### Step 1: Copy Figma Link
```
Example: https://www.figma.com/file/ABC123/GLP1-App?node-id=1:2
```

### Step 2: Paste in Figma Make

**Method A: Direct Import (if available)**
1. Look for "Import from Figma" button
2. Paste your Figma link
3. Click "Import"

**Method B: Tell the AI**
1. In the chat, say: "Import this Figma design: [paste link]"
2. Or: "Create an app based on this Figma design: [link]"
3. The AI will import and process

### Step 3: Wait for Processing
```
⏳ Figma Make will:
   1. Fetch the design from Figma
   2. Convert to React components
   3. Generate Tailwind CSS
   4. Create necessary files
   5. Show you the result
```

### Step 4: Review the Code
```
📁 Files created:
   /App.tsx (or specific component)
   /imports/ (SVGs and assets)
   Images imported via figma:asset/...
```

---

## 📊 What Gets Imported?

### ✅ What Converts Well:

- **Layout & Structure**: Frames → `<div>`
- **Text**: Text layers → `<p>`, `<h1>`, etc.
- **Images**: Raster images → imported assets
- **Vectors/Icons**: SVG exports → React components
- **Spacing**: Padding, gaps → Tailwind classes
- **Colours**: Fills, strokes → hex codes or Tailwind
- **Typography**: Font size, weight → Tailwind or inline styles
- **Basic shapes**: Rectangles, circles → divs with styling

### ⚠️ What Needs Adjustment:

- **Complex effects**: Shadows, blurs (may be simplified)
- **Advanced interactions**: Hover states, animations (added manually)
- **Responsive design**: Desktop → mobile (needs refinement)
- **Component variants**: Figma variants → React props (manual)
- **Dynamic content**: Static design → dynamic data (manual)

### ❌ What Doesn't Import:

- **Prototyping interactions**: Click flows, transitions
- **Comments and annotations**: Design feedback
- **Design system variables**: Auto layout tokens
- **Plugins**: Figma plugin data
- **Version history**: Only current state imports

---

## 🎯 Example: Importing a GLP-1 Recipe Card

### 1. In Figma:

```
Create a frame called "Recipe Card":
├── Image (recipe photo)
├── Title (text)
├── Description (text)
├── Nutrition Info (auto layout)
│   ├── Protein
│   ├── Calories
│   └── Fiber
└── GLP Badge (component)
```

### 2. Get Link:

```
Right-click "Recipe Card" frame
→ Copy link to selection
→ https://www.figma.com/file/ABC123/GLP1?node-id=10:34
```

### 3. Import to Figma Make:

```
You: "Import this Figma design: [paste link]"

AI: [Processes and creates React component]
```

### 4. Result:

```tsx
// /App.tsx or /components/RecipeCard.tsx
export default function RecipeCard() {
  return (
    <div className="...">
      <img src="figma:asset/..." alt="Recipe" />
      <h3>High Protein Chicken Bowl</h3>
      <p>Perfect for GLP-1 users...</p>
      <div className="flex gap-2">
        <span>25g protein</span>
        <span>350 cal</span>
      </div>
    </div>
  );
}
```

---

## 🔧 After Import: Next Steps

### 1. Review the Generated Code
```
✓ Check layout matches design
✓ Verify colours are correct
✓ Ensure spacing looks right
```

### 2. Add Interactivity
```
The import gives you static layout.
You need to add:
- Click handlers
- State management  
- Form validation
- API calls
```

### 3. Make it Responsive
```
Figma design might be desktop-only.
Add Tailwind responsive classes:
- sm:, md:, lg: breakpoints
- Mobile-first approach
```

### 4. Replace with Design Tokens
```
✓ Replace hex codes with tokens
✓ Use semantic Tailwind classes
✓ Match your design system
```

### 5. Add Real Data
```
✓ Replace placeholder text
✓ Connect to APIs
✓ Add dynamic content
```

---

## 💡 Pro Tips

### Tip 1: Import Components, Not Whole Pages
```
✅ Import one recipe card
✅ Make it perfect
✅ Then import the grid layout

vs.

❌ Import entire complex page at once
   → Harder to refine
```

### Tip 2: Use Figma Community Templates
```
Find pre-made designs:
1. Go to Figma Community
2. Search for "health app" or "nutrition"
3. Duplicate to your drafts
4. Customize for GLP-1
5. Import to Figma Make
```

### Tip 3: Create Design Components First
```
In Figma:
1. Create master components
2. Use instances throughout
3. Import master components
4. Reuse in code
```

### Tip 4: Test Small, Then Scale
```
1. Import small component (button)
2. Verify it works
3. Import larger component (card)
4. Then full screen
```

### Tip 5: Combine Figma + Design Tokens
```
1. Import Figma design
2. Extract colours to tokens
3. Replace hardcoded values
4. Now you have best of both!
```

---

## 🆘 Troubleshooting

### "Can't access Figma file"

**Solutions:**
- Make sure file is shared with "Anyone with link"
- Check you're using the file link, not prototype link
- Verify the link works when pasted in browser
- Try removing `/edit` or `/prototype` from URL

### "Import failed"

**Solutions:**
- Try selecting a specific frame instead of whole file
- Simplify the design (too complex might fail)
- Check for unsupported elements
- Try a smaller component first

### "Design looks wrong after import"

**Solutions:**
- Check original Figma uses frames, not groups
- Verify auto layout is applied correctly
- Some effects might not translate perfectly
- You may need to adjust manually

### "Images/Icons missing"

**Solutions:**
- Make sure images are embedded in Figma
- Check SVG exports are clean
- Verify you have access to all assets
- Re-import if assets were updated

---

## 📚 Example Workflows

### Workflow 1: Start from Scratch in Figma

```
1. Design your GLP-1 app in Figma
   - Header component
   - Navigation
   - Recipe cards
   - Profile screens

2. Export each major component:
   - Right-click → Copy link to selection
   
3. Import to Figma Make one by one:
   "Import this header: [link]"
   "Import this recipe card: [link]"
   
4. Assemble in App.tsx

5. Add interactivity and data
```

### Workflow 2: Use Community Template

```
1. Find Figma Community template
   - Search "nutrition app" or "health tracker"
   
2. Duplicate to your Figma

3. Customize for GLP-1:
   - Update colours to Spoon Guru palette
   - Add GLP-specific features
   - Adjust typography
   
4. Import to Figma Make

5. Refine and add functionality
```

### Workflow 3: Design Token First

```
1. Set up design tokens (✅ already done!)

2. Create simple wireframes in Figma
   - Focus on layout, not polish
   
3. Import structure

4. Apply design tokens in code
   - Replace colours with tokens
   - Use semantic classes
   
5. Polish in code
```

---

## 🎨 Recommended Figma Resources

### Free Figma Files to Try:

1. **Figma Community** - Search for:
   - "nutrition app"
   - "health tracker"
   - "meal planning"
   - "recipe app"

2. **UI Kits**:
   - Mobile UI kits
   - Health & wellness templates
   - Food & recipe templates

3. **Design Systems**:
   - Import design system components
   - Customize with Spoon Guru colours

### Example Community Links:

```
Search on Figma Community:
- "Nutrition Dashboard"
- "Health App UI Kit"  
- "Recipe Card Component"
- "Meal Planner Template"

Then duplicate and customize!
```

---

## ✅ Checklist: Before Importing

```
Before you import from Figma:

Design Preparation:
[ ] Frames are properly organized
[ ] Layers have meaningful names
[ ] Auto layout applied where needed
[ ] Colours match your design tokens (optional)
[ ] Images/assets are included
[ ] Text uses web-safe fonts or embedded fonts

Sharing:
[ ] File is shared with "Anyone with link"
[ ] Permission set to "can view" minimum
[ ] Link is copied correctly
[ ] Link works when pasted in browser

First Import:
[ ] Start with small component (test)
[ ] Verify it imports correctly
[ ] Check code quality
[ ] Then import larger components
```

---

## 🔗 Quick Links

### Getting a Figma Link:
1. Open design in Figma
2. Select frame/component
3. Right-click → "Copy link to selection"
4. Paste in Figma Make

### Link Format:
```
https://www.figma.com/file/[FILE-ID]/[NAME]?node-id=[NODE]
```

### Sharing:
```
Share → Anyone with link → Can view → Copy link
```

---

## 📝 Summary

### How to Get Figma File Link:

1. **Open Figma** (figma.com)
2. **Select frame** you want to import
3. **Right-click** → "Copy link to selection"
4. **Or** click "Share" → "Copy link"
5. **Paste in Figma Make** or tell the AI

### What Happens:

1. Figma Make fetches the design
2. Converts to React + Tailwind code
3. Creates component files
4. Imports images and SVGs
5. You get working code!

### Then:

1. Review generated code
2. Add interactivity
3. Make responsive
4. Apply design tokens
5. Add real data

---

**Ready to import? Just paste a Figma link in the chat!** 🎨
