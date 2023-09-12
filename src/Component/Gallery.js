import React from 'react'
import '../Style/Gallery.css'
import img1 from '../Img/o1.jpg'
import img2 from '../Img/o2.jpg'
import img3 from '../Img/o3.jpg'
import img4 from '../Img/o4.jpg'
import img5 from '../Img/suite-room.jpg'
import img6 from '../Img/delux.jpg'

const Gallery = () => {



  return (
    <>

<div className="container-gal">
        <center>
            <h1>~ Gallery ~</h1>
            
        </center>
      </div>
      
<div class="container">
 <div class="card-container">
 
  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img1})`}}></div>
  </div>

  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img2})`}}></div>
  </div>

  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img3})`}}></div>
  </div>
  
  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img4})`}}></div>
  </div>
  
  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img5})`}}></div>
  </div>
  
  <div class="card">
   <div class="card-image" style={{backgroundImage: `url(${img6})`}}></div>
  </div>
 </div>
</div>

    </>
  )
}

export default Gallery
