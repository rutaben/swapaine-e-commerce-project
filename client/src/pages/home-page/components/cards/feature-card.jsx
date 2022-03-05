import React from 'react';
import {
  Typography,
  Card,
  CardContent,
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
      <StyledTypography variant="body1" sx={{ fontWeight: 500, mb: 1, mt: 2 }}>
        {title}
      </StyledTypography>
      <StyledTypography variant="body2" sx={{ fontWeight: 300 }}>
        {body}
      </StyledTypography>
    </CardContent>
  </Card>
);

export default FeatureCard;
