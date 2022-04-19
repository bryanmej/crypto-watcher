import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CryptoState } from "../AppContext";
import { HistoricalChart } from "../config/api";

const CoinInfo = ({ coin }) => {
  const [historyData, setHistoryData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoryData = async () => {
    const data = await fetch(HistoricalChart(coin.id, days, currency));
    const dataJson = await data.json();

    setHistoryData(dataJson.prices);
  };

  useEffect(() => {
    fetchHistoryData();
  }, [currency, days]);

  console.log(historyData);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historyData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <></>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
