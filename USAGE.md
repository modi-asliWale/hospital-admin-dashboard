# Hospital Admin Dashboard - Usage Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Running the Application

#### Development Mode
```bash
npm run dev
```
Access at: `http://localhost:3000`

#### Production Build
```bash
npm run build
npm run preview
```

#### Linting
```bash
npm run lint
```

## Using the Dashboard

### Theme Toggle (Dark Mode)

1. Look for the sun/moon icon in the top-right header
2. Click to toggle between light and dark modes
3. Your preference is automatically saved
4. Works across all components and charts

### Navigation

#### Desktop
- Sidebar is always visible on the left
- Click any menu item to navigate (when implemented)
- Current page highlighted in blue

#### Mobile/Tablet
- Tap the hamburger menu icon (top-left) to open sidebar
- Sidebar slides in from left
- Tap outside to close
- Touch-optimized for easy navigation

### Understanding the KPI Cards

Each KPI card shows:
- **Title**: The metric name
- **Main Value**: Current value in large text
- **Icon**: Visual representation (top-right)
- **Trend**: Change from previous period (with direction)
- **Subtitle**: Additional context or target

**Color Meanings:**
- Blue: General metrics
- Green: Positive/success metrics
- Amber: Warning/attention needed
- Red: Critical/urgent

**Hover Effect**: Cards lift slightly on hover for better UX

### Critical Alerts Panel

**Alert Severity Levels:**
- **CRITICAL** (Red): Immediate action required
- **HIGH** (Amber): Urgent attention needed
- **MEDIUM** (Blue): Normal priority
- **LOW** (Gray): Informational

**Reading Alerts:**
1. Alert count badge shows total active alerts
2. Each alert displays:
   - Icon indicating type
   - Title and severity badge
   - Description message
   - Time since occurrence
3. Scroll down to see all alerts
4. Hover over alerts for visual feedback

### Recent Activity Feed

**Activity Categories:**
- **Patient** (Blue): Admissions, discharges
- **Operation** (Red): Surgeries, procedures
- **Staff** (Amber): Shift changes, attendance
- **Finance** (Green): Payments, transactions
- **Emergency** (Red): Urgent cases

**Reading Activities:**
1. Each entry shows:
   - Colored avatar with icon
   - Activity title and category badge
   - Description
   - Responsible user/department
   - Time since event
2. Most recent activities at top
3. Last 24 hours displayed

### Analytics Charts

#### Patient Admissions Trend (Area Chart)
- Shows daily admission counts for the week
- Blue gradient fill
- Hover over points to see exact values
- Useful for identifying busy days

#### Weekly Revenue (Bar Chart)
- Compares revenue across 4 weeks
- Green bars with rounded tops
- Hover for exact amounts
- Track financial performance

#### Department Occupancy Rate (Bar Chart)
- Shows bed utilization per department
- Color-coded by department
- Helps identify overcrowding
- Target: 85% (shown in Bed Occupancy KPI)

#### Staff Distribution (Pie Chart)
- Breakdown of staff by role
- Percentage labels on slices
- Hover for exact counts
- Useful for resource planning

**Chart Interactions:**
- Hover over data points for details
- Click legend items to toggle series (where applicable)
- Charts auto-resize for screen size
- Dark mode compatible

### Responsive Behavior

#### Mobile (< 600px)
- Single column layout
- KPI cards stack vertically
- Charts stack vertically
- Hamburger menu for navigation
- Touch-optimized buttons

#### Tablet (600-960px)
- 2-column KPI grid
- Charts remain stacked or side-by-side
- Sidebar collapses to drawer
- Optimized for touch

#### Desktop (960px+)
- 3-column KPI grid
- Side-by-side charts
- Persistent sidebar
- Mouse-optimized hover effects

### Notifications

The notification badge (bell icon) in the header shows:
- Red badge with count of unread notifications
- Currently shows: 3 notifications
- Click to view (feature pending backend integration)

### User Profile

The profile icon (top-right) provides:
- Quick access to user settings
- Profile management (pending)
- Logout option (pending)

## Keyboard Navigation

- **Tab**: Move between interactive elements
- **Enter/Space**: Activate buttons
- **Escape**: Close mobile menu (when open)

## Browser Support

### Recommended Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Browsers
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

## Troubleshooting

### Dark Mode Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and reload
- Try incognito mode to test

### Charts Not Displaying
- Ensure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page

### Mobile Menu Not Opening
- Ensure screen width is < 600px
- Try tapping the hamburger icon again
- Refresh the page

### Performance Issues
- Close unused browser tabs
- Clear browser cache
- Disable browser extensions temporarily
- Check network connection

## Tips for Best Experience

1. **Use Modern Browser**: Latest Chrome/Firefox recommended
2. **Enable JavaScript**: Required for all functionality
3. **Clear Cache**: If experiencing issues after updates
4. **Desktop for Analytics**: Charts easier to read on larger screens
5. **Mobile for Quick Checks**: Perfect for KPI overview on-the-go
6. **Dark Mode at Night**: Reduces eye strain in low light
7. **Light Mode for Reports**: Better for screenshots and printing

## Customization (Coming Soon)

Future features will include:
- Custom KPI selection
- Adjustable chart time ranges
- Alert filtering
- Notification preferences
- Dashboard layout customization
- Export reports to PDF/Excel
- Scheduled reports via email

## Getting Help

- Check FEATURES.md for detailed feature documentation
- See README.md for technical implementation details
- Review original requirements in README_ORIGINAL.md

## Security Notes

- Session automatically expires after inactivity (pending)
- Secure HTTPS connection required for production
- HIPAA compliance considerations apply
- No sensitive patient data should be stored locally

## Next Steps

This dashboard is ready for:
1. Backend API integration
2. Real-time data updates via WebSocket
3. User authentication implementation
4. Role-based access control
5. Additional modules (Patients, Staff, Finance, etc.)

See README_ORIGINAL.md for full system requirements and roadmap.
