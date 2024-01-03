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
    transition={{ duration: 1, delay: 0.1 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
    {/* Image on the Left */}
   <div className="lg:order-1 lg:w-1/2 xl:pl-40 lg:pr-30 lg:pl-0  ">
        
   <video
    className="object-contain rounded-3xl xl:w-full "
    height="600"
    width="778"
    src="./images/about/about2.mp4"
    autoPlay
    muted
    loop
    /> </div>

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
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        User-Centric Design
      </div>
    </div>

    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        Mobile Responsiveness
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        E-commerce Services
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
      Backend Services
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
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        Custom API Integrations
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        Scalable Architecture
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
        Cross-Browser Compatibility
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal  leading-relaxed md:whitespace-nowrap">
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

<section id="works" className="relative bg-gray-900 py-10 sm:py-16 lg:py-24 mb-10">
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
    transition={{ duration: 1, delay: 0.1 }}
  
    className="animate_top "
  >
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
    transition={{ duration: 1, delay: 0.1 }}
  
    className="animate_top "
  >
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-white font-regular mx-auto md:text-5xl lg:text-4xl">Architecting Digital Excellence</h2>
            <p className="max-w-2xl mx-auto mt-2 text-base text-gray-400 leading-relaxed md:text-2xl">
            A Comprehensive Journey through Planning, Functionality, and Monitoring in Web Development
            </p>
        </div>
        </motion.div>
        <div className="relative mt-12 lg:mt-20">
        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
  <img
    alt=""
    loading="lazy"
    width="1000"
    height="500"
    decoding="async"
    data-nimg="1"
    className="w-full text-transparent"
    src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
  />
</div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
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
    transition={{ duration: 1, delay: 0.3 }}
  
    className="animate_top "
  >
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">1</span>
                    </div>
                    <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">Planning & Designing</h3>
                    <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Strategize and craft a blueprint for success with meticulous planning and innovative design in our web development process.
                    </p>
                </div>
                </motion.div>
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
    transition={{ duration: 1, delay: 0.6 }}
  
    className="animate_top "
  >
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">2</span>
                    </div>
                    <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Functionality & Testing</h3>
                    <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Bring your vision to life with seamlessly integrated functionality and rigorous testing, ensuring a flawless and user-centric digital experience.
                    </p>
                </div>
                </motion.div>
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
    transition={{ duration: 1, delay: 0.9 }}
  
    className="animate_top "
  >
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">3</span>
                    </div>
                    <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Monitoring for Updates</h3>
                    <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Stay ahead in the ever-evolving digital landscape with continuous monitoring for updates, ensuring your web presence remains cutting-edge and secure.
                    </p>
                </div>
                </motion.div>
            </div>
        </div>
    </div>
    <div className="absolute inset-0 m-auto max-w-xs h-357 blur-118 sm:max-w-md md:max-w-lg bg-radial-gradient"
    style={{ background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)' }}>
</div>
</motion.div>
</section>













    </>
  );
};

export default Hero;
