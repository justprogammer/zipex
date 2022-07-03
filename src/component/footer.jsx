import React from 'react'
import Gdrive from './googledrivepicker'

import { Button, Typography } from '@material-ui/core'

const DefaultButton = (props) => {
  return (
     <div>
      <Gdrive />
     
      <a href='#' class="dropbox"> 
      <i class="icon" ></i> 
      "dropbox"
   </a>
   </div>
    
  )
}

export default DefaultButton
