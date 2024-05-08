import React, { useState, useEffect } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.jpg';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import "G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/components/BookNow.css"
import 'G:/Projects/Unithink/Unithink-main/Unithink-main/Client/src/pages/Booking.css'
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Change header transparency when scrolling
        if (scrollPosition > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    };
  
    return (
      <Navbar
        fluid
        rounded
        className={`top-0 w-full z-10 shadow-md ${isScrolled ? 'scrolled' : ''}`}
      >
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-16 sm:h-14 md:h-16 lg:h-20" alt="Unithink" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="/booking" onClick={scrollToTop}>
            <Button gradientDuoTone="pinkToOrange" outline pill>
              Get Started
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/about" onClick={scrollToTop}>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/countries" onClick={scrollToTop}>
              Countries
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/faqs" onClick={scrollToTop}>
              FAQs
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
          </Navbar.Link>

        </Navbar.Collapse>
        <div className="social-icons_Header">
            <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />
          </div>
      </Navbar>
    );
  }
  
  export default Header;