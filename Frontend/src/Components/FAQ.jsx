import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is the total fee for the MERN / Full-Stack Development course?",
    answer:
      "The total fee depends on the batch and duration you choose.",
  },
  {
    question: "Can I pay the course fees in EMI or installments?",
    answer:
      "Yes! We provide easy EMI options for 3–12 months. You can pay monthly using UPI, card, bank transfer or finance partners.",
  },
  {
    question: "Do you provide a Tally Accounting course?",
    answer:
      "Yes, we offer Tally Prime, GST, Income Tax, Bookkeeping, and Accounting Fundamentals.",
  },
    {
    question: "Are the school tuition classes live or offline?",
    answer:
      "We provide both live online classes and offline classroom sessions depending on your location.",
  },
   {
    question: "Will I get real projects in the Graphic Designing course?",
    answer:
      "Yes, you will work on logos, posters, social media designs, UI/UX designs, and brand identity projects.",
  },
  {
    question: "Do you provide study notes and learning materials?",
    answer:
      "Yes, you will get PDF notes, recorded sessions, cheat sheets, real-world project files, and lifetime access to updated course material.",
  },
  {
    question: "Will I be capable of building big, real-world projects after this course?",
    answer:
      "Absolutely. You will build full MERN apps, dashboards, authentication systems, payment integrations, chat apps, and more.",
  },
  {
    question: "Do you offer job assistance or placement support?",
    answer:
      "Yes, we provide resume building, GitHub portfolio help, mock interviews, interview prep, and referral assistance.",
  },
  {
    question: "Will this course help me become a Blockchain Developer?",
    answer:
      "Yes. MERN gives a strong JavaScript foundation. After MERN, you can easily transition into Web3.js, Solidity, Smart Contracts, and DApps.",
  },
  {
    question: "Can I become a Data Analyst after this course?",
    answer:
      "MERN focuses on development, but your foundation in JavaScript, APIs, and databases helps you transition into data analytics.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "We provide both live interactive classes and recorded sessions with lifetime access.",
  },
  {
    question: "Do you provide certificates after course completion?",
    answer:
      "Yes, you will receive a professional completion certificate valid for jobs and internships.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes! No prior coding experience is required. We start from basics and move step-by-step into full-stack development.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="robot_font min-h-screen  px-4 py-12 sm:px-8 mt-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left text-white font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <FaMinus className="text-yellow-400" />
                ) : (
                  <FaPlus className="text-yellow-400" />
                )}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen p-5" : "max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      

    </div>
  );
};

export default FAQ;
