import Image from 'next/image';
import Link from 'next/link';

const Pioneering = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        <h2 className="text-5xl md:text-6xl font-extrabold text-indigo-900 mb-16 max-w-4xl leading-tight">
          PIONEERING THE NEXT <br />
          GENERATION OF ASSET <br />
          MANAGEMENT
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start">

          <div className="lg:order-1 order-1">
            <div className="relative w-full h-[450px]">
              <Image
                src="/assets/worker-in-a-facility.png"
                alt="Engineer with smart glasses"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>

          <div className="lg:order-2 order-3 lg:mt-0">
            <p className="text-lg text-gray-700 mb-6">
              Nexaform Not Only Simplifies Asset Management But Has Also Played A Key Role In
              Shaping It. With Years Of Experience, Extensive Industry Knowledge, And A Proven History
              Of Worldwide Implementations, We Empower Organizations To Manage Their Assets With
              Accuracy, Flexibility, And Assurance. Completely Dedicated To EAM, We Bring Decades Of
              Practical Experience In Implementation.
              Our Products Are Specifically Crafted To Go Beyond Conventional Asset Management
              Software.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We Provide Practical Solutions Developed By Experts Who Have Navigated The Complexities
              Of Operations Firsthand.
            </p>
            {/* CTA Button */}
            <Link href="/contact" passHref>
              <button className="px-8 py-3 rounded-lg text-white text-lg font-semibold bg-orange-600 transition duration-300 hover:bg-orange-700 shadow-md">
                Talk To An Expert
              </button>
            </Link>
          </div>

          <div className="lg:order-3 order-2">
            <div className="relative w-full h-[600px] lg:mt-[-40px]">
              <Image
                src="/assets/Engineer-with-tablet.png"
                alt="Two professionals walking through a warehouse"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pioneering;