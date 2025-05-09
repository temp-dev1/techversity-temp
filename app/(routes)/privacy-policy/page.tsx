"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="mb-3 bg-gradient-to-r from-[#2196F3] via-[#4E6BE7] to-[#8A3FEF] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Last updated: May 09, 2025
          </p>
        </div>
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg md:p-12">
          <div className="prose max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Techversity ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or interact with our website.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">1. Scope</h2>
            <p className="mb-6 text-gray-600">
              This policy applies to all users of www.tech-versity.com. By using our website, you agree to the terms of this Privacy Policy.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">2. Information We Collect</h2>
            <p className="mb-4 text-gray-600">We may collect the following types of data:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Personal Information: Name, email, phone number, address, and payment details.</li>
              <li>Usage Data: IP address, browser type, device information, pages visited, and time spent on the site.</li>
              <li>Cookies & Tracking: To enhance site functionality and user experience.</li>
            </ul>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">3. How We Use Your Information</h2>
            <p className="mb-4 text-gray-600">We use your data to:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Provide and manage our services</li>
              <li>Process payments and deliver digital content</li>
              <li>Respond to support requests</li>
              <li>Improve our website and offerings</li>
              <li>Send important updates and promotional emails</li>
            </ul>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">4. Cookies</h2>
            <p className="mb-6 text-gray-600">
              Cookies help us remember your preferences and analyze traffic. You can choose to disable cookies through your browser settings.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">5. Payment Details</h2>
            <p className="mb-6 text-gray-600">
              All payment transactions are securely handled by trusted third-party payment gateways. We do not store your complete payment information.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">6. Third-Party Services</h2>
            <p className="mb-6 text-gray-600">
              We may use trusted third-party providers (e.g., hosting, email, analytics) who may have access to your data only to perform services on our behalf.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">7. Data Sharing & Disclosure</h2>
            <p className="mb-4 text-gray-600">We do not sell or rent your personal data. We may disclose data:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights or investigate misuse</li>
            </ul>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">8. Your Rights</h2>
            <p className="mb-4 text-gray-600">You have the right to:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Access, update, or delete your data</li>
              <li>Opt out of marketing emails</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="mb-4 text-2xl font-semibold text-[#05264E]">Contact Us</h2>
            <p className="mb-2 text-gray-600">For any questions or concerns regarding this policy, contact:</p>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">📧</span>
                <a href="mailto:admin@tech-versity.com" className="text-[#2196F3] hover:underline">
                  admin@tech-versity.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
