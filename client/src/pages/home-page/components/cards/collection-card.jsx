import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  styled,
} from '@mui/material';
import UnderlinedButton from '../buttons/underlined-button';

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  minHeight: '300px',
  backgroundColor: '#fafafa',
  borderRadius: 0,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'uppercase',
}));

const CollectionCard = ({
  title, image,
}) => (
  <StyledCard
    elevation={0}
  >
    <CardMedia
      component="img"
      height="500"
      image={image}
      alt=""
    />
    <CardContent>
      <StyledTypography variant="body1">
        {title}
      </StyledTypography>
      <UnderlinedButton title="Atrask" />
    </CardContent>
  </StyledCard>
);

export default CollectionCard;
