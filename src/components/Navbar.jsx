import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link,} from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FIRST REACT APP
          </Typography>
          <Link to={'/'}> <Button style={{color:'white'}}>View</Button></Link>
          <Link to={'/add'}> <Button style={{color:'white'}}>Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
