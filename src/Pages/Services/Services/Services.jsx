import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Service from '../Service/Service';
import ServiceSlider from '../ServiceSlider/ServiceSlider/ServiceSlider';
import { CirclesWithBar } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useTitle('Services')

  useEffect(() => {
    fetch('https://smile-builders-server.vercel.app/all-services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='mx-4 md:mx-0 my-20'>
      <div className='mb-10 text-center'>
        <h2 className='text-4xl uppercase font-semibold text-gray-600'>Services</h2>
        <hr className='w-1/12 mx-auto mt-3 border-2 border-yellow-400' />
        <p className='lg:w-4/12 mx-auto mt-5 text-gray-500'>SmileBuilders is equipped to handle all your dental needs, from a regular cleaning to a full-mouth reconstruction.</p>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.length !== 0 ?
            services.map(service => <Service key={service._id} service={service} />)
            :
            <div className='flex justify-center col-span-3 items-center'>
              {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div> */}
              <CirclesWithBar
              height="100"
              width="100"
              color="#E6BE05"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            />
            </div>
            
        }
      </div>
      <div className='w-8/12 mx-auto'>
        <ServiceSlider />
      </div>
    </div>
  );
};

export default Services;