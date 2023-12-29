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



    <section className="container py-8 bg-white font-poppins dark:bg-btndark mb-10">
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
 





<section className="container  bg-white font-poppins dark:bg-btndark mb-10">
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
              <span className="text-content">    How we do it?</span>
            </h2>
            <div className="px-3">
              <p>
              Elevating our efforts with an extra touch of dedication at every juncture...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

<section className="px-10">
<div className="container  mx-auto xl:px-25">

  <section className="mb-32">
  
    <div className="flex flex-wrap items-center">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
        <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="./images/about/about-dark-01.png" className="w-full" alt="" />
          {/* <a href="#!">
            <div
              className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,0%,0.4)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 py-12 text-center text-white md:px-12">
                  <h3 className="mb-6 text-2xl font-bold uppercase">
                    The future is
                    <u className="text-[hsl(210,12%,80%)]">now</u>
                  </h3>
                  <p className="text-[hsl(210,12%,80%)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum quia laboriosam error consequuntur fugit,
                    doloribus rerum, iure nesciunt amet quidem veniam
                    cupiditate hic fugiat dolore aperiam quisquam libero
                    earum quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <div
                className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              </div>
            </div>
          </a> */}
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 mt-15">
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Understand requirement</p>
            <p className="text-neutral-500 dark:text-neutral-300">
 Our approach prioritizes top-notch user experiences and aesthetic excellence to engage your audience effectively.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Safe and solid</p>
            <p className="text-neutral-500 dark:text-neutral-300">
           We execute a meticulous QA process, ensuring a flawless product launch by addressing speed, security, user-friendly interfaces, and overall functionality.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">fastest Website</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Crafting lightning-fast websites with optimized performance, we prioritize speed to deliver seamless and swift user experiences, setting new benchmarks for efficiency in web development.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  </section>

</div>
</section>


</>
);
};

export default About;