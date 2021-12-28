import React from "react";
import { Box, Grommet } from "grommet";
import PlaceHolderNav from "./Components/PlaceHolderNav";
import MainBody from "./Components/MainBody";
import "./App.css";
import Background from "./Components/Background";

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
      <Grommet
        theme={theme}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PlaceHolderNav />
        <MainBody />
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Background />
        </Box>
      </Grommet>
    </>
  );
}

export default App;
