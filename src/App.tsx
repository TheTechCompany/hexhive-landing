import React from "react";
import { Grommet } from "grommet";
import PlaceHolderNav from "./Components/PlaceHolderNav";

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
    <Grommet theme={theme}>
      <PlaceHolderNav />
    </Grommet>
  );
}

export default App;
