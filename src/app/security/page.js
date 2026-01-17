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

const Key = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
);

const Database = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);

const Server = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircle2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const metadata = {
  title: "Security Practices - Expenser | Data Protection & Security",
  description: "Learn about Expenser's security practices, data encryption, authentication methods, and how we protect your financial information.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="grow py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div id="security-header" className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Security Practices
            </h1>
            <p className="text-gray-600">
              How we protect your financial data and maintain a secure platform
            </p>
          </div>

          {/* Overview */}
          <Card id="security-commitment">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Our Commitment to Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                At Expenser, we take the security of your financial data
                seriously. We implement industry-standard security measures and
                best practices to protect your information from unauthorized
                access, alteration, disclosure, or destruction.
              </p>
              <p>
                This page outlines our security architecture, practices, and
                recommendations for keeping your account secure.
              </p>
            </CardContent>
          </Card>

          {/* Data Encryption */}
          <Card id="data-encryption">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-600" />
                Data Encryption
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Encryption in Transit:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>All data transmitted between your device and our servers is encrypted using TLS 1.3</li>
                  <li>HTTPS is enforced across the entire application with HSTS headers</li>
                  <li>Perfect Forward Secrecy (PFS) ensures past communications remain secure</li>
                  <li>Certificate pinning prevents man-in-the-middle attacks</li>
                  <li>Strong cipher suites and modern cryptographic algorithms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Encryption at Rest:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Database encryption using AES-256 encryption</li>
                  <li>Encrypted database backups with separate key management</li>
                  <li>Sensitive fields are additionally encrypted at the application level</li>
                  <li>Encryption keys are managed through secure key management systems</li>
                  <li>Regular key rotation and secure key storage practices</li>
                  <li>File system encryption on all storage devices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Authentication */}
          <Card id="authentication">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-purple-600" />
                Authentication & Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">User Authentication:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Secure password hashing using bcrypt with salt</li>
                  <li>OAuth 2.0 integration with Google and GitHub</li>
                  <li>Session management with secure, httpOnly cookies</li>
                  <li>Automatic session timeout after inactivity</li>
                  <li>Password strength requirements and validation</li>
                  <li>Account lockout protection against brute force attacks</li>
                  <li>Email verification for account security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Access Controls:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Strict user data isolation - users can only access their own data</li>
                  <li>Role-based access control (RBAC) for administrative functions</li>
                  <li>API rate limiting to prevent abuse</li>
                  <li>Request validation and sanitization</li>
                  <li>CSRF protection on all state-changing operations</li>
                  <li>Cross-origin resource sharing (CORS) restrictions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Multi-Factor Authentication:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Support for OAuth providers as additional security factor</li>
                  <li>Email-based verification for sensitive operations</li>
                  <li>Device recognition and anomaly detection</li>
                  <li>Notification system for suspicious login attempts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Database Security */}
          <Card id="database-security">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-red-600" />
                Database Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Encrypted Storage:</strong> All data is encrypted at rest using AES-256 encryption
                </li>
                <li>
                  <strong>Access Controls:</strong> Database access restricted to authorized services only
                </li>
                <li>
                  <strong>Network Isolation:</strong> Database servers are not directly accessible from the internet
                </li>
                <li>
                  <strong>SQL Injection Prevention:</strong> Parameterized queries and prepared statements
                </li>
                <li>
                  <strong>Regular Backups:</strong> Automated daily backups with encryption and integrity verification
                </li>
                <li>
                  <strong>Audit Logging:</strong> All database operations are logged for security monitoring
                </li>
                <li>
                  <strong>Connection Security:</strong> Encrypted connections between application and database
                </li>
                <li>
                  <strong>Data Minimization:</strong> We only store necessary data and regularly purge unnecessary logs
                </li>
                <li>
                  <strong>Schema Validation:</strong> Strict data validation at the database level
                </li>
                <li>
                  <strong>Backup Recovery:</strong> Regular testing of backup restoration procedures
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Infrastructure */}
          <Card id="infrastructure">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-orange-600" />
                Infrastructure Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Hosting Security:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Hosted on enterprise-grade cloud infrastructure</li>
                  <li>DDoS protection and web application firewall (WAF)</li>
                  <li>Geographically distributed infrastructure for redundancy</li>
                  <li>Automatic failover and disaster recovery procedures</li>
                  <li>Network segmentation and isolation</li>
                  <li>Regular security patches and updates</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>24/7 infrastructure monitoring and alerting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Container Security:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Containerized applications with security-hardened images</li>
                  <li>Regular vulnerability scanning of container images</li>
                  <li>Least-privilege container execution</li>
                  <li>Network policies and service mesh security</li>
                  <li>Secrets management through secure vaults</li>
                  <li>Container runtime security monitoring</li>
                  <li>Immutable infrastructure principles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Network Security:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Virtual private clouds (VPC) with strict network policies</li>
                  <li>End-to-end encryption for all inter-service communication</li>
                  <li>Load balancers with SSL termination</li>
                  <li>IP allowlisting for administrative access</li>
                  <li>Network traffic monitoring and analysis</li>
                  <li>Firewall rules and port restrictions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Application Security */}
          <Card id="application-security">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-indigo-600" />
                Application Security Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Secure Development:</strong> Security-first development practices and code reviews
                </li>
                <li>
                  <strong>Input Validation:</strong> Comprehensive input sanitization and validation
                </li>
                <li>
                  <strong>Output Encoding:</strong> Proper encoding to prevent XSS attacks
                </li>
                <li>
                  <strong>Error Handling:</strong> Secure error handling that doesn&apos;t leak sensitive information
                </li>
                <li>
                  <strong>Logging:</strong> Security event logging without exposing sensitive data
                </li>
                <li>
                  <strong>Dependency Management:</strong> Regular updates and vulnerability scanning of dependencies
                </li>
                <li>
                  <strong>Static Analysis:</strong> Automated security scanning of source code
                </li>
                <li>
                  <strong>Penetration Testing:</strong> Regular security assessments by security professionals
                </li>
                <li>
                  <strong>Secure Headers:</strong> Implementation of security headers (CSP, HSTS, etc.)
                </li>
                <li>
                  <strong>API Security:</strong> Rate limiting, authentication, and input validation for all APIs
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Monitoring */}
          <Card id="monitoring">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Monitoring & Incident Response
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Security Monitoring:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Real-time security event monitoring and alerting</li>
                  <li>Automated threat detection and response</li>
                  <li>Log aggregation and analysis for security incidents</li>
                  <li>Anomaly detection for unusual user behavior</li>
                  <li>Failed login attempt monitoring and alerting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Incident Response:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>24/7 security incident response procedures</li>
                  <li>Automated incident detection and classification</li>
                  <li>Rapid containment and mitigation strategies</li>
                  <li>Post-incident analysis and improvement processes</li>
                  <li>Communication plan for security incidents affecting users</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card id="best-practices">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Security Best Practices for Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Help us keep your account secure by following these
                recommendations:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Strong Passwords:</strong> Use unique, complex passwords with a mix of characters</li>
                <li><strong>Password Manager:</strong> Consider using a password manager for better security</li>
                <li><strong>Secure Devices:</strong> Keep your devices updated and use antivirus software</li>
                <li><strong>Public Wi-Fi:</strong> Avoid accessing sensitive data on public networks</li>
                <li><strong>Phishing Awareness:</strong> Be cautious of suspicious emails or links</li>
                <li><strong>Regular Reviews:</strong> Regularly review your account activity and transactions</li>
                <li><strong>Logout:</strong> Always logout from shared or public computers</li>
                <li><strong>Updates:</strong> Keep your browser and operating system updated</li>
                <li><strong>Two-Factor Auth:</strong> Use OAuth providers for additional security</li>
                <li><strong>Report Issues:</strong> Contact us immediately if you notice suspicious activity</li>
              </ul>
            </CardContent>
          </Card>

          {/* Open Source */}
          <Card id="open-source">
            <CardHeader>
              <CardTitle>Open Source Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Expenser is open source, which provides several security benefits:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Transparency:</strong> Our code is publicly available for security review</li>
                <li><strong>Community Audit:</strong> Security researchers can examine our implementation</li>
                <li><strong>Rapid Patching:</strong> Security issues can be identified and fixed quickly</li>
                <li><strong>No Hidden Backdoors:</strong> Complete transparency in our security implementation</li>
                <li><strong>Industry Standards:</strong> We follow established security patterns and practices</li>
              </ul>
              <p className="mt-3">
                You can review our security implementation on GitHub:
              </p>
              <a href="https://github.com/sakilahmmad71/expenser" className="text-blue-600 hover:underline">
                https://github.com/sakilahmmad71/expenser
              </a>
              <p className="mt-3">
                We welcome security contributions and responsible disclosure of any
                security vulnerabilities.
              </p>
            </CardContent>
          </Card>

          {/* Responsible Disclosure */}
          <Card id="responsible-disclosure">
            <CardHeader>
              <CardTitle>Responsible Security Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We appreciate security researchers and users who help improve our
                security. If you discover a security vulnerability, please follow
                responsible disclosure practices:
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2">Reporting Process:</h4>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Email security reports to: <strong>contact@expenser.site</strong></li>
                  <li>Include detailed steps to reproduce the vulnerability</li>
                  <li>Provide impact assessment and potential exploitation scenarios</li>
                  <li>Allow reasonable time for us to investigate and fix the issue</li>
                  <li>Avoid accessing user data or disrupting our services</li>
                </ol>
              </div>
              <p>
                <strong>Response Time:</strong> We commit to acknowledging security
                reports within 24 hours and providing updates on our progress.
              </p>
              <p>
                <strong>Recognition:</strong> We maintain a security hall of fame for
                researchers who help improve our security (with their permission).
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card id="security-contact">
            <CardHeader>
              <CardTitle>Security Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                For security-related questions, concerns, or reports, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Security Email:</strong> <a href="mailto:contact@expenser.site" className="text-blue-600 hover:underline">contact@expenser.site</a></p>
                <p><strong>GitHub Security:</strong> <a href="https://github.com/sakilahmmad71/expenser/security" className="text-blue-600 hover:underline">https://github.com/sakilahmmad71/expenser/security</a></p>
                <p><strong>General Contact:</strong> <a href="https://expenser.site/contact" className="text-blue-600 hover:underline">https://expenser.site/contact</a></p>
              </div>
              <p className="text-sm text-gray-600">
                For general questions, use our regular support channels. For security
                issues, please use the security email to ensure proper prioritization.
              </p>
              <p className="text-sm">
                Our security team monitors security communications 24/7 and will
                respond promptly to all security-related inquiries.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}