import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider  } from "react-jss";
import Routes from "./routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./util/ScrollToTop";
import theme from "./config/theme";
import palettes from "./config/palettes";

function App() {
  const [dark, setDark] = React.useState(true);

  return (
    <div id="app">
      <ThemeProvider theme={{...theme, ...{
        toggle: () => setDark(!dark),
        palette: dark ? palettes.dark : palettes.light
      }}}>
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
