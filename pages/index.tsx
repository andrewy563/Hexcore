import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { StatsSetup, DPSConfig, Results } from "../src";

const Home = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Hexcore</Typography>
      </Toolbar>
    </AppBar>
    <Stack direction="row" justifyContent="space-between">
      <StatsSetup />
      <DPSConfig />
      <Results />
    </Stack>
  </>
);

export default Home;
