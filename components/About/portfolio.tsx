// import React from 'react';

// const Portfolio: React.FC = () => {
//   return (
//     <section>
//     <div className="container">
//       <div className="row">
//         {/* Loop starts here */}
//         <div className="portfolio-item">
//   <div className="portfolio-item__wrapper" data-demo="https://example.com" data-title="Example Website">  <div className="portfolio-item__demo">
//               <img src="http://drive.google.com/uc?export=view&id=10_I2AnlIKxeLJSkXzgI-MxvE7s7zOm7D" alt="Jenish Shrestha" />
//               <span className="quick-view">
//                 <span className="quick-demo">Preview</span>
//               </span>
//             </div>
//             <div className="portfolio-item__title">
//               <h2>Jenish Shrestha</h2>
//             </div>
//           </div>
//         </div>

//         {/* Add other portfolio items here */}

//       </div>
//     </div>

//     <div className="under-construction">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
//       <p> Https website links are required for this to work.</p>
//     </div>

//     <div id="iframe-content" style={{ display: 'none' }}>
//       <div className="iframe-title">
//         <div className="demo-title"></div>
//         <div className="devices-wrapper">
//           <div className="devices">
//             <button type="button" className="preview-desktop" data-device-mode="desktop">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M3 2h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-5v2h2c.55 0 1 .45 1 1v1H5v-1c0-.55.45-1 1-1h2v-2H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm13 9V4H4v7h12zM5 5h9L5 9V5z" /></g></svg>
//             </button>
//             <button type="button" className="preview-tablet" data-device-mode="tablet">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M4 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm11 14V4H5v12h10zM6 5h6l-6 5V5z" /></g></svg>
//             </button>
//             <button type="button" className="preview-mobile" data-device-mode="mobile">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M6 2h8c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm7 12V4H7v10h6zM8 5h4l-4 5V5z" /></g></svg>
//             </button>
//             <button type="button" className="preview-close">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M12.12 10l3.53 3.53-2.12 2.12L10 12.12l-3.54 3.54-2.12-2.12L7.88 10 4.34 6.46l2.12-2.12L10 7.88l3.54-3.53 2.12 2.12z" /></g></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="site-loading">
//         <h3>Preview Loading...</h3>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default Portfolio;