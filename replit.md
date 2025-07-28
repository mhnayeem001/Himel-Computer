# Himel Computer - Digital Service Center Website

## Overview

This is a full-stack React application for Himel Computer, a local digital service center in Gazipur, Bangladesh. The project is built as a single-page application (SPA) showcasing the business's services, contact information, and company details. The application uses modern web technologies with a focus on responsive design and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### Development Environment
- **Hot Reload**: Vite dev server with HMR support
- **Error Handling**: Runtime error overlay for development
- **Code Quality**: TypeScript strict mode enabled
- **Package Manager**: npm with lockfile version 3

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action
- **About Section**: Company information and owner details
- **Services Section**: Grid layout of available services with icons
- **Why Us Section**: Benefits and value propositions
- **Contact Section**: Business contact information and location
- **Footer**: Social links and copyright information

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Handler**: Express route registration system
- **Vite Integration**: Development server with middleware support
- **Static File Serving**: Production-ready static asset serving

### UI Component System
- **Design System**: shadcn/ui with New York style variant
- **Theme Support**: Light/dark mode with CSS custom properties
- **Component Library**: Comprehensive set of accessible UI components
- **Icons**: Lucide React for consistent iconography

## Data Flow

### Current Implementation
1. **Static Content**: All business information is hardcoded in React components
2. **Client-Side Routing**: Wouter handles navigation between sections
3. **Smooth Scrolling**: JavaScript-based navigation to page sections
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Prepared Infrastructure
1. **Database Schema**: User authentication schema ready (users table)
2. **Query Client**: TanStack Query configured for API communication
3. **Storage Layer**: Abstracted interface ready for database integration
4. **Session Management**: PostgreSQL sessions configured but not actively used

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router (2KB alternative to React Router)

### UI Dependencies
- **@radix-ui/***: Accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Feather-inspired icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from `dist/public`

### Environment Configuration
- **Development**: Uses `tsx` for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with Node.js execution
- **Database**: Requires `DATABASE_URL` environment variable

### Hosting Requirements
- **Node.js Runtime**: ES modules support required
- **PostgreSQL Database**: Neon or compatible PostgreSQL service
- **Static File Serving**: Express serves frontend assets in production

### Key Features
- **SEO Optimized**: Meta tags and structured HTML for search engines
- **Mobile Responsive**: Touch-friendly interface with mobile navigation
- **Fast Loading**: Optimized builds with code splitting support
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Accessibility**: Radix UI components ensure WCAG compliance