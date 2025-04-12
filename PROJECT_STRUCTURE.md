# 1212 Angel Number Website - Project Structure

This document outlines the recommended file and folder structure for the 1212 Angel Number website project using Next.js with App Router and TypeScript.

```
angelnumber1212/
├── src/
│   ├── app/
│   │   ├── (auth)/                  # Authentication related routes
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   ├── categories/
│   │   │   └── page.tsx
│   │   ├── career/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── meaning/
│   │   │   ├── dual-energy/
│   │   │   │   └── page.tsx
│   │   │   ├── related-numbers/
│   │   │   │   └── page.tsx
│   │   │   ├── spiritual/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── personal-growth/
│   │   │   └── page.tsx
│   │   ├── personal-reading/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── relationships/
│   │   │   ├── family/
│   │   │   │   └── page.tsx
│   │   │   ├── love/
│   │   │   │   └── page.tsx
│   │   │   ├── twin-flames/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── spiritual/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── wealth/
│   │   │   └── page.tsx
│   │   ├── error.tsx                # Global error handling
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout with header/footer
│   │   ├── not-found.tsx            # 404 page
│   │   ├── page.tsx                 # Homepage
│   │   └── sitemap.ts               # Dynamic sitemap generation
│   │
│   ├── components/
│   │   ├── analytics/               # Analytics components
│   │   ├── cards/                   # Various card components
│   │   │   ├── AngelNumberCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── common/                  # Shared components
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── forms/                   # Form components
│   │   │   ├── ContactForm.tsx
│   │   │   └── ReadingForm.tsx
│   │   ├── home/                    # Homepage-specific components
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   ├── reading/                 # Components for personalized readings
│   │   │   ├── BirthDateAnalysis.tsx
│   │   │   └── ReadingResult.tsx
│   │   └── ui/                      # Basic UI components
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── Heading.tsx
│   │       └── Input.tsx
│   │
│   ├── hooks/                       # Custom hooks
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   │
│   ├── lib/                         # Utility functions and libraries
│   │   ├── constants.ts
│   │   ├── numerology.ts            # Angel number calculations
│   │   ├── schema.ts                # Schema.org markup helpers
│   │   └── utils.ts
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── blog.ts
│   │   ├── numerology.ts
│   │   └── reading.ts
│   │
│   └── styles/                      # Component-specific styles (if needed beyond Tailwind)
│
├── public/
│   ├── angels/                      # Angel-related images
│   ├── blog/                        # Blog post images
│   ├── icons/                       # Custom icons
│   ├── illustrations/               # Custom illustrations
│   ├── og/                          # Open Graph images
│   └── robots.txt
│
├── .env.example                     # Example environment variables
├── .eslintrc.json                   # ESLint configuration
├── .gitignore                       # Git ignore file
├── .prettierrc                      # Prettier configuration
├── next.config.ts                   # Next.js configuration
├── package.json                     # Dependencies and scripts
├── postcss.config.mjs               # PostCSS configuration for Tailwind
├── PROJECT_DOCUMENTATION.md         # Project documentation
├── PROJECT_STRUCTURE.md             # This file
├── README.md                        # Repository readme
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## Component Organization

### Page Components
Each route has its own page component that:
- Implements SEO metadata
- Imports and composes layout components
- Handles any page-specific data fetching

### Layout Components
- `layout.tsx` files define shared layouts (header, footer, navigation)
- Each major section can have its own layout

### Reusable Components
Components are organized by function and complexity:
- **Common**: Site-wide components (Header, Footer, etc.)
- **Cards**: Various card layouts for different content types
- **Forms**: Interactive form components
- **UI**: Base-level UI components (buttons, inputs, etc.)

## Data Flow

### Content Management
For the initial version, content can be stored as:
- Markdown files in the repository (for blog posts)
- JSON data files for structured content
- TypeScript constants for frequently used content

In the future, this could be upgraded to a headless CMS.

## Styling Approach

1. **Primary**: TailwindCSS for most styling needs
2. **Component-specific**: CSS Modules for complex components (if needed)
3. **Global**: Limited global styles in `globals.css`

## Accessibility Infrastructure

- ARIA attributes built into base components
- Focus management utilities
- Color contrast utilities
- Screen reader helpers

## Deployment Considerations

- Set up CI/CD pipeline with GitHub Actions
- Configure Vercel or similar for deployments
- Implement preview deployments for PRs

## Future Expansion Areas

This structure allows for easy addition of:
- Authentication system
- User dashboard
- Payment processing
- Forum/community features
- Multiple language support 