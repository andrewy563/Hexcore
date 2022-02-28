import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useDispatch } from "src/redux/hooks";
import { setMagicDamage, setPhysicalDamage } from "src/redux/slices/damage";
import NumberInput from "src/common/custom-components/NumberInput";

const StatsSetupColumn = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "33%", padding: "16px" }}>
      <Box sx={{ paddingBottom: "24px" }}>
        <Typography variant="h4">Player</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <NumberInput
          label="Physical Damage"
          onChange={(event) => {
            dispatch(setPhysicalDamage(event.target.value));
          }}
        />
        <NumberInput
          label="Magic Damage"
          onChange={(event) => {
            dispatch(setMagicDamage(event.target.value));
          }}
        />
      </Stack>
    </Box>
  );
};

export default StatsSetupColumn;
