import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useSelector } from "../redux/hooks";

const ResultsColumn = () => {
  const damage = useSelector((state) => state.damage);
  const defense = useSelector((state) => state.defense);
  return (
    <Box sx={{ width: "33%" }}>
      <Typography>Physical Damage: {damage.physicalDamage}</Typography>
      <Typography>Magical Damage: {damage.magicDamage}</Typography>
      <Typography>Physical Armor: {defense.armor}</Typography>
      <Typography>Magic Resistance: {defense.magicResistance}</Typography>
    </Box>
  );
};

export default ResultsColumn;
