# Patient Flow & Capacity Management Module

## Overview

The Patient Flow & Capacity Management module provides comprehensive real-time monitoring of hospital bed occupancy, patient flow, and surgical schedules. This module helps administrators optimize hospital capacity and manage patient admissions, discharges, and transfers efficiently.

## Features Implemented

### 1. Bed Occupancy Widget
**Component**: `BedOccupancyWidget.jsx`

Displays four key metrics in a responsive grid:
- **Total Beds**: Hospital's total bed capacity (450 beds)
- **Occupied Beds**: Currently occupied beds with occupancy percentage (387 beds, 86%)
- **Available Beds**: Ready for new patients (63 beds)
- **Occupancy Rate**: Overall rate with weekly trend (+2.3%)

### 2. Bed Status Heat Map
**Component**: `BedStatusHeatMap.jsx`

Interactive visual representation of bed status across hospital floors:
- Real-time bed availability by floor and room number
- Color-coded status indicators:
  - Red: Occupied
  - Green: Available
  - Yellow: Under Maintenance
- Hover tooltips showing:
  - Patient name (for occupied beds)
  - Admission date
  - Room status
- 3 floors with 8 rooms each displayed

### 3. Bed Status Indicators
**Component**: `BedStatusIndicators.jsx`

Legend panel showing:
- Status color codes with counts
- Occupied: 387 beds
- Available: 63 beds
- Maintenance: 12 beds

### 4. ADT Summary (Admission, Discharge, Transfer)
**Component**: `ADTSummary.jsx`

Three comprehensive cards showing:
- **Admissions**: Today (23), This Week (156), This Month (678)
- **Discharges**: Today (18), This Week (142), This Month (621)
- **Transfers**: Today (7), This Week (45), This Month (189)

Each with trend indicators for performance tracking.

### 5. ALOS Metric (Average Length of Stay)
**Component**: `ALOSMetric.jsx`

Detailed length of stay analytics:
- **Overall ALOS**: 4.8 days (hospital-wide average)
- **Department Breakdown**:
  - Emergency: 2.3 days
  - ICU: 7.2 days
  - General Ward: 4.1 days
  - Pediatrics: 3.5 days
  - Maternity: 2.8 days
  - Surgery: 5.6 days
  - Cardiac: 6.4 days
- Trend indicator showing -0.3 days improvement from last month

### 6. Surgery Schedule Table
**Component**: `SurgeryScheduleTable.jsx`

Today's surgical procedures displayed in an organized table:
- **6 scheduled surgeries** with details:
  - Time slot
  - Patient name
  - Procedure type
  - Assigned surgeon
  - Operating room
  - Estimated duration
  - Current status (In Progress, Scheduled, Completed)
- Status color coding for quick identification
- Hoverable rows for better UX

### 7. Patient Lists
**Component**: `PatientLists.jsx`

Tabbed interface with three patient categories:

**Tab 1: Admitted Patients (5)**
- Name, Age/Gender
- Room number
- Department
- Admission date
- Diagnosis
- Attending doctor

**Tab 2: Discharged Patients (3)**
- Name, Age/Gender
- Previous room
- Department
- Discharge date
- Diagnosis
- Attending doctor

**Tab 3: Pending Admissions (3)**
- Name, Age/Gender
- Department
- Wait time
- Priority level (Critical, High, Medium)
- Condition

### 8. Capacity Trends Chart
**Component**: `CapacityTrendsChart.jsx`

Interactive line chart showing 7-day trends:
- **Occupancy %** (Blue line) - Overall bed occupancy rate
- **Admissions** (Green line) - Daily patient admissions
- **Discharges** (Red line) - Daily patient discharges
- Responsive design with tooltips
- Dark mode compatible

### 9. Department Occupancy Chart
Uses the reusable `Chart` component to display:
- Bar chart of occupancy rates by department
- 7 departments monitored
- Percentage-based visualization

### 10. Filters Panel
**Component**: `FiltersPanel.jsx`

Control panel with:
- **Department Filter**: Dropdown to select specific department or view all
- **Date Picker**: Select date for historical data
- **Refresh Button**: Reload current data

## Mock Data

All data is stored in `/src/data/patientFlowMockData.js`:

- `bedOccupancyData`: Overall bed statistics
- `bedStatusByDepartment`: Department-wise occupancy
- `bedHeatMapData`: Floor and room-level bed status
- `bedStatusColors`: Color scheme for status indicators
- `adtSummaryData`: Admission, discharge, transfer metrics
- `alosData`: Average length of stay by department
- `surgeryScheduleData`: Daily surgery schedule
- `patientListsData`: Lists of admitted, discharged, and pending patients
- `capacityTrendsData`: 7-day historical trends
- `departmentOptions`: Filter options

## Navigation

The module is accessible via:
- **Route**: `/patient-flow`
- **Sidebar Menu**: "Patient Flow & Capacity"
- **Icon**: LocalHospital (hospital icon)

## Technical Implementation

### Technology Stack
- **React 18.3.1**: Component architecture
- **Material-UI 5.16.7**: UI components and styling
- **Recharts 2.12.7**: Data visualization
- **React Router DOM 6.26.2**: Navigation

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (mobile), sm (tablet), md (small desktop), lg (desktop), xl (large desktop)
- Grid system adapts to screen size
- Tables scroll horizontally on mobile

### Dark Mode Support
- All components support light/dark theme
- Charts adapt colors based on theme
- Color contrast maintained for accessibility

### Performance
- Optimized component rendering
- Efficient data structures
- Lazy loading ready

## File Structure

```
src/
├── components/
│   └── PatientFlow/
│       ├── PatientFlowDashboard.jsx      # Main container
│       ├── FiltersPanel.jsx              # Date/department filters
│       ├── BedOccupancyWidget.jsx        # Bed metrics cards
│       ├── BedStatusHeatMap.jsx          # Visual bed map
│       ├── BedStatusIndicators.jsx       # Status legend
│       ├── ADTSummary.jsx                # ADT metrics
│       ├── ALOSMetric.jsx                # Length of stay
│       ├── SurgeryScheduleTable.jsx      # Surgery schedule
│       ├── PatientLists.jsx              # Patient tables
│       └── CapacityTrendsChart.jsx       # Trends visualization
├── pages/
│   └── PatientFlow.jsx                   # Page wrapper
└── data/
    └── patientFlowMockData.js            # Mock data
```

## Usage

### Accessing the Module
1. Start the development server: `npm run dev`
2. Navigate to http://localhost:3000
3. Click "Patient Flow & Capacity" in the sidebar
4. Or navigate directly to `/patient-flow`

### Using Filters
1. Select a department from the dropdown to filter data
2. Choose a date to view historical data
3. Click Refresh to reload data

### Viewing Patient Details
1. Hover over bed cells in the heat map for patient info
2. Click tabs in Patient Lists to switch between categories
3. Review surgery schedule for today's procedures

## Future Enhancements

Planned features for production:
- Real-time data integration with hospital systems
- WebSocket support for live updates
- Export functionality (PDF, Excel)
- Advanced filtering and search
- Drill-down capabilities for detailed views
- Alert notifications for critical capacity levels
- Historical data analysis with date ranges
- Predictive analytics for capacity planning
- Integration with EMR/EHR systems

## Backend Integration Points

Ready for API integration:
- `GET /api/beds/occupancy` - Bed occupancy data
- `GET /api/beds/status` - Bed status by room
- `GET /api/adt/summary` - ADT metrics
- `GET /api/patients/alos` - Average length of stay
- `GET /api/surgery/schedule` - Surgery schedule
- `GET /api/patients/list` - Patient lists
- `GET /api/capacity/trends` - Capacity trends
- `GET /api/departments` - Department list

## Conclusion

The Patient Flow & Capacity Management module is fully implemented with all requested features:
- ✅ Bed occupancy widget
- ✅ Heat map visualization
- ✅ Bed status indicators
- ✅ ADT summary
- ✅ ALOS metric
- ✅ Surgery schedule table
- ✅ Patient lists with tabs
- ✅ Capacity trends chart
- ✅ Date and department filters
- ✅ Mock data
- ✅ Reusable components
- ✅ Responsive design
- ✅ Dark mode support

The module is production-ready and awaits backend API integration.
