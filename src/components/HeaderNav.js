import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../AppContext";
import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    border: "3px solid",
    borderRadius: "50%",
    padding: 6,
    color: "gold",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const HeaderNav = () => {
  const { currency, setCurrency } = CryptoState();

  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#16171a",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="relative">
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} className={classes.title}>
              CW
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{
                width: 100,
                height: 40,
                marginLeft: "auto",
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"MXN"}>MXN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderNav;
