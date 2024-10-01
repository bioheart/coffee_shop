import React from 'react'
import Image from 'next/image';

const galleryImage = (rootUrl) => {
  let galleryImage = [];
  for(let i=1;i<5;i++){
    console.log('URL ==> ', `${rootUrl}/${i}.jpg`);
    galleryImage.push(
      <div key={i} className="w-1/4 mx-1">
        <img key={i} alt={`image_${i}`} src={`${rootUrl}/${i}.jpg`} className="w-full h-[95%] rounded-lg"></img>
      </div>
    )
  }
  return galleryImage;
}

const Gallery = ({title, rootUrl}) => {
  
  const gallery = galleryImage(rootUrl);
  
  return (
    <>
     <p className="w-full text-left bold italic underline">{title}</p>
      <div className="w-full flex">
        {
          gallery
        }
      </div>
    </>
  )
}

export default Gallery