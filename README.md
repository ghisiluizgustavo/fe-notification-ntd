# Notification System Frontend

A modern Angular 19 frontend application for managing and viewing notification submissions. This application consumes a REST API backend for notification management.

## 📋 Overview

This is a **UI-only application** built as part of a technical challenge. It focuses on clean architecture, best practices, and scalable frontend design using Angular and Tailwind CSS.

## 🛠 Tech Stack

- **Framework**: Angular 19.2.0
- **Styling**: Tailwind CSS 3.4.x
- **Language**: TypeScript 5.7.2
- **State Management**: Reactive Forms
- **HTTP Client**: Angular HttpClient with interceptors

## 📁 Project Architecture

The project follows a **Feature-based Architecture** (Vertical Slice) for better scalability:

```
src/
├── app/
│   ├── core/                          # Core module - singleton services
│   │   ├── services/
│   │   │   └── api.service.ts         # Centralized API configuration
│   │   └── interceptors/
│   │       └── http-error.interceptor.ts  # Global error handling
│   │
│   ├── shared/                        # Shared UI components
│   │   └── ui/
│   │       ├── button/
│   │       ├── spinner/
│   │       ├── alert/
│   │       └── empty-state/
│   │
│   ├── features/                      # Feature modules
│   │   └── notifications/
│   │       ├── components/
│   │       │   ├── message-form/      # Message submission form
│   │       │   └── notification-log/  # Notification history list
│   │       ├── services/
│   │       │   └── notification.service.ts
│   │       ├── models/
│   │       │   ├── notification.dto.ts
│   │       │   └── notification-log.dto.ts
│   │       └── notifications.page.ts  # Main page component
│   │
│   ├── app.component.ts
│   ├── app.config.ts                  # Application configuration
│   └── app.routes.ts                  # Routing configuration
│
├── environments/                      # Environment configs
└── styles.scss                        # Global styles + Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure API endpoint** (if different from default):
   
   Edit `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/api'  // Update this URL
   };
   ```

### Development Server

Start the development server:

```bash
npm start
```

Or:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

### Production Build

Build the project for production:

```bash
npm run build
```

## 🎯 Features in Detail

### 1. Message Submission Form

**Location**: `src/app/features/notifications/components/message-form/`

- Reactive form with validation
- Category dropdown (Sports, Finance, Movies)
- Message textarea with required validation
- Loading states during submission
- Success/Error feedback
- Auto-refresh notification list on success

**Validation Rules**:
- Category: Required
- Message: Required, must not be empty

### 2. Notification Log History

**Location**: `src/app/features/notifications/components/notification-log/`

- Displays all notification logs
- Sorted by date (newest first)
- Shows:
  - Category badge (color-coded)
  - Channel badge (SMS, Email, Push)
  - Delivery status badge
  - Message content
  - User information
  - Timestamp
- Manual refresh button
- Empty state handling
- Error state handling
- Loading indicators
