import React from "react";
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";

const HeaderNav = () => {
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography>Crypto Watcher</Typography>
          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginLeft: 15,
          }}>
            <MenuItem>USD</MenuItem>
            <MenuItem>MXN</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
  )
};

export default HeaderNav;
