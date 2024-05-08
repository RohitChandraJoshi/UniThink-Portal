import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import logo from '../assets/logo.jpg';
function FooterCom() {
  return (
    <Footer bgLight>
      <div className="w-full bg-white to-amber-100 ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 mx-auto justify-items-center">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className=" px-4 py-6 justify-items-center mx-auto">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center pb-5">

            <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer"icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            
          </div>
          <Footer.Copyright href="#" by="Unithink™" year={new Date().getFullYear()} />
          
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom