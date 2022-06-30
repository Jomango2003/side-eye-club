import { Container, Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    
   <footer>
        <Box 
        px={{ xs: 3, sm:10}}
        py={{ xs: 5, sm:10}}
        borterTop={1}
        sx={{ borderColor: 'black' }}
        bgcolor='black' 
        color='white'>
            <Container maxWidth='xl'>
                <Grid container spacing={5}sx={{ borderTop: 0 }}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Socials</Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            Youtube
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            Instagram
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>random</Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            click if you dare
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                            roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
  )
}

export default Footer