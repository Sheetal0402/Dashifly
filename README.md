# Dashify - Angular 17+ Demo Application

A comprehensive demo application built with Angular 17+, showcasing modern web development practices with Angular Material, responsive design, and clean architecture.

## 🚀 Features

### Public Marketing Website
- **Home Page**: Hero section, features overview, testimonials
- **Features Page**: Detailed feature showcase with interactive tabs
- **Pricing Page**: Flexible pricing tiers with monthly/yearly toggle
- **FAQ Page**: Expandable FAQ sections with search functionality
- **Responsive Navigation**: Mobile-friendly navigation with Material toolbar

### Authenticated Dashboard
- **Overview Dashboard**: Stats cards, activity feed, progress indicators
- **Onboarding Wizard**: 3-step guided setup with Material stepper
- **Settings Page**: Account management, notifications, security
- **Billing Page**: Subscription management with Stripe placeholders
- **Responsive Layout**: Collapsible sidebar with mobile support

### Technical Features
- **Authentication**: Mock auth service with route guards
- **Theming**: Light/dark theme support with Material Design
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Modern Architecture**: Standalone components, lazy loading, reactive forms
- **Type Safety**: Full TypeScript implementation with strict mode

## 🛠️ Tech Stack

- **Framework**: Angular 17+
- **UI Library**: Angular Material + Angular CDK
- **Styling**: SCSS with design tokens and utility classes
- **State Management**: RxJS with BehaviorSubjects
- **Routing**: Angular Router with lazy loading and guards
- **Forms**: Reactive Forms with validation
- **Icons**: Material Design Icons
- **Build Tool**: Angular CLI

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Angular CLI 17+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Demo Credentials
- **Email**: demo@dashify.app
- **Password**: password123

## 📱 Usage Guide

### Public Routes
- `/` - Home page with hero and features
- `/features` - Detailed features showcase
- `/pricing` - Pricing plans and tiers
- `/faq` - Frequently asked questions

### Authentication
- `/auth/login` - User login page
- Protected routes redirect to login when not authenticated

### Dashboard Routes (Protected)
- `/app/overview` - Dashboard with stats and activity
- `/app/onboarding` - Guided setup wizard
- `/app/settings` - Account and preferences
- `/app/billing` - Subscription and billing
