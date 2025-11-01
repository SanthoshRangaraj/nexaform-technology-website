import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
  return (
    // Main container - Light gray background matches the left text area
    <section id="Hero" className="relative overflow-hidden bg-gray-50 min-h-[700px] flex items-center">
      
      {/* Absolute positioning container for the entire diagonal background/image area. 
          Uses custom clip-path to create the diagonal edge. 
      */}
      <div className="absolute inset-0 hidden lg:block">
          
          <div 
              className="absolute right-0 top-0 h-full w-[65%] bg-black"
              // CSS clip-path to create the diagonal cut starting from the top-left of this container
              style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
          >
            {/* Background Image: Assumes hero-bg.png is in public/assets */}
            <Image
              src="/assets/hero-bg.png" 
              alt="Engineer with hard hat and safety glasses"
              fill
              style={{ objectFit: 'cover' }}
              className="z-10"
              priority // Important for the main hero image
              // The image is hidden below 1024px (lg breakpoint) and is 65% of the viewport width above it.
              sizes="(max-width: 1023px) 0vw, 65vw"
            />
             {/* Dark Purple Overlay/Filter to match the visual tone */}
             <div className="absolute inset-0 bg-purple-900/40 z-20"></div>
             
             {/* Diagonal Lines (positioned absolutely over the clipped image) */}
             <div className="absolute inset-0 z-30">
                 {/* Orange Diagonal Line */}
                 <div 
                     className="absolute bg-orange-600 w-2 h-full transform -rotate-[22deg] origin-bottom-left"
                     style={{ left: '10%', top: '-20%', height: '140%' }}
                 ></div>
                 {/* Dark Blue Diagonal Line */}
                 <div 
                     className="absolute bg-indigo-900 w-2 h-full transform -rotate-[22deg] origin-bottom-left"
                     style={{ left: '15%', top: '-20%', height: '140%' }}
                 ></div>
             </div>
          </div>
      </div>


      {/* Main Content (Text and CTA) - Centered and positioned over the background */}
      <div className="container mx-auto flex h-full relative z-30">
        
        {/* Left Content Area (w-full for mobile, adjusted width for desktop) */}
        <div className="w-full lg:w-[40%] px-6 py-20 lg:py-0 lg:px-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-indigo-950 tracking-tight">
            THE PROCESS OF <br />
            ASSET MANAGEMENT. <br />
            <span className="text-orange-600">SIMPLIFIED.</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-md mb-8">
            For Individuals Managing The Increasingly Intricate World Of Asset 
            Management, Nexaform Stands Out As A Holistic EAM Innovator That 
            Delivers The Continuous Expertise, Solutions, And Dedication 
            Necessary To Simplify Your Path And Enhance Value.
          </p>

          <Link href="/solutions" passHref>
            <button className="w-fit px-8 py-3 rounded-md text-white text-lg font-semibold bg-orange-600 transition duration-300 ease-in-out shadow-lg hover:bg-orange-700">
              Explore Our Solutions
            </button>
          </Link>

          {/* Bottom Pagination/Indicators */}
          {/* <div className="flex space-x-2 mt-20">
            <div className="w-3 h-3 rounded-full bg-orange-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

