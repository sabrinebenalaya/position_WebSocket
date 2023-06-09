import {isEmpty} from "./isEmpty"
import validator from "validator";

export function validatorRegister(data) {
  
  let errors = {};
  data.mail = !isEmpty(data.mail) ? data.mail : "";
  data.position = !isEmpty(data.position) ? data.position : "";
 
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

  if (!validator.isEmail(data.mail)) {
    errors.mail = "Required format email";
  }
  if (validator.isEmpty(data.mail)) {
    errors.mail = "Required email";
  }
 

 
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Required First Name";
  }

  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Required Last Name";
  }
  if (validator.isEmpty(data.position)) {
    errors.position = "Required position";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
