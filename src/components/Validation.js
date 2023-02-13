const message = {
  EMPTY_FIELD: 'This Feild is Requied.',
  INVALID_NAME: 'Please enter valid name.',
  INVALID_EMAIL: 'Please enter valid email id.',
  INVALID_PSWD: 'Please enter valid password.',
};

const nameRegEx = /^[a-zA-Z\s]+$/;
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,6}$/;

const validateName = value => {
  if (value === '') {
    return message.EMPTY_FIELD;
  } else if (!nameRegEx.test(value)) {
    return message.INVALID_NAME;
  }
  return '';
};

const validateEmail = value => {
  if (value === '') {
    return message.EMPTY_FIELD;
  } else if (!emailRegEx.test(value)) {
    return message.INVALID_EMAIL;
  }
  return '';
};
const validatePassword = value => {
  if (value === '') {
    return message.EMPTY_FIELD;
  } else if (!passwordRegEx.test(value)) {
    return message.INVALID_PSWD;
  }
  return '';
};

const validation = {
  validateName,
  validateEmail,
  validatePassword,
};

export default validation;
