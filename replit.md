# Overview

This is a modern full-stack web application built with React frontend and Express backend. The application appears to be a business website with contact form functionality, featuring a clean component-based architecture using shadcn/ui components and modern TypeScript development practices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful APIs with JSON responses
- **Data Storage**: In-memory storage with interface for future database integration
- **Development**: Custom Vite middleware integration for full-stack development

## Project Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Client Directory**: Contains React frontend application
- **Server Directory**: Contains Express backend API
- **Shared Directory**: Common TypeScript types and database schemas

## Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Type-safe database schemas with Zod validation
- **Current Implementation**: In-memory storage with plans for PostgreSQL migration
- **Tables**: Users and contact requests with UUID primary keys

## Development Features
- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Error Handling**: Custom error overlays and comprehensive error boundaries
- **Build Process**: Optimized production builds with code splitting

# External Dependencies

## Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Build Tools**: Vite, esbuild for backend bundling
- **TypeScript**: Full type safety across the stack

## UI and Styling
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icon library
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Backend Services
- **Database**: Drizzle ORM with planned PostgreSQL integration via Neon
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation

## Data Fetching
- **Client**: TanStack Query for server state management
- **API**: Native fetch API with custom error handling

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Code Quality**: ESM modules, strict TypeScript configuration
- **Database Management**: Drizzle Kit for schema migrations