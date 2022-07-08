import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import example from '../images/joshSide.png'
import example2 from '../images/sidelogo.png'

import React from 'react'

const TokenCard = (props) => {
  return (
    <Card sx={{ width: 200, height: 250, backgroundColor:'yellow', color:"black" }}>
      <img height={200} src={example}></img>
      {/* <CardMedia
        component="img"
        height="300"
        image={example2}
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={"black"}>
          SYE #{props.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TokenCard