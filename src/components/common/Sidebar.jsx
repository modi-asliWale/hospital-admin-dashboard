import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Dashboard,
  People,
  Person,
  AttachMoney,
  Business,
  Assessment,
  Settings,
  Logout,
  LocalHospital,
  MedicalServices,
  HealthAndSafety,
  Speed,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: Dashboard, path: '/' },
  { text: 'ER Dashboard', icon: MedicalServices, path: '/er-dashboard' },
  { text: 'Patient Flow & Capacity', icon: LocalHospital, path: '/patient-flow' },
  { text: 'Clinical Quality & Safety', icon: HealthAndSafety, path: '/clinical-quality' },
  { text: 'Operational Efficiency', icon: Speed, path: '/operational-efficiency' },
  { text: 'Patient Management', icon: People, path: '/patients' },
  { text: 'Staff Management', icon: Person, path: '/staff' },
  { text: 'Financial Overview', icon: AttachMoney, path: '/finance' },
  { text: 'Departments', icon: Business, path: '/departments' },
  { text: 'Reports & Analytics', icon: Assessment, path: '/reports' },
  { text: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = ({ mobileOpen, onDrawerToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (mobileOpen) {
      onDrawerToggle();
    }
  };

  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                '&:hover': {
                  bgcolor: 'action.hover',
                },
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
              selected={location.pathname === item.path}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : 'inherit' }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            bgcolor: 'background.paper',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
