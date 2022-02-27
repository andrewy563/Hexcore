import TextField from "@mui/material/TextField";

const NumberInput = (props) => (
  <TextField
    {...props}
    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
  />
);

export default NumberInput;
