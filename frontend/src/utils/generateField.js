import * as FormField from "../components/formInput";

export const generateField = (type, props = {}) => {
  const formFieldRef = {
    text: "FormTextField",
    email: "FormEmailField",
    tel: "FormPhoneField",
    number: "FormNumberField",
    dropdown: "FormSelectField",
  };

  const Field = FormField[formFieldRef[type]];

  return Field ? <Field {...props} /> : null;
};
