import React from 'react'
import { SwiperGallery } from '../Components/SwiperGallery'
export const OurWork = () => {
  return (
    <section className='page gallery-page' id='gallery'>
        <div className="sub-heading">
            <h1>Our Work <span>in action</span></h1>
            <p>Explore our gallery to see the quality and craftsmanship we bring to every project</p>
        </div>
        <SwiperGallery/>
    </section>

  )
}
