import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperGallery } from '../Components/SwiperGallery'
export const OurWork = () => {
  return (
    <section className='page gallery-page' id='gallery'>
        <div className="sub-heading">
            <h1>See us <span>in action</span></h1>
        </div>
        <SwiperGallery/>
    </section>

  )
}
