import React from 'react';
import PropTypes from 'prop-types';

import {Formik} from 'formik';
import * as Yup from 'yup';

import Input from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
      })}>
      {({
        values,
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        setFieldTouched,
        isValid,
        isSubmitting,
        resetForm,
      }) => (
        <>
          <Input
            value={values.email}
            placeholder={'Email'}
            name="email"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.email && errors.email}
          />
          <Input
            value={values.password}
            placeholder={'Password'}
            name="password"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.password && errors.password}
          />
          <Button text={'Login'} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
