# VA Application Template (Vite)

This template provides a starting point for building digital solutions using the Department of Veterans Affairs (VA) design system. It implements VA web components and design patterns for creating accessible, user-friendly applications for Veterans.

## Purpose of this Template

This template serves as a clean foundation for VA digital applications. It includes:

- **Essential VA Components**: Header, footer, and layout components following VA Design System guidelines
- **Responsive Design**: Adaptable for mobile, tablet, and desktop devices
- **Accessibility Compliance**: Built with Section 508 and WCAG 2.1 AA guidelines in mind
- **Modern Stack**: Uses Vite, React, and the official VA component library
- **Current VA Design System**: Uses the latest `@department-of-veterans-affairs/css-library` package

The template is designed to be a flexible starting point for building various types of VA applications, including:
- Landing pages
- Informational/content pages
- Single and multi-column layouts
- Form-based applications

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/va-application-template.git

# Navigate to the project directory
cd va-application-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Template Features

- **VA Design System Integration**: Pre-configured with VA CSS Library and Web Components
- **Example Pages**: Home, Form Example, Components, and About pages for reference
- **Accessibility-First**: Skip links, semantic markup, and proper ARIA attributes
- **Simple Form Validation**: Basic form validation with clear error handling
- **Responsive Layouts**: Flexible layout templates for various content types
- **Clean Architecture**: Well-organized component structure with clear separation of concerns
- **Modern Build Tooling**: Fast development with Vite
- **Centralized CSS**: All VA CSS imports are managed through a single file for better maintainability

## VA Design System Integration

This template initializes the VA Design System web components in `main.jsx`:

```javascript
// Initialize VA web components
applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

VA CSS styles are imported through a centralized file (`src/va-css.css`), which helps manage dependencies and prevent duplicate imports:

```css
/* Import VA Design System component library */
@import url("@department-of-veterans-affairs/component-library/dist/main.css");

/* Import core VA CSS library styles */
@import url("@department-of-veterans-affairs/css-library/dist/stylesheets/core.css");

/* Import VA CSS library utilities */
@import url("@department-of-veterans-affairs/css-library/dist/stylesheets/utilities.css"); 
```

This makes all VA web components and CSS utilities available throughout your application. You can use the React bindings for more complex components, though standard web components are preferred for better compatibility:

```javascript
import { VaBreadcrumbs } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
```

## Layout Patterns

This template supports various layout patterns using VA Design System grid classes. Here are some examples you can use:

### Sidebar + Main Content Layout
```html
<div class="vads-u-padding-y--3">
  <main>
    <div class="vads-grid-container desktop-lg:vads-u-padding-x--0">
      <div class="vads-grid-row vads-u-margin-x--neg2p5">
        <div class="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-4 desktop-lg:vads-grid-col-3">
          <!-- Sidebar content -->
          <div class="vads-u-padding-x--2 vads-u-padding-y--7 vads-u-background-color--primary-alt-lightest">
            Sidebar navigation or supporting content
          </div>
        </div>
        <div class="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-8 desktop-lg:vads-grid-col-9">
          <!-- Main content -->
          <div class="vads-u-padding-x--2 vads-u-padding-y--7">
            Main content area
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
```

### Two-Column Layout
```html
<main>
  <div class="vads-grid-container desktop-lg:vads-u-padding-x--0">
    <div class="vads-grid-row vads-u-margin-x--neg2p5">
      <div class="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-8">
        <!-- Left column content -->
      </div>
      <div class="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-4">
        <!-- Right column content -->
      </div>
    </div>
  </div>
</main>
```

### Full-Width Layout (for landing pages)
```html
<main>
  <div class="vads-grid-container vads-grid-container--full">
    <!-- Hero or banner section -->
    <div class="vads-u-padding-y--5 vads-u-background-color--primary-alt-lightest">
      <div class="vads-grid-container">
        <h1 class="vads-u-font-family--serif vads-u-font-size--h2 vads-u-font-weight--bold">Landing Page Title</h1>
        <!-- Hero content -->
      </div>
    </div>
    
    <!-- Main content section with standard width -->
    <div class="vads-grid-container">
      <div class="vads-grid-row">
        <div class="vads-grid-col-12">
          <!-- Main content -->
        </div>
      </div>
    </div>
  </div>
</main>
```

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable VA components
│   │   ├── footer.jsx    # Page footer component
│   │   ├── header.jsx    # Page header component
│   │   ├── help.jsx      # Help component with contact information
│   │   └── layout.jsx    # Main layout wrapper with flexible options
│   ├── pages/            # Example application pages
│   │   ├── About.jsx     # About page example
│   │   ├── Components.jsx # VA Design System components showcase
│   │   ├── ExampleForm.jsx # Form implementation example
│   │   └── Home.jsx      # Home page example
│   ├── constants/        # Application constants and configuration
│   ├── favicon.svg       # VA logo favicon
│   ├── styles.css        # Global styles for the application
│   ├── va-css.css        # Centralized VA Design System CSS imports
│   ├── App.jsx           # Main application component with routing
│   └── main.jsx          # Application entry point with VA components initialization
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## How to Use This Template

This template provides a clean foundation for VA applications. Here's how to make the most of it:

### Getting Started

1. Run the development server with `npm run dev`
2. Explore the example pages (Home, Components, ExampleForm, About)
3. Use the Components page as a reference for available VA components

### Basic Page Layout

The `Layout` component provides a consistent structure with VA header, footer, and automatic breadcrumbs:

```jsx
import Layout from '../components/layout';

const MyPage = () => {
  return (
    <Layout title="My Page Title">
      {/* Main content with proper VA components */}
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        My Page Title
      </h1>
      
      <section className="vads-u-margin-bottom--4">
        <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">Section Heading</h2>
        <p className="vads-u-font-family--sans">Your content here...</p>
      </section>
    </Layout>
  );
};
```

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `App.jsx`:

```jsx
<Route path="/my-new-page" element={<MyNewPage />} />
```

### Using VA Components

- Reference the Components page to see properly formatted examples
- Use proper heading structure and semantic HTML
- Follow accessibility best practices for all components
- Use VA utility classes (vads-u-*) for spacing and layout
- Follow the 8-point grid system for consistent spacing
- Use proper font-family classes:
  - `vads-u-font-family--serif` for headings (uses Bitter font)
  - `vads-u-font-family--sans` for body text (uses Source Sans Pro)

### Typography and Spacing Guidelines

- Use `vads-u-font-size--h2` for main page headings (h1 elements)
- Use `vads-u-font-size--h3` for section headings (h2 elements)
- Always add `vads-u-font-weight--bold` to headings
- Use consistent margins:
  - `vads-u-margin-top--0` for h1 elements
  - `vads-u-margin-top--4` for h2 elements
  - `vads-u-margin-bottom--3` for all headings
- For introductory text, use the `va-introtext` class with `vads-u-font-family--sans`

### Customizing Core Components

- **Header**: Modify `src/components/header.jsx` to change the application title or add navigation
- **Footer**: Update `src/components/footer.jsx` to add additional footer content or links
- **Layout**: The `layout.jsx` component can be customized for different page layouts (see comments in the file)

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Resources

- [VA Design System](https://design.va.gov/)
- [VA Web Components Documentation](https://department-of-veterans-affairs.github.io/component-library/)
- [VA Form Patterns](https://design.va.gov/patterns/form)
- [VA.gov Accessibility Guidelines](https://design.va.gov/documentation/developers/accessibility)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/docs/en/v6)

## License

This project contains code covered under federal government licenses and/or VA-specific terms of use.