import React from "react";
export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Circle image + Badge */}
          <div className="relative flex justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl relative">
              <img
                src="/intersmart-office.jpg"
                alt="Web Development in Kerala - CodexWagon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Years of Experience Badge */}
            <div className="absolute bottom-4 right-10 bg-white rounded-full shadow-xl w-28 h-28 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">14+</span>
              <span className="text-xs text-gray-600 text-center">
                YEARS <br /> EXPERIENCE
              </span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Steps into the World of <br />
              <span className="text-blue-600">Digital Innovations</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              CodexWagon is one of the most trusted names in{" "}
              <strong>web development in Kerala</strong>. With over 14 years of
              expertise, we combine creativity, strategy, and technology to
              deliver digital solutions that scale businesses to new heights.
              From custom <strong>mobile app development in Kerala</strong> to
              next-generation <strong>cloud services in Kerala</strong> and{" "}
              <strong>AI services in Kerala</strong>, we help companies
              transform their digital presence with innovation at the core.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedicated team of developers and strategists ensures every
              solution is SEO-friendly, cost-effective, and user-focused. We’ve
              successfully delivered hundreds of projects, empowering startups,
              SMEs, and enterprises to thrive in competitive markets. Whether
              you are aiming for a new website, a mobile app, or advanced cloud
              and AI solutions, CodexWagon is your partner for long-term digital
              growth.
            </p>
          </div>
        </div>

        {/* Stats Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          <div>
            <div className="text-4xl font-bold text-gray-900">100+</div>
            <div className="w-16 h-1 mx-auto bg-pink-500 my-2"></div>
            <div className="text-sm text-gray-600">Web Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">786+</div>
            <div className="w-16 h-1 mx-auto bg-yellow-500 my-2"></div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">2157+</div>
            <div className="w-16 h-1 mx-auto bg-blue-500 my-2"></div>
            <div className="text-sm text-gray-600">Completed Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">16+</div>
            <div className="w-16 h-1 mx-auto bg-purple-600 my-2"></div>
            <div className="text-sm text-gray-600">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
