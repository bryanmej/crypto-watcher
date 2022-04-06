import React from "react";
import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles(()=>({
  title: {
    flex: 1,
    color: "gold",
    fontWeight: "bold",
    cursor: "pointer"
  }
}))



const HeaderNav = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={()=> navigate("/")} className={classes.title}>Crypto Watcher</Typography>
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
    </ThemeProvider>
  )
};

export default HeaderNav;
