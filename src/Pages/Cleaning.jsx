import React from 'react'
import { Navigation } from '../Components/Navigation'
import '../Styling/Painting.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { PiWall } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Contact } from './Contact'
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPeopleCarryBox } from "react-icons/fa6";


export const Cleaning = () => {
    const generalQuestions = [
        {
            question: "What types of painting services do you offer?",
            answer: "We provide interior and exterior painting, including walls, ceilings, doors, trim, crown molding, and baseboards."
        },
        {
            question: "Do you offer free estimates?",
            answer: "Yes, we offer free, no-obligation estimates for all painting projects."
        },
        {
            question: "What areas do you service?",
            answer: "We serve Cape Coral, Fort Myers, Estero, Naples, Bonita Springs and the surrounding regions. Contact us to confirm if we cover your location."
        },
        {
            question: "What kind of paint do you use?",
            answer: "We use high-quality, durable paints from trusted brands to ensure a long-lasting finish."
        },
        {
            question: "Do you offer color consultation?",
            answer: "Yes, our experts can help you choose the perfect colors for your space based on your style and preferences."
        }
    ];

    const preparationAndProcessQuestions = [
        {
            question: "How do you prepare the surfaces before painting?",
            answer: "We clean, sand, and prime surfaces to ensure a smooth and long-lasting finish."
        },
        {
            question: "Do I need to move my furniture before painting?",
            answer: "We recommend clearing the area, but our team can help move furniture and cover items to protect them."
        },
        {
            question: "Will you fix cracks or holes before painting?",
            answer: "Yes, we repair minor cracks, holes, and imperfections to create a flawless surface."
        },
        {
            question: "How long does the painting process take?",
            answer: "The timeline varies based on the size and scope of the project. We’ll provide an estimated timeline during the consultation."
        },
        {
            question: "What do I need to do to prepare my home for painting?",
            answer: "We’ll guide you through preparation steps, including clearing the area and removing wall decor."
        }
    ];

    const pricingAndPaymentQuestions = [
        {
            question: "How much does it cost to paint a room?",
            answer: "Pricing depends on the size of the room, the type of paint, and the condition of the surfaces. Contact us for a detailed quote."
        },
        {
            question: "Do you require a deposit?",
            answer: "We typically require a deposit to secure your booking. The amount will be outlined in your contract."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, check, and debit card. Let us know your preference!"
        }
    ];

    const postPaintingAndMaintenanceQuestions = [
        {
            question: "How do I maintain my painted surfaces?",
            answer: "Regular cleaning with a damp cloth and avoiding harsh chemicals will help maintain the finish."
        },
        {
            question: "Do you offer a warranty on your work?",
            answer: "Yes, we stand by our work and offer a warranty for your peace of mind."
        },
        {
            question: "Will you clean up after the project is finished?",
            answer: "Absolutely! We leave your space clean and tidy, removing all painting materials and waste."
        }
    ];

    const customRequestsAndSpecialProjectsQuestions = [
        {
            question: "Can you match a specific paint color?",
            answer: "Color matching in most cases will not achieve the desired results due to fading of the existing color. We recommend repainting the complete area instead of matching."
        },
        {
            question: "Do you paint commercial properties?",
            answer: "Yes, we offer painting services for both residential and commercial properties."
        },
        {
            question: "Can you work on textured walls or unique surfaces?",
            answer: "Yes, we have experience with textured walls, wood, metal, and other unique surfaces."
        },
        {
            question: "Do you offer eco-friendly paint options?",
            answer: "Yes, we provide low-VOC and eco-friendly paint options for environmentally conscious customers."
        }
    ];

    const toggleAccordion = (e) => {
        e.currentTarget.classList.toggle("active");

        const panel = e.currentTarget.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    }

  return (
    <section className='page'>
        <div className='landing-hero'>
            <div className="column card">
                <div className="column-sub">
                    <h1 className='section-title'> Sparkling Clean Spaces Made Easy: <span> Professional Cleaning Services </span> Tailored to Your Needs </h1>
                    <p>  We specialize in residential and commercial cleaning, offering deep cleans, move-in/move-out services, and regular maintenance to keep your space spotless.
                    </p>
                </div>

                <div className="button-group">
                    <a href="#contact"><button> Get Free Estimate </button></a>
                </div>            
            </div>

            <div className="column video-column">
                <video muted autoPlay loop>
                    <source src="https://oscargomez-webportfolio.s3.us-east-1.amazonaws.com/painting-hero.mp4" />  
                </video>
            </div>
        </div>

        <div className="list-container card">
            <h1 className='section-subtitle'> An overview of our Cleaning Services:</h1>
            <div className="painting-list">
                <div className="item-card">
                    <IoHomeOutline size="100" />
                    <h2> Residential Cleaning </h2>
                    <p> Whether refreshing worn surfaces or adding a
                        stylish touch, we deliver smooth, flawless finishes that enhance
                        durability and beauty. Get a Free Estimate.
                    </p>
                </div>

                <div className="item-card">
                    <MdCleaningServices size="100"/>
                    <h2> Deep Cleaning </h2>
                    <p> From bold colors to subtle tones, we create a flawless finish that
                        brings your vision to life. Perfectly applied paint, smooth
                        surfaces, and a refreshed ambiance.
                    </p>
                </div>
                <div className="item-card">
                    <FaPeopleCarryBox size="100" />
                    <h2>Move-in/Move Out</h2>
                    <p>Add elegance to your home with our crown molding and baseboard
                        painting services. We ensure clean lines, smooth finishes, and
                        meticulous attention to detail.
                    </p>
                </div>
                <div className="item-card">
                    <HiOutlineOfficeBuilding  size="100"/>
                    <h2> Commercial Cleaning </h2>
                    <p>Using high-quality paints and expert techniques,
                    we deliver durable finishes that withstand the elements while
                    enhancing your property's beauty. 
                    </p>
                </div>

            </div>

            <div className="color-consultation">
                <h2> Ready but struggling with the colors, sheen, and shades? </h2>
                <p> We provide expert guidance to bring your vision to life. Get your free Color Consultation + Free Estimate. </p>
                <a href="tel:+17867507518"><button> Call Now </button></a>
            </div>
        </div>

        <div className="card faq">
            <div className="faq-title">
                <h1 className='section-subtitle'>Frequently Asked Question</h1>
                <p> Quick answers to questions you may have</p>
            </div>
            <div className="questions-wrapper">
                <div className="questions-container">
                    <div className="questions-title accordion" onClick={toggleAccordion} >
                        <h2>General</h2>
                        <MdKeyboardArrowDown size="30"/>
                    </div>
                    <ol className='questions-list panel'>
                        {generalQuestions.map((item, id) => {
                            return (
                            <li className='question-item'>
                                <p className='question'>{item.question}</p>
                                <p className='answer'>{item.answer}</p>
                            </li>
                            )
                        })}
                    </ol>
                </div>

                <div className="questions-container">
                    <div className="questions-title accordion" onClick={toggleAccordion}>
                        <h2>Preparation and Process </h2>
                        <MdKeyboardArrowDown size="30"/> 
                    </div>
                    <ol className='questions-list panel'>
                        {preparationAndProcessQuestions.map((item, id) => {
                            return (
                            <li className='question-item'>
                                <p className='question'>{item.question}</p>
                                <p className='answer'>{item.answer}</p>
                            </li>
                            )
                        })}
                    </ol>
                </div>

                <div className="questions-container">
                    <div className="questions-title accordion" onClick={toggleAccordion}>
                        <h2>Pricing and Payment </h2>
                        <MdKeyboardArrowDown size="30"/>
                    </div>
                    <ol className='questions-list panel'>
                        {pricingAndPaymentQuestions.map((item, id) => {
                            return (
                            <li className='question-item'>
                                <p className='question'>{item.question}</p>
                                <p className='answer'>{item.answer}</p>
                            </li>
                            )
                        })}
                    </ol>
                </div>

                <div className="questions-container">
                    <div className="questions-title accordion" onClick={toggleAccordion}>
                        <h2>Post-Paint and Maintenance</h2>
                        <MdKeyboardArrowDown size="30"/>
                    </div>
                    <ol className='questions-list panel'>
                        {postPaintingAndMaintenanceQuestions.map((item, id) => {
                            return (
                            <li className='question-item'>
                                <p className='question'>{item.question}</p>
                                <p className='answer'>{item.answer}</p>
                            </li>
                            )
                        })}
                    </ol>
                </div>

                <div className="questions-container">
                    <div className="questions-title accordion" onClick={toggleAccordion}>
                        <h2>Custom Request</h2>
                        <MdKeyboardArrowDown size="30"/>
                    </div>
                    <ol className='questions-list panel'>
                        {customRequestsAndSpecialProjectsQuestions.map((item, id) => {
                            return (
                            <li className='question-item'>
                                <p className='question'>{item.question}</p>
                                <p className='answer'>{item.answer}</p>
                            </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
        <Contact/>
    </section>
  )
}
