import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import axios from "axios";
import {useSEO} from "../hook/UseSeo"


const baseUrl = import.meta.env.VITE_SERVER_URL;

const ContactUs = () => {
    useSEO({
    title: "Contact Us | Tuitify",
    description:
      "Reach out to Tuitify for support, queries, feedback, or collaborations. We're here to help you with your learning journey.",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/contact/contact-us`, formData);

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
  
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 py-24 flex justify-center px-4">
      <div className="w-11/12 lg:w-4/5 backdrop-blur-xl rounded-3xl flex flex-col lg:flex-row overflow-hidden shadow-2xl transition-all">
        
        {/* Left: Contact Form */}
        <div className="lg:w-2/3 p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-10">
            Have a question, suggestion, or just want to say hi? Fill out the form below and we’ll get back to you promptly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="peer w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all shadow-md hover:shadow-cyan-500/40"
                required
              />
              <label className="absolute left-4 top-4 text-gray-400 text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-sm transition-all">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="peer w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all shadow-md hover:shadow-cyan-500/40"
                required
              />
              <label className="absolute left-4 top-4 text-gray-400 text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-sm transition-all">
                Email Address
              </label>
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="peer w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all shadow-md hover:shadow-cyan-500/40"
                required
              />
              <label className="absolute left-4 top-4 text-gray-400 text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-sm transition-all">
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="peer w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 resize-none transition-all shadow-md hover:shadow-cyan-500/40"
                required
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-400 text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-sm transition-all">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
      <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-500 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-xl shadow-xl hover:shadow-blue-500/70 transition-all flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading ? <ClipLoader size={20} color="#fff" /> : "Send Message"}
</button>
          </form>
        </div>

        {/* Right: Info Panel */}
        <div className="lg:w-1/3 bg-gradient-to-b from-cyan-800/40 to-blue-900/40 p-12 flex flex-col justify-center items-center text-center">
          <FaEnvelope size={50} className="text-white mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Reach Out Directly</h3>
          <p className="text-gray-300 mb-6">
            Prefer a direct contact? You can email or call us using the information below:
          </p>
          <a
            href="mailto:harshgoyal0219@gmail.com"
            className="text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold mb-4 transition-all"
          >
            <FaEnvelope /> harshgoyal0219@gmail.com
          </a>
          <a
            href="tel:+919876543210"
            className="text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold transition-all"
          >
            <FaPhoneAlt /> +91 9876543210
          </a>
        </div>
      </div>
    </div>

      </>
  );
};

export default ContactUs;
