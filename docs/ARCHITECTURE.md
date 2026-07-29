# ARCHITECTURE

## Philosophy

This project follows Feature Driven Development (FTDD).

Every feature is implemented independently with clear requirements, acceptance criteria, and definition of done.

The architecture prioritizes readability, maintainability, scalability, and developer experience.

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

---

# Rendering Strategy

Default to Server Components.

Only use Client Components when interactivity is required.

---

# Folder Structure

src/

app/
components/
features/
data/
hooks/
lib/
types/
utils/

---

# Data Strategy

Portfolio content is stored as static TypeScript data.

No CMS is required.

This allows:

- Type safety
- Better performance
- Easier maintenance

---

# Styling

- Tailwind CSS
- shadcn/ui
- CSS Variables
- Utility-first styling
- Reuse existing shadcn/ui components before introducing new base UI primitives.
- Prefer this decision order for UI primitives:
  1. Reuse the existing shadcn/ui component.
  2. Extend or compose the existing component.
  3. Create a new primitive only when it represents a genuinely new abstraction.
- Do not create custom implementations of common UI components such as Button, Badge, Input, Dialog, Sheet, Dropdown Menu, Tooltip, Popover, or Avatar unless there is a clear architectural or functional requirement that cannot be achieved through extension or composition.

---

# State Management

Avoid global state unless necessary.

Prefer:

- React State
- URL State
- Server Components

---

# Icons

Lucide React

---

# Animations

Use Framer Motion.

Animations should enhance UX instead of distracting users.

---

# Forms

React Hook Form

Zod

---

# Naming Convention

Components

PascalCase

Hooks

camelCase

Files

kebab-case

Types

PascalCase

Constants

UPPER_SNAKE_CASE when appropriate

---

# Development Principles

- Keep components focused.
- Composition over inheritance.
- Reusable UI.
- Avoid duplicated logic.
- Prefer simple composition over premature abstraction.
- Do not introduce shared components, hooks, utilities, layouts, or helper abstractions unless they are used by multiple concrete use cases, eliminate meaningful duplication, improve architectural clarity, or provide measurable long-term maintainability.
- Avoid abstractions introduced only because they might be useful later.
- Favor evolving abstractions from real usage instead of designing them ahead of time.
- Prefer server rendering.
- Accessibility first.
- Mobile first.

---

# Decision Making

When multiple implementation options are available, prefer:

1. Simplicity
2. Consistency with the existing architecture
3. Reuse
4. Extensibility
5. New abstractions

New abstractions should be the last option, not the default.