import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';

import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
// import ProductService from '../../../services/product-service';
import ApiService from '../../../services/api-service';
import ProductImageService from '../../../services/image-service';

const defaultOption = {
  id: '-1',
  title: 'Select Option',
};

const initialValues = {
  name: '',
  price: 0,
  category: defaultOption.id,
  size: defaultOption.id,
  color: defaultOption.id,
  brand: defaultOption.id,
  productImages: [],
};

const initialProps = {
  brand: [],
  category: [],
  color: [],
  size: [],
};

const AdminDashboard = () => {
  const [props, setProps] = useState(initialProps);
  const [imgArr, setImgArr] = useState(initialValues.productImages);
  console.log(imgArr);

  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const addToImgArr = (newData) => {
    setImgArr([...imgArr, newData]);
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ProductImageService.uploadImages(input.files[0]);
    console.log(input);
    addToImgArr(data);
  };

  const handleError = () => swal({
    title: 'Klaida',
    text: 'Pasiekėte didžiausią leistiną nuotraukų kiekį',
    icon: 'error',
    button: 'Uždaryti',
  });

  const handleImageDelete = async (id) => {
    await ProductImageService.deleteImage(id);
    setImgArr(imgArr.filter((x) => x.id !== id));
  };

  // const throwAlert = () => alert('Produktas sukurtas');

  // const createNewProduct = async (formattedData) => {
  //   const data = await ProductService.createProduct(formattedData);
  //   throwAlert();
  // };

  const onSubmit = (values) => {
    const formattedData = {
      ...values,
      productImages: [...imgArr],
    };
    console.log('Suformuoti user duomenys', formattedData);
    // createNewProduct(formattedData);
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
      const fetchedProps = await Promise.all([
        ApiService.getBrands(),
        ApiService.getCategories(),
        ApiService.getColors(),
        ApiService.getSizes(),
      ]);
      try {
        const initPropsValues = fetchedProps.map((prop) => Object.values(prop)).flat();
        const propsObj = filtersArrToObj(initPropsValues);
        Object.entries(propsObj).map(([key, value]) => ({
          [key]: value.unshift(defaultOption),
        }));
        setProps(propsObj);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, [defaultOption]);

  const {
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Box
      maxWidth="sm"
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, mx: 4 }}
    >
      <Typography variant="h4" sx={{ mt: 2, mb: 5 }}>Įkelti prekę</Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
            name="name"
            label="Pavadinimas"
            onChange={handleChange}
            value={values.name}
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="price"
            label="Produkto vertė"
            type="number"
            onChange={handleChange}
            value={values.price}
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            name="category"
            label="Kategorija"
            onChange={handleChange}
            value={values.category}
            fullWidth
            variant="outlined"
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
            name="size"
            label="Dydis"
            onChange={handleChange}
            value={values.size}
            fullWidth
            variant="outlined"
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
            fullWidth
            variant="outlined"
          >
            {props.color.map((option) => (
              <MenuItem key={option.id} value={option.id}>
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
            fullWidth
            variant="outlined"
          >
            {props.brand.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            sx={{ px: 3 }}
            onClick={imgArr.length < 4 ? handleUploadFiles : handleError}
          >
            Įkelti nuotrauką
          </Button>
          <input
            type="file"
            hidden
            ref={fileUploadRef}
            accept=".jpg, .jpeg, .png"
            value={values.productImages}
            onChange={handleImagesLoaded}
          />
          <Button
            type="submit"
            sx={{
              px: 7,
              py: 2,
              mt: 2,
              ml: 3,
            }}
          >
            Sukurti prekę
          </Button>

        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex' }}>
            {
      imgArr.map(({ id, src }) => (
        <Box
          key={id}
        >
          <img
            src={src}
            alt={src}
            width="100px"
            height="100px"
          />
          <IconButton
            color="error"
            onClick={() => handleImageDelete(id)}
          >
            <DeleteIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </Box>
      ))
    }
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AdminDashboard;
