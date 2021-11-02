import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../common/Input';
import Button from '../../common/Button';

const SignupForm = ({ onSubmit }) => {
  const [t] = useTranslation();
  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={{
          name: '',
          surnames: '',
          email: '',
          password: '',
          confirm: '',
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          surnames: Yup.string().required(),
          email: Yup.string()
            .email()
            .required(),
          password: Yup.string()
            .min(6)
            .required(),
          confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
    </KeyboardAvoidingView>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
