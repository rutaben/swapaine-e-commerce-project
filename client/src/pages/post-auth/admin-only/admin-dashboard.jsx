import React from 'react';
import { useFormik } from 'formik';
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Container,
  // MenuItem,
} from '@mui/material';

const initialValues = {
  category: '',
  brand: '',
  name: '',
  price: 0,
  size: '',
  color: '',
  images: [],
};

const AdminDashboard = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    // values,
    // handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    // validationSchema,
    onSubmit,
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          gap: 3,
          px: 3,
          flexDirection: 'column',
          mt: '100px',
        }}
      >
        <Typography variant="h4">Įkelti prekę</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <TextField
              select
              name="category"
              label="Kategorija"
              // onChange=
              // value=
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {/* {values.category.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="brand"
              label="Gamintojas"
              // onChange=
              // value=
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {/* {values.brand.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="name"
              label="Pavadinimas"
              // onChange={handleChange}
              // value=
              // error={touched.name && Boolean(errors.name)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="price"
              label="Produkto vertė"
              // onChange={handleChange}
              // value=
              // error={touched.price && Boolean(errors.price)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="size"
              label="Dydis"
            // onChange=
            // value={values.surname}
            // error={touched.surname && Boolean(errors.surname)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {/* {values.size.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="color"
              label="Spalva"
              // onChange=
              // value=
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {/* {values.color.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <Button
              variant="outlined"
              sx={{ px: 3 }}
            >
              Įkelti nuotraukas
            </Button>

          </Grid>

        </Grid>
        <Box sx={{
          mt: 5, display: 'flex', justifyContent: 'center',
        }}
        >
          <Button
            variant="outlined"
            type="submit"
            sx={{ px: 3 }}
          >
            Sukurti prekę
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
