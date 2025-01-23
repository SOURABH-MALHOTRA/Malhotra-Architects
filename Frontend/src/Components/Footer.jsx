import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../images/Logo.jpg";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div
        className="container mx-auto grid grid-cols-2
            md:grid-cols-4 gap-8 w-11/12"
      >
        <div className="flex items-center">
          <img src={logo} width={185} height={50} alt="Logo" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Phone: +91 8950337662</p>
          <p>Email: gmgaurav21@gmail.com</p>
          <p>Address: 2085, Kacha Bazar, Ambala Cantt</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/malhotraassociates04?igsh=MXJpZGR1a3lqYTgzZQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white text-2xl
                            hover:text-gray-300"
              />
            </a>

            <a
              href="https://www.facebook.com/share/1BKRmRJaZq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-white text-2xl 
                            hover:text-gray-300"
              />
            </a>

            <a
              href="https://wa.me/918950337662"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="text-white text-2xl
                            hover:text-gray-300"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li>Architecture Design & Construction</li>
            <li>Interior Design & Renovation</li>
            <li>Landscape Design & Outdoor Spaces</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
