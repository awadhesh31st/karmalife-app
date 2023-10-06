import * as yup from "yup";

export const schema = yup.object().shape({
   accountNumber: yup
      .string()
      .required("Account Number is required")
      .matches(/^[0-9]{16}$/, "Account Number must be of 16 digit number"),
   ifscCode: yup
      .string()
      .required("IFSC Code is required")
      .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "IFSC code is invalid"),
});

export const userSchema = yup.object().shape({
   username: yup
      .string()
      .required("User name is required")
      .matches(/^[A-Za-z0-9]+$/, "User name is invalid"),
});
