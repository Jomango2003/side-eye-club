
import logo from '../images/sidelogo.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';


const Header = () => {
  const poggers = () => {
    console.log('poggers');
  }

  React.useEffect(()=> {
    console.log('lol another poggers')
  }, [])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img height={60} src={logo}/>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SYEC
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            reeee
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          {window.location.pathname !== '/' && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack spacing ={10} direction="row">
              <MenuItem>
                <Typography> 
                  <Link style={{textDecoration:"none", color: "black"}} to={`/home`}>Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography> 
                  <Link style={{textDecoration:"none", color: "black"}} to={`/buy`}>Buy a SYE</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography> 
                  <Link style={{textDecoration:"none", color: "black"}} to={`/gallery`}>Gallery</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography> 
                  <Link style={{textDecoration:"none", color: "black"}} to={`/wallet`}>Your wallet</Link>
                </Typography>
              </MenuItem>
              <Box sx={{ flexGrow: 0 }}>     
            <Tooltip title="don't click me">
              <IconButton onClick={poggers} sx={{ p: 0 }}>
                <Avatar alt="poggg" src={logo} />
              </IconButton>
            </Tooltip>
          </Box>
            </Stack>
          </Box>   }       
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
