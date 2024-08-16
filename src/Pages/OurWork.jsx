import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperGallery } from '../Components/SwiperGallery'
export const OurWork = () => {
  return (
    <section className='page gallery-page' id='ourwork'>
        <div className="sub-heading">
            <h1>See us in action</h1>
        </div>
        <SwiperGallery/>
    </section>

  )
}
