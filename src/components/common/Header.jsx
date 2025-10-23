import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Avatar, Tooltip } from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Notifications,
  AccountCircle,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '../../hooks/useTheme';

const Header = ({ onMenuClick }) => {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 0,
            fontWeight: 700,
            color: 'primary.main',
            mr: 4,
          }}
        >
          Hospital Admin
        </Typography>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            color: 'text.secondary',
          }}
        >
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
            <IconButton color="inherit">
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                <AccountCircle />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
