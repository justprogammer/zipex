import React from 'react'
import { Button, ClickAwayListener, makeStyles, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'
import DropboxChooser from 'react-dropbox-chooser'
import Dropbox from './dropbox'
import useDrivePicker from 'react-google-drive-picker'
import { useState } from 'react'

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      padding: '0 30px',
    },
  },
}))
const UrlButton = (props) => {
  const classses = useStyle()
  const [openPicker, data] = useDrivePicker();
  const [url,setUrl] = useState("")
  const APP_KEY="93hdw2tmqnls6xe";
  const alertBox = () => {
    // alert(<input type="url"/>)
    var res= window.prompt("file url", "https://")
  }
  const Gdrive = (e) =>{
    openPicker({
    
      clientId: "363053684825-qs0jvrsfrd4s14024aohgj1762snpf3l.apps.googleusercontent.com",
      developerKey: "AIzaSyAB8uKNnABYFEFpGRG1vpV3iY87zKIzSv8",
      viewId: "DOCS",
      
      
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      
      // customViews: customViewsArray, // custom view
    })
    e.preventDefault();
  }
  function handleSuccess(files){
    setUrl(files[0].thumbnailLink)
    console.log(url)
  }

  return (
    <>
      <div className={classses.root}>
        <Button startIcon={<DiIcons.DiGoogleDrive />} onClick={Gdrive}>
          <Typography variant='button' className={props.styles}>
            from Google Drive
          </Typography>
        </Button>

        <DropboxChooser appKey={APP_KEY} 
                      success={handleSuccess}
                      cancel={() => console.log('closed')}
                      multiselect={true}>
                        <Button className='btn' startIcon={<AiIcons.AiOutlineLink />}>
                        <Typography variant='button' className={props.styles}>
                          from Dropbox
                        </Typography>
                        </Button>
              <div className="dropbox"></div>
              <br/><br/>
      </DropboxChooser>
        <Button startIcon={<AiIcons.AiOutlineLink />} onClick={alertBox}>
          <Typography variant='button'>url</Typography>
        </Button>
        {/* <form>
          <input type="url"/>
        </form> */}
      </div>
      { <ul ref={props.title} className='empty'></ul> }
    </>
  )
}
export default UrlButton