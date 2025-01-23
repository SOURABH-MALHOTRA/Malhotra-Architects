import React from "react";
import { useNavigate } from "react-router-dom";
import Architectural from "../assests/images/Architectural.jpeg";
import Interior from "../assests/images/Interior.jpeg";
import Sustainable from "../assests/images/Sustainable.jpeg";
import ProjectManagement from "../assests/images/ProjectManagement.jpeg";
const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Architectural Design",
      description:
        "Comprehensive architectural solutions for residential and commercial projects.",
      features: [
        "Custom design development",
        "3D visualization",
        "Construction documentation",
        "Site analysis and planning",
      ],
      image: Architectural,
    },
    {
      title: "Interior Design",
      description:
        "Creating beautiful and functional interior spaces that reflect your style.",
      features: [
        "Space planning",
        "Material selection",
        "Furniture design",
        "Lighting design",
      ],
      image: Interior,
    },
    {
      title: "Sustainable Design",
      description:
        "Eco-friendly architectural solutions for a better tomorrow.",
      features: [
        "LEED certification",
        "Energy efficiency",
        "Sustainable materials",
        "Green building practices",
      ],
      image: Sustainable,
    },
    {
      title: "Project Management",
      description:
        "End-to-end project management ensuring timely delivery within budget.",
      features: [
        "Timeline management",
        "Cost control",
        "Quality assurance",
        "Vendor coordination",
      ],
      image: ProjectManagement,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 ">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg  w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-8">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              We offer a comprehensive range of architectural and design
              services, tailored to meet your specific needs and vision.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-10 ">
          <div className="container mx-auto px-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-xl overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
