"use client";
// import Portfolio from "./portfolio";
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
<section id="about" className="px-6 ">
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
    transition={{ duration: 1, delay: 1.6 }}
  
    className="animate_top ">
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Client-Centric Approach
          </div>
        </div>
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
    transition={{ duration: 1, delay: 1.7 }}
  
    className="animate_top ">
        <div className="flex items-center space-x-4 px-3 mt-3">
          <div className="flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6" color="blue"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>      </div>
   
   
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
            Continuous Innovation
          </div>
        </div>
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
    transition={{ duration: 1, delay: 1.8 }}
  
    className="animate_top ">
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
     
        <video
    className="object-contain rounded-3xl xl:w-full "
    height="600"
    width="778"
    src="./images/about/about1.mp4"
    autoPlay
    muted
    loop
    />
        
    </div>

    <div className="hidden lg:block col-span-1 order-4"></div>
  </div>
</section>



    <section id="Services" className="container py-8 bg-white font-poppins dark:bg-btndark mb-10">
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
                At Software Solutions, our comprehensive suite of services revolves around three core pillars: web development, app development, and UI/UX designing. In the realm of web development, our skilled team harnesses the latest technologies to create dynamic and scalable solutions tailored to our clients' unique needs. Whether it's building robust web applications or crafting engaging mobile apps, our app development expertise ensures seamless and user-friendly experiences across platforms...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
 

    <section className="px-10 flex flex-wrap -mx-1 -mt-16 py-8 justify-center ">

{/* card 1*/}
<div className="flex items-start p-4 text-black hover:text-white">
  <div className="card1">
    <div className="content1">
      <p className="heading">UI UX Design</p>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        laboriosam at voluptas minus culpa deserunt delectus sapiente
        inventore pariatur
      </p>
      <a href="#" className="btn">Get Service</a>
    </div>
  </div>
</div>

{/* card 2*/}
<div className="flex items-start p-4 text-black hover:text-white">
  <div className="card1">
    <div className="content1">
      <p className="heading">Web Design</p>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        laboriosam at voluptas minus culpa deserunt delectus sapiente
        inventore pariatur
      </p>
      <a href="#" className="btn">Get Service</a>
    </div>
  </div>
</div>

{/* card 3*/}
<div className="flex items-start p-4 text-black hover:text-white">
  <div className="card1">
    <div className="content1">
      <p className="heading ">App Design</p>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        laboriosam at voluptas minus culpa deserunt delectus sapiente
        inventore pariatur
      </p>
      <a href="#" className="btn">Get Service</a>
    </div>
  </div>
</div>

</section>
 
{/*  
<div className="feature-1 py-6 md:py-12">
  <div className="container px-4 mx-auto">
    <div className="flex -mx-4">
      <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
        <h1 className="mb-4 text-4xl font-medium">FWR Blocks features</h1>
        <p className="mb-4 text-xl">The main aim of creating FWR blocks is to help designers, developers and agencies create websites and web apps quickly and easily. Each and every block uses minimal custom styling and is based on the utility first Tailwind framework.</p>
        <button className="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">Learn More</button>
      </div>
    </div>

    <div className="md:flex md:-mx-4 mt-12 md:pt-4">
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-bolt text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">Fresh Design</h5>
          <p className="text-gray-600 mb-3">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
        </div>
      </div>
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-code text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">Clean Code</h5>
          <p className="text-gray-600 mb-3">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
        </div>
      </div>
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-wrench text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">Perfect Tool</h5>
          <p className="text-gray-600 mb-3">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
        </div>
      </div>
    </div>
  </div>
</div> */}




<section className="container  bg-white font-poppins dark:bg-btndark mb-5">
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
              <span className="text-content">    Our value for your project</span>
            </h2>
            <div className="px-3">
              <p>
              Exemplifying unwavering dedication, our software solutions transcend conventional boundaries by thinking innovatively and anticipating future needs. We pride ourselves on crafting cutting-edge websites that not only meet current requirements but also stand poised to adapt seamlessly to evolving demands, ensuring lasting excellence in your digital endeavors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

<section className="px-8">
<div className="container  mx-auto xl:px-25">

  <section className="mb-32">
  
    <div className="flex flex-wrap items-center">
      <div className=" w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
       <div>
              <video
    className="object-contain rounded-3xl xl:w-full "
    height="600"
    width="778"
    src="./images/about/about.mp4"
    autoPlay
    muted
    loop
    />
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 mt-15">
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
            className="animate_left "
          >
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-blue-500 dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 text-black font-bold">Understand requirement</p>
            <p className="text-neutral-500 dark:text-neutral-300">
 Our approach prioritizes top-notch user experiences and aesthetic excellence to engage your audience effectively.
            </p>
          </div>
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
            transition={{ duration: 1, delay: 0.4 }}
            className="animate_left "
          >
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-blue-500 dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 text-black font-bold">Safe and solid</p>
            <p className="text-neutral-500 dark:text-neutral-300">
           We execute a meticulous QA process, ensuring a flawless product launch by addressing speed, security, user-friendly interfaces, and overall functionality.
            </p>
          </div>
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
            transition={{ duration: 1, delay: 0.8 }}
            className="animate_left "
          >

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-blue-500 dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 text-black font-bold">fastest Website</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Crafting lightning-fast websites with optimized performance, we prioritize speed to deliver seamless and swift user experiences, setting new benchmarks for efficiency in web development.
            </p>
          </div>
        </div>
        </motion.div>

       
      </div>
    </div>
  </section>

</div>
</section>
<section>
  {/* <Portfolio/> */}
</section>


</>
);
};

export default About;