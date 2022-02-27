import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useDispatch } from "../redux/hooks";
import { setMagicDamage, setPhysicalDamage } from "../redux/slices/damage";
import NumberInput from "../common/custom-components/NumberInput";

const StatsSetupColumn = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "33%" }}>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h4">Player</Typography>
      </Box>
      <NumberInput
        label="Physical Damage"
        onChange={(event) => {
          dispatch(setPhysicalDamage(event.target.value));
        }}
        defaultValue={0}
      />
      <TextField
        label="Magic Damage"
        onChange={(event) => {
          dispatch(setMagicDamage(event.target.value));
        }}
        defaultValue={0}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
    </Box>
  );
};

export default StatsSetupColumn;
