import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import PatientFlow from './pages/PatientFlow';
import ERDashboard from './pages/ERDashboard';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeContextProvider>
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Header onMenuClick={handleDrawerToggle} />
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patient-flow" element={<PatientFlow />} />
              <Route path="/er-dashboard" element={<ERDashboard />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
