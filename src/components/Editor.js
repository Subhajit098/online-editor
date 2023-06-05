import React,{useState} from 'react'
import { Box,styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from "@leifandersen/react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import "../App.css";


const Heading=styled(Box)`
    background:#1d1e22;
    display:flex;
    padding:10px 12px  
`

const Header=styled(Box)`
    display:flex;
    background:#060606;
    color:#AAAEBC;
    justify-content:space-between;
    font-weight:1000
`
const Container=styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    margin:0 3px;
`


export default function Editor({heading,color,value,onChange}) {

    const [open,setOpen] =  useState(true);

    const handleChange=(editor,data,value)=>{
        onChange(value);
    }

  return (
    <Container  style={open? {flexGrow:1} : {flexGrow:0}}>
    {/* Heading tag */}
    <Header>
        <Heading>
            <Box component="span" style={{
                background:color,
                height:20,
                width:20,
                display:"flex",
                borderRadius:6,
                marginRight:5
            }}></Box>
            {heading}
        </Heading>
      <CloseFullscreenIcon onClick={()=>setOpen(prevstate=>!prevstate)}  fontSize="small"  style={{alignSelf:"center"}}/>  
    </Header>
    {/* Editor tab */}
        <Box>
            <ControlledEditor className='controlled-editor'
                options={{theme:"material",lineNumbers:true}}  value={value} onBeforeChange={handleChange} 
            />
        </Box>
    </Container>
  )
}

// options={JSON.stringify(options)}
