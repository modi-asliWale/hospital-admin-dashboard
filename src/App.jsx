import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import GlobalFilters from './components/common/GlobalFilters';
import Home from './pages/Home';
import PatientFlow from './pages/PatientFlow';
import ERDashboard from './pages/ERDashboard';
import ClinicalQuality from './pages/ClinicalQuality';
import Compliance from './pages/Compliance';
import StaffManagement from './pages/StaffManagement';
import FinancialPerformance from './pages/FinancialPerformance';
import OperationalEfficiency from './pages/OperationalEfficiency';
import { ThemeContextProvider } from './context/ThemeContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeContextProvider>
      <FilterProvider>
        <Router>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Header onMenuClick={handleDrawerToggle} isMenuOpen={mobileOpen} />
            <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 240px)` },
                bgcolor: 'background.default',
              }}
            >
              <Toolbar />
              <Box
                sx={{
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 2, md: 3 },
                }}
              >
                <GlobalFilters />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/patient-flow" element={<PatientFlow />} />
                  <Route path="/er-dashboard" element={<ERDashboard />} />
                  <Route path="/clinical-quality" element={<ClinicalQuality />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/staff" element={<StaffManagement />} />
                  <Route path="/finance" element={<FinancialPerformance />} />
                  <Route path="/operational-efficiency" element={<OperationalEfficiency />} />
                </Routes>
              </Box>
            </Box>
          </Box>
        </Router>
      </FilterProvider>
    </ThemeContextProvider>
  );
}

export default App;
