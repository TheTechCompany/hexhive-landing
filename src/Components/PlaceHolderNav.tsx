import React from "react";
import { Text, Image, Header, Button, Grommet } from "grommet";

const PlaceHolderNav = () => (
  <Header
    background="#687161"
    margin="none"
    pad="small"
    elevation="large"
    justify="between"
  >
    <Image height="28vh" src="/assets/hivelogo.svg" color="#a1b593" />
    <Button color="#a1b593" label="Log In" href="/" />
  </Header>
);

export default PlaceHolderNav;
