import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../Styling/Contact.css'

export const Contact = () => {
    const defaultFormValues = {
        fname:'',
        lname:'',
        address:'',
        email:'',
        phone:'',
        message:''
    }

    const [form, setForm] = useState({defaultFormValues})

    const handleChange = (event) => {
        setForm( (prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setForm( () => (defaultFormValues))
    }

    const handleSubmit = (event) => {
        resetForm();
        event.preventDefault();

        const templateParams = {
            fname:form.fname,
            lname:form.lname,
            address:form.address,
            phone:form.phone,
            message:form.message
        }

        emailjs.send('service_yu3xbte','template_0gbxxst',templateParams,'kq-ZfpeLDvV8TYH26')
    }
  return (
    <section className='contact-page page' id='contact'>
        <div className="sub-heading">
            <h1>Contact us and get your <span>free quote</span></h1>
            <p>Fill the information below to have us scheduled you for a free quote.</p>
        </div>
            <form action="Submit">
                <div className="fields-group">
                    <div className="form-field">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name='fname' id='fname' value={form.fname} onChange={handleChange} required/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="lname" id='lname' value={form.lname} onChange={handleChange} required/>
                    </div>
                </div>

                <label htmlFor="address">Full Address</label>
                <input type="text" name='address' id='address' value={form.address} onChange={handleChange} required/>

                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' value={form.email} onChange={handleChange} required/>

                <label htmlFor="phone">Phone Number</label>
                <input type="text" name='phone' id='phone' value={form.phone} onChange={handleChange} required/>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows='10' placeholder='Write more about what you need done...' required></textarea>

                <button className='contact-btn' type="submit" onClick={handleSubmit}> Send Message </button>
            </form>
    </section>
  )
}
