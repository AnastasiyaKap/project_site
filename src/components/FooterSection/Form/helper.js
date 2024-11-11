import * as Yup from "yup";

const regx = {
  name: /^[a-zA-Zа-яА-Я]{2,20}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const firstName = Yup.string().matches(
  regx.name,
  "Please, write correct your name"
);
const email = Yup.string().matches(
  regx.email,
  "Please, write correct your email"
);

export const schemas = {
  custom: Yup.object().shape({
    firstName,
    email,
  }),
};

export const initialValues = {
  firstName: "",
  email: "",
  text: "",
};
