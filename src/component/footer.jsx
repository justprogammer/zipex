import React from 'react'
import Gdrive from './googledrivepicker'
import Dropbox from './dropbox' 
import UrlButton from './url_button'
// import MyUploader from './dragdrop'

import { Button, Typography } from '@material-ui/core'

const DefaultButton = (props) => {
  return (
     <div>
      {/* <MyUploader/> */}
      <UrlButton/>    
   </div>
    
  )
}

export default DefaultButton;
