import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import Routes from "./routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./util/ScrollToTop";
import theme from "./config/theme";

function App() {
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
