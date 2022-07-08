import React, { useState } from "react";
import DropboxChooser from 'react-dropbox-chooser'
 
const APP_KEY="93hdw2tmqnls6xe"
 
function Dropbox() {
  const [url,setUrl] = useState("")
  function handleSuccess(files){
    setUrl(files[0].thumbnailLink)
    console.log(url)
  }
  return (
    <div className="App">
      <br/><br/>
    <div className="container">
      <DropboxChooser appKey={APP_KEY}
                      success={handleSuccess}
                      cancel={() => console.log('closed')}
                      multiselect={true}
                      >
       <a href='#' class="dropbox"> 
      <i class="icon" ></i> 
      "dropbox"
   </a>
        <div className="dropbox"></div>
        <br/><br/>
      </DropboxChooser>
    
    </div>
    </div>
  );
}
export default Dropbox;