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
const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a.5.5 0 01.5.5v.5M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const Scale = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const Ban = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

export const metadata = {
  title: "Terms & Conditions - Expenser | User Agreement",
  description: "Read the Terms and Conditions for using Expenser. Understand your rights, responsibilities, and our service agreement.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="grow py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div id="terms-header" className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Your rights, responsibilities, and rules for using Expenser
            </p>
          </div>

          {/* Introduction */}
          <Card id="agreement-to-terms">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Welcome to Expenser. These Terms and Conditions (&quot;Terms&quot;) govern
                your use of the Expenser expense tracking application and related
                services (collectively, the &quot;Service&quot;).
              </p>
              <p>
                By accessing or using Expenser, you agree to be bound by these
                Terms. If you disagree with any part of these Terms, you may not
                access the Service.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card id="use-of-service">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Use of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Permitted Use:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Personal expense tracking and financial management</li>
                  <li>Creating, categorizing, and analyzing your financial data</li>
                  <li>Generating reports and insights from your expense data</li>
                  <li>Using the service for legitimate financial management purposes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prohibited Activities:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Using the service for illegal or unauthorized purposes</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Uploading malicious code, viruses, or harmful content</li>
                  <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                  <li>Using the service to spam, harass, or harm other users</li>
                  <li>Violating any applicable local, national, or international laws</li>
                  <li>Sharing your account credentials with unauthorized parties</li>
                  <li>Creating multiple accounts to circumvent usage limitations</li>
                  <li>Using automated tools to access the service without permission</li>
                  <li>Attempting to interfere with the proper functioning of the service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>You must provide accurate and current information during registration</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>You must notify us immediately of any security breaches</li>
                  <li>You must be at least 13 years old to use this service</li>
                  <li>You agree to use the service in compliance with all applicable laws</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Content */}
          <Card id="user-content">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                Your Content and Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Ownership:</h4>
                <p>
                  You retain full ownership of all financial data, expense records,
                  and personal information you provide to Expenser. We claim no
                  ownership rights over your content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">License to Use:</h4>
                <p>
                  By using our service, you grant us a limited, non-exclusive license
                  to process, store, and analyze your data solely for the purpose of
                  providing the expense tracking service to you. This license terminates
                  when you delete your account.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Accuracy:</h4>
                <p>
                  While we strive to maintain data integrity, you are responsible for
                  the accuracy of the information you input. We recommend regular
                  backups of important financial data.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card id="intellectual-property">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-indigo-600" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                The Service, including its original content, features,
                functionality, design, code, and visual elements, is owned by
                Shakil Ahmed and is protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
              <p>
                Expenser is released as open-source software under the MIT
                License. You may view, fork, and contribute to the source code on
                GitHub, subject to the terms of the MIT License.
              </p>
              <p>
                The Expenser name, logo, and related marks are trademarks. You may
                not use these marks without prior written permission.
              </p>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card id="service-availability">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Service Availability and Modifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Service Availability:</h4>
                <p>
                  We strive to maintain high availability but cannot guarantee
                  uninterrupted service. The service may be temporarily unavailable
                  due to maintenance, updates, or circumstances beyond our control.
                  We will provide reasonable notice for planned maintenance when possible.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Service Modifications:</h4>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part
                  of the service at any time. We will provide reasonable notice of
                  significant changes that may affect your use of the service.
                  Continued use after modifications constitutes acceptance of the changes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card id="account-termination">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-red-600" />
                Account Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Termination by You:</h4>
                <p>
                  You may terminate your account at any time through the account
                  settings or by contacting us. Upon termination, your access to
                  the service will cease, and your data will be deleted according
                  to our data retention policy.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Termination by Us:</h4>
                <p>
                  We may terminate or suspend your account if you violate these
                  Terms or engage in harmful behavior. We will provide notice when
                  possible, except in cases of severe violations or legal requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card id="disclaimer">
            <CardHeader>
              <CardTitle>Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
                OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the service will be uninterrupted, secure,
                or error-free. You use the service at your own risk and are responsible
                for implementing appropriate backup and security measures for your data.
              </p>
              <p>
                While we implement reasonable security measures, we cannot guarantee
                absolute security of your data. Please refer to our Security Policy
                for details on our security practices.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card id="liability">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                INCLUDING WITHOUT LIMITATION, LOSS OF DATA, LOSS OF PROFITS, OR
                BUSINESS INTERRUPTION.
              </p>
              <p>
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS RELATED TO THE SERVICE
                SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE
                TWELVE MONTHS PRECEDING THE CLAIM. SINCE THE SERVICE IS FREE,
                OUR LIABILITY IS LIMITED TO $100.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card id="governing-law">
            <CardHeader>
              <CardTitle>Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the jurisdiction where the service is operated, without
                regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the service
                will be resolved through binding arbitration or in the courts of
                competent jurisdiction. You agree to resolve disputes individually
                and waive any right to participate in class action lawsuits.
              </p>
              <p>
                Before initiating formal proceedings, you agree to attempt to
                resolve disputes through good faith negotiations by contacting
                us at contact@expenser.site.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card id="changes-to-terms">
            <CardHeader>
              <CardTitle>Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We may update these Terms from time to time to reflect changes in
                our service, legal requirements, or business practices. We will
                notify you of significant changes through the service or by email.
              </p>
              <p>
                Your continued use of the service after changes become effective
                constitutes acceptance of the new Terms. If you do not agree to
                the updated Terms, you should discontinue using the service.
              </p>
              <p>
                We recommend reviewing these Terms periodically to stay informed
                of any updates. The effective date of the current Terms will be
                displayed at the bottom of this page.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:contact@expenser.site" className="text-blue-600 hover:underline">contact@expenser.site</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/sakilahmmad71/expenser" className="text-blue-600 hover:underline">https://github.com/sakilahmmad71/expenser</a></p>
                <p><strong>Website:</strong> <a href="https://expenser.site" className="text-blue-600 hover:underline">https://expenser.site</a></p>
              </div>
              <p className="text-sm text-gray-600">
                These Terms and Conditions are effective as of January 17, 2026 and
                were last updated on January 17, 2026.
              </p>
              <p className="text-sm">
                We are committed to providing clear and fair terms of service and
                will respond to all inquiries within 48 hours during business days.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                This document is part of our commitment to transparency and user rights.
                Thank you for choosing Expenser for your expense tracking needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}