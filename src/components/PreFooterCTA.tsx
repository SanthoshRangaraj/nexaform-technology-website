import Link from 'next/link';

const PreFooterCTA = () => {
  return (
    // Section container with a light, neutral background and strong vertical padding
    // Using bg-gray-200 to match the subtle off-white/gray tone in the image
    <section className="py-24 lg:py-32 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        {/* Subtitle/Gutter */}
        <p className="text-base font-semibold text-gray-700 uppercase mb-8 relative inline-block">
          Get In Touch
          {/* Subtle line above and below the subtitle */}
          <span className="absolute left-0 right-0 top-0 h-0.5 bg-orange-500 transform -translate-y-full"></span>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange-500 transform translate-y-full"></span>
        </p>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8 max-w-4xl mx-auto leading-snug">
          PREPARED TO REEVALUATE ASSET MANAGEMENT?
        </h2>

        {/* Description Text */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          If You’re New To Maximo® Or Seeking To Elevate Your Operations, Nexaform Offers The 
          Worldwide Reach, Industry Knowledge, And Robust Solutions To Advance Your Asset Strategy.
        </p>

        {/* CTA Button */}
        <Link href="/contact" passHref>
          <button className="px-10 py-4 rounded-md text-white text-xl font-semibold bg-orange-600 transition duration-300 ease-in-out shadow-lg hover:bg-orange-700 transform hover:scale-[1.02]">
            Get Started
          </button>
        </Link>
        
      </div>
      
      {/* The small, thin blue stripe at the very bottom edge of the image 
          is likely part of the footer, but we'll include it here just in case. 
      */}
      {/* <div className="w-full h-1 bg-indigo-900 mt-20"></div> */}

    </section>
  );
};

export default PreFooterCTA;