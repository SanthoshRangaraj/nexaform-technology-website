import Link from 'next/link';
import Image from 'next/image';

const Authority = () => {
  return (
    // Section container - Relative position for the background image and overlay
    <section className="relative w-full min-h-[700px] flex items-center py-20 lg:py-0 overflow-hidden bg-black text-white">
      <Image
        src="/assets/Authority-bg.png"
        alt="Engineer working on a computer in a factory environment"
        fill
        style={{ objectFit: 'cover' }}
        priority // Likely above the fold, so give it priority
        sizes="100vw" // Image covers 100% of the viewport width
      />


      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 h-full flex items-center text-white">

        {/* Content Block - Positioned on the left, with its own darker background */}
        <div className="bg-indigo-950/90 p-8 md:p-12 lg:p-16 rounded-lg max-w-2xl lg:max-w-3xl text-white shadow-2xl">

          {/* Main Title Block */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight !text-white">
            THE <br />
            AUTHORITY
          </h2>

          <h3 className="text-xl font-bold uppercase mb-8 tracking-wider !text-white">
            TECHNICAL EXPERTISE
          </h3>

          {/* Description Text */}
          <p className="text-base font-light max-w-xl mb-10">
            At Nexaform, Maximo Is Not Just One Of Our Offerings — It&apos;s Our Primary Focus. With The
            Largest Pool Of Maximo Expertise Globally And A History Of Innovation That Stretches Over
            Many Years, We Assist The Most Asset-Heavy Organizations In Operating More Intelligently,
            Efficiently, And Securely.
          </p>

          {/* CTA Button */}
          <Link href="/products" passHref>
            <button className="px-8 py-3 rounded-md text-white text-lg font-semibold bg-orange-600 transition duration-300 ease-in-out shadow-lg hover:bg-orange-700">
              Explore Our Products
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default Authority;