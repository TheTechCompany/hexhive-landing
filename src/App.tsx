import React from "react";
import { Box, Grommet } from "grommet";
import PlaceHolderNav from "./components/PlaceHolderNav";
import MainBody from "./components/MainBody";
import "./App.css";
import Background from "./components/Background";

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
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0))",
            }}
          ></Box>
        </Box>
      </Grommet>
    </>
  );
}

export default App;
