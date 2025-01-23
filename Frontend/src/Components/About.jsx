import React from "react";
import { useNavigate } from "react-router-dom";
import Owner from "../assets/Owner.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-8">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              We design functional, beautiful, and sustainable spaces, turning
              client visions into timeless architectural realities.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 ">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src={Owner}
                  alt="Gaurav Malhotra"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
              <div className="mr-24">
                <h2 className="text-4xl font-bold mb-3 text-blue-700">
                  Gaurav Malhotra
                </h2>

                <p className="text-gray-900 mb-4 text-lg">
                  Founder & Principal Architect
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    At Malhotra Architects, we turn ideas into inspiring spaces.
                    With a passion for design and a commitment to excellence, we
                    specialize in creating innovative and functional
                    architecture that reflects your vision. From modern homes to
                    commercial landmarks, our expertise lies in blending
                    creativity with practicality. Sustainability and attention
                    to detail are at the heart of everything we do, ensuring
                    every project is timeless and future-ready.Partner with us
                    to bring your dream spaces to life. Let's build something
                    extraordinary together.
                  </p>
                  <p className="text-lg">
                    Our vision is to create inspiring spaces that improve the
                    way people live and work. We aim to blend innovative design
                    with sustainable practices to build lasting, meaningful
                    environments. By staying true to our values, we strive to
                    shape the future of architecture for a better tomorrow.
                  </p>
                  <p className="text-lg">
                    Customer satisfaction is at the heart of everything we do.
                    From the initial consultation to the final reveal, we
                    prioritize clear communication, transparency, and timely
                    delivery. Our goal is to create environments that inspire
                    and elevate, leaving a lasting impression on our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-700 ">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of architectural design,
                  incorporating cutting-edge technologies and sustainable
                  practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Environmental responsibility is at the core of our design
                  philosophy, ensuring our buildings leave a positive impact.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  Client Focus
                </h3>
                <p className="text-gray-600">
                  We believe in creating strong partnerships with our clients,
                  ensuring their vision is realized in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
