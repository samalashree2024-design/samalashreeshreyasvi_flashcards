# KonnichiWow Frontend

This repository contains the **frontend-only implementation** of the KonnichiWow application, built as part of the internship assignment.  
All pages and components are implemented according to the **Figma designs provided**.

The project focuses on clean structure, type safety, reusable UI primitives, responsive layouts, and consistent coding standards using modern **Next.js App Router** and **Tailwind CSS**.

---

## Tech Stack & Scope

### Scope
- Frontend only
- No backend or authentication logic
- UI and interactions only

### Language & Runtime
- React with **TypeScript (TSX)**
- Node.js with **npm** as the package manager
- **Next.js App Router** for file-based routing

### Styling
- **Tailwind CSS** for all styling
- Layouts built using **Flexbox utilities**
  - `flex`, `flex-col`, `flex-row`
  - `items-*`, `justify-*`, `gap-*`
- Responsive behavior using modifiers like `md:*`

### Icons
- **Heroicons only**
  - `@heroicons/react/24/outline`
  - `@heroicons/react/24/solid`

### UI Primitives
- **tailwind-variants** for reusable UI recipes:
  - Button
  - Input
  - Card

---

## Project Structure

The project follows feature-based organization and Next.js App Router conventions.


app/
  (auth)/
    login/
      page.tsx
    signup/
      page.tsx
    forgot-password/
      page.tsx
  
  (app)/
    flashcard/
      deck-menu/
        page.tsx
      deck/
        page.tsx
      card/
        page.tsx
      levels/
        page.tsx

components/
  Auth/
    LoginForm.tsx
    SignupForm.tsx
    ForgotPasswordForm.tsx
  Flashcard/
    DeckMenu.tsx
    LevelsList.tsx
    CardView.tsx
    DeckManagement.tsx

ui/
  button.ts
  input.ts
  card.ts

lib/
  types.ts
Routing (Next.js App Router)

Routes are automatically generated from the folder structure. No manual routing configuration is required.

Route Groups

Parentheses are used to group routes without affecting the URL:

(auth)/login/page.tsx → /login

(auth)/signup/page.tsx → /signup

(auth)/forgot-password/page.tsx → /forgot-password

(app)/flashcard/deck/page.tsx → /flashcard/deck

Server vs Client Components

The following rules are followed throughout the project:

Requirement	Component Type
Static UI	Server Component
Hooks (useState, useEffect)	Client Component
Event handlers (onClick, onChange)	Client Component
Browser APIs	Client Component
Interactive UI	Client Component

Client components explicitly use the "use client" directive.

TypeScript Usage

Shared and reusable types are defined in lib/types.ts

All component props and data structures are strictly typed

Example Domain Types

User

Flashcard

Deck

Authentication-related types

Naming Conventions

camelCase for variables, functions, props, and hooks

PascalCase for React components and TypeScript types

UPPER_SNAKE_CASE only for constants

Layout & Responsiveness

All layouts are built using flexbox

Responsive patterns include:

flex-col md:flex-row

w-full md:w-1/2

Fixed widths/heights are avoided where possible

Spacing between elements uses gap-*

Mobile layouts are implemented as per the Figma designs.

Tailwind & tailwind-variants

Reusable UI primitives are defined using tailwind-variants in the ui/ folder.

Tailwind class ordering is kept consistent:

Layout

Sizing & spacing

Typography

Colors & borders

Effects & states


tailwindcss-motions

Tailwind transition-* utilities

Applied for:

Hover and active states

Page and component entrance effects

Interactive feedback

Animations are subtle and purposeful.

Authentication Pages

The authentication section includes:

Login Page (/login)

Signup Page (/signup)

Forgot Password Page (/forgot-password)

All pages are frontend-only and follow the provided design system.

Flashcards Pages

The flashcards section includes:

Deck Menu (/flashcard/deck-menu)

Levels Selection (/flashcard/levels)

Flashcard Study (/flashcard/card)

Deck Management (/flashcard/deck)

An example JSON structure is used to simulate flashcard and deck data.

Figma Design

All UI components and pages are implemented according to the provided Figma design system, including:

Color palette

Typography

Spacing and layout rules

Visual hierarchy

Assets are referenced from Figma where required.

Git Commit Conventions

This project strictly follows Conventional Commits.

Format
<type>(optional scope): description

Examples

feat: add login page UI

fix(login): prevent empty password submit

refactor: extract flashcard card view

Commits are made after completing each page, and commit history is maintained cleanly.

Running the Project
npm install
npm run dev


Open in the browser:

http://localhost:3000

Notes

This is a frontend-only project

No backend APIs or authentication logic are included

Images and assets are handled according to the Figma design

Code follows the provided guidelines and conventions


