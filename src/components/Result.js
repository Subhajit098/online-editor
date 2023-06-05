import React,{useEffect,useContext,useState} from 'react'
import {Box,styled} from "@mui/material";
import {DataContext} from '../contextAPI/DataProvider';

export default function Result() {

    const [src,setSrc] = useState("");

    const {html,css,js} = useContext(DataContext);


    let srcCode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `

    useEffect(()=>{
     const timeOut = setTimeout(()=>{
        setSrc(srcCode);
      },2000);

      return ()=>clearTimeout(timeOut);
    },[html,css,js]);


  return (
    <Box marginTop={5} borderColor="primary.main" marginBottom={0} height={190}>
        <iframe srcDoc={src} title="Output" sandbox="allow-scripts" frameBorder={0} width="100%" height="100%" />
    </Box>
  )
}
