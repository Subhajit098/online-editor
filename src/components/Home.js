import React from 'react'
import Header from "./Header";
import Code from "./Code";
import Result from './Result';


export default function Home() {
  return (
    <>
    <Header/>
    {/* Position is fixed for header or we can change it to static */}
    <Code/>
    <Result/>
    </>
  )
}
