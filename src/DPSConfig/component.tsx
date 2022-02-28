import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useDispatch } from "src/redux/hooks";
import { setArmor, setMagicResistance } from "src/redux/slices/defense";
import NumberInput from "src/common/custom-components/NumberInput";

const DPSConfigColumn = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "33%", padding: "16px" }}>
      <Box sx={{ paddingBottom: "16px" }}>
        <Typography variant="h4">Enemy</Typography>
      </Box>
      <NumberInput
        label="Armor"
        onChange={(event) => {
          dispatch(setArmor(event.target.value));
        }}
      />
      <NumberInput
        label="Resistances"
        onChange={(event) => {
          dispatch(setMagicResistance(event.target.value));
        }}
      />
    </Box>
  );
};

export default DPSConfigColumn;
