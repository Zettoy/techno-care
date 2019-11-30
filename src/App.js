import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "react-jss";
import Routes from "./routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./util/ScrollToTop";
import theme from "./config/theme";

function App() {
  const [dark, setDark] = React.useState(true);
  theme['toggle'] = () => setDark(!dark);
  theme['palette'] = dark ? theme.dark : theme.light;

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop/>
          <NavBar/>
          <Routes/>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
