import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Autocompletes from "./Autocomplete";
import Grid from "@mui/material/Grid";


const Navbar = () => {


  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            paddingTop: 3,
            paddingBottom: 3,
            textAlign: "center",
          }}
        >
          <Grid container spacing={0}>
            <Grid xs={3} container md={3}>
              <h1 className="text-italic">Health</h1>
              <h1 className="text-italic-color">Care</h1>
            </Grid>
            <Grid xs={3} md={6}>
            </Grid>
            <Grid xs={6} md={3}>
              <Autocompletes />
            </Grid>
           
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
