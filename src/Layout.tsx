import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./NavBar";
import globalTheme from "./globalTheme";

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <NavBar />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
