import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import ApiService from '../../../services/api-service';
import ProductImageService from '../../../services/image-service';

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

const initialProps = {
  brand: [],
  category: [],
  color: [],
  size: [],
};

const AdminDashboard = () => {
  const [props, setProps] = useState(initialProps);
  const [img, setImg] = useState(initialValues.images);

  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const addToImgArr = (newData) => {
    setImg([...img, newData]);
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    console.log(input.files[0]);
    const data = await ProductImageService.uploadImages(input.files[0]);
    console.log(data);
    addToImgArr(data);
  };

  const handleError = () => alert('Pasiekėte didžiausią leistiną nuotraukų kiekį.');

  const handleImageDelete = async (id) => {
    await ProductImageService.deleteImage(id);
    setImg(img.filter((x) => x.id !== id));
  };

  const onSubmit = (values) => {
    const formattedData = {
      ...values,
    };
    console.log('Suformuoti user duomenys', formattedData);

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
    // validationSchema,
    onSubmit,
  });

  return (
    <Box
      maxWidth="sm"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        // display: 'flex',
        mt: 2,
        mx: 4,
        // flexDirection: 'column',
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
            onClick={img.length < 4 ? handleUploadFiles : handleError}
          >
            Įkelti nuotraukas
          </Button>
          <input
            type="file"
            hidden
            ref={fileUploadRef}
            accept=".jpg, .jpeg, .png"
            onChange={handleImagesLoaded}
          />

        </Grid>

        <Grid item xs={6}>
          <Typography>Nuotraukos</Typography>
          <Box>
            {
      img.map(({ id, src }) => (
        <Box
          key={id}
        >
          <img
            src={src}
            alt={src}
            width="100px"
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
  );
};

export default AdminDashboard;
