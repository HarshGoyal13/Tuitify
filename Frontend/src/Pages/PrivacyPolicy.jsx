import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="robot_font min-h-screen  text-gray-200 py-16 px-6 sm:px-16">
      
      {/* HEADER */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-10">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Last Updated: 19 November 2025
      </p>

      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-lg">
        
        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-300">
          We collect personal and non-personal information to provide you with better 
          learning experiences at Tuitify.
        </p>

        <h3 className="text-xl font-semibold text-white mt-3 mb-2">
          1.1 Personal Information
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Password (Encrypted)</li>
          <li>Payment/Billing Information</li>
          <li>Messages or inquiries sent to us</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-4 mb-2">
          1.2 Non-Personal Information
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>IP address</li>
          <li>Browser & device information</li>
          <li>Location (approx.)</li>
          <li>Pages viewed & actions performed</li>
          <li>Cookies & session data</li>
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>To create and manage your account</li>
          <li>To deliver purchased courses</li>
          <li>To send updates and notifications</li>
          <li>To respond to your queries</li>
          <li>To improve our platform and content</li>
          <li>To process payments securely</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          3. Cookies & Tracking
        </h2>
        <p className="text-gray-300 mb-4">
          We use cookies to improve your experience, remember login sessions, and analyze 
          website traffic. You can disable cookies in your browser settings anytime.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          4. Data Protection
        </h2>
        <p className="text-gray-300 mb-4">
          Your data is stored securely using encryption, authentication, and firewalls. 
          We never sell or share your personal information with third parties.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          5. Third-Party Services
        </h2>
        <p className="text-gray-300 mb-4">
          We may use third-party services for payments, email delivery, analytics, or 
          cloud storage. These services follow strict data protection standards.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          6. Your Rights
        </h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          <li>Access your data</li>
          <li>Update or correct your information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing emails</li>
        </ul>

        {/* SECTION 7 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy occasionally. All updates will be posted on 
          this page with the latest revision date.
        </p>

        {/* SECTION 8 */}
        <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-300">
          If you have any questions, contact us at:  
          <br />
          <span className="text-blue-300 font-semibold">
            support@tuitify.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
