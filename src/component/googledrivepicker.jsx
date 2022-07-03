import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function Gdrive() {
  const [openPicker, data] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
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
  }

  useEffect(() => {
    // do anything with the selected/uploaded files
    if(data){
      data.docs.map(i => console.log(i.name))
    }
  }, [data])


  return (
    <div>
        <button className="picker"onClick={() => handleOpenPicker()}>
        
        <p>Import from Google Drive</p>
        


        </button>
    </div>
  );
}

export default Gdrive;