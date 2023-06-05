import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material'


const Container=styled(AppBar)`
 background:#060606;
 height:12vh;
 display:flex;
 flex-direction: column;
justify-content: center;
`

export default function Header() {
  return (
    <Container position='static'>
        <Toolbar>
            Online Editor
        </Toolbar>
    </Container>
  )
}
