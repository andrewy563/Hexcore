import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch } from "../redux/hooks";
import { setMagicalDamage, setPhysicalDamage } from "../redux/slices/damage";

const StatsSetupColumn = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <TextField
        name="physical"
        label="Physical Damage"
        onChange={(event) => {
          dispatch(setPhysicalDamage(event.target.value));
        }}
        defaultValue={0}
      />
      <TextField
        name="magical"
        label="Magical Damage"
        onChange={(event) => {
          dispatch(setMagicalDamage(event.target.value));
        }}
        defaultValue={0}
      />
    </Box>
  );
};

export default StatsSetupColumn;
