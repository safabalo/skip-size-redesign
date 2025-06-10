# Skip Selection Page - React Coding Challenge

A modern, responsive skip hire selection interface built with React, TypeScript, and Tailwind CSS, featuring an innovative mobile-first design with enhanced UX patterns.

## 🚀 Live Demo

[CodeSandbox](https://your-codesandbox-link.com)

## 📋 Challenge Requirements

✅ **Redesign the skip selection page** to look completely different from the original  
✅ **Maintain functionality** - All core features preserved  
✅ **Mobile-first responsive design** - Works perfectly on all devices  
✅ **Clean, maintainable React code** - Professional architecture  
✅ **API integration** - Consumes provided skip data endpoint  

## 🎯 Key Improvements & Design Decisions

### **UX/UI Enhancements**

#### **1. Mobile-First Bottom Sheet Design**
- **Problem Solved**: Original design required scrolling to see checkout after selection
- **Solution**: Implemented animated bottom sheet that slides up when skip is selected
- **Impact**: Immediate feedback, no scrolling needed, modern app-like experience

#### **2. Dark Mode Support**
- **Implementation**: Complete theme system with consistent styling
- **Benefits**: Better accessibility, user preference support, modern design standards
- **Toggle**: Convenient switch in header for instant theme changes

#### **3. Enhanced Visual Hierarchy**
- **Stepper Positioning**: Moved progress indicator from header to content area for better context
- **Card Design**: Modern shadowing, hover effects, and selection states
- **Typography**: Improved contrast ratios and responsive sizing

#### **4. Interactive Feedback**
- **Selection States**: Clear visual feedback with rings, badges, and color changes
- **Micro-animations**: Smooth transitions and hover effects
- **Loading States**: Skeleton placeholders during data fetching
- **Double-tap Deselection**: Tap selected skip to deselect

## 🏗️ Architecture & Technical Approach

### **Project Structure**
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   ├── Stepper.tsx      # Progress indicator component
│   ├── SkipCard.tsx     # Individual skip card component
│   ├── SkipGrid.tsx     # Grid container for skip cards
│   └── CheckoutBottomSheet.tsx # Mobile checkout overlay
├── pages/               # Page components
│   └── SkipSelectionPage.tsx
├── lib/                 # Utility functions
│   └── utils.ts         # shadcn/ui utilities
├── types/               # TypeScript definitions
│   └── index.ts         # Centralized type definitions
└── constants/           # Application constants
    └── index.ts         # Default steps and configuration
```

### **Code Quality & Best Practices**

#### **1. TypeScript Implementation**
- **Strict type checking** enabled across the project
- **Interface-driven development** for all components
- **Centralized type definitions** in `/types` directory
- **No `any` types** - Full type safety compliance

#### **2. SonarQube Compliance**
- **S3358**: Eliminated nested ternary operations using helper functions
- **S2301**: Replaced multiple conditionals with clean if/else logic
- **S3923**: Fixed duplicate conditional results
- **Clean Code**: All static analysis warnings resolved

```typescript
// Before (SonarQube warning):
className={`base ${
  step.active ? isDarkMode ? 'dark-active' : 'light-active'
  : step.completed ? isDarkMode ? 'dark-completed' : 'light-completed'
  : isDarkMode ? 'dark-default' : 'light-default'
}`}

// After (Clean helper function):
const getStepClassName = (step: Step): string => {
  if (step.active) {
    return isDarkMode ? 'dark-active' : 'light-active';
  }
  if (step.completed) {
    return isDarkMode ? 'dark-completed' : 'light-completed';
  }
  return isDarkMode ? 'dark-default' : 'light-default';
};
```

#### **3. Component Architecture**
- **Single Responsibility**: Each component has one clear purpose
- **Helper Functions**: Extract complex logic into readable functions
- **Consistent Patterns**: Similar styling approaches across components
- **Reusable Design**: Components can be easily extended and modified

### **Performance Optimizations**
- **Efficient Re-renders**: Proper dependency arrays and state management
- **Skeleton Loading**: Perceived performance improvements
- **Optimized Bundle**: Only necessary dependencies included
- **Responsive Images**: Proper image handling with fallbacks

## 🛠️ Technology Stack

### **Core Technologies**
- **React 19** - Latest React features and concurrent rendering
- **TypeScript** - Full type safety and developer experience
- **Vite** - Fast build tool with HMR and path aliases
- **Tailwind CSS** - Utility-first styling framework

### **UI Framework**
- **shadcn/ui** - Modern, accessible component library
- **Lucide React** - Beautiful, consistent icons
- **CSS Grid & Flexbox** - Responsive layout systems

### **Development Tools**
- **ESLint & Prettier** - Code formatting and linting
- **SonarQube** - Static code analysis compliance
- **Path aliases** - Clean import statements with `@/` prefix

## 📱 Responsive Design Strategy

### **Mobile-First Approach**
- **Base styles**: Designed for mobile (320px+)
- **Progressive enhancement**: Desktop features added via breakpoints
- **Touch-friendly**: Large tap targets and swipe gestures
- **Performance**: Optimized for mobile networks

### **Breakpoint Strategy**
```css
/* Mobile-first breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

### **Key Responsive Features**
- **Grid layout**: 1 column mobile → 2 tablet → 3 desktop
- **Typography scaling**: Responsive text sizes
- **Navigation**: Adaptive stepper visibility on mobile
- **Bottom sheet**: Mobile-optimized checkout flow

## 🔧 API Integration

### **Data Transformation**
```typescript
// Transform API data to application format
const transformedSkip: SkipOption = {
  id: apiSkip.id.toString(),
  name: `${apiSkip.size} Yard Skip`,
  size: `${apiSkip.size} Yards`,
  price: Math.round(apiSkip.price_before_vat * (1 + apiSkip.vat / 100)),
  hirePeriod: `${apiSkip.hire_period_days} day hire period`,
  description: `${apiSkip.allowed_on_road ? 'Road placement allowed' : 'Permit required'} • ${apiSkip.allows_heavy_waste ? 'Heavy waste allowed' : 'Standard waste only'}`
};
```

### **Error Handling**
- **Network errors**: Graceful fallbacks with retry functionality
- **Loading states**: Skeleton UI during data fetching  
- **Empty states**: User-friendly messages for no data scenarios

## 🎨 Design System

### **Color Palette**
```css
/* Light Mode */
Primary: #3b82f6 (Blue)
Success: #10b981 (Green)
Warning: #f59e0b (Orange)
Text: #1f2937 (Gray-800)

/* Dark Mode */
Primary: #60a5fa (Blue-400)
Success: #34d399 (Green-400)
Background: #111827 (Gray-900)
Text: #f9fafb (Gray-50)
```

### **Typography Scale**
```css
/* Responsive typography */
xs: 12px → 14px
sm: 14px → 16px
base: 16px → 18px
lg: 18px → 20px
xl: 20px → 24px
2xl: 24px → 30px
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd skip-selection-challenge

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build for Production**
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### **Environment Setup**
```bash
# Install shadcn/ui components (if needed)
npx shadcn-ui@latest add card button badge

# Configure path aliases in vite.config.ts
npm install @types/node # For path resolution
```

## 🧪 Code Quality Features

### **Linting & Formatting**
- **ESLint**: Strict TypeScript rules enabled
- **No explicit any**: Full type safety enforcement
- **Consistent formatting**: Prettier integration
- **Import organization**: Clean import statements

### **Static Analysis**
- **SonarQube compliant**: All quality gates passed
- **Complexity reduction**: Helper functions extract complex logic
- **Maintainability**: Clear, readable code structure
- **Type safety**: Complete TypeScript coverage

### **Performance Monitoring**
- **Bundle analysis**: Optimized dependency tree
- **Loading optimization**: Skeleton states and lazy loading
- **Memory efficiency**: Proper cleanup and optimization

## 🎯 Key Features Implemented

### **Core Functionality**
✅ **Skip selection** with visual feedback  
✅ **Price calculation** with VAT included  
✅ **API integration** with proper error handling  
✅ **Responsive design** across all devices  
✅ **Loading states** with skeleton UI  

### **Enhanced UX**
✅ **Bottom sheet checkout** for mobile optimization  
✅ **Dark mode toggle** with consistent theming  
✅ **Double-tap deselection** for better interaction  
✅ **Smooth animations** and micro-interactions  
✅ **Accessibility compliance** with WCAG guidelines  

### **Developer Experience**
✅ **TypeScript strict mode** with full type safety  
✅ **SonarQube compliance** with clean code practices  
✅ **Modern build tools** with Vite and path aliases  
✅ **Component architecture** with single responsibility  
✅ **Maintainable code** with helper functions and clear structure  

## 🔄 Future Enhancements

### **Planned Features**
- **Skip comparison tool**: Side-by-side comparison functionality
- **Favorites system**: Save preferred skip configurations
- **Advanced filtering**: Filter by price, size, availability
- **Location services**: Auto-detect user location

### **Technical Improvements**
- **PWA support**: Offline functionality and app-like experience
- **Internationalization**: Multi-language support
- **Advanced caching**: Service worker implementation
- **Real-time updates**: WebSocket integration for live pricing

## 📝 Development Approach

### **Design Philosophy**
This implementation prioritizes:

1. **User Experience**: Mobile-first design with intuitive interactions
2. **Code Quality**: Clean, maintainable, and type-safe code
3. **Performance**: Fast loading and smooth interactions
4. **Accessibility**: Inclusive design for all users
5. **Maintainability**: Scalable architecture for future growth

### **Problem-Solving Strategy**
- **UX Issues**: Identified and solved scroll-to-checkout problem with bottom sheet
- **Code Quality**: Addressed all SonarQube warnings with clean refactoring
- **Performance**: Implemented skeleton loading and optimized bundle size
- **Maintainability**: Created reusable components with clear separation of concerns

## 🎯 Challenge Success Criteria

✅ **Completely different design** - Modern card-based layout with bottom sheet vs original table layout  
✅ **Functionality preserved** - All core features working seamlessly with enhanced UX  
✅ **Mobile responsive** - Perfect experience on all device sizes with mobile-first approach  
✅ **Clean architecture** - Professional, maintainable codebase with TypeScript strict mode  
✅ **Performance optimized** - Fast loading, smooth interactions, and optimized bundle  
✅ **Accessibility compliant** - WCAG guidelines followed throughout  
✅ **Modern practices** - Latest React patterns, TypeScript, and clean code principles  

## 👨‍💻 About This Implementation

This project demonstrates modern React development practices with a focus on:

- **User-Centric Design**: Solving real UX problems with innovative solutions
- **Enterprise Code Quality**: SonarQube compliance and TypeScript strict mode  
- **Performance Engineering**: Optimized rendering and efficient data management
- **Maintainable Architecture**: Clean code principles and scalable structure
- **Accessibility First**: Inclusive design for all users

The implementation showcases advanced frontend development skills while delivering a practical, user-friendly solution for the skip hire industry.
