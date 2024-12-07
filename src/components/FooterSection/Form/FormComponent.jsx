import "./Form.css";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "./helper";
import InputComponent from "./Input/Input";
import Button from "./Button/Button";

export default function FormComponent() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={() => console.log("Success")}
    >
      <Form className="form">
        <InputComponent
          id="firstName"
          label="First name"
          name="firstName"
          placeholder="Your name"
        ></InputComponent>
        <InputComponent
          id="email"
          label="Email"
          name="email"
          placeholder="Your email"
        ></InputComponent>
        <InputComponent
          id="text"
          label="Text"
          name="text"
          placeholder="Your text"
        ></InputComponent>
        <Button>Send</Button>
      </Form>
    </Formik>
  );
}
