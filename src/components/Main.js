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
    <Container maxWidth='lg' sx={{backgroundColor:"white"}}>

      <Box m={1} pt={4}>
        <CardMedia component="img"
          height="300"
          image={yuh}
          alt="home-image"/>
      </Box>
      <Grid container sx={{marginTop:5, borderBottom:2, minHeight:400, backgroundColor:"white"}}> 
          <Grid item xs={8} sx={{backgroundColor:"yellow", maxHeight:370, marginLeft:-10, padding:2, boxShadow:10}} >
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
          <Grid item xs={4} sx={{marginLeft:5}}>
            <img src={quad}></img>
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5, borderBottom:2, minHeight:400, backgroundColor:"white"}}> 
          <Grid item xs={4} sx={{backgroundColor:"yellow", marginLeft:-8, boxShadow:10, minWidth:450, maxHeight:350}}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}> What is a SYE and not a SYE?</Typography>
        <Typography variant="h6" style={{marginTop:20}}>
        SYE tokens ALWAYS have creatures that exhibit 
        a “side-eye” behavior. Although appearing peaceful 
        these creatures are VERY DANGEROUS///
        </Typography>
          
          </Grid>
          <Grid item xs={4}>
            <img src={compare} style={{}}></img>
          
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:0, borderBottom:2, minHeight:200, height:"80vh", width:"110vh", backgroundColor:"black", color:"white"}}> 
          <Grid item xs={8} >
          <Typography variant="h3" sx={{ fontWeight: 'bold', }}> Sacred SYE Roadmap </Typography>
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
          <Grid item xs={4} sx={{}}>

            <img src={road} style={{}}></img>
          
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5, minHeight:400, backgroundColor:"white"}}> 
          <Grid item xs={5} sx={{marginLeft:-9, backgroundColor:"yellow",  boxShadow:20, maxHeight:300, width:300, padding: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}> The Team:</Typography>
        <Typography variant="h5">
        SYEC was created by Joshua choi, a
        developer with nothing to do but 
        make NFTs for fun. 
        </Typography>
        
          
          </Grid>
          <Grid item xs={4}>
           

          </Grid>
          <Grid item xs={3}>
            <img src={josh} style={{}}></img>
          
          </Grid>
      </Grid>
    </Container>
   
  )
}

export default Main