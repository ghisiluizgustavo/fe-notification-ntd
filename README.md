# Notification System Frontend

A modern Angular 19 frontend application for managing and viewing notification submissions. This application consumes a REST API backend for notification management.

## 📋 Overview

This is a **UI-only application** built as part of a technical challenge. It focuses on clean architecture, best practices, and scalable frontend design using Angular and Tailwind CSS.

### Key Features

- ✅ Message submission form with validation
- ✅ Real-time notification log history
- ✅ Feature-based architecture (vertical slice)
- ✅ Reactive forms with TypeScript strict typing
- ✅ Tailwind CSS for modern, responsive UI
- ✅ HTTP error handling via interceptors
- ✅ Clean separation of concerns

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

Build artifacts will be stored in the `dist/notification-system/` directory.

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

## 🔌 API Integration

The application expects the following API endpoints:

### POST /api/notifications
Create a new notification message

**Request**:
```json
{
  "category": "Sports" | "Finance" | "Movies",
  "message": "string"
}
```

**Response**:
```json
{
  "id": "string",
  "category": "string",
  "message": "string",
  "createdAt": "ISO 8601 date"
}
```

### GET /api/notifications/logs
Retrieve all notification logs

**Response**:
```json
[
  {
    "id": "string",
    "category": "Sports" | "Finance" | "Movies",
    "message": "string",
    "channel": "SMS" | "Email" | "Push",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string"
    },
    "status": "pending" | "sent" | "delivered" | "failed",
    "createdAt": "ISO 8601 date",
    "sentAt": "ISO 8601 date",
    "deliveredAt": "ISO 8601 date",
    "error": "string"
  }
]
```

## 🎨 Styling

The application uses **Tailwind CSS** with a utility-first approach:

- Responsive design
- Modern color palette
- Consistent spacing and typography
- Custom component styling
- Loading states and transitions

## 🔧 Configuration

### Environment Variables

Update `src/environments/environment.ts` and `src/environments/environment.prod.ts` to configure:

- `apiUrl`: Backend API base URL
- `production`: Production flag

### Tailwind Configuration

Modify `tailwind.config.js` to customize:

- Color palette
- Spacing scale
- Breakpoints
- Custom utilities

## 📝 Code Quality

### TypeScript Configuration

- Strict mode enabled
- Strong typing enforced
- No implicit any

### Best Practices Implemented

- ✅ Feature-based architecture
- ✅ Standalone components
- ✅ Reactive forms
- ✅ HTTP interceptors for error handling
- ✅ DTOs/Interfaces for type safety
- ✅ Service layer abstraction
- ✅ Lazy loading routes
- ✅ Observable patterns
- ✅ TrackBy functions for performance

## 🚫 Out of Scope

- Authentication/Authorization
- User management
- Backend logic
- Real notification delivery (SMS, Email, Push)
- Unit/E2E tests

## 📦 Project Structure Rationale

### Why Feature-based Architecture?

1. **Clear ownership**: Each feature owns its components, services, and models
2. **Scalability**: Easy to add new features without affecting existing ones
3. **Maintainability**: Related code is co-located
4. **Team collaboration**: Multiple developers can work on different features

### Core Module

Contains singleton services and interceptors used across the application.

### Shared Module

Reusable UI components that can be used by multiple features.

## 🔍 Development Tips

### Adding a New Feature

1. Create folder in `src/app/features/`
2. Add components, services, and models
3. Create a page component
4. Add route in `app.routes.ts`

### Debugging

- Check browser console for errors
- Verify API endpoint configuration
- Ensure backend is running
- Check network tab for API requests

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [RxJS Documentation](https://rxjs.dev)

## 👤 Author

Built as part of a technical challenge demonstrating:
- Angular expertise
- Clean architecture
- UI/UX best practices
- TypeScript proficiency
- Modern frontend development

---

**Note**: Make sure the backend API is running before starting the frontend application.
