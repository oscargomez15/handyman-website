import React from 'react'
import toolbox from '../Assets/toolbox.png'
import '../Styling/Services.css'
import { motion } from 'framer-motion'
import { MdOutlineCleaningServices, MdOutlineWindow, MdOutlineWaterDrop, 
  MdOutlineFormatPaint, MdOutlineHomeRepairService, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md'
import { IoHammerOutline } from 'react-icons/io5'

export const Services = () => {
  const servicesInfo = [{
    title: <h2>Residential <br/> Cleaning</h2>,
    description: "From deep cleaning to regular maintenance, we make your space shine!",
    icon: <MdOutlineCleaningServices size="md-20" className='service-icon'/>
  },{
    title: <h2>Window <br/> Cleaning</h2>,
    description: "Expert window cleaning services that leave your windows sparkling and streak-free.",
    icon: <MdOutlineWindow size="md" className='service-icon'/>
  },{
    title:<h2>Pressure <br/> Wash</h2>,
    description: "Clean and restore your property's exterior, removing dirt, grime, and stains.",
    icon:<MdOutlineWaterDrop size="md" className='service-icon'/>
  },{
    title: <h2>Professional <br/> Painting</h2>,
    description:"Refreshing living spaces with vibrant colors indoors and enhancing curb appeal.",
    icon:<MdOutlineFormatPaint size="md" className='service-icon'/>
  },{
    title: <h2>Basic <br/> Plumbing</h2>,
    description:"Trust our skilled plumbers to handle your basic plumbing needs with efficiency and expertise.",
    icon: <MdOutlinePlumbing size="md" className='service-icon'/>
  },{
    title: <h2>Basic <br/> Electrical</h2>,
    description:"Our skilled technicians ensure your home remains safe and functional.",
    icon: <MdOutlineElectricalServices size="md" className='service-icon'/>
  },{
    title: <h2>Drywall <br/> Patch</h2>,
    description:"We specialize in repairing holes, dents, and imperfections in drywall.",
    icon:<MdOutlineHomeRepairService size="md" className='service-icon' />
},{
  title: <h2> Demolition <br/> Work </h2>,
  description:"Expert demolition services for safe and efficient removal of structures, walls, and debris.",
  icon:<IoHammerOutline size="md" className='service-icon'/>
}]

  return (
    <section className='service-page page' id='services'>
        <div className="services-content">
            <div className="sub-heading">
                <h1>The Services we provide <span>for our customers</span></h1>
            </div>

            <div className="services-list">
            {servicesInfo.map ((service,id) => {
              return (
                <motion.div
                className={`service-${id} service-item`}
                key={id}
                initial={{scale:1,x:-20, opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{x:0,opacity:1}}
                transition={{
                  x:{duration:id*0.5}
                }}>
                  {service.icon}
                  <div className="service-text">
                    {service.title}
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              )
            })}
            </div>
        </div>
    </section>
  )
}
