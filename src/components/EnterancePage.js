import { Box, Grid, Container, Typography, Button } from '@mui/material'
import React from 'react'
import introSide from '../images/introside.png'
import {Link} from 'react-router-dom'

const EnterancePage = () => {
  return (
    <Container maxWidth="lg" sx={{height: '100vh'}}> 
        <Typography align="center" variant='h1' sx={{marginTop:'3rem'}}> SYE CLUB</Typography>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
        >
            <Grid item xs={3}>
                <Box borderBottom={3}
                component="img"
                sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 466 },
                maxWidth: { xs: 350, md: 700 },
                align: 'center',
                marginTop: '0rem'
                }}
                alt="oh yea"
                src={introSide}
                />
               
            </Grid>   
            <Grid item xs={3}>
                <Button  variant='outlined' size='large' color='rawr'
                sx={{
                    color: "black",
                    marginTop: '5rem',
                    fontSize: 20
                }}
                >
                    <Link style={{textDecoration:"none", color: "black"}} to={`/home`}>Don't click me</Link>
                </Button>
            </Grid>
        </Grid> 
        <Typography align="center" variant='h4'> AHh! you found my secret NFT gallery - xd. I guess you could take a look around...</Typography>     
    </Container>
  )
}

export default EnterancePage