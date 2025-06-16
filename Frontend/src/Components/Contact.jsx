import React, { useState } from "react";
import { toast } from "react-toastify";
import { Phone, Mail, MapPin } from "lucide-react";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Replace this URL with your deployed Google Apps Script URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw7lnhyi2Lm_SXITCUiCvevZC8cowilSCqgFIPjltM72__vdt9XNHV4fMKwduep9Y6a/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get form data
      const formData = new FormData(e.target);

      // Convert FormData to URL-encoded string with proper field names
      const data = new URLSearchParams();
      data.append("Name", formData.get("Name"));
      data.append("Email", formData.get("Email"));
      data.append("Phone", formData.get("Phone"));
      data.append("Message", formData.get("Message"));

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      const result = await response.json();

      if (result.result === "success") {
        toast.success("Thank you for reaching out We'll get back to you soon");
        e.target.reset();
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg  w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between"></div>
        </div>
      </nav>

      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We're here to help! Reach out to us for any questions, concerns, or
            feedback. Your satisfaction is our priority.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex justify-center items-center p-8">
        <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid lg:grid-cols-2">
          {/* Left Section: Form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Fill out the form below, and we'll get
              back to you as soon as possible.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Section: Contact Info and Map */}
          <div className="bg-gray-700 text-white flex flex-col justify-between p-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-lg mb-4">
                Feel free to reach out to us directly using the information
                below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                  <p>+91 8950337662</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 flex-shrink-0 text-red-500" />
                  <p>gmgaurav21@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6 flex-shrink-0 mb-16 lg:mb-1 sm:mb-1 text-blue-500" />
                  <p>
                    Malhotra Architects, 2085, Cross Rd 10, Kacha Bazar, Chain
                    Mandi, Sadar Bazar, Ambala Cantt, Haryana 133001
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.624103633558!2d76.83999287535663!3d30.333208174779525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb77efd0d66f5%3A0x7b77c65f9005ef01!2sMalhotra%20Architects!5e0!3m2!1sen!2sin!4v1736953507919!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
