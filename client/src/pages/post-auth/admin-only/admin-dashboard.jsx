import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Container,
  MenuItem,
} from '@mui/material';
import ApiService from '../../../services/api-service';

const defaultOption = {
  id: '-1',
  title: 'Select Option',
};

const initialValues = {
  category: defaultOption.id,
  brand: defaultOption.id,
  name: '',
  price: 0,
  size: defaultOption.id,
  color: defaultOption.id,
  images: [],
};

const AdminDashboard = () => {
  const [props, setProps] = useState(defaultOption);

  const onSubmit = (values) => {
    const formattedData = {
      ...values,
    };
    console.log(formattedData);
    // {category: '6202ca802ee32bcfba828e61',
    // brand: '6202b15d87dac037fdce5ff0',
    // name: 'Maskovskij',
    // price: 7,
    // size: '6202bcf3a34e4e38fd0008c5',
    // …}
  };

  const filtersArrToObj = ([
    brand, category, color, size,
  ]) => ({
    brand,
    category,
    color,
    size,
  });

  useEffect(() => {
    (async () => {
      const fetchedFilters = await Promise.all([
        ApiService.getBrands(),
        ApiService.getCategories(),
        ApiService.getColors(),
        ApiService.getSizes(),
      ]);
      try {
        const initFiltersValues = fetchedFilters.map((filter) => Object.values(filter)).flat();
        const filtersObj = filtersArrToObj(initFiltersValues);
        Object.entries(filtersObj).map(([key, value]) => ({
          [key]: value.unshift(defaultOption),
        }));
        setProps(filtersObj);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, [defaultOption]);

  const {
    values,
    handleChange,
    // setFieldValue,
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
        }}
      >
        <Typography variant="h4">Įkelti prekę</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <TextField
              select
              name="category"
              label="Kategorija"
              onChange={handleChange}
              value={values.category}
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {props.category.map((option, index) => (
                <MenuItem key={option.id} value={option.id} disabled={index === 0}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="brand"
              label="Gamintojas"
              onChange={handleChange}
              value={values.brand}
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {props.brand.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="name"
              label="Pavadinimas"
              onChange={handleChange}
              value={values.name}
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
              type="number"
              onChange={handleChange}
              value={values.price}
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
              onChange={handleChange}
              value={values.size}
            // error={touched.surname && Boolean(errors.surname)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {props.size.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              name="color"
              label="Spalva"
              onChange={handleChange}
              value={values.color}
              // error={touched. && Boolean(errors.)}
              fullWidth
              variant="outlined"
              size="small"
            >
              {props.color.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
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
