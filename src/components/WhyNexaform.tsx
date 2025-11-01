import { User, ClipboardList, Users } from 'lucide-react';

// Interface for a single benefit card
interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  subtext: string;
}

const benefits: Benefit[] = [
  {
    icon: User,
    title: 'SPECIALIST-GUIDED',
    description:
      'We Unite The Leading Experts In Enterprise Asset Management. With Unparalleled Experience, A Worldwide Presence, And Extensive Technical Expertise, Our Team Is Specially Prepared To Assist Clients In Navigating And Optimizing Their Asset Management Journey.',
    subtext:
      'The Leading Authorities In The EAM Field, With Numerous Successful Implementations Across The Globe.',
  },
  {
    icon: ClipboardList,
    title: 'SOLUTION-ORIENTED',
    description:
      'Our Comprehensive Solutions Are Tailored To Address The Changing Requirements Of Organizations That Depend Heavily On Assets — Ranging From Cloud Services And Mobile Applications To Sophisticated Analytics And Sector-Specific Accelerators. No Matter The Obstacle, Nexaform Provides A More Intelligent Route Ahead.',
    subtext:
      'The Most Comprehensive Portfolio Of EAM Solutions, Tailored To Every Stage Of The Asset Lifecycle.',
  },
  {
    icon: Users,
    title: 'CUSTOMER-FOCUSED',
    description:
      'We Are Not Just A Service Provider; We Are A Collaborator. Our Enduring Partnerships, Leadership Within The Community, And Steadfast Assistance Demonstrate A Profound Dedication To Our Clients’ Success That Newcomers Cannot Replicate.',
    subtext:
      'Years Of Reliable Partnerships And An International Team Committed To Your Operational Success.',
  },
];

const WhyNexaform = () => {
  return (
    // Section container with a dark background and padding
    <section className="py-20 lg:py-32 bg-grey text-black">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-gray-400 mb-2 tracking-widest">ABOUT US</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-indigo-200 tracking-tight">
            WHY NEXAFORM ?
          </h2>
        </div>

        {/* 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex flex-col">
              
              {/* Icon and Title Block */}
              <div className="flex items-center space-x-4 mb-6">
                {/* Icon Container - Orange background circle */}
                <div className="p-3 bg-orange-600 square-full shadow-lg shadow-orange-600/50">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase text-orange-600 tracking-wide">
                  {benefit.title}
                </h3>
              </div>

              {/* Main Description */}
              <div className="flex flex-col flex-grow border-t border-gray-700 pt-6">
                <p className="text-base text-beep-blue-300 mb-8 flex-grow">
                  {benefit.description}
                </p>
                
                {/* Separator Line */}
                <div className="w-12 h-1 bg-orange-600 mb-4"></div>

                {/* Subtext */}
                <p className="text-sm text-gray-500 italic">
                  {benefit.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNexaform;