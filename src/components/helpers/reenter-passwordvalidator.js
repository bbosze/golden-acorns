let rePasswordValidator = (reenter, password, regex) => {
  if(reenter === password && regex.test(reenter)) {
    console.log('reenter OK');
  } else {
    console.log('reenter NOTOK');
  }
}

export default rePasswordValidator;
