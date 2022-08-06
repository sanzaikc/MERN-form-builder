import React, { createContext } from "react";

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = React.useState([]);
  const [selectedElementIndex, setSelectedElementIndex] = React.useState(null);

  //   methods
  const handleAddInputField = (inputField) => {
    const alreadyInForm = !!formElements.find(
      (el) => el.label === inputField.label
    );
    if (alreadyInForm) return;

    setFormElements((prevState) => [...prevState, { ...inputField }]);
  };

  const handleRemoveInputField = (index) => {
    const inputFields = [...formElements];
    inputFields.splice(index, 1);

    setFormElements([...inputFields]);
    setSelectedElementIndex(null);
  };

  const handleElementUpdate = (elIndex, elementUpdate) => {
    const updatedElementList = formElements.map((el, index) =>
      index === elIndex ? elementUpdate : el
    );

    setFormElements(updatedElementList);
  };

  return (
    <FormContext.Provider
      value={{
        formElements,
        setFormElements,
        handleAddInputField,
        handleRemoveInputField,
        selectedElementIndex,
        setSelectedElementIndex,
        handleElementUpdate,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
