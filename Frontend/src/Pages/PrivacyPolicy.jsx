import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="robot_font min-h-screen text-gray-200 py-16 px-6 sm:px-16">
      {/* HEADER */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-10">
        Privacy Policy & Terms of Service
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Last Updated: 19 November 2025
      </p>

      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-lg">

        {/* PRIVACY POLICY */}
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Privacy Policy</h2>

        <h3 className="text-xl font-semibold text-white mb-2">1. Overview</h3>
        <p className="text-gray-300 mb-4">
          At Tuitify, we are committed to protecting your privacy. This Privacy Policy
          outlines the type of information we collect and how it is used when you visit
          our website or contact us regarding our educational programs.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">2. Information We Collect</h3>
        <p className="text-gray-300 mb-3">
          We collect only the essential information required to respond to your
          inquiries and improve our services.
        </p>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Name (when submitted through a contact form)</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Inquiry or message details</li>
          <li>General browser and device information</li>
          <li>Pages viewed on our website</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-5 mb-2">3. Use of Information</h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>To respond to your queries</li>
          <li>To share course-related information upon request</li>
          <li>To analyze website performance and improve user experience</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-5 mb-2">4. Data Security</h3>
        <p className="text-gray-300 mb-4">
          We maintain industry-standard security measures to safeguard your information.
          We do not sell, trade, or distribute your personal data to third parties.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">5. Third-Party Services</h3>
        <p className="text-gray-300 mb-4">
          We may use reliable third-party providers, such as cloud hosting or email
          services, solely to support our operations. These providers follow strict
          security and privacy standards.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">6. Your Rights</h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Request access to the information you’ve shared</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of receiving any communication from us</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-5 mb-2">7. Policy Modifications</h3>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy to reflect changes in our practices or legal
          requirements. The latest version will always be available on this page.
        </p>

        {/* TERMS & CONDITIONS */}
        <h2 className="text-3xl font-bold text-blue-400 mt-10 mb-6">
          Terms & Conditions
        </h2>

        <h3 className="text-xl font-semibold text-white mb-2">1. Acceptance</h3>
        <p className="text-gray-300 mb-4">
          By accessing or using our website, you agree to these Terms & Conditions.
          If you do not agree, please refrain from using our website.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">2. Intellectual Property</h3>
        <p className="text-gray-300 mb-4">
          All educational materials, graphics, videos, logos, and website content are
          the exclusive property of Tuitify. Unauthorized reproduction, distribution,
          or commercial use is strictly prohibited.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">3. Permitted Use</h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-4">
          <li>Browsing course details and program information</li>
          <li>Submitting inquiries or requests for information</li>
          <li>Using the website strictly for non-commercial, informational purposes</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-2">4. Communication Consent</h3>
        <p className="text-gray-300 mb-4">
          By contacting us, you consent to receiving replies and necessary updates
          related to your inquiry.
        </p>



        <h3 className="text-xl font-semibold text-white mb-2">5. Policy Updates</h3>
        <p className="text-gray-300 mb-4">
          We reserve the right to update these Terms at any time. Continued use of the
          website constitutes acceptance of any revised Terms.
        </p>

        {/* CONTACT */}
        <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-4">Contact Us</h2>
        <p className="text-gray-300">
          For any privacy or policy-related concerns, feel free to contact us at:
          <br />
          <span className="text-blue-300 font-semibold">
            harshgoyal0219@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
