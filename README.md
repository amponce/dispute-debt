# VA Application Template

This template provides a starting point for building digital solutions using the Department of Veterans Affairs (VA) design system. It demonstrates the implementation of VA web components and design patterns for creating accessible, user-friendly applications for Veterans.

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/amponce/va-application-template.git

# Navigate to the project directory
cd va-application-template

# Install dependencies
npm install

# Start the development server
npm start
```

## Template Features

- **Ready-to-use VA components**: Pre-configured with the VA Web Components library
- **Example Pages**: Home, Form Example, Components Showcase, and About pages
- **Accessibility-First Design**: Follows Section 508 and WCAG 2.1 AA guidelines
- **Form Validation**: Example form with error handling and validation
- **Responsive Layout**: Works on mobile, tablet, and desktop devices
- **Error Focus Management**: Implementation of error handling with focus management

## VA Design System Integration

This template implements the VA Design System using the official web components package:

```javascript
// Import VA components (already configured in the template)
import '@department-of-veterans-affairs/component-library';
```

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable VA components
│   │   ├── ErrorProvider.jsx # Error context provider
│   │   ├── footer.jsx    # Page footer component
│   │   ├── header.jsx    # Page header component
│   │   ├── layout.jsx    # Main layout wrapper
│   │   └── useFormError.js # Form error hook
│   ├── pages/            # Application pages
│   │   ├── About.jsx     # About page
│   │   ├── Components.jsx # Components showcase
│   │   ├── ExampleForm.jsx # Form example
│   │   └── Home.jsx      # Home page
│   ├── styles.css        # Global styles
│   ├── App.jsx           # Main application component
│   └── index.js          # Application entry point
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Using the Template

1. **Customize the Header/Footer**: Modify `src/components/header.jsx` and `src/components/footer.jsx` for your application
2. **Add New Pages**: Create new pages in the `src/pages` directory and add routes in `App.jsx`
3. **Modify Styles**: Update `src/styles.css` with your application-specific styles
4. **Extend Components**: Add new components to the `src/components` directory as needed

## Resources

- [VA Design System](https://design.va.gov/)
- [VA Web Components Documentation](https://department-of-veterans-affairs.github.io/component-library/)
- [VA Form Patterns](https://design.va.gov/patterns/form)
- [VA.gov Accessibility Guidelines](https://design.va.gov/documentation/developers/accessibility)

## License

This project contains code covered under federal government licenses and/or VA-specific terms of use. 