import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Simple Card component replacement
const Card = ({ children, id, className = "" }) => (
  <div id={id} className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-3">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

// Simple icon replacement with SVG
const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Lock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const Database = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UserCheck = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const metadata = {
  title: "Privacy Policy - Expenser | Your Data Privacy & Protection",
  description: "Learn how Expenser protects your privacy and handles your financial data. Read our comprehensive privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="grow py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div id="privacy-header" className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              How we collect, use, and protect your personal and financial information
            </p>
          </div>

          {/* Introduction */}
          <Card id="privacy-introduction">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Welcome to Expenser, a personal expense tracking application. We
                are committed to protecting your privacy and ensuring the security
                of your financial data. This Privacy Policy explains how we
                collect, use, and safeguard your information.
              </p>
              <p>
                By using Expenser, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with any part of this policy, please do not use our service.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card id="data-collection">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Account Information:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Email address (required for account creation)</li>
                  <li>Display name (optional)</li>
                  <li>Profile picture (optional)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Financial Data:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Expense transactions (amount, date, description, category)</li>
                  <li>Income records</li>
                  <li>Budget information</li>
                  <li>Currency preferences</li>
                  <li>Category customizations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Information:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>App usage patterns</li>
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address (for security purposes only)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card id="data-usage">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Provide and maintain the expense tracking service</li>
                <li>Authenticate your account and prevent unauthorized access</li>
                <li>Generate financial insights and analytics for your use</li>
                <li>Improve our application&apos;s functionality and user experience</li>
                <li>Send important service notifications (security alerts, updates)</li>
                <li>Provide customer support when requested</li>
              </ul>
              <p className="mt-3">
                <strong className="text-red-600">We do NOT:</strong> Sell your data to third parties, use
                your financial information for advertising, or share your expense
                details with external services without your explicit consent.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card id="data-security">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-red-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We implement industry-standard security measures to protect your
                data:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Encryption:</strong> All data is encrypted both in
                  transit (HTTPS/TLS) and at rest using AES-256 encryption
                </li>
                <li>
                  <strong>Authentication:</strong> Secure user authentication with
                  support for OAuth providers (Google, GitHub)
                </li>
                <li>
                  <strong>Access Control:</strong> Strict user isolation - you can
                  only access your own financial data
                </li>
                <li>
                  <strong>Regular Backups:</strong> Automated daily backups with
                  encryption to prevent data loss
                </li>
                <li>
                  <strong>Security Monitoring:</strong> Continuous monitoring for
                  suspicious activities and security threats
                </li>
                <li>
                  <strong>Infrastructure:</strong> Hosted on secure cloud platforms
                  with enterprise-grade security measures
                </li>
                <li>
                  <strong>Data Minimization:</strong> We only collect and store data
                  that is necessary for the application to function
                </li>
                <li>
                  <strong>Regular Updates:</strong> Security patches and updates are
                  applied promptly
                </li>
              </ul>
              <p className="mt-3 text-sm">
                While we strive to protect your data, no method of transmission
                over the internet is 100% secure. Please use strong passwords and
                keep your credentials confidential.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card id="third-party">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-orange-600" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Expenser may integrate with the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Google OAuth:</strong> For secure authentication (if you
                  choose to sign in with Google)
                </li>
                <li>
                  <strong>GitHub OAuth:</strong> For secure authentication (if you
                  choose to sign in with GitHub)
                </li>
                <li>
                  <strong>Hosting Providers:</strong> For application infrastructure
                  and data storage
                </li>
              </ul>
              <p className="mt-3">
                These services have their own privacy policies. We recommend
                reviewing them before using these authentication methods.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card id="user-rights">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Access:</strong> View all personal data we have stored
                  about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct any inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and
                  all associated data
                </li>
                <li>
                  <strong>Data Portability:</strong> Export your financial data in
                  a standard format (CSV/JSON)
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Opt-out of any optional
                  data processing
                </li>
                <li>
                  <strong>Account Control:</strong> Modify your privacy settings
                  and data preferences
                </li>
                <li>
                  <strong>Communication Preferences:</strong> Control what
                  notifications you receive from us
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:contact@expenser.site" className="text-blue-600 hover:underline">
                  contact@expenser.site
                </a>{' '}
                or use the account settings within the application. We will respond
                to your request within 30 days.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card id="data-retention">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We retain your personal information only as long as necessary to
                provide our services and comply with legal obligations:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Active accounts: Data is retained as long as your account remains active</li>
                <li>Deleted accounts: Most data is permanently deleted within 30 days</li>
                <li>Legal requirements: Some data may be retained longer if required by law</li>
                <li>Security logs: May be retained for up to 1 year for security purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card id="policy-changes">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of any changes by posting the new policy on this page and
                updating the &quot;last modified&quot; date. For significant changes, we may
                also send you an email notification.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card id="privacy-contact">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:contact@expenser.site" className="text-blue-600 hover:underline">contact@expenser.site</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/sakilahmmad71/expenser" className="text-blue-600 hover:underline">https://github.com/sakilahmmad71/expenser</a></p>
                <p><strong>Website:</strong> <a href="https://expenser.site" className="text-blue-600 hover:underline">https://expenser.site</a></p>
              </div>
              <p className="text-sm text-gray-600">
                This Privacy Policy is effective as of January 17, 2026 and was
                last updated on January 17, 2026.
              </p>
              <p className="text-sm">
                We are committed to protecting your privacy and will respond to all
                inquiries within 48 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}