"use client";

import React from "react";

const TermsConditionPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="mb-3 bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Last updated: May 09, 2025
          </p>
        </div>
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg md:p-12">
          <div className="prose max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Welcome to Techversity. These Terms and Conditions govern your use of our website located at https://tech-versity.com ("Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use our Website.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">1. Introduction</h2>
            <p className="mb-6 text-gray-600">
              Techversity ("we", "our", or "us") provides educational and informational content, tools, or services through this Website. These Terms apply to all visitors, users, and others who access or use the Website.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">2. Use of the Website</h2>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>You must be at least 13 years old to use this Website.</li>
              <li>You agree not to misuse the Website or attempt unauthorized access to any part of it.</li>
              <li>You may not use the Website in any way that could damage, disable, or impair its operation.</li>
            </ul>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">3. Intellectual Property</h2>
            <p className="mb-6 text-gray-600">
              All content on this Website, including but not limited to logos, text, images, graphics, and software, is the property of Techversity or its content suppliers.
              You may not reproduce, distribute, modify, or publicly display any content without our prior written consent.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">4. User Submissions</h2>
            <p className="mb-6 text-gray-600">
              By submitting content (e.g., forms, comments, feedback), you grant us the right to use, modify, and publish it for our business purposes.
              You are solely responsible for the content you submit and must not submit anything unlawful, defamatory, or infringing on any third party's rights.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">5. Third-Party Links</h2>
            <p className="mb-6 text-gray-600">
              Our Website may contain links to third-party websites or services that are not owned or controlled by Techversity. We are not responsible for the content or practices of any third-party sites.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">6. Disclaimers</h2>
            <p className="mb-6 text-gray-600">
              The information provided on our Website is for general informational purposes only and is not professional advice.
              We do not guarantee that the Website will be error-free, secure, or continuously available.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">7. Limitation of Liability</h2>
            <p className="mb-6 text-gray-600">
              To the maximum extent permitted by law, Techversity shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the Website.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">8. Termination</h2>
            <p className="mb-6 text-gray-600">
              We may terminate or suspend access to the Website without prior notice if you violate these Terms.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">9. Changes to These Terms</h2>
            <p className="mb-6 text-gray-600">
              We reserve the right to update these Terms at any time. Any changes will be posted on this page with the updated effective date. Continued use of the Website after changes indicates your acceptance of the new Terms.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">10. Governing Law</h2>
            <p className="mb-6 text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">Contact Us</h2>
            <p className="mb-2 text-gray-600">If you have any questions about these Terms, please contact us at:</p>
            <div className="rounded-lg bg-gray-50 p-4 space-y-2">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">📧</span>
                <a href="mailto:admin@tech-versity.com" className="text-[#2196F3] hover:underline">
                  admin@tech-versity.com
                </a>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="mr-2">🌐</span>
                <a href="https://tech-versity.com" className="text-[#2196F3] hover:underline">
                  https://tech-versity.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsConditionPage;
