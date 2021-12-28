/* Placeholder */
import React from "react";
import { Text, Image, Header, Button, Grommet } from "grommet";

const PlaceHolderNav = () => (
  <Header
    background="#687161"
    margin="none"
    pad={{horizontal: "small", vertical: 'xsmall'}}
    elevation="small"
    justify="between"
  >
    <Image height="28vh" src="/assets/hivelogo.svg" color="#a1b593" />
    <Button color="#a1b593" label="Log In" href="https://go.hexhive.io/dashboard" />
  </Header>
);

export default PlaceHolderNav;
