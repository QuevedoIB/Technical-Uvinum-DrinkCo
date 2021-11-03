import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';

import validations from './formValidations';

const initialFormValues = {
  name: '',
  surnames: '',
  email: '',
  password: '',
  confirm: '',
};

const SignupForm = ({ onSubmit }) => {
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
            value={values.name}
            placeholder={t('forms.name')}
            name="name"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.name && errors.name}
          />
          <Input
            value={values.surnames}
            placeholder={t('forms.surnames')}
            name="surnames"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.surnames && errors.surnames}
          />
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
          <Input
            value={values.confirm}
            placeholder={`${t('common.confirm')} ${t(
              'forms.password',
            ).toLowerCase()}`}
            name="confirm"
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            error={touched.confirm && errors.confirm}
            secureTextEntry
          />
          <Button text={t('summary.signup')} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
