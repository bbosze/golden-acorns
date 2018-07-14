let inputValidator = (field, regex) => {
  if(regex.test(field)) {
    return true;
  }
  else {
    return false;
  }
}

export default inputValidator;
