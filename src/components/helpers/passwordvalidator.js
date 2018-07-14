let passwordValidator = (password, regex) => {
  if(regex.test(password)) {
    return true;
  } else {
    return false;
  }
}

export default passwordValidator;
