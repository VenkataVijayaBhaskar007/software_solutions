"use client";

import { motion } from "framer-motion";
import { useSpring } from 'react-spring';

import "./style.css"

const About = () => {
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
<section className="px-2">
  <div className="grid gap-y-6 md:gap-y-0 md:gap-x-15 grid-cols-12 items-center">
    <div className="hidden lg:block col-span-1 order-1"></div>
    <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-2">
   
      <div className="prose">
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
  
    className="animate_top ">
        <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
          <span className="text-content"> Why to choose us</span>
        </h2>
        </motion.div>
        <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -40,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top ">
        <h2 className="px-3 text-2xl text-gray-500"> create your desired website with no time with us which make your website stand out</h2>
      </motion.div>
      <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -40,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.9 }}
  
    className="animate_top ">
        <div className="px-3 mt-3">
          <p>
          Transform your online presence from ordinary to extraordinary. Let's build a website that not only stands out but leaves a lasting impression.In the world of websites, standing out is not an option, it's a necessity. Elevate your digital identity with a website that captures attention and sparks curiosity.
          </p>
        </div>
        </motion.div> <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -60,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 1 }}
  
    className="animate_top ">
        <h3 className="px-3 text-xl text-gray-700 mt-3">We’ll create your app, regardless of complexity</h3>
        </motion.div>
        <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 1.5 }}
  
    className="animate_top ">
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Innovative Solutions
          </div>
        </div>
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Client-Centric Approach
          </div>
        </div>
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Continuous Innovation
          </div>
        </div>
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Strategic Partnerships
          </div>
        </div>
        </motion.div>
      </div>
      
      <div className="px-4 flex flexshape md:flex-column">
        <button
          className="mt-8 mb-10 md-w-1/2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out mr-4"
        >
          Get Started
        </button>
        <button
          className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
        >
          See pricing plans
        </button>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-3">
      <img
        loading="lazy"
        height="600"
        width="778"
        src="./images/about/about-dark-01.png"
        alt=""
        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 38vw, (max-width: 1279px) 31vw, (max-width: 1439px) 30vw, (max-width: 1919px) 29vw, 23vw"
      />
    </div>

    <div className="hidden lg:block col-span-1 order-4"></div>
  </div>
</section>



    <section className="container py-8 bg-white font-poppins dark:bg-btndark" style={{ marginTop: '-3rem' }}>
      <div className="max-auto aboutsec px-4">
        <div className="flex flex-wrap">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            className="animate_left lg:w-1/1 px-4"
          >
            <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
              <span className="text-content">Our Services</span>
            </h2>
            <div className="px-3">
              <p>
                At Atoms Software Solutions, our comprehensive suite of services revolves around three core pillars: web development, app development, and UI/UX designing. In the realm of web development, our skilled team harnesses the latest technologies to create dynamic and scalable solutions tailored to our clients' unique needs. Whether it's building robust web applications or crafting engaging mobile apps, our app development expertise ensures seamless and user-friendly experiences across platforms...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
 


<section className="px-10 flex flex-wrap -mx-1 py-8">
  <div className="bg-white shadow-md rounded-md overflow-hidden mb-6 w-full md:w-1/2 lg:w-2/3 xl:w-1/4 md:mx-45 lg:mx-40 xl:mx-15 rounded-bl-2xl rounded-br-2xl transition-transform transform hover:scale-105">
   

 {/* Blue horizontal line at the top */}
 <div className="bg-blue-500 h-1 w-full"></div>

{/* Content of the card */}
<div className="flex items-start p-4">
  {/* Square image with icon on the left */}
  <div className="flex-shrink-0">
    <img
      src="./images/shape/atandt.png"
      alt="Square Image"
      className="w-12 h-12 object-cover rounded-full"
    />
  </div>

  {/* Heading and paragraph on the right */}
  <div className="ml-4">
    <h2 className="text-xl font-regular text-black">UI / UX </h2>
    <h2 className="text-xl font-regular text-black">Design</h2>
  </div>
</div>

<p className="text-gray-500 p-4" style={{ marginTop: '-2rem' }}>
  Make your own desired website with the help of our web developers who make your site visually appealing.
</p>

{/* Footer with "View More" link and next icon */}
<div className="p-4 bg-blue-50 flex justify-between items-center rounded-bl-2xl rounded-br-2xl">
  <a href="/next-page" className="text-blue-500 font-semibold">
    View More
  </a>
  <span className="text-blue-500 text-2xl w-6 h-8">&gt;</span>
</div>
  </div>

  <div className="bg-white shadow-md rounded-md overflow-hidden mb-6 w-full md:w-1/2 lg:w-2/3 xl:w-1/4 md:mx-45 lg:mx-40 xl:mx-15 rounded-bl-2xl rounded-br-2xl transition-transform transform hover:scale-105">
   

 {/* Blue horizontal line at the top */}
 <div className="bg-blue-500 h-1 w-full"></div>

{/* Content of the card */}
<div className="flex items-start p-4">
  {/* Square image with icon on the left */}
  <div className="flex-shrink-0">
    <img
      src="./images/shape/atandt.png"
      alt="Square Image"
      className="w-12 h-12 object-cover rounded-full"
    />
  </div>

  {/* Heading and paragraph on the right */}
  <div className="ml-4">
    <h2 className="text-xl font-regular text-black">Web </h2>
    <h2 className="text-xl font-regular text-black">Development</h2>
  </div>
</div>

<p className="text-gray-500 p-4" style={{ marginTop: '-2rem' }}>
  Make your own desired website with the help of our web developers who make your site visually appealing.
</p>

{/* Footer with "View More" link and next icon */}
<div className="p-4 bg-blue-50 flex justify-between items-center rounded-bl-2xl rounded-br-2xl">
  <a href="/next-page" className="text-blue-500 font-semibold">
    View More
  </a>
  <span className="text-blue-500 text-2xl w-6 h-8">&gt;</span>
</div>
  </div>

  <div className="bg-white shadow-md rounded-md overflow-hidden mb-6 w-full md:w-1/2 lg:w-2/3 xl:w-1/4 md:mx-45 lg:mx-40 xl:mx-15 rounded-bl-2xl rounded-br-2xl transition-transform transform hover:scale-105">
   

 {/* Blue horizontal line at the top */}
 <div className="bg-blue-500 h-1 w-full"></div>

{/* Content of the card */}
<div className="flex items-start p-4">
  {/* Square image with icon on the left */}
  <div className="flex-shrink-0">
    <img
      src="./images/shape/atandt.png"
      alt="Square Image"
      className="w-12 h-12 object-cover rounded-full"
    />
  </div>

  {/* Heading and paragraph on the right */}
  <div className="ml-4">
    <h2 className="text-xl font-regular text-black">App </h2>
    <h2 className="text-xl font-regular text-black">Development</h2>
  </div>
</div>

<p className="text-gray-500 p-4" style={{ marginTop: '-2rem' }}>
  Make your own desired website with the help of our web developers who make your site visually appealing.
</p>

{/* Footer with "View More" link and next icon */}
<div className="p-4 bg-blue-50 flex justify-between items-center rounded-bl-2xl rounded-br-2xl">
  <a href="/next-page" className="text-blue-500 font-semibold">
    View More
  </a>
  <span className="text-blue-500 text-2xl w-6 h-8">&gt;</span>
</div>
  </div>
</section>
 
<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
           



       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>




</>
);
};

export default About;