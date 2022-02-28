import NumberFormat from "react-number-format";
import React from "react";
import TextField from "@mui/material/TextField";

const CustomNumberFormat = React.forwardRef(function CustomNumberFormat(
  props,
  ref
) {
  const { ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      thousandSeparator
      isNumericString
    />
  );
});

const NumberInput = (props) => (
  <TextField {...props} InputProps={{ inputComponent: CustomNumberFormat }} />
);

export default NumberInput;
