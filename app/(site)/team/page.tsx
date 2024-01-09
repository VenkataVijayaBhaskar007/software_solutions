import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import "./style.css";
export const metadata: Metadata = {
  title: "Software Services",
  description: "This is Error page",
  // other metadata
};

const Team = () => {
  return (
    
<section className="flex flex-wrap justify-center items-center pt-40 pb-20"> 

   {/* Card 1 */}
 <div className="profile-card mb-8">
     <div className="img">
       <img
         src="./images/atomsgallery/18.png"
         alt=""
       />
        <div className="hide">
       <h3>Venkata Vijaya Bhaskar.Vadada</h3>
       <p>Lead of Software Services(Full Stack)</p></div>
       <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
<li className="ml-18">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
 <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
   <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
 </svg>
</Link>
</li>

<li className="ml-4">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
 <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
 </svg>
</Link>
</li>

<li className="ml-4">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
 <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
   <circle cx="20.145" cy="11.892" r="1" />
   <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
   <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
 </svg>
</Link>
</li>
</ul>
     </div>
     <div className="caption">
       <h3>Venkata Vijaya Bhaskar.Vadada</h3>
       <p>Lead of Software Services (Full Stack)</p> 
       {/* Social links for Card 1 */}
     <ul className="flex mb-4 md:order-1  md:mb-0">
<li className="ml-4">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
 <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
   <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
 </svg>
</Link>
</li>

<li className="ml-4">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
 <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
 </svg>
</Link>
</li>

<li className="ml-4">
<Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
 <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
   <circle cx="20.145" cy="11.892" r="1" />
   <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
   <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
 </svg>
</Link>
</li>
</ul>
     </div>
   </div> 



<div className="gallery">
	<div className="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image"/>
				
			</figure>
		</a>

		<a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" className="gallery__image"/>
		
			</figure>
		</a>

		<a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" className="gallery__image"/>

			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@hikiapp" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/A9rQeI2AdR4/300x300" alt="Portrait by Hikiapp" className="gallery__image"/>
				
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" className="gallery__image"/>
				
			</figure>
		</a>

		<a href="https://unsplash.com/@j_erhunse" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/vp9mRauo68c/300x500" alt="Portrait by Jeffery Erhunse" className="gallery__image"/>

			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" className="gallery__image"/>

			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" className="gallery__image"/>
			
			</figure>
		</a>

		<a href="https://unsplash.com/@mr_geshani" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" className="gallery__image"/>

			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@nixcreative" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/sh3LSNbyj7k/300x300" alt="Portrait by Tyler Nix" className="gallery__image"/>
			
			</figure>
		</a>

		<a href="https://unsplash.com/@majestical_jasmin" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" className="gallery__image"/>

			</figure>
		</a>
		
		<a href="https://unsplash.com/@dimadallacqua" target="_blank" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="./images/atomsgallery/kid.png" alt="Portrait by Dima DallAcqua" className="gallery__image"/>
			
			</figure>
		</a>
	</div>
</div>


</section>  

 
      

  );
};

export default Team;
