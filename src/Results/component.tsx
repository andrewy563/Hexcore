import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useSelector } from "src/redux/hooks";

import useTotalDamage from "./hooks/useTotalDamage";

const ResultsColumn = () => {
  const damage = useSelector((state) => state.damage);
  const defense = useSelector((state) => state.defense);
  const [totalPhysical, totalMagical] = useTotalDamage();
  return (
    <Box sx={{ width: "33%", padding: "16px" }}>
      <Box sx={{ paddingBottom: "16px" }}>
        <Typography variant="h4">Results</Typography>
      </Box>
      <Typography>Physical Damage: {damage.physicalDamage}</Typography>
      <Typography>Magical Damage: {damage.magicDamage}</Typography>
      <Typography>Physical Armor: {defense.armor}</Typography>
      <Typography>Magic Resistance: {defense.magicResistance}</Typography>
      <Typography>Total Physical: {totalPhysical}</Typography>
      <Typography>Total Magical: {totalMagical}</Typography>
    </Box>
  );
};

export default ResultsColumn;
