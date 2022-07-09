import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import example from '../images/joshSide.png'
import example2 from '../images/square.png'

import React from 'react'

const TokenCard = (props) => { // name, color, hat, rarity, img src (url) 
  return (
    <>
      <Card sx={{height:250, width:250, minHeight:250, minWidth:250, display:"flex", justifyContent:"center"}}>
        <img  src={example} style={{borderRadius: 25}}></img> 
      </Card>
      <Typography gutterBottom variant="h5" component="div" color={"yellow"} sx={{marginTop:1, fontWeight:"bold"}}>
            SYE #{props.name}
      </Typography>
    </>
  )
}

export default TokenCard