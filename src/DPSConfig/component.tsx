import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch } from "../redux/hooks";
import { setArmor, setMagicResistance } from "../redux/slices/defense";

const DPSConfigColumn = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "33%" }}>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h4">Enemy</Typography>
      </Box>
      <TextField
        label="Armor"
        onChange={(event) => {
          dispatch(setArmor(event.target.value));
        }}
        defaultValue={0}
      />
      <TextField
        label="Resistances"
        onChange={(event) => {
          dispatch(setMagicResistance(event.target.value));
        }}
        defaultValue={0}
      />
    </Box>
  );
};

export default DPSConfigColumn;
