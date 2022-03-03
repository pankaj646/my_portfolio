import React from 'react'
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import './losding.css'

const Loading = () => {
  return (
    <div className='load'>
         <ScaleLoader color='gray'  size={150} />
    </div>
  )
}

export default Loading