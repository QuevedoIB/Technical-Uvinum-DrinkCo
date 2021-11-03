import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Formik } from 'formik';

import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';

import validations from './formValidations';

const initialFormValues = { email: '', password: '' };

const LoginForm = ({ onSubmit }) => {
  const [t] = useTranslation();
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={validations}>
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
            placeholder={t('forms.email')}
            name="email"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.email && errors.email}
          />
          <Input
            value={values.password}
            placeholder={t('forms.password')}
            name="password"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.password && errors.password}
            secureTextEntry
          />
          <Button text={t('summary.login')} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
