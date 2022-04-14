import { Container, ThemeProvider, Typography, createTheme, TextField, TableContainer, LinearProgress, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { CryptoState } from "../AppContext"
import { CoinList } from "../config/api"
import {useNavigate} from "react-router-dom"

const CryptosTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("") 

    const { currency } = CryptoState()

    const navigate = useNavigate()

    const fetchCoins = async() => {
        setLoading(true)
        const data = await fetch(CoinList(currency))
        const dataJson = await data.json()
        setCoins(dataJson)
        setLoading(false)
    }

    useEffect(() => {
        fetchCoins()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark"
        }
      })

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search)
        ))
    }

    const useStyles = makeStyles(()=>({}))
    const classes = useStyles()

    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center"}}>
                <Typography
                    variant="h4"
                    style={{ margin: 18}}
                >
                    Cryptocurrency Prices by Market Capitalization
                </Typography>
                <TextField 
                    label="Search crypto currencies" 
                    variant="outlined" 
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e)=> setSearch(e.target.value)}
                />
                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style={{background: "gold"}} />
                        ) : (
                            <Table>
                                <TableHead style={{ backgroundColor: "#EEBC1D"}}>
                                    <TableRow>
                                        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                            <TableCell
                                                style={{
                                                    color: "black",
                                                    fontWeight: "700"
                                                }}
                                                key={head}
                                                align={head === "Coin" ? "" : "right"}
                                            >
                                                {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {handleSearch().map((row) => {
                                        const profit = row.price_change_percentage_24h > 0;

                                        return (
                                            <TableRow
                                                onClick={ ()=> navigate(`/coins/${row.id}`)}
                                                className={classes.row}
                                                key={row.name}
                                            >
                                                <TableCell></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        )
                    }
                </TableContainer>
            </Container>
        </ThemeProvider> 
    )
}

export default CryptosTable