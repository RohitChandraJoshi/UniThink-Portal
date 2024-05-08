import React from 'react'
import aboutusperson from '../assets/aboutusperson.jpg'
import boardmeet from '../assets/about3.png'
import { Label, TextInput, Button, Alert,Select } from 'flowbite-react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

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
    <div>
      {/* top section */}
      <div className="relative max-w-full">
  <div style={{ backgroundImage: `url(${boardmeet})`, filter: 'blur(8px)' }} className="p-20 md:p-80 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16 lg:mt-0 md:mt-20 mt-28 relative">
    <div className="absolute inset-0"></div>
  </div>
  <div className="absolute inset-0 flex flex-col justify-center items-center">
  <div className ="sttt">
  <div className="sttt">
              <h1 className='text-3xl md:text-4xl lg:text-9xl text-black relative flex flex-col items-center'>
                <span className='mt-10'>About us</span>
                <span className='relative mt-2'>
                  <span className='h-1 bg-orange-500 w-20 block'></span>
                </span>
              </h1>
            </div>

  </div>
  
   
    <div className="discover">
      <p className="w-full lg:pt-10 lg:pb-3 lg:text-base text-[10px] pt-3 text-center text-gray-900">UEI: Bridging education and business realms, fostering collaboration for optimized processes and resource development."</p>
    </div>
    <Link to='/booking'>
    <Button size="xl" outline pill gradientDuoTone="pinkToOrange" className="text-xs z-10" onClick={scrollToTop}  >Meet us at</Button>
    </Link>
    
  </div>
  
</div>


          
      {/* main content page */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">who we are</h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <p className="lg:text-lg md:text-base text-sm text-center text-neutral-700 font-medium leading-relaxed">
            UniThink Education International is dedicated to the education and business for helping them set their processes, developing their human resources, manage the entire supply chain end to end. It's a network connecting top leaders of education and industry and establish the dialogue for capturing the opportunities which are amicable for both.
          </p>
        </div>
      </div>
      {/* VISIONS */}
      <div className="w-full mx-auto mt-10">
  {/* heading */}
  <div className="w-1/2 border-b border-black mx-auto">
    <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">UEI Envisions</h1>
  </div>
  <div className="w-11/12 mx-auto mt-7">
    <ul className="w-full list-disc p-2">
      <li className="lg:text-lg text-sm text-neutral-700 font-medium"><span className="font-bold">Global Leadership:</span> Being a global leader in empowering individuals for unparalleled career growth.</li>
      <li className="lg:text-lg text-sm text-neutral-700 font-medium"><span className="font-bold">Seamless Integration:</span> Seamlessly integrating tailored education choices with unique cultural identities and personal aspirations.</li>
      <li className="lg:text-lg text-sm text-neutral-700 font-medium"><span className="font-bold">Executive Development Catalyst:</span> Catalyzing professionals at all levels for personal growth and organizational success.</li>
      <li className="lg:text-lg text-sm text-neutral-700 font-medium"><span className="font-bold">Innovation and Transformation:</span> Leading continuous innovation and positive transformations in education and business.</li>
      <li className="lg:text-lg text-sm text-neutral-700 font-medium"><span className="font-bold">Collaborative Excellence:</span> Creating a world where education and business collaborate seamlessly, contributing to global excellence.</li>
    </ul>
  </div>
</div>
      {/* FOUNDER */}
      <div className="w-full mx-auto lg:mt-10 my-5">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">Meet the Founder</h1>
        </div>
        {/* main content */}
        <div className="w-11/12 mx-auto mt-4 lg:flex ">
          <div className="lg:w-1/2 w-full rounded-3xl p-4">
            <img src={aboutusperson} alt="" className=" rounded-lg" />
          </div>
          {/*content about the founder*/}
          
          <div className="lg:w-1/2 w-11/12 mx-auto lg:p-4 pb-6">
            <h4 className="lg:text-4xl text-lg text-center mt-3">Dr. Sheelan Misra</h4>
            <p className="text-left lg:text-lg lg:mt-5 mt-1 text-base">Higher education designing and marketing expert with business acumen, passionate for maximizing learning environment driven by innovation and collaboration</p>
            <p className="lg:text-lg text-left mt-1 text-base">A Mentor, Coach, and Career Management Advisor, Dr. Sheelan Misra has a keen interest in developing people in the areas of Leadership, Personal Branding, Corporate Branding, and Entrepreneurship. She was leading the Department of Management Studies at New Horizon College of Engineering, Bangalore. She was also the Dean of the New Horizon Centre of Innovation, Incubation, and Entrepreneurship. Presently she is associated with Yangpoo Executive Education as the Vice President for Higher Education Partnerships and represents Harvard Business Publishing and Harvard Business School Online In India and five other countries, namely Singapore, UAE, Australia, Malaysia and Canada.</p>
          </div>
        </div>
      </div>
      {/* form*/}
      <div className='p-5  bg-gray-200 to-amber-100 border rounded-2xl shadow-lg lg:mx-96 md:mx-28 sm:mx-10 mb-10'>
                        <p className='text-lg text-center md:text-left'>Book a session now! Dw! We won't charge you for anything...</p>
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
  )
}

export default About