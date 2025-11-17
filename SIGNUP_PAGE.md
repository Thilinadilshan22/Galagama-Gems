# Signup Page Documentation

## Overview
A beautiful, matching signup page has been created for the Galagama Gems website with elegant animations and the same visual design as the login page and home page.

## Features

### Visual Design
- **Matching Background**: Same parallax Ken Burns effect with the jewelry background image
- **Glass-morphism Card**: Semi-transparent signup form with backdrop blur
- **Elegant Typography**: Uses the Playfair Display font to match the brand identity
- **Gradient Accents**: Amber to yellow gradient buttons matching the site theme

### Animations
- **Smooth Entry**: Signup form fades and slides in gracefully
- **Hover Effects**: Interactive buttons with scale animations
- **Focus States**: Input fields highlight with amber glow on focus
- **Parallax Background**: Background scrolls at different speed for depth

### Form Elements
1. **Name Input**: Required field for full name
2. **Email Input**: Required field with email validation
3. **Password Input**: Secure password field
4. **Confirm Password**: Password confirmation field with validation
5. **Terms & Conditions**: Required checkbox with links to T&C and Privacy Policy
6. **Submit Button**: Prominent gradient button with hover effects
7. **Social Signup**: Google and GitHub OAuth buttons
8. **Sign In Link**: Link to login page for existing users

## How to Access

### From Login Page
Click the "Sign up" link at the bottom of the login form.

### Direct URL
Navigate to: `http://localhost:3000/#signup`

### From Home Page
Navigate back by clicking the logo or visiting: `http://localhost:3000/`

## Technical Details

### Component Location
- File: `src/components/Signup.tsx`
- Integrated into: `src/App.tsx`

### Styling
- Uses Tailwind CSS utility classes
- Custom glassmorphism effects with `bg-white/10` and `backdrop-blur-sm`
- Consistent color scheme with amber (#FBB040) and yellow accents
- White text with opacity variants for hierarchy

### Responsive Design
- Centered signup card with max-width constraint
- Mobile-friendly form layout
- Proper spacing and touch targets

### State Management
- React hooks for form state (name, email, password, confirmPassword)
- Loading animations with `isLoaded` state
- Form validation on submit
- Password matching validation

### Form Validation
The signup form includes:
- Required field validation for all inputs
- Email format validation
- Password confirmation matching
- Terms & Conditions acceptance requirement

## Customization

### Change Background Image
Edit line 66 in `Signup.tsx`:
```tsx
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('YOUR_IMAGE_URL')`
```

### Modify Colors
Update the gradient colors in the submit button (line 424):
```tsx
className="... bg-gradient-to-r from-amber-400 to-yellow-600 ..."
```

### Add Form Validation
Enhance the `handleSubmit` function (line 23) with your validation logic:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Password matching validation (already included)
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  // Add more validation here (e.g., password strength)
  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }
  
  // Your signup logic here
};
```

### Connect to Backend
Replace the console.log in `handleSubmit` with your registration API call:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Redirect to login or dashboard
      window.location.hash = 'login';
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('An error occurred during signup');
  }
};
```

## Design Philosophy
The signup page maintains perfect visual consistency with the login page and main website:
- Same elegant serif typography
- Identical parallax background effects
- Matching color palette and gradients
- Consistent spacing and layout rhythm
- Seamless navigation experience

## User Experience Flow
1. User navigates to signup page
2. Fills in name, email, and password fields
3. Confirms password matches
4. Accepts terms and conditions
5. Submits form or uses social login
6. Can navigate to login if already have account

## Browser Support
- Modern browsers with CSS backdrop-filter support
- Framer Motion animation library for smooth transitions
- Responsive across all device sizes

## Security Considerations
When implementing the backend:
- Hash passwords using bcrypt or similar
- Implement rate limiting on signup endpoint
- Add CSRF protection
- Validate email format on backend
- Check for existing users
- Send email verification
- Implement strong password requirements

## Related Pages
- [Login Page](./LOGIN_PAGE.md) - User authentication page
- Home Page - Main landing page
- Custom Design Page - Product customization

## Navigation
Users can easily navigate between signup and login pages:
- "Sign in" link at bottom of signup form goes to `#login`
- "Sign up" link at bottom of login form goes to `#signup`
- Logo always returns to home page
