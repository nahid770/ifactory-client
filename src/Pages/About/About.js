import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../Images/about.jpg'

const About = () => {
    return (
        <div className='my-16 md:my-24 w-11/12 md:max-w-[1224px] mx-auto'>
            
            <div className='flex flex-col md:flex-row justify-center items-center gap-24'>
                <div className=''>
                    <img className='max-w-xs md:max-w-md ' src={about} alt="" />
                   <div className='flex justify-end gap-2 mt-1'>
                   <h2 className='text-3xl md:text-6xl font-roboto font-bold text-[#00173C]'>Since</h2>
                   <h2 className='text-3xl md:text-6xl font-roboto font-bold bg-[#FF5E15]   text-white inline-block'>2018</h2>

                   </div>
                </div>
              <div className='md:mb-16'>
                <h2 className='text-2xl md:text-4xl font-roboto text-[#FF5E15]'>Welcome to ifactory</h2>
                <h2 className='text-3xl md:text-5xl font-bold font-roboto text-[#00173C] mt-5 '>We Are Here to Increase Your Knowledge With Experience</h2>
                    <ul className='font-bold font-roboto text-[#00173C] my-5'>
                        <li>Quality Control System , 100% Satisfaction Guarantee</li>
                        <li>Unrivalled Workmanship, Professional and Qualified</li>
                        <li>Environmental Sensitivity, Personalised Solutions</li>
                    </ul>

                    <p className='text-sm md:text-md font-roboto mb-6'>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.</p>
                    <div className='flex justify-start items-center gap-10'>
                        <Link className='px-2 md:px-6 py-1 md:py-3 bg-[#FF5E15] text-white font-roboto text-lg hover:bg-[#f0530a] transition-all duration-300'>Learn more</Link>
                        <p className='font-Vibes text-2xl text-[#00173C] '>Dev Nahid</p>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default About;