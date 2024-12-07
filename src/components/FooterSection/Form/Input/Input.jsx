import { Field, ErrorMessage as Error } from "formik";
import "./Input.css";

export default function InputComponent({ id, name, placeholder }) {
  return (
    <div className="input-container">
      {/* <label htmlFor={id}>{label}</label> */}
      <Field name={name} id={id} placeholder={placeholder}></Field>
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
}
