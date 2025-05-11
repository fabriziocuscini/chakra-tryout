# 🚀 Chakra UI React Application

A modern React application built with Chakra UI, TypeScript, and React Router, following clean architecture principles.

## ✨ Features

- 🎨 **Chakra UI** - Beautiful and accessible UI components
- 🧰 **TypeScript** - Type-safe code
- 🧭 **React Router** - Modern routing with Data Router API
- 🏗️ **Clean Architecture** - Separation of concerns for maintainability
- 🔄 **Multiple Layouts** - Flexible layout system with multiple configurations
- 📱 **Responsive Design** - Works on all device sizes
- 🌙 **Dark Mode** - Built-in light/dark mode support

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/fabriziocuscini/chakra-tryout.git
cd chakra-tryout

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

## 🚀 Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Check code formatting
pnpm format:check

# Format code
pnpm format

# Preview production build
pnpm preview
```

## 🏛️ Project Structure

```
src/
├── components/         # Shared UI components
├── config/             # Application configuration
├── data/               # Mocked JSON data
├── layouts/            # Layout components
├── pages/              # Page components
├── router/             # Route definitions
├── sections/           # Page-specific composite components
├── theme/              # Theme extension and customisations
│   └── utils/          # Theme-specific util functions
├── types/              # Shared type definitions
├── utils/              # Shared util functions
├── app.tsx             # Application shell
└── main.tsx            # Entry point
```

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI 3](https://chakra-ui.com/)
- [React Router 7](https://reactrouter.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🔍 Architecture

This project is built with a focus on clean architecture principles:

- 🧩 **Component-Based** - Modular components for easy reuse
- 🗺️ **Configuration-Driven** - Centralized configuration for navigation and other app aspects
- 📑 **Layout System** - Flexible layouts with nested routing
- 🧪 **Maintainable** - Code organization that scales with your project

## 📝 License

MIT

---

Made with ❤️ and lots of ☕
