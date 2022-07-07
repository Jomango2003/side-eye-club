import { Container, Box, Grid, Typography, CardMedia, Button, List, ListItemText } from '@mui/material'
import React from 'react'
import introSide from '../images/introside.png'
import quad from '../images/introquad.png'
import compare from '../images/Screen Shot 2022-07-06 at 18.49.43.png'
import yuh from '../images/eww.jpeg'
import josh from '../images/joshSide.png'
import road from '../images/road.png'

const Main = () => {

  return (
    <Container maxWidth='lg'>

      <Box m={1} pt={4}>
        <CardMedia component="img"
          sx={
            {
            
            }
          }
          height="300"
          image={yuh}
          alt="home-image"/>
      </Box>
      <Grid container sx={{marginTop:5, borderBottom:2, minHeight:400, backgroundColor:"#fff7fc"}}> 
          <Grid item xs={8} sx={{backgroundColor:"#fff7fc"}} >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}> Welcome to the Side Eye Club</Typography>
        <Typography variant="h5">
        Sye Club is a collection of exclusive
        side-eye NFTS. Our goal is to assert 
        the dominance of SYE presence 
        (side eyes) on the internet.
        </Typography>
        <Box sx={{ 
          width:300,
                  
                  }}> 
        <div>
        <Button variant="contained" size="large" fullWidth="true" sx={{marginTop:7, backgroundColor:"black", color:"white"}}>
          Buy a SYE 
        </Button>
        </div>
        <Button variant="contained" size="large" fullWidth="true" sx={{marginTop:2, backgroundColor:"black", color:"white"}}>
          View Gallery 
        </Button>
        </Box>
          </Grid>
          <Grid item xs={4}>
            <img src={quad}></img>
          {/* <CardMedia component="img"
          sx={
            {
            
            }
          }
          height="300"
          image={quad}
          alt="home-image"/> */}
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5, borderBottom:2, minHeight:400, backgroundColor:"#fff4ed"}}> 
          <Grid item xs={4} >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}> What is a SYE and not a SYE?</Typography>
        <Typography variant="h5" style={{marginTop:20}}>
        SYE tokens ALWAYS have creatures that exhibit 
        a “side-eye” behavior. Although appearing peaceful 
        these creatures are VERY DANGEROUS///
        </Typography>
          
          </Grid>
          <Grid item xs={4}>
            <img src={compare} style={{}}></img>
          
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5, borderBottom:2, minHeight:400, backgroundColor:"#fffce3"}}> 
          <Grid item xs={8} >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}> SYE Roadmap </Typography>
          <List sx={{margin: "5px"}} spacing={3}>
            <ListItemText> 
              <Typography variant="h5">Step 1: Launch Website for the first time</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 2: Social Media Campaign</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 3: Recruit cult of SYE followers</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 4: Introduce SYEC for exchange</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 5: Grow SYEC following</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 6: World domination</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">-</Typography>
            </ListItemText>
            <ListItemText> 
              <Typography variant="h5">Step 7: pizza party</Typography>
            </ListItemText>
          </List>
          
          </Grid>
          <Grid item xs={4}>
            <img src={road} style={{}}></img>
          
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5, minHeight:400, backgroundColor:"#e6ffe6"}}> 
          <Grid item xs={4} >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}> The Team:</Typography>
        <Typography variant="h5">
        SYEC was created by Joshua choi, a
        developer with nothing to do but 
        make NFTs for fun. 
        </Typography>
        
          
          </Grid>
          <Grid item xs={4}>
           

          </Grid>
          <Grid item xs={4}>
            <img src={josh} style={{}}></img>
          
          </Grid>
      </Grid>
      

     
    </Container>
   
  )
}

export default Main