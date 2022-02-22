import Stack from "@mui/material/Stack";

import StatsSetup from "../src/StatsSetup";
import DPSConfig from "../src/DPSConfig";
import Results from "../src/Results";
import NavBar from "../src/NavBar";

const Home = () => (
  <>
    <NavBar />
    <Stack direction="row" justifyContent="space-between">
      <StatsSetup />
      <DPSConfig />
      <Results />
    </Stack>
  </>
);

export default Home;
