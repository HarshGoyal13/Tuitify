import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_SERVER_URL;

export default function ContactSection() {
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${baseUrl}/contact/contact-us`, formDetails);

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormDetails(initialForm);
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server Error");
    }

    setLoading(false);
  };

  const locations = [
    { city: "Delhi NCR", desc: "Pitampura — Rohini — Dwarka" },
    { city: "Mumbai", desc: "Andheri — Borivali — Thane" },
    { city: "Bangalore", desc: "HSR Layout — Indiranagar" },
    { city: "Pune", desc: "Kothrud — Hinjawadi" },
  ];

  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-white">Get In Touch</h3>
          <div className="flex-1 h-px bg-blue-500"></div>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-medium">LET'S KEEP IN TOUCH</h2>
          <p className="text-base mt-1 text-blue-300">
            We look forward to hearing from you soon.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md p-4"
          >
            <motion.input
              type="text"
              placeholder="Name"
              required
              value={formDetails.name}
              onChange={(e) => onFormUpdate("name", e.target.value)}
              className="p-3 bg-transparent text-white placeholder-blue-300 border border-blue-500 rounded focus:outline-none focus:border-blue-400 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.input
              type="email"
              placeholder="Email Address"
              required
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              className="p-3 bg-transparent text-white placeholder-blue-300 border border-blue-500 rounded focus:outline-none focus:border-blue-400 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.input
              type="text"
              placeholder="Subject"
              required
              value={formDetails.subject}
              onChange={(e) => onFormUpdate("subject", e.target.value)}
              className="p-3 bg-transparent text-white placeholder-blue-300 border border-blue-500 rounded focus:outline-none focus:border-blue-400 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />

            <motion.textarea
              placeholder="Message"
              rows="6"
              required
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="p-3 bg-transparent text-white placeholder-blue-300 border border-blue-500 rounded focus:outline-none focus:border-blue-400 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Animated Button */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="absolute w-[30px] h-[30px] -top-2 -left-2 border-t-2 border-l-2 border-blue-500 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>
              <div className="absolute w-[30px] h-[30px] -bottom-2 -right-2 border-b-2 border-r-2 border-blue-500 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-blue-500 text-black py-2 font-semibold relative z-10 rounded"
                disabled={loading}
              >
                {loading ? <ClipLoader size={20} color="black" /> : "Send Message"}
              </button>
            </motion.div>
          </form>

      

        </div>
      </div>
    </section>
  );
}
