import React from 'react';
import { Button } from '@heroui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero() {
  return (
    <section 
      className="relative flex items-center min-h-[80vh] px-10 md:px-20 bg-[#001212] bg-right bg-cover"
      style={{ backgroundImage: "url('/BgImg.svg')" }}
    >
      <div className="relative z-10 max-w-[500px] text-white 2xl:mx-[380px]">
        <h5 className="text-primary text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">AI SDRs (aiDRs)</h5>
        <h1 className="text-5xl font-bold leading-tight">
          More <span className="italic font-semibold">leads</span>,<br />
          less <span className="italic font-semibold">people</span>.
        </h1>
        <p className="mt-4 text-lg text-foreground">
          Train an aiDR on your ICP and messaging matrix. Activate it on a patch. 
          It will send personalized sequences to every target contact.
        </p>
        
        <Button 
          color="primary" 
          variant="solid" Icon="arrowLeft" 
          className="mt-6 px-8 py-3 text-lg rounded-lg  w-full md:w-auto text-default font-semibold"
        >
          Sign Up for the Beta <FontAwesomeIcon icon="fa-solid fa-square-arrow-up-right" className='text-black' />
        </Button>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#001212] opacity-40"></div>
    </section>
  );
}

export default Hero;
