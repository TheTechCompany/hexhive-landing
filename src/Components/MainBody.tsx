import React from "react";
import { Box, Image, Grid, Paragraph } from "grommet";
import { TreeOption } from "grommet-icons";

const MainBody = () => (
  <Box direction="row" align="between" justify="around" margin="none">
    <Box
      alignSelf="center"
      flex="grow"
      pad={{ top: "small", bottom: "xlarge" }}
      margin={{ horizontal: "xlarge", vertical: "none" }}
    >
      <Image fill="vertical" src="/assets/HX2.svg" />
    </Box>
    <Box alignSelf="center" flex="grow" align="end">
      <Image fill="vertical" src="/assets/HX1.svg" />
    </Box>
  </Box>
);

export default MainBody;
