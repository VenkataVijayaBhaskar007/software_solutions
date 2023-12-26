"use client";

import { motion } from "framer-motion";
import { useSpring } from 'react-spring';
import "./style.css"

const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });

  return (
    <>
<section className="my-4" style={{ marginTop: "8rem" }}>
  {/* First Card */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
    {/* Image on the Left */}
    <div className="lg:order-1 lg:w-1/2 lg:pr-4 ">
      <img
        src="./images/about/hero.png" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
      {/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-3">
        Welcome to
      </h4> */}
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
        <span className="text-content">Software Services</span>
      </h2>
      <div className="px-3">
        <p>
        We are pleased to announce that Atoms Software Services, a prominent branch within the Atoms Group, is making significant strides in the realm of software Services. Our focus revolves around crafting innovative web applications and creating exceptional UI/UX designs. As part of our commitment to excellence, we actively contribute to the success of various ventures. Join us on our journey as Atoms Software Services continues to evolve and make substantial contributions in the dynamic field of software Services....
        </p>
      </div>
      <h3 className="px-3 text-xl text-gray-700 mt-3">We will provide value added services</h3>
      <div className="flex space-x-8 ml-2">
  {/* Left Section */}
  <div className="space-y-4 mt-4">
    
    <div className="flex items-center space-x-4">
      {/* Tick mark icon on the left */}
      <div className="flex-shrink-0">
        {/* SVG insertion for the tick mark */}
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>

      {/* Content on the right */}
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        User-Centric Design
      </div>
    </div>

    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Mobile Responsiveness
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        E-commerce Services
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      Reliable Backend Services
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="space-y-4 mt-4">
    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Custom API Integrations
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Scalable Architecture
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Cross-Browser Compatibility
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Security Measures
      </div>
    </div>
  </div>
</div>

    <div className="px-4 flex  flexshape md:flex-column">
  <button
    className="mt-8 mb-10 md-w-1/2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out mr-4"
  >
    Contact Us
  </button>

  <button
    className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
  >
   Our team
  </button>
</div>
    </div>
  </motion.div>
</section>















    </>
  );
};

export default Hero;
