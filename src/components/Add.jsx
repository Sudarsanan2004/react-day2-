import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Add = () => {

  const [page,SetPage]=useState('Private')
  const [count,SetCount]=useState(0)
  function valueAdd(){
    SetCount(count+1)
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <div>
        <TextField style={{marginTop:'3%'}}
          required
          id="outlined-required"
          label="Name"
          defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Email"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Address"
          
        />
        </div>
        </div>
        <div>
          <Button variant='contained' onClick={valueAdd}>Register</Button><br></br>
          <small>Button is clicked {count} times</small>
        </div>
    </Box>
  )
}
