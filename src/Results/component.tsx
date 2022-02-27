import Typography from "@mui/material/Typography";

import { useSelector } from "../redux/hooks";

const ResultsColumn = () => {
  const damage = useSelector((state) => state.damage);
  return (
    <div>
      <Typography>Physical Damage: {damage.physicalDamage}</Typography>
      <Typography>Magical Damage: {damage.magicalDamage}</Typography>
    </div>
  );
};

export default ResultsColumn;
