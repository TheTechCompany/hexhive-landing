import React from "react";
import { Box, Image, Grid, Paragraph } from "grommet";
import { TreeOption } from "grommet-icons";

const MainBody = () => (
  <Box direction="row" align="between" justify="around" margin="none" flex>
    <Box
      flex
      pad={{ top: "medium", bottom: "xlarge" }}
      margin={{ horizontal: "xlarge", vertical: "none" }}
    >
      <Image
        style={{
          height: "calc(70vh - 22px)",
        }}
        src="/assets/HX2.svg"
      />
    </Box>
    <Box align="end" flex>
      <Image
        style={{
          height: "calc(98vh - 52px)",
          filter: "drop-shadow(4px 4px 3px rgba(0,0,0,0.4)) ",
        }}
        src="/assets/HX1.svg"
      />
    </Box>
  </Box>
);

export default MainBody;
