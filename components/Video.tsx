import React from 'react'

function Video() {
  return (
        <div style={{ display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap",
            padding:"20px"
         }}>
        
        <video src="/videos/kenangan.mp4" width={360} height={640} loop autoPlay></video>
        <iframe width="360" height="640"
        src="https://www.youtube.com/embed/_AJmn09a7Xg"
        frameBorder="0"
        allowFullScreen></iframe>

        <iframe width="360" height="640"
        src="https://www.youtube.com/embed/eyoyaNFu3vo"
        frameBorder="0"
        allowFullScreen></iframe>

        </div>

  )
}

export default Video
