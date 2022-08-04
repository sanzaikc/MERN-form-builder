import React, { createContext } from "react";

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = React.useState([]);
  const [selectedElement, setSelectedElement] = React.useState(null);

  //   methods
  const handleAddInputField = (inputField) => {
    const alreadyInForm = !!formElements.find(
      (el) => el.type === inputField.type
    );
    if (alreadyInForm) return;

    setFormElements((prevState) => [...prevState, { ...inputField }]);
  };

  const handleRemoveInputField = (index) => {
    const inputFields = [...formElements];
    inputFields.splice(index, 1);

    setFormElements([...inputFields]);
  };

  return (
    <FormContext.Provider
      value={{
        formElements,
        setFormElements,
        handleAddInputField,
        handleRemoveInputField,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
