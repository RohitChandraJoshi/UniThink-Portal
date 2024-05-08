import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Logo from 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/logo.jpg'; // Import your logo image
import 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/CountryDetails.css'
import uk from '../assets/uk.jpg'
function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unithink-corp.onrender.com/api/country/');
        const responseData = response.data;
        setCountries(responseData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error); 
      }
    };
    fetchData();
  }, []);

  return (
    <div className='px-8 bg-white'>
      {loading ? ( // Render logo with blinking effect while loading
        <div className="flex justify-center items-center h-screen">
          <div className="logo-container">
  <img src={Logo} alt="Logo" className="logo" />
</div>
        </div>
      ) : (
        <>
          <div className="sttt">
              <h1 className='mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black relative flex flex-col items-center'>
                <span className='mt-10'>LIST OF COUNTIRIES</span>
                <span className='relative mt-2'>
                  <span className='h-1 bg-orange-500 w-20 block'></span>
                </span>
              </h1>
            </div>
          
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
            {countries && countries.map((country) =>(
              <div key={country._id} className="p-2 pb-10">
                <Link to={`/countrydetail/${country.c_id}`}>
                  <Card className="max-w-sm scale-110 hover:scale-105 shadow-lg" imgSrc={uk || "https://pics.craiyon.com/2023-11-01/b6267e26f11842ac8fa017e010f6e994.webp"} horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {country.c_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {country.c_about}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <span className='font-bold'>World Rank:</span> {country.c_worldrank}
                    </p>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Countries;
