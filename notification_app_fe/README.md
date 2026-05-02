# Campus Intelligence — Notification Engine

A premium, high-performance notification dashboard designed for students to track campus updates in real-time.

## 🚀 Overview

Campus Intelligence provides a unified view of all critical campus notifications, including Placements, Events, and Results. Built with a focus on speed, clarity, and a modern aesthetic, it ensures that students never miss an important deadline or announcement.

### Key Features
*   **Midnight Obsidian Theme**: A custom high-contrast dark mode design with neo-minimalist aesthetics.
*   **Intelligent Sorting**: Automatically prioritizes high-impact notifications (Placements > Events > Results).
*   **Real-time Interaction**: Features a subtle, background-integrated cursor glow for an immersive experience.
*   **Dynamic Feed**: Always shows relevant data from "Today" and "Yesterday" via smart sample data generation.
*   **Loading State**: Integrated skeleton loaders for a smooth perceived performance.

## 🛠️ Tech Stack
*   **Frontend**: React (TypeScript)
*   **Styling**: Vanilla CSS (Custom Design System)
*   **Typography**: Inter & JetBrains Mono

## ⚠️ Important Note: Mock Data Usage

The application currently utilizes a **Mock API Layer** (`src/api.ts`) rather than a live backend connection.

**Reasoning:**
During the integration phase, authentication failures were encountered while attempting to communicate with the production server. Specifically, the system was unable to generate a valid **Bearer Token** due to an upstream Auth Failure. 

To maintain the development timeline and ensure a fully functional UI/UX demonstration, the decision was made to switch to a robust mock data provider. This allows the application to demonstrate:
1.  Complete UI/UX interactions.
2.  Data sorting and priority logic.
3.  Responsive grid layouts and animations.

Once the authentication issues are resolved by the infrastructure team, the `fetchNotifications` function in `src/api.ts` can be updated to point to the live endpoint.

## 📦 Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the dev server: `npm start`
4.  Run tests: `npm test`
