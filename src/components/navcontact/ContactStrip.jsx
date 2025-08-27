import React from "react";

const ContactStrip = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b border-pink-200 pb-12">
        
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-3xl font-light leading-snug">
            This Could Be The Start Of <br />
            <span className="font-bold">Something Beautiful</span>
          </h2>
        </div>

      <div className="flex flex-col items-center justify-center text-center">
  {/* Pink Title */}
  <p className="text-pink-600 uppercase text-lg font-semibold tracking-wide">
    Talk to our expert today
  </p>

  {/* Contact Info */}
 <div className="mt-3 flex flex-col md:flex-row md:items-center md:space-x-6 text-center">
    {/* Email */}
    <a 
      href="mailto:achithran@gmail.com" 
      className="text-lg font-semibold text-pink-600 hover:underline"
    >
      achithran@gmail.com
    </a>

    {/* Phone */}
    <a 
      href="tel:+919961959788" 
      className="text-lg font-semibold text-pink-600 hover:underline"
    >
      +91 99619 59788
    </a>
  </div>
</div>


      </div>
    </section>
  );
};

export default ContactStrip;
