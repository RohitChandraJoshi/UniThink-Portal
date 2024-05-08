import React from 'react';
import aboutusperson from '../assets/aboutusperson.jpg';
import boardmeet from 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/pexels-expressivestanley-1454360.jpg';
import { Label, TextInput, Button, Alert, Select } from 'flowbite-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HiMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'; // Import icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/Booking.css'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Contact() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phonenumber: '',
    degree: 'Masters'
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country || !formData.phonenumber || !formData.degree) {
      return setErrorMessage('Please fill all the details');
    }
    try {
      setLoading(true);
      const response = await axios.post('https://unithink-corp.onrender.com/api/SessShort/', formData);
      console.log('Data sent successfully:', response.data);
      setLoading(false);
      setSuccessMessage('Form submitted successfully!');
      toast.success('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        country: '',
        phonenumber: '',
        degree: ''
      });
      setErrorMessage(null);
    } catch (error) {
      console.error('Error sending data:', error);
      setLoading(false);
      setErrorMessage('Failed to submit form. Please try again later.');
      toast.error('You have already Registered once');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='flex relative'>
      <div className='background-image absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${boardmeet})`, opacity: '0.5', backgroundBlendMode: 'multiply' }}></div>
      <div className='w-full md:w-2/3'>
        <div className='mx-auto justify-items-center'>
          <div className='mx-auto text-center'>
            <div className="sttt">
              <h1 className='font-bold text-3xl md:text-4xl lg:text-4xl text-black relative flex flex-col items-center'>
                <span className='mt-10'>REQUEST FREE CONSULTATION</span>
                <span className='relative mt-2'>
                  <span className='h-1 bg-orange-500 w-20 block'></span>
                </span>
              </h1>
            </div>
          </div>
          <div className='md:p-5 lg:p-8 mx-3 sm:mx-auto lg:mx-auto max-w-md md:max-w-lg lg:max-w-3xl mb-10'>
            <div className='discover' >
              <p className='text-base md:text-lg text-center md:text-left'>Book a session now! Don't worry, we won't charge you for anything...</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label value='Name*' />
                <TextInput
                  type='text'
                  placeholder='Enter your name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange} />
              </div>
              <div>
                <Label value='Email*' />
                <TextInput
                  type='email'
                  placeholder='Enter your email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange} rightIcon={HiMail} />
              </div>
              <div>
                <Label value='Phone*' />
                <TextInput
                  type='number'
                  placeholder='Enter your number'
                  id='phonenumber'
                  value={formData.phonenumber}
                  onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="degree" value="Select your degree*" />
                <Select id="degree" value={formData.degree} onChange={handleChange} required>
                  <option value="Masters">Masters</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="PhD">PhD</option>
                </Select>
              </div>
              <div>
                <Label value='Country*' />
                <TextInput
                  type='text'
                  placeholder='Enter your preferred country'
                  id='country'
                  value={formData.country}
                  onChange={handleChange} />
              </div>
              <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>{loading ? 'Booking...' : 'Book Now!'}</Button>
            </form>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/3 p-4' style={{ zIndex: '1' }}>
        <div className='contact-box'>
          <h2 className='font-bold'>GET IN TOUCH</h2>
          <p className="slogan">Connect with UniThink Education International for an initial consultation with our experts. We delve into the specifics of your situation to provide you with tailored solutions and present the best options available. Just a minute of your time is all it takes. Expect a prompt response as we prioritize your needs and strive to deliver excellence.</p>

          <div className="contact-details">
            <p style={{ fontWeight: 'bold' }} ><HiOutlinePhone /> +9900911649 <br /> +9663514338 </p>
            <p ><HiOutlineLocationMarker /> 305, Tropical Terrace, Basavanagar, <br /> Doddanekkundi, Bangalore North, Bangalore- <br /> 560037, Karnataka</p>
            <p style={{ fontWeight: 'bold' }} ><HiMail /> sheelan@unithink.in</p>
          </div>
          <div className="social-icons">
            <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;