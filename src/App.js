import React from "react";
import Header from "./components/header/header";
import HeadComponent from "./components/component-1/component_1";
import SecondComponent from "./components/component-2/component_2";
import ThirdComponent from "./components/component-3/component_3";
import FourthComponent from "./components/component-4/component_4";
import FifthComponent from "./components/component-5/component_5";
import SixthComponent from "./components/component-6/component_6";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeadComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
      <Footer />
    </div>
  );
}

export default App;
