import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Label, TextInput, Button, Alert,Select } from 'flowbite-react';
import Booking from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/Booking.jsx"
import 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/CountryDetails.css'
function CountryDetails() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
  const { countryid } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {

    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://unithink-corp.onrender.com/api/specCountry/${countryid}`);
        setCountryDetails(response.data[0]); // Assuming the response is an array with one object
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [countryid]);

  return (
    <div className="container mx-auto px-4 py-8">
      {countryDetails ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{countryDetails.c_name}</h1>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img src={countryDetails.top_image} alt={countryDetails.c_name} className="object-cover rounded-lg shadow-lg" />
          </div>
          <p className="text-gray-800 mb-4">{countryDetails.about}</p>
          <h2 className="text-xl font-semibold mb-2">Top Reasons to Study in {countryDetails.c_name}</h2>
          <ul className="list-disc list-inside mb-4">
            {countryDetails.top_reasons.map((reason, index) => (
              <li key={index} className="text-gray-800">{reason}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Universities in {countryDetails.c_name}</h2>
          <ul className="list-disc list-inside mb-4">
            {countryDetails.uni_list.map((university, index) => (
              <li key={index} className="text-gray-800">{university}</li>
            ))}
          </ul>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">Number of International Students:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.num_stud_international}</p>
          </div>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">Average Cost of Living:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.avg_cost_living}</p>
          </div>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">Average Hostel Price:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.avg_hostel_price}</p>
          </div>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">Visa Type:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.visa_type}</p>
          </div>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">Visa Processing Time:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.visa_processing_time}</p>
          </div>
          <div className="flex mb-4">
            <p className="font-bold text-black w-2/5">English Tests:</p>
            <p className="text-gray-800 w-3/5">{countryDetails.english_tests}</p>
          </div>
          <Link to='/booking'  element={<Booking/>}>
                  <Button className="bg-black text-white py-3 px-6 hover:bg-red-500" onClick={scrollToTop} >
                    Book Now!
                  </Button>
                </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CountryDetails;
