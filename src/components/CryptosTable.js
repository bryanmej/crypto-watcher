import { Container, ThemeProvider, Typography, createTheme, TextField, TableContainer } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { CryptoState } from "../AppContext"
import { CoinList } from "../config/api"

const CryptosTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("") 

    const { currency } = CryptoState()

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
                    
                </TableContainer>
            </Container>
        </ThemeProvider> 
    )
}

export default CryptosTable