import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define the structure for a client card
interface ClientCard {
  logoSrc: string;
  logoAlt: string;
  clientName: string;
  excerpt: string;
  isFeatured: boolean;
}

const clientData: ClientCard[] = [
  {
    logoSrc: '/assets/client-morris.png',
    logoAlt: 'Morris Assets logo',
    clientName: 'Morris',
    excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Tortor Non Ipsum Molestie, Eget Facilisis Purus Sagittis.',
    isFeatured: false,
  },
  {
    // The featured card has two logos and the excerpt is in the logo box
    logoSrc: '/assets/client-summit.png',
    logoAlt: 'Summit Capital logo',
    clientName: 'Morris', // Assuming the case study is still about Morris, but this card is highlighted
    excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Tortor Non Ipsum Molestie, Eget Facilisis Purus Sagittis.',
    isFeatured: true,
  },
  {
    logoSrc: '/assets/client-crimson.png',
    logoAlt: 'Crimson Asset Management logo',
    clientName: 'Morris',
    excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Tortor Non Ipsum Molestie, Eget Facilisis Purus Sagittis.',
    isFeatured: false,
  },
];

const OurClients = () => {
  return (
    // Section container with a dark indigo background
    <section className="py-20 lg:py-32 bg-indigo-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold !text-white">
            OUR CLIENTS.
          </h2>
          {/* Top Right CTA Button */}
          <Link href="/success-stories" passHref>
            <button className="mt-6 md:mt-0 px-6 py-3 rounded-md text-white text-base font-semibold bg-orange-600 transition duration-300 hover:bg-orange-700 shadow-lg">
              Read Our Success Stories
            </button>
          </Link>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {clientData.map((client, index) => (
            <div 
              key={index} 
              // Featured card has an orange background, others have a dark indigo background
              className={`rounded-xl shadow-2xl p-0 overflow-hidden transition-all duration-300 ${
                client.isFeatured 
                  ? 'bg-orange-600' 
                  : 'bg-indigo-950 border-2 border-indigo-900'
              }`}
            >
              
              {/* Top Logo / Excerpt Box */}
              <div 
                className={`p-6 h-[200px] flex items-center justify-center ${
                  client.isFeatured ? 'bg-white text-gray-800 flex-col' : 'bg-white'
                }`}
              >
                {client.isFeatured ? (
                    // The design shows the excerpt in the top section of the featured card
                    <div className="text-center p-4">
                        <p className="text-gray-700 text-base font-normal">
                            {client.excerpt}
                        </p>
                    </div>
                ) : (
                    // Standard Logo Box
                    <Image
                      src={client.logoSrc} 
                      alt={client.logoAlt}
                      width={200}
                      height={50}
                      className="object-contain"
                    />
                )}
              </div>

              {/* Bottom Text / Logo Box (Reversed for the featured card) */}
              <div 
                className={`p-6 flex flex-col justify-between ${
                  client.isFeatured ? 'bg-orange-600 text-white' : 'text-white'
                }`}
              >
                 {client.isFeatured ? (
                    // Bottom half of the featured card is the logo box
                    <div className="bg-white p-4 rounded-lg shadow-inner h-[150px] flex items-center justify-center">
                        <Image
                          src={client.logoSrc} 
                          alt={client.logoAlt}
                          width={200}
                          height={50}
                          className="object-contain"
                        />
                    </div>
                 ) : (
                    // Standard Text Content Box
                    <>
                        <h4 className="text-2xl font-semibold mb-3 !text-white">{client.clientName}</h4>
                        <p className="text-sm text-gray-300 mb-6">
                            {client.excerpt}
                        </p>
                        {/* Arrow Button */}
                        <Link href={`/clients/${index}`} className="self-end" passHref>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                        </Link>
                    </>
                 )}

              </div>
              
              {/* Special case: Featured card has a text block above the logo in the orange area */}
              {client.isFeatured && (
                <div className="p-6 pt-0 flex flex-col">

                    <Link href={`/clients/${index}`} className="self-end" passHref>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-orange-600 hover:bg-gray-100 transition-colors cursor-pointer">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;