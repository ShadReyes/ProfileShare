import { useState } from "react";

interface IProfileScreenProps {}

export default function ProfileScreen(passedProps: IProfileScreenProps) {
  const [img, setImg] = useState("");

  const onQRClick = async () => {
    const res = await fetch(
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  return (
    <div>
      <button onClick={onQRClick}>Generate QR Code</button>
      <img src={img} />
    </div>
  );
}
