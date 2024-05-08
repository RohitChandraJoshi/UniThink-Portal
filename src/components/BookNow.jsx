import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, TextInput, Button, Select, Checkbox } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import heroimage from 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/fronback.png'
import Booking from '../pages/Booking';

import '../components/BookNow.css';

function BookNow() {
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
        studyDestination: '',
        studyPlan: '',
        fundSource: '',
        studyLevel: '',
        agreeTerms: false,
        contactPreference: false,
        receiveUpdates: false
    });
    const [successMessage, setSuccessMessage] = useState(null);
    const [statistics, setStatistics] = useState({
        universitiesTied: 0,
        coursesAvailable: 0,
        satisfactionRate: 0,
        visaAcceptance: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Update statistics with increasing count
            setStatistics(prevStats => ({
                ...prevStats,
                universitiesTied: prevStats.universitiesTied < 1500 ? prevStats.universitiesTied + 20 : 1500,
                coursesAvailable: prevStats.coursesAvailable < 25 ? prevStats.coursesAvailable + 1 : 25,
                satisfactionRate: prevStats.satisfactionRate < 2500 ? prevStats.satisfactionRate + 30 : 2500,
                visaAcceptance: prevStats.visaAcceptance < 98 ? prevStats.visaAcceptance + 1 : 98
            }));
        }, 10);

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.country || !formData.phonenumber || !formData.studyDestination || !formData.studyPlan || !formData.fundSource || !formData.studyLevel) {
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
                studyDestination: '',
                studyPlan: '',
                fundSource: '',
                studyLevel: '',
                agreeTerms: false,
                contactPreference: false,
                receiveUpdates: false
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
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.id]: value });
    };

    return (
        <div className="bg-[#F0F4F6]">
            <div className="mx-auto max-w-[1600px]">
            <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: `url(${heroimage})` }}></div>
                <div className="mx-auto lg:flex">
                  
                    
                    <div className="lg:w-3/3 w-full flex flex-col justify-top lg:mx-0 md:mx-4 px-4 pb-3">
                      
                        <div className="mx-auto">
                            <div className="mt-5">
                                <div className="study">
                                    <h6 className="font-popsemi lg:text-2xl md:text-xl text-xl font-extrabold">
                                    Dream Big, Learn Bigger
                                    </h6>
                                </div>
                            </div>
                            <div className="sttt">
                                <div className="mt-6">
                                    <h1 className="font-poppinsBold capitalize lg:text-7xl md:text-2xl text-5xl font-extrabold ">
                                        UniTh
                                        <span className="text-red-500 slide-in">
                                            i
                                        </span>
                                        nk <br />
                                        Boundless learning
                                    </h1>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="discover">
                                    <p className="text-[#737373] lg:text-xl">
                                    From Mumbai to Massachusetts: Your personalized journey to prestigious universities.
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link to='/booking' element={<Booking />}>
                                    <Button className="bg-black text-white py-3 px-6 hover:bg-red-500" onClick={scrollToTop}>
                                        Book Now!
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-10 lg:px-2 md:grid-cols-2 lg:grid-cols-4 mx-auto text-center justify-items-center pt-10 pb-10">
                            <div className="border rounded-lg p-6 bg-gradient-to-r from-red-200 to-red-100 shadow-md">
                            <h1 className='font-bold text-3xl text-red-600'>{statistics.coursesAvailable}+</h1>
                            <p className="text-gray-700">Years of Career Counselling </p>
                        </div>
                        <div className="border rounded-lg p-6 bg-gradient-to-r from-green-200 to-green-100 shadow-md">
                            <h1 className='font-bold text-3xl text-green-600'>{statistics.universitiesTied}+</h1>
                            <p className="text-gray-700">Partner Universites</p>
                        </div>

                        <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-200 to-purple-100 shadow-md">
                            <h1 className='font-bold text-3xl text-purple-600'>{statistics.satisfactionRate}+</h1>
                            <p className="text-gray-700">Students and Executives Trained</p>
                        </div>
                        
                    </div>

                        </div>
                    </div>
                    {/* right side form */}
                    <div className="mt-8 lg:w-2/3 w-full flex flex-col justify-center md:mx-4 px-2"> {/* Changed width to lg:w-2/3 */}
                        <div className='p-5 bg-gray-200 border rounded-2xl shadow-lg shadow-2xl mb-10'>
                            <p className='text-lg text-center md:text-left'>Book a session now! Don't worry! We won't charge you for anything...</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3"> {/* Adjusted gap */}
                                <div>
                                    <Label value='Name*' />
                                    <TextInput
                                        type='text'
                                        placeholder='Enter your name'
                                        id='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Email*' />
                                    <TextInput
                                        type='email'
                                        placeholder='Enter your email'
                                        id='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        rightIcon={HiMail}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Phone*' />
                                    <TextInput
                                        type='number'
                                        placeholder='Enter your number'
                                        id='phonenumber'
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Preferred Study Destination*' />
                                    <Select
                                        id="studyDestination"
                                        value={formData.studyDestination}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Destination</option>
                                        <option value="Germany">Germany</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                        <option value="France">France</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="Canada">Canada</option>
                                    </Select>
                                </div>
                                <div>
                                    <Label value='When do you plan to study*' />
                                    <Select
                                        id="studyPlan"
                                        value={formData.studyPlan}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Plan</option>
                                        {/* Add 24 options like June 2024, July 2024, ... */}
                                    </Select>
                                </div>
                                <div>
                                    <Label value='How would you fund your education?*' />
                                    <Select
                                        id="fundSource"
                                        value={formData.fundSource}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Fund Source</option>
                                        <option value="Self Funded">Self Funded</option>
                                        <option value="Parents">Parents</option>
                                        <option value="Seeking Scholarship">Seeking Scholarship</option>
                                        <option value="Bank Loan">Bank Loan</option>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="studyLevel" value="Preferred Study Level*" />
                                    <Select
                                        id="studyLevel"
                                        value={formData.studyLevel}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Study Level</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Vocational">Vocational</option>
                                        <option value="Doctorate">Doctorate</option>
                                    </Select>
                                </div>
                                {/* Additional Checkboxes */}
                                <label htmlFor="receiveUpdates" className="text-sm">
                                    UniThink will not share your details with others without your permission:
                                </label>
                                <div className="flex items-center">
                                    <Checkbox
                                        id="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="agreeTerms" className="text-sm">
                                        I agree to Unithink Terms<a href="#" className="text-blue-500">UniThink Terms</a> and <a href="#" className="text-blue-500">privacy policy</a>
                                    </label>

                                </div>
                                <div className="flex items-center">
                                    <Checkbox
                                        id="contactPreference"
                                        checked={formData.contactPreference}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="contactPreference" className="text-sm">
                                        Please contact me by phone, email or SMS to assist with my enquiry
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <Checkbox
                                        id="receiveUpdates"
                                        checked={formData.receiveUpdates}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="receiveUpdates" className="text-sm">
                                        I would like to receive updates and offers from UniThink
                                    </label>
                                </div>
                                {/* End of Additional Checkboxes */}
                                <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>{loading ? 'Booking...' : 'Book Now!'}</Button>
                            </form>
                        </div>
                        
                    </div>
                    
                    
  
                </div>
            </div>
        </div>
    );
}

export default BookNow;
