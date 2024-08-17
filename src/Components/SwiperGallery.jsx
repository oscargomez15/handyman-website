import React from 'react'
import '../Styling/Gallery.css'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SwiperGallery = () => {
    // Accessing the files in the jobs document that has the extension png, jpeg, jpg, svg.
    const images = require.context('../Assets/jobs', false, /\.(png|jpe?g|svg|JPG|jpg)$/);
    const imageFiles = images.keys().map(images);
  return (
    <div className="gallery-container">
        {/* traversing the images in the folder to render them automatically. Adding new images to the files automatically adds them. */}
        <Swiper
        slidesPerView={4}        
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        observer={true}
        observeParents={true}
        loop={true}
        breakpoints={{
            1140: {
                slidesPerView: 4
            },
            1024:{
                slidesPerView:3
            },
            768: {
                slidesPerView: 2
            },
            640:{
                slidesPerView: 1
            },
            320:{
                slidesPerView: 1
            }
        }}
        className='swiper-container'>
            {imageFiles.map((image, id) => {
                return(
                    <SwiperSlide className='swiper-slide' key={`image-${id}`}>
                        <img
                        src={image}
                        alt={`image-${id}`}
                        key={`image-${id}`}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        {/* {imageFiles.map((image, id) => {
            return(
                <motion.img
                src={image}
                alt={`image-${id}`}
                key={`image-${id}`}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                whileHover={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px', cursor:'pointer', scale:1.1}}
                transition={{duration:.5}} />
            )
        })} */}
    </div>
  )
}
