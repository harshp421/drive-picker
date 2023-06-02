import { useState } from "react";
import "./App.css";
import useDrivePicker from "react-google-drive-picker";
import DropboxChooser from "react-dropbox-chooser";

// client secret value=vue8Q~giuvCeLv9p~WK0nbIfUjgqeXZ887XTuadu
//  client secret id-= c9b2ccb5-f4c5-4d94-951e-02e202aac5a8

/**   secert  key of microsoft account =3ca496a6-7b6e-4b63-b370-9557ce38d6f1  */
const KEY = "faf88418-e19b-4d5e-b09b-f67bfe0340f0";
function App() {
  const [openPicker, authResponse] = useDrivePicker();

  const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files: any) => console.log("SUCCESS: ", files);

  const handleError = (err: any) => console.log("ERROR: ", err);

  /*  one drive  */
  const launchOneDrivePicker = function (
    oneDriveApplicationId: string,
    action: string,
    multiSelect: boolean,
    advancedOptions: any
  ) {
    return new Promise(function (resolve, reject) {
      const odOptions = {
        clientId: oneDriveApplicationId,
        action: action || "download",
        multiSelect: multiSelect || true,
        openInNewWindow: true,
        // advanced: advancedOptions || {},

        success: function (files: any) {
          handleSuccess(files);
        },
        cancel: function () {
          handleCancel();
        },
        error: function (e) {
          handleError(e);
        },
      };
      OneDrive?.open(odOptions);
    });
  };

  /*  Google drive picker  */
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "686315321771-0l8mjpj4fbcmijsb5mp6c9mhnha42q2n.apps.googleusercontent.com",
      developerKey: "AIzaSyB74gpXG_0auF3lW4HP70UhctPDR3mD7m8",
      viewId: "DOCS",
      /* hear token that we give is for limited time fine dome thing that generate token for every login */
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  return (
    <>
      <h1>diffrent drive button </h1>

      <p>Run in local</p>
      <button onClick={() => handleOpenPicker()}> Google Drive</button>

      <p>run in</p>
      <button onClick={() => launchOneDrivePicker(KEY, "share")}>
        {" "}
        one Drive
      </button>
      {/* this is drop box part */}
      <p>Run in server </p>
      <DropboxChooser
        appKey={"k5ueo5exzaamj9s"}
        success={(files) => console.log(files, "files")}
        cancel={() => this.onCancel()}
        multiselect={true}
        // extensions={[".mp4"]}
      >
        <button> Drop box</button>
      </DropboxChooser>
    </>
  );
}

export default App;
// this id is for drop  box   client id
// drop box app key =k5ueo5exzaamj9s
