import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
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
            <Home />
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
