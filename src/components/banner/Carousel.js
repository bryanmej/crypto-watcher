import { makeStyles } from "@material-ui/core"
import React, {useEffect, useState} from "react"
import { CryptoState } from "../../AppContext";
import { TrendingCoins } from "../../config/api";


const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center"
    }
}))

const Carousel = () => {
    const [trending, setTrending] = useState([])
    const classes = useStyles();

    const {currency} = CryptoState()

    const fetchTrendingCryptos = async () => {
        const data = await fetch(TrendingCoins(currency))
        const dataJson = await data.json()
        setTrending(dataJson)
    }

    useEffect(()=> {
        fetchTrendingCryptos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])

    console.log(trending)

    return (
        <div className={classes.carousel}>
            carousel
        </div>
    )
}

export default Carousel