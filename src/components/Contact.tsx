import { Phone, Mail,  MapPin } from 'lucide-react';
import Link from 'next/link';

// Data for the contact details column
const contactDetails = [
  {
    icon: Phone,
    title: 'Phone Number',
    value: '+1 (555) 123-4567',
    href: 'tel:+9112345678976',
  },
  {
    icon: Mail,
    title: 'Email Address',
    value: 'info@nexaform.com',
    href: 'mailto:example@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: '123 Tech Drive, Suite 400, Innovation City, CA 90210',
    href: 'https://maps.app.goo.gl/', // Placeholder map link
  },
];

const Contact = () => {
  return (
    // Outer section with light gray background
    <section id="Contact" className="py-20 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main white card container */}
        <div className="bg-white p-6 md:p-12 lg:p-16 shadow-2xl rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-1 space-y-8 pr-0 lg:pr-8">
              {contactDetails.map((item, index) => (
                <Link key={index} href={item.href} className="flex items-center group" target={item.href !== '#' ? "_blank" : "_self"}>
                  {/* Orange Icon Circle */}
                  <div className="p-3 rounded-full bg-white border border-gray-200 group-hover:border-orange-600 transition duration-300 mr-4">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  
                  {/* Text Details */}
                  <div>
                    <p className="text-sm font-semibold text-gray-500 group-hover:text-orange-600 transition duration-300">
                      {item.title}
                    </p>
                    <p className="text-base font-medium text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Column: Send Message Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Message
              </h2>
              <p className="text-sm text-gray-600 mb-8 max-w-lg">
                Get in touch with us using the form below.
                Our support team is ready to assist with your inquiries or feedback.
              </p>

              <form className="space-y-4">
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="p-3 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="p-3 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 outline-none transition"
                  />
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="p-3 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="p-3 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 outline-none transition"
                  />
                </div>

                {/* Message Textarea */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-600 focus:border-orange-600 outline-none transition resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md text-white text-lg font-semibold bg-orange-600 hover:bg-orange-700 transition duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;