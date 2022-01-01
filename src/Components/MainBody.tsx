/* Hero Images */
import React, { useState, useEffect } from "react";
import { Box, Image, Grid, Paragraph, ResponsiveContext } from "grommet";
import { TreeOption } from "grommet-icons";

const MainBody = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
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
      {matches && (
        <Box align="end" flex>
          <Image
            style={{
              height: "calc(98vh - 54px)",
              filter: "drop-shadow(4px 4px 3px rgba(0,0,0,0.4)) ",
            }}
            src="/assets/HX1.svg"
          />
        </Box>
      )}
      {!matches}
    </Box>
  );
};

export default MainBody;
