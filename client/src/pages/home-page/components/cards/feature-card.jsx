import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  // Avatar,
  styled,
} from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const FeatureCard = ({
  title, body, children,
}) => (
  <Card
    elevation={0}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }}
  >
    <CardContent sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      {children}
      <StyledTypography variant="body1" sx={{ fontWeight: 700, my: 2 }}>
        {title}
      </StyledTypography>
      <StyledTypography variant="body2" sx={{ mb: 3 }}>
        {body}
      </StyledTypography>
    </CardContent>
  </Card>
);

export default FeatureCard;
