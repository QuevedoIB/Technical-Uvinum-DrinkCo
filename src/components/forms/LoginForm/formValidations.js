import * as Yup from 'yup';
import i18n from '../../../../i18n';

export default Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('forms.errors.email'))
    .required(i18n.t('forms.errors.mandatory')),
  password: Yup.string()
    .min(6, i18n.t('forms.errors.length', { amount: 6 }))
    .required(i18n.t('forms.errors.mandatory')),
});
