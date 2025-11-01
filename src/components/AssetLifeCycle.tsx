import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the custom colors used in the design for Tailwind's arbitrary values
const BRAND_ORANGE = '#FF6633';
const DARK_BG = '#ffffffff';

const AssetLifeCycle: React.FC = () => {
  return (
    // Set the dark background and primary text color
    <section id="asset-lifecycle" className="py-20 lg:py-32" style={{ backgroundColor: DARK_BG }}>
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Grid: 1 column on mobile, 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* -------------------- LEFT COLUMN: Content -------------------- */}
          <div className="lg:pr-8 text-white">
            
            {/* Subtitle */}
            <p 
              className="text-base font-bold uppercase border-b pb-1 inline-block mb-6"
              style={{ color: BRAND_ORANGE, borderColor: BRAND_ORANGE }}
            >
              Asset Management
            </p>
            
            {/* Main Heading */}
            <h2 className="text-5xl md:text-4xl lg:text-4xl font-extrabold mb-8 leading-snug">
              Oversee Your Asset <br />
              Life Cycle Using <br />
              Nexaform.
            </h2>
            
            {/* Body Text */}
            <p className="text-lg text-black mb-10 max-w-xl">
              From Initial Planning To Final Installation, As Well As Real-Time Tracking 
              And Ongoing Lifecycle Updates, Nexaform Provides Organizations With 
              The Resources And Knowledge Needed To Improve Efficiency, Minimize 
              Downtime, And Optimize Asset Performance.
            </p>
            
            {/* CTA Button */}
            <Link href="/solutions" passHref>
              <button 
                className={`px-8 py-3 rounded-md text-white text-md font-semibold transition duration-300 ease-in-out shadow-lg hover:brightness-110 inline-block`}
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                Explore Our Solutions
              </button>
            </Link>
          </div>
          
          {/* -------------------- RIGHT COLUMN: Diagram Image -------------------- */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/assets/asset-management.png" 
                alt="Asset Management Life Cycle Diagram with 8 steps"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AssetLifeCycle;