# Professional UI Components & Animations

This document describes the professional UI components, background effects, and animations added to the Project Specular website.

## Architecture

The website now follows a modular component-based architecture with separation of concerns:

```
app/components/
├── background/          # Background effects and animations
│   ├── AnimatedBackground.tsx
│   ├── CursorGlow.tsx
│   ├── GradientOrbs.tsx
│   └── GrainOverlay.tsx
└── ui/                  # Reusable UI components
    ├── Button.tsx
    ├── FloatingElement.tsx
    ├── Icons.tsx
    ├── Navigation.tsx
    ├── ProductCard.tsx
    ├── Reveal.tsx
    └── Section.tsx
```

## Background Components

### AnimatedBackground
**Purpose:** Canvas-based particle system creating subtle floating emerald particles

**Features:**
- 50 animated particles with random movement
- Emerald green color matching brand
- Responsive to window resizing
- Optimized with requestAnimationFrame
- Low opacity for subtle effect

**Props:** None (self-contained)

### GradientOrbs
**Purpose:** Large animated gradient orbs creating depth and atmosphere

**Features:**
- Three large gradient spheres positioned strategically
- Custom slow pulse and rotation animations
- Blur effect for soft appearance
- Fixed positioning behind content

**Props:** None (self-contained)

### CursorGlow
**Purpose:** Interactive cursor-following glow effect

**Features:**
- Follows mouse movement in real-time
- Smooth transitions and fade in/out
- Emerald glow that enhances interactivity
- Automatically hides when mouse leaves viewport

**Props:** None (self-contained)

### GrainOverlay
**Purpose:** Subtle noise texture overlay for atmospheric depth

**Features:**
- SVG-based noise filter
- Ultra-low opacity for subtle effect
- Mix-blend-mode for better integration
- Fixed positioning over entire page

**Props:** None (self-contained)

## UI Components

### Navigation
**Purpose:** Professional navigation bar that appears on scroll

**Features:**
- Slides in after 100px scroll
- Glass-morphism effect with backdrop blur
- Smooth transitions
- Hover effects on links
- Responsive design

**Props:** None (self-contained)

### Reveal
**Purpose:** Scroll-triggered reveal animations using Intersection Observer

**Features:**
- Automatically triggers when element enters viewport
- Customizable delay for staggered animations
- Smooth opacity and transform transitions
- Performance-optimized with `will-change`

**Props:**
- `children`: ReactNode - Content to reveal
- `className?`: string - Additional CSS classes
- `delayMs?`: number - Delay before animation starts (default: 0)

**Usage:**
```tsx
<Reveal delayMs={300}>
  <p>This text will fade in when scrolled into view</p>
</Reveal>
```

### FloatingElement
**Purpose:** Subtle floating animation for elements

**Features:**
- Vertical floating motion
- Customizable delay for varied timing
- Infinite loop animation

**Props:**
- `children`: ReactNode - Content to animate
- `delay?`: number - Animation delay in seconds (default: 0)
- `className?`: string - Additional CSS classes

**Usage:**
```tsx
<FloatingElement delay={1}>
  <div>Floating content</div>
</FloatingElement>
```

### Section
**Purpose:** Consistent section wrapper with standard spacing

**Features:**
- Full-height sections
- Responsive padding
- Centered content
- Variant system for different spacing needs

**Props:**
- `id?`: string - HTML ID for anchor links
- `children`: ReactNode - Section content
- `className?`: string - Additional CSS classes
- `variant?`: 'default' | 'tight' - Spacing variant (default: 'default')

**Usage:**
```tsx
<Section id="products" variant="tight">
  <div>Section content</div>
</Section>
```

### Button
**Purpose:** Professional button component with multiple variants

**Features:**
- Three variants: primary, secondary, ghost
- Gradient backgrounds
- Hover effects and shadow animations
- Focus states for accessibility
- Disabled state support

**Props:**
- Extends `ButtonHTMLAttributes<HTMLButtonElement>`
- `variant?`: 'primary' | 'secondary' | 'ghost' - Button style (default: 'primary')

**Usage:**
```tsx
<Button variant="primary">Join Waitlist</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="ghost">Skip</Button>
```

### ProductCard
**Purpose:** Professional product pricing card with hover effects

**Features:**
- Gradient backgrounds
- Scale-up hover animation
- Recommended badge option
- Feature list with checkmarks
- Call-to-action button
- Glassmorphism effect

**Props:**
- `title`: string - Product name
- `price`: string - Product price
- `description`: string - Short description
- `features`: string[] - List of features
- `isRecommended?`: boolean - Show recommended badge (default: false)

**Usage:**
```tsx
<ProductCard
  title="Specular Pro"
  price="₹14,999"
  description="For deeper intelligence and independence."
  isRecommended
  features={[
    'All Basic features',
    'Independent speaking ability',
    'On-device intelligence layer',
  ]}
/>
```

### Icons
**Purpose:** Collection of professional SVG icons

**Available Icons:**
- `IconPin` - Location/placement icon
- `IconClock` - Time/history icon
- `IconUsers` - People/interaction icon
- `IconEye` - Attention/observation icon
- `IconLock` - Security/privacy icon
- `IconTimer` - Duration/retention icon
- `IconSpeaker` - Voice/audio icon
- `IconShield` - Protection/privacy icon

**Props:**
- Extends `SVGProps<SVGSVGElement>`

**Usage:**
```tsx
<IconPin className="w-8 h-8 text-emerald-500" />
<IconLock className="w-6 h-6 text-white" />
```

## Custom Animations

Custom CSS animations defined in `globals.css`:

### pulse-slow
**Duration:** 4 seconds  
**Easing:** ease-in-out  
**Effect:** Subtle scale and opacity pulsing

### pulse-slower
**Duration:** 6 seconds  
**Easing:** ease-in-out  
**Effect:** Even more subtle pulsing for background elements

### spin-slow
**Duration:** 20 seconds  
**Easing:** linear  
**Effect:** Full 360° rotation for gradient orbs

### float
**Duration:** 6 seconds  
**Easing:** ease-in-out  
**Effect:** Vertical floating motion (-20px)

### glow
**Duration:** 3 seconds  
**Easing:** ease-in-out  
**Effect:** Pulsing box-shadow with emerald color

## Design Tokens

### Colors
- **Primary**: Emerald (#10b981)
- **Background**: Pure black (#000000)
- **Foreground**: Light zinc (#e4e4e7)
- **Accent variations**: emerald-400, emerald-500, emerald-600

### Effects
- **Blur**: blur-3xl for soft backgrounds
- **Backdrop**: backdrop-blur-xl for glassmorphism
- **Opacity**: Layered opacity for depth
- **Transitions**: duration-300, duration-500, duration-1000

### Spacing
- **Sections**: py-28 to py-36 (responsive)
- **Gaps**: 6, 8, 12, 16 for consistent spacing
- **Padding**: 4, 6, 8 for component internals

## Performance Optimizations

1. **Intersection Observer**: Used in Reveal component for efficient scroll detection
2. **requestAnimationFrame**: Canvas animations use RAF for smooth 60fps
3. **will-change**: Transform hints for GPU acceleration
4. **Lazy animation**: Animations only trigger when in viewport
5. **Event cleanup**: All event listeners properly removed on unmount
6. **Memoization**: React hooks used efficiently to prevent unnecessary re-renders

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus states on all interactive components
- Keyboard navigation support
- Screen reader friendly icons with proper SVG structure
- Proper heading hierarchy

## Browser Compatibility

- Modern browsers with CSS Grid support
- ES6+ JavaScript features
- Intersection Observer API (with fallback)
- Canvas API for animations
- CSS backdrop-filter (with graceful degradation)

## Usage Example

Here's a complete example of combining components:

```tsx
import Section from './components/ui/Section';
import Reveal from './components/ui/Reveal';
import Button from './components/ui/Button';
import { IconLock } from './components/ui/Icons';

export default function Example() {
  return (
    <Section id="privacy">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-5xl font-bold text-white mb-8">
            Privacy First
          </h2>
        </Reveal>
        
        <Reveal delayMs={200}>
          <div className="flex items-center justify-center gap-4">
            <IconLock className="w-12 h-12 text-emerald-500" />
            <p className="text-2xl text-zinc-300">
              Your data stays yours
            </p>
          </div>
        </Reveal>
        
        <Reveal delayMs={400}>
          <Button variant="primary">Learn More</Button>
        </Reveal>
      </div>
    </Section>
  );
}
```

## Future Enhancements

Potential improvements for future iterations:

1. **Loading States**: Skeleton screens and loading animations
2. **Error Boundaries**: Graceful error handling components
3. **Toast Notifications**: User feedback system
4. **Modal System**: Overlay dialogs and modals
5. **Form Components**: Input, textarea, select with validation
6. **Carousel**: Image/content carousel component
7. **Tabs**: Tabbed interface component
8. **Accordion**: Collapsible content sections
9. **Progress Indicators**: Loading bars and progress circles
10. **Dark/Light Mode Toggle**: Theme switching (currently dark only)

## Contributing

When adding new components:

1. Place in appropriate subdirectory (`ui/` or `background/`)
2. Use TypeScript with proper type definitions
3. Follow existing naming conventions
4. Add 'use client' directive if using React hooks
5. Ensure responsive design
6. Add proper cleanup in useEffect hooks
7. Document props with JSDoc comments
8. Test across different screen sizes
9. Optimize for performance
10. Maintain accessibility standards
