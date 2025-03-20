import React from 'react'
import { Button } from '@heroui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GetStart() {
  return (
    <section className='mt-5'>
        <div className='items-center text-center mx-4  space-y-3 md:space-y-4 sm:mx-auto'>
            <Button color="primary" variant="light" className='uppercase px-8 py-3'>
                Get Started
            </Button>
            <h1 className='font-bold text-3xl'><span className='italic font-semibold'>Embrace</span> the new era of <span className='italic font-semibold'>outbound</span>.</h1>
            <p className='text-foreground leading-tight max-w-full'>Wizia lets you train, activate, and optimize aiDRs. 
            Take your outbound to new levels of performance and efficiency.</p>

            <Button 
                      color="primary" 
                      variant="solid" Icon="arrowLeft" 
                      className="mt-6 px-7 py-3 text-lg rounded-lg  w-full md:w-auto text-default font-semibold"
                    >
                      Sign Up for the Beta <FontAwesomeIcon icon="fa-solid fa-square-arrow-up-right" className='text-black' />
                    </Button>
        </div>
    </section>
  )
}

export default GetStart