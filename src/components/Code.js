import React,{useContext} from 'react'
import Editor from "./Editor";
import {Box,styled} from "@mui/material";
import { DataContext } from '../contextAPI/DataProvider';


const Container=styled(Box)`
    display:flex;
    height:50vh
`

 const Code=()=>{
  const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext) || {};


  return (
    <Container>
        <Editor heading="HTML" color="red" value={html} onChange={setHtml}/>
        <Editor heading="CSS" color="blue" value={css} onChange={setCss}/>
        <Editor heading="JS" color="yellow" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code;
