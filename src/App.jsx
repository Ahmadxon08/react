import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import { useState } from "react";

import Media from "./components/media/Media";
import Product from "./components/product/Product";
import Step from "./components/step/Step";

import Table from "./components/table/Table";
import What from "./components/what/What";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Media />
      <Product />
      <Step />
      <Table />
      <What />
      <Footer />
    </>
  );
}

export default App;
