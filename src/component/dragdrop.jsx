import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import React, { useState, useRef } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import { model } from '../zip/zip'
import DefaultButton from './default_button'
import Output from './output'

export let entries

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 390,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    paddingTop: '50px',
    paddingBottom: '50px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 630,
    },
  },
  textTransform: {
    textTransform: 'none',
  },
  ulRoot: {
    listStyleType: 'none',
  },
}))

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const classes = useStyles()
  const [hide, setHide] = useState(true)
  const fileInput = useRef(null)
  const fileInputButton = useRef(false)
  let fileList = useRef(false)
  let selectedFile

  /*
   * Dispatches an Event at the specified EventTarget, (synchronously) invoking the affected EventListeners
   * in the appropriate order
   */

  /*
   * The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as
   * text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
   */

  const handleButtonOnclick = () => {
    fileInput.current.dispatchEvent(new MouseEvent('click'))
  }

  const selectFile = async (files) => {
    try {

      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
      console.log("Loaded")
        selectedFile = reader.result
       loadFile().then(() => {})

      }
      console.log("going to read");
      console.log(files[0]);
      // reader.readAsArrayBuffer(files[0].file)
      selectedFile = files[0].file
      await loadFile();selectedFile = files[0].file

      // console.log(files[0].files);
      // selectedFile = files
    } catch (error) {
      alert(error)
    }
  }

  const loadFile = async () => {
    console.log("EFFEESEXY")
    entries = await model.getEntries(selectedFile)
    console.log(entries)
    setHide(false)
    refreshList()
  }

  function refreshList() {
    const newFileList = fileList.current.cloneNode()

    // showing the filename of the zip
    const span = document.createElement('li')
    span.style.fontSize = '14px'
    span.style.fontWeight = '500'
    span.innerText = selectedFile.name
    newFileList.appendChild(span)

    entries.forEach((entry, entryIndex) => {
      const li = document.createElement('li')
      const anchor = document.createElement('a')
      anchor.style.color = '#000000'
      anchor.style.textDecoration = 'none'

      anchor.dataset.entryIndex = entryIndex
      anchor.textContent = anchor.title = entry.filename

      if (!entry.directory) {
        anchor.href = ''
      }
      if (entry.directory) {
        li.style.fontSize = '14px'
        li.style.fontWeight = '500'
      }
      li.appendChild(anchor)
      newFileList.appendChild(li)
    })

    fileList.current.replaceWith(newFileList)
    fileList = newFileList
  }

  return (
    <>

    {hide === true ? (
      <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onDrop={selectFile}
      onSubmit={selectFile}
    />
    ) : (
      <Output refFile={fileList} ulStyle={classes.ulRoot} />
    )}
    </>
  )
}
<MyUploader />
export default MyUploader