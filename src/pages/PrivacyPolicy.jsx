import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-sm text-center">Effective Date: [Insert Date]</p>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">1. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, addresses, payment details.</li>
          <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information.</li>
          <li><strong>Cookies & Tracking:</strong> Used for improving user experience.</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li>Process orders and transactions.</li>
          <li>Provide customer support.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Send promotional offers (opt-out available).</li>
          <li>Ensure security and prevent fraud.</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">3. Sharing Your Information</h2>
        <p className="text-gray-600 mt-2">We do not sell or rent your personal information. However, we may share it with:</p>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li><strong>Service Providers:</strong> Payment processing, shipping, and marketing vendors.</li>
          <li><strong>Legal Compliance:</strong> If required by law.</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">4. Data Security</h2>
        <p className="text-gray-600 mt-2">We implement industry-standard security measures to protect your information, but no method is 100% secure.</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">5. Your Rights & Choices</h2>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li>Access, update, or delete personal data.</li>
          <li>Opt out of marketing emails.</li>
          <li>Disable cookies through browser settings.</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">6. Third-Party Links</h2>
        <p className="text-gray-600 mt-2">We are not responsible for privacy practices of external websites linked on our site.</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">7. Changes to This Policy</h2>
        <p className="text-gray-600 mt-2">Updates will be posted with a revised effective date.</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">8. Contact Us</h2>
        <p className="text-gray-600 mt-2">For any questions, contact us at:</p>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li><strong>Email:</strong> support@luxora.com</li>
          <li><strong>Phone:</strong> [Insert Contact Number]</li>
          <li><strong>Address:</strong> [Insert Physical Address]</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

