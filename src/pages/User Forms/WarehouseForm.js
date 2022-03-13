import { useState } from "react";
import Compressor from "compressorjs";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "../../styles/userforms.module.css";
import UserNavbar from "./UserNavbar";

const WarehouseForm = () => {


  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.

        //  setCompressedFile(Response)
        setUserRegisteration({
          ...userRegisteration,
          prescription: compressedResult,
        });
      },
    });
  };

  
};

export default WarehouseForm;
