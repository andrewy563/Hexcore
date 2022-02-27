import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import store from "./redux/store";

import NavBar from "./NavBar";
import globalTheme from "./globalTheme";

const Layout = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <NavBar />
      {children}
    </ThemeProvider>
  </Provider>
);

export default Layout;
