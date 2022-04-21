import { makeStyles } from "@material-ui/core";
import React from "react";

const ChartButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    button: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
    },
  });

  const classes = useStyles();
  return (
    <span className={classes.button} onClick={onClick}>
      {children}
    </span>
  );
};

export default ChartButton;
