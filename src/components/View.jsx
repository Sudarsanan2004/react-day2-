import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
    const rows=[{name:"Sudan",email:"abcd@gmail.com",phone:6238719566},{name:"vikki",email:"vikki@gmail.com",phone:9074027272},{name:"arun",email:"arun@gmail.com",phone:8848980184}]

  return (
    <div>
        <TableContainer component={Paper} style={{marginTop:'5%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </div>
  )
}

export default View