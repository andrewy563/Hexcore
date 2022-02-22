import Stack from "@mui/material/Stack";

import StatsSetup from "./StatsSetup";
import DPSConfig from "./DPSConfig";
import Results from "./Results";

const MainContent = () => (
  <Stack direction="row" justifyContent="space-between">
    <StatsSetup />
    <DPSConfig />
    <Results />
  </Stack>
);

export default MainContent;
