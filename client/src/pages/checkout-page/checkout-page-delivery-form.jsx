import React from 'react';
import {
  TextField,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: theme.palette.secondary.main,
  '&:hover': {
    border: theme.palette.primary.contrastText,
  },
}));

const validationSchema = yup.object({
  name: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Vardas turi būti sudarytas bent iš 2 raidžių')
    .max(32, 'Vardas negali būti sudarytas iš daugiau nei 32 raidžių'),
  surname: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Pavardė turi būti sudaryta bent iš 2 raidžių')
    .max(32, 'Pavardė negali būti sudaryta iš daugiau nei 32 raidžių'),
  address: yup.string()
    .required('Privalomas laukas')
    .min(5, 'Adresas turi būti sudarytas bent iš 5 raidžių')
    .max(40, 'Adresas negali būti sudarytas iš daugiau nei 40 raidžių'),
  city: yup.string()
    .required('Privalomas laukas')
    .min(4, 'Miestas turi būti sudarytas bent iš 4 raidžių')
    .max(32, 'Miestas negali būti ilgesnis nei 32 raidės'),
  postalCode: yup.string()
    .required('Privalomas laukas')
    .min(5, 'Miestas turi būti sudarytas bent iš 5 skaičių')
    .max(5, 'Miestas negali būti ilgesnis nei 5 skaičiai'),
  phoneNumber: yup.string()
    .required('Privalomas laukas')
    .min(8, 'Telefono numeris turi būti sudarytas bent iš 8 skaičių')
    .max(18, 'Telefono numeris negali būti ilgesnis nei 18 skaičių'),
  fullName: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Nurodykite pilną vardą, esantį mokėjimo kortelėje')
    .max(32, 'Nurodykite pilną vardą, esantį mokėjimo kortelėje'),
  cardNumber: yup.string()
    .required('Privalomas laukas')
    .min(16, 'Kortelės numeris turi būti sudarytas iš 16 skaičių')
    .max(16, 'Kortelės numeris turi būti sudarytas iš 16 skaičių'),
  expDate: yup.string()
    .required('Privalomas laukas')
    .min(5, 'Galiojimo laikas turi būti nurodytas formatu MM/YY')
    .max(5, 'Galiojimo laikas turi būti nurodytas formatu MM/YY'),
  cvv: yup.string()
    .required('Privalomas laukas')
    .min(3, 'CVV kodas turi būti sudarytas iš 3 skaičių')
    .max(3, 'CVV kodas turi būti sudarytas iš 3 skaičių'),
});

const initialValues = {
  name: '',
  surname: '',
  address: '',
  city: '',
  postalCode: '',
  phoneNumber: '',
};

const CheckoutPageDelivery = () => {
  // const dispatch = useDispatch();

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    // onSubmit,
  });

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mb: 4, fontWeight: 700 }}>
            Pristatymas
          </Typography>
          <StyledTextField
            name="address"
            label="Adresas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            name="city"
            label="Miestas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            name="postalCode"
            label="Pašto kodas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postalCode}
            error={touched.postalCode && Boolean(errors.postalCode)}
            helperText={touched.postalCode && errors.postalCode}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            name="phoneNumber"
            label="Telefono numeris"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ my: 4, fontWeight: 700 }}>
            Mokėjimo informacija
          </Typography>
          <StyledTextField
            name="fullname"
            label="Vardas Pavardė"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
            error={touched.fullname && Boolean(errors.fullname)}
            helperText={touched.fullname && errors.fullname}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            name="cardNumber"
            label="Kortelės numeris"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cardNumber}
            error={touched.cardNumber && Boolean(errors.cardNumber)}
            helperText={touched.cardNumber && errors.cardNumber}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            name="expDate"
            label="MM/YY"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.expDate}
            error={touched.expDate && Boolean(errors.expDate)}
            helperText={touched.expDate && errors.expDate}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            name="cvv"
            label="CVV"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cvv}
            error={touched.cvv && Boolean(errors.cvv)}
            helperText={touched.cvv && errors.cvv}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default CheckoutPageDelivery;
