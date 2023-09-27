import React, { useState } from "react";

const ImageToBase64Converter = () => {
  const [base64Image, setBase64Image] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {base64Image && <img src={base64Image} alt="Converted to Base64" />}
    </div>
  );
};

export default ImageToBase64Converter;
