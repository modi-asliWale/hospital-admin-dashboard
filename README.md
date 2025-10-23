# Hospital Admin Dashboard - Executive Summary Page

This is a modern, responsive Hospital Admin Dashboard built with React, Material-UI, and Recharts. The dashboard provides a comprehensive executive summary view with KPIs, alerts, activity feeds, and analytics.

## Features Implemented

### ✅ KPI Overview
- 6 reusable KPI cards showing key metrics:
  - Total Patients
  - Bed Occupancy
  - Staff on Duty
  - Revenue Today
  - Average Wait Time
  - Patient Satisfaction
- Each card includes:
  - Icon representation
  - Current value
  - Trend indicator (up/down/neutral)
  - Subtitle with context
  - Hover effects

### ✅ Critical Alerts Panel
- Real-time alert display with severity levels (Critical, High, Medium, Low)
- Color-coded alert types (Error, Warning, Info, Success)
- Alert details including:
  - Title and description
  - Timestamp
  - Severity badges
  - Visual icons

### ✅ Recent Activity Feed
- Chronological activity log showing:
  - Patient admissions and discharges
  - Surgeries and operations
  - Staff changes
  - Financial transactions
  - Emergency cases
- Each activity includes:
  - Category badge
  - User/department information
  - Timestamp
  - Color-coded icons

### ✅ Cross-Module Analytics
- 4 interactive charts using Recharts:
  - **Patient Admissions Trend** (Area Chart) - Weekly patient flow
  - **Weekly Revenue** (Bar Chart) - Financial performance
  - **Department Occupancy Rate** (Bar Chart) - Bed utilization by department
  - **Staff Distribution** (Pie Chart) - Staff breakdown by role

### ✅ Dark Mode Support
- Full dark/light theme toggle
- Persistent theme preference (localStorage)
- Smooth theme transitions
- Optimized colors for both modes
- Theme affects all components, charts, and UI elements

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl
- Collapsible sidebar for mobile devices
- Responsive grid layouts
- Touch-friendly UI elements
- Optimized for tablets and desktops

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **UI Library**: Material-UI (MUI) 5.16.7
- **Charts**: Recharts 2.12.7
- **Routing**: React Router DOM 6.26.2
- **Build Tool**: Vite 5.3.4
- **Styling**: Emotion (CSS-in-JS)

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Card.jsx          # Reusable KPI card component
│   │   ├── Chart.jsx         # Chart wrapper component
│   │   ├── Header.jsx        # App header with theme toggle
│   │   └── Sidebar.jsx       # Navigation sidebar
│   └── Dashboard/
│       ├── DashboardHome.jsx # Main dashboard container
│       ├── SummaryCards.jsx  # KPI cards grid
│       ├── QuickStats.jsx    # Analytics charts
│       ├── AlertsPanel.jsx   # Critical alerts list
│       └── ActivityFeed.jsx  # Recent activity list
├── pages/
│   └── Home.jsx              # Home page wrapper
├── context/
│   └── ThemeContext.jsx      # Theme provider with dark mode
├── styles/
│   └── global.css            # Global styles
└── App.jsx                   # Main app component
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Key Components

### Reusable Card Component
A flexible card component that accepts:
- `title`: Card title
- `value`: Main metric value
- `icon`: MUI icon component
- `color`: Theme color (primary, secondary, success, warning, error)
- `trend`: Trend text
- `trendDirection`: Direction indicator (up, down, neutral)
- `subtitle`: Additional context
- `children`: Custom content

### Chart Component
A versatile chart wrapper supporting:
- Line charts
- Bar charts
- Area charts
- Pie charts
- Customizable colors
- Responsive sizing
- Dark mode support

### Theme Context
Provides:
- Light/dark mode toggle
- Persistent theme preference
- MUI theme customization
- Consistent color scheme across app

## Color Scheme

### Light Mode
- Primary: #0056b3 (Professional Blue)
- Success: #28a745 (Green)
- Warning: #ffc107 (Amber)
- Error: #dc3545 (Red)
- Background: #f5f7fa
- Paper: #ffffff

### Dark Mode
- Background: #121212
- Paper: #1e1e1e
- Adjusted colors for better contrast

## Responsive Breakpoints

- **xs**: 0-600px (Mobile)
- **sm**: 600-960px (Tablet)
- **md**: 960-1280px (Small Desktop)
- **lg**: 1280-1920px (Desktop)
- **xl**: 1920px+ (Large Desktop)

## Future Enhancements

- Backend API integration
- Real-time data updates via WebSocket
- User authentication
- Role-based access control
- Additional dashboard pages (Patients, Staff, Finance, etc.)
- Custom date range filters
- Export functionality (PDF, Excel)
- Push notifications
- Advanced analytics and reporting

## License

This project is part of the Hospital Admin Dashboard system.
