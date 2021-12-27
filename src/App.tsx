import React from "react";
import { Grommet } from "grommet";
import PlaceHolderNav from "./Components/PlaceHolderNav";
import MainBody from "./Components/MainBody";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <>
      <Grommet>
        <PlaceHolderNav />
        <MainBody />
      </Grommet>
    </>
  );
}

export default App;
