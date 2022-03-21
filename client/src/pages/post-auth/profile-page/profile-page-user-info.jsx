import React, { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
  Button,
} from '@mui/material';
import * as yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import swal from 'sweetalert';
import AuthService from '../../../services/auth-service';
import ProfileService from '../../../services/profile-service';

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  surname: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const ProfilePageUserInfo = ({ user }) => {
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const initialValues = useMemo(() => ({
    name: user ? user.name : '',
    surname: user ? user.surname : '',
    email: user ? user.email : '',
    emailChecked: true,
    emailAvailable: true,
  }), [user]);

  const onSubmit = async (body) => {
    await ProfileService.updateUserData(body);
    swal({
      title: 'Duomenys atnaujinti',
      icon: 'success',
      button: {
        text: 'Uždaryti',
      },
    });
  };

  const {
    values, errors, touched, isSubmitting, dirty, isValid,
    handleChange, handleBlur, setValues, setFieldValue, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    if (e.target.value === initialValues.email) {
      setValues({
        ...values,
        email: initialValues.email,
        emailChecked: true,
        emailAvailable: true,
      }, true);
      return;
    }
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Vardas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="surname"
            label="Pavardė"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="email"
            label="El. paštas"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {emailEndornment}
                </InputAdornment>
              ),
            }}
          />
        </Grid>

      </Grid>

      <Button type="submit" variant="outlined" disabled={!dirty || !isValid} sx={{ mt: 3 }}>
        {isSubmitting ? <CircularProgress size={24} /> : 'Išsaugoti'}
      </Button>
    </Box>
  );
};

export default ProfilePageUserInfo;
