import { useEffect } from "react"
import {Box} from "@mui/material"
import Quill from "quill"
import "quill/dist/quill.snow.css"

const Document = () => {

  useEffect(()=>
  {
    console.log("i render");

const quill= new Quill('#container',{theme: 'snow'})
  },[])

  return (
    <Box id="container"></Box>
  )
}

export default Document