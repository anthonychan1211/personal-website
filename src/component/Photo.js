import React from 'react'
import ImageGallery from 'react-image-gallery';

const Photo = ({ photoRef,forwardedRef }) => {

const images = [];

for(let i = 1; i <= 22; i++){
    images.push({
      original: `photo${i}.jpg`,
      thumbnail: `thumbnail${i}.jpg`,
    })
}

    return (
        <div ref={forwardedRef} className="photo-container">
            <h1>As a Photographer</h1>
            <p>
            Anthony took photography as hobby since 2014. He was inivited to work in events such as recitals, concerts, wedding ceremony. However he personally inclined to capture the beauty of nature.
            </p>

            <div id="gallery">
              
            <ImageGallery items={images} />
            </div> 
            </div>
    )
}

export default Photo
