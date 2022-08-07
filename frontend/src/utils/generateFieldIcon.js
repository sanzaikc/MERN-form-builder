import * as MuiIcons from "@mui/icons-material";

export const generateFieldIcon = (fieldType, props = {}) => {
  const fieldTypeRef = {
    text: "TextFormat",
    email: "AlternateEmail",
    tel: "Phone",
    number: "Numbers",
    dropdown: "ArrowDropDown",
    radioGroup: "RadioButtonChecked",
  };

  const Icon = MuiIcons[fieldTypeRef[fieldType]];

  return Icon ? <Icon {...props} /> : null;
};
