import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../common/Input';
import Button from '../../common/Button';

import styles from './styles';

const LoginForm = ({ onSubmit }) => {
  const [t] = useTranslation();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        <KeyboardAvoidingView>
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
          />
          <Button text={t('summary.login')} onPress={handleSubmit} />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
