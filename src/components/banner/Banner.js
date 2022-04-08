import { Container, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(()=>({
    banner: {
        backgroundImage: "url(./bannerImage.jpg)"
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))

const Banner = () => {
    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"
                        }}
                    >
                        Crypto Watcher
                    </Typography>
                    All your favorite cryptocurrencies in one place
                </div>
            </Container>
        </div>
    )
}

export default Banner