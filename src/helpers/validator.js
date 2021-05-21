import {
  emailRegex,
  numberRegex,
  lowerCaseRegex,
  upperCaseRegex
} from './regexes';

const validatePassword = password => {
  const errors = [];

  if (!password.length) {
    errors.push('Password is required');
  }

  if (password.trim().length <= 9) {
    errors.push('Password must be more than 9 characters');
  }

  if (!numberRegex.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!lowerCaseRegex.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!upperCaseRegex.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  return errors;
};

const validateName = name => {
  const nameErrors = [];

  if (!name.length) {
    nameErrors.push('Name is required');
  }

  return nameErrors;
};

const validateEmail = email => {
  const emailErrors = [];

  if (!email.length) {
    emailErrors.push('Email is required');
  }

  if (!emailRegex.test(email)) {
    emailErrors.push('Email is invalid');
  }

  return emailErrors;
};

const validateForm = formData => {
  const errors = {};
  errors.name = validateName(formData.name);
  errors.email = validateEmail(formData.email);
  errors.password = validatePassword(formData.password);

  return errors;
};

export default validateForm;
