import React from 'react'
import toolbox from '../Assets/toolbox.png'
import { MdOutlineCleaningServices, MdOutlineWindow, MdOutlineWaterDrop, 
  MdOutlineFormatPaint, MdOutlineHomeRepairService, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md'

export const Services = () => {
  const servicesInfo = [{
    title: "Home Cleaning",
    description: "Professional home cleaning services ensuring every corner of your home is spotless and fresh. From deep cleaning to regular maintenance, we make your space shine!",
    icon: <MdOutlineCleaningServices size="md-20" className='service-icon'/>
  },{
    title: "Window Cleaning",
    description: "Expert window cleaning services that leave your windows sparkling and streak-free. We ensure a clear view and a brighter home, inside and out",
    icon: <MdOutlineWindow size="md" className='service-icon'/>
  },{
    title: "Pressure Wash",
    description: "Expert pressure washing services to clean and restore your property's exterior, removing dirt, grime, and stains for a fresh, like-new appearance.",
    icon:<MdOutlineWaterDrop size="md" className='service-icon'/>
  },{
    title: "Interior/Exterior Painting",
    description:"Transform your home with our interior and exterior painting services. We deliver meticulous craftsmanship and attention to detail, refreshing living spaces with vibrant colors indoors and enhancing curb appeal with durable, weather-resistant finishes outdoors.",
    icon:<MdOutlineFormatPaint size="md" className='service-icon'/>
  },{
    title: "Basic Plumbing",
    description:"Trust our skilled plumbers to handle your basic plumbing needs with efficiency and expertise. We offer services such as leak repairs, fixture replacements, and routine maintenance to maintain the integrity and functionality of your plumbing system",
    icon: <MdOutlinePlumbing size="md" className='service-icon'/>
  },{
    title: "Basic Electrical",
    description:"Our essential electrical services designed to meet your home's electrical needs. Installing new outlets, or troubleshooting electrical problems, our skilled technicians ensure your home remains safe and functional.",
    icon: <MdOutlineElectricalServices size="md" className='service-icon'/>
  },{
    title: "Drywall Patch",
    description:"Trust our team to handle your drywall patching needs with professionalism and attention to detail. We specialize in repairing holes, dents, and imperfections in drywall.",
    icon:<MdOutlineHomeRepairService size="md" className='service-icon' />
}]

  return (
    <section className='service-page page' id='services'>
        <div className="services-content">
            <div className="sub-heading">
                <h1>The Services we provide <br/> <span>for our customers</span></h1>
                <img src={toolbox} alt="toolbox" />
            </div>
            <div className="services-list">
            {servicesInfo.map ((service,id) => {
              return (
                <div className={`service-${id} service-item`} key={id}>
                  <div className="icon-container">
                    {service.icon}
                  </div>
                  <div className="service-text">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              )
            })}
            </div>
        </div>
    </section>
  )
}
