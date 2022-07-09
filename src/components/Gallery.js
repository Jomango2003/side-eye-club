import { Container, Box, Grid, Typography, CardMedia, Button, List, ListItemText } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'

import TokenCard from './TokenCard'

import { fakeDatabase } from '../fakeDatabase';

const Gallery = () => {
  const [tokensList, setTokensList] = React.useState(fakeDatabase);
  const [tokens, setTokens] = React.useState(tokensList);

  const [userInput, setUserInput] = React.useState({color:"", hat:"", rarity:""})

  const clearFilter = () => {
    setUserInput({color:"", hat:"", rarity:""});
  };

  React.useEffect(()=>{
      const filteredData = (userInput.color === "" && userInput.hat === "" && userInput.rarity === "") 
      ? tokensList : tokensList.filter((token) => {
        return  token.color === userInput.color ||
       token.hat === userInput.hat || token.rarity === userInput.rarity});
      setTokens(filteredData);
      console.log("filtered: " + filteredData);
  }, [userInput])

  function toggle(event){
    const {name, value} = event.target;
    setUserInput(prevState=> {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  function loadTokens(){
    const gallery = tokens.map(token => {
      return(
      <Grid item xs={4}>
       <TokenCard key ={token.key} name={token.key} color={token.color} hat={token.hat} rarity={token.rarity} />
      </Grid>)
    })
    return gallery;
  }

  return (
    <Container maxWidth="xl" sx={{backgroundColor:"black", marginTop:2}}>
      <Grid container sx={{padding:5}}> 
        <Grid item xs={2} sx={{backgroundColor:''}}>
            <Typography variant="h3" sx={{fontWeight: 'bold', color:"white"}}>Gallery</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{marginTop:2}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userInput.color}
                  label="Color"
                  name='color'
                  onChange={toggle}
                  sx={{backgroundColor:"white",}}
                >
                  <MenuItem value={'red'}>Red</MenuItem>
                  <MenuItem value={'orange'}>Orange</MenuItem>
                  <MenuItem value={'yellow'}>Yellow</MenuItem>
                  <MenuItem value={'green'}>Green</MenuItem>
                  <MenuItem value={'blue'}>Blue</MenuItem>
                  <MenuItem value={'purple'}>Purple</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{marginTop:1}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userInput.hat}
                  name='hat'
                  label="Age"
                  onChange={toggle}
                  sx={{backgroundColor:"white"}}
                >
                  <MenuItem value={'none'}>none</MenuItem>
                  <MenuItem value={'hair'}>hair</MenuItem>
                  <MenuItem value={'hat'}>actual hat</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{marginTop:1}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userInput.rarity}
                  name={'rarity'}
                  label="rarity"
                  onChange={toggle}
                  sx={{backgroundColor:"white"}}
                >
                  <MenuItem value={'common'}>Common</MenuItem>
                  <MenuItem value={'rare'}>Rare</MenuItem>
                  <MenuItem value={'legendary'}>Legendary</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button onClick={clearFilter} variant="contained" size="large" fullWidth="true" sx={{marginTop:2, backgroundColor:"yellow", color:"black"}}>
          Reset filter 
        </Button>
        </Grid>
        <Grid item xs={8} sx={{marginLeft:'4rem', minHeight:'90vh'}}> 
            <Grid container spacing={2}>
              {loadTokens()}
            </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Gallery