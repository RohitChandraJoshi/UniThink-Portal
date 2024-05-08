import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion } from 'flowbite-react';
import faqsimagebg from '../assets/faqs.png';
import homebgsm from '../assets/homebgsm.png';
import Logo from 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/logo.jpg'; // Import your logo image
import 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/CountryDetails.css'

function FAQs() {

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://unithink-corp.onrender.com/api/faq/');
        setFaqs(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className='bg-white'>
      {loading ? ( // Render logo with blinking effect while loading
        <div className="flex justify-center items-center h-screen">

          <div className="logo-container">
  <img src={Logo} alt="Logo" className="logo" />
</div>
        </div>
      ) : (
        <>
          <div style={{ backgroundImage: `url(${homebgsm})` }} className="pr-0 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16">
            <div className='flex flex-col md:flex-row md:ml-52 items-center text-center'>
              <div className="sttt">
                <h1 className='text-5xl'>
                  <span>We are here to </span>
                  <br />
                  <span >help. Ask us </span>
                  <br />
                  <span >anything!</span>
                </h1>
              </div>
              <img src={faqsimagebg} alt="" className='max-h-96 mx-auto mt-5' />
            </div>
          </div>
          <div className="discover">
            <h1 className='mx-auto text-3xl font-bold  text-center p-5'>Frequently Asked Questions</h1>
          </div>
          <Accordion collapseAll className='mr-5 ml-5'>
            {faqs.map((faq, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title>{faq.faq_ques}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-700">{faq.faq_ans}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
}

export default FAQs;