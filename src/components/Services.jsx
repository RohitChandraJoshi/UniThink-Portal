import React from "react";
import { FaCheck } from "react-icons/fa";
import service from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service.png";
import service1 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service1.png";
import service2 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service2.png";
import service3 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service3.png";
import service4 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service4.png";
import service5 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service5.png";
import service6 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service6.png";
import service7 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service7.png";
import service8 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service8.png";
import service9 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service9.png";
import service10 from "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/assets/service10.png";



const Services = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1920px] mx-auto lg:py-16 py-10 border-b">
        <div className="w-11/12 mx-auto lg:flex">
          <div className="lg:px-8 flex flex-col justify-center gap-6">
            {/* Heading */}
            <div className="text-3xl">
              <h1 className="uppercase text-center font-bold tracking-widest text-gray-800 text-left mb-8">
                Services Offered
              </h1>
            </div>
            <div>
  {/* Replace 'image-url.jpg' with the actual URL of your image */}
  <img src={service} alt="Description of the image" />
</div>
{/* 
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service1} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Career Guidance</h2>
                      <p className="text-sm text-gray-200">Offering personalized counseling to help students explore their interests, strengths, and potential career paths, guiding them towards fulfilling professional futures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service2} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">University Selection</h2>
                      <p className="text-sm text-gray-200">Assisting students in identifying the most suitable universities based on their academic background, interests, and career goals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service3} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Admission Assistance</h2>
                      <p className="text-sm text-gray-200">Providing guidance and support throughout the university application process, including application strategy, documentation, and submission.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service4} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Visa Guidance</h2>
                      <p className="text-sm text-gray-200">Assisting students with visa application procedures, documentation requirements, and interview preparation to facilitate a smooth transition to their chosen study destination.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service5} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Scholarship Support</h2>
                      <p className="text-sm text-gray-200">Helping students explore scholarship opportunities and providing guidance on application procedures to secure financial assistance for their education.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service6} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Immigration Assistance</h2>
                      <p className="text-sm text-gray-200">Supporting students with immigration processes, including residency permits, work permits, and other legal requirements associated with studying abroad.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service7} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Test Preparation</h2>
                      <p className="text-sm text-gray-200">Offering resources and guidance for standardized tests such as the SAT, ACT, GRE, GMAT, TOEFL, and IELTS to help students achieve their desired scores.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service8} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Application Review</h2>
                      <p className="text-sm text-gray-200">Reviewing and providing feedback on students' application materials, including personal statements, essays, and resumes, to enhance their chances of acceptance.</p>
                    </div>
                  </div>
                </div>
              </div>

             
              {/* Service 2 */}
              {/* Add other service cards similarly */}
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service9} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Alumni Network</h2>
                      <p className="text-sm text-gray-200">Connecting students with alumni networks and resources to facilitate networking opportunities and career development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service10} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Post-Admission Support</h2>
                      <p className="text-sm text-gray-200">Providing ongoing support to students even after admission, including orientation assistance, academic advising, and adjustment support.</p>
                    </div>
                  </div>
                </div>
              </div>
            {/* Detailed Points */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
