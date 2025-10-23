import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';

const Card = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendDirection, 
  subtitle,
  color = 'primary',
  children 
}) => {
  const getTrendColor = () => {
    if (trendDirection === 'up') return 'success.main';
    if (trendDirection === 'down') return 'error.main';
    return 'text.secondary';
  };

  return (
    <MuiCard 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        {title && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            {Icon && (
              <Box
                sx={{
                  bgcolor: `${color}.main`,
                  color: 'white',
                  borderRadius: 2,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon sx={{ fontSize: 24 }} />
              </Box>
            )}
          </Box>
        )}
        
        {value !== undefined && (
          <Typography variant="h4" component="div" fontWeight="bold" sx={{ mb: 1 }}>
            {value}
          </Typography>
        )}
        
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
        
        {trend && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: getTrendColor(),
                fontWeight: 500,
              }}
            >
              {trend}
            </Typography>
          </Box>
        )}
        
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
