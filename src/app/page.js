'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Expenser</h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
              <a href="#tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors">Tech Stack</a>
              <a
                href={process.env.NEXT_PUBLIC_EXPENSE_MANAGER_APP_URL || "http://localhost:5173"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#features"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Features
                </a>
                <a
                  href="#demo"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Demo
                </a>
                <a
                  href="#tech-stack"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Tech Stack
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_EXPENSE_MANAGER_APP_URL || "http://localhost:5173"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-200 overflow-hidden" role="banner">
        {/* Dashed Bottom Fade Grid */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Take Control of Your
              <span className="block text-gray-900">
                Personal Finances
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600">
              Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive expense management platform.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href={process.env.NEXT_PUBLIC_EXPENSE_MANAGER_APP_URL || "http://localhost:5173"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Start tracking expenses for free"
              >
                Get Started Free
              </a>
            </div>

            {/* Demo Video */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                  src="https://www.youtube.com/embed/Ux_ywSn4ZJo?si=iRZSOqo5fNKDvaOc"
                  title="Expenser Demo - Complete Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Stats */}
            <section className="mt-16" aria-labelledby="stats-heading">
              <h2 id="stats-heading" className="sr-only">Expenser Platform Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
                <article className="p-6 bg-gray-100 rounded-xl text-center">
                  <div className="text-4xl font-bold text-gray-900" aria-label="1,200 plus active users">1.2K+</div>
                  <div className="text-gray-600 mt-1">Active Users</div>
                </article>
                <article className="p-6 bg-gray-100 rounded-xl text-center">
                  <div className="text-4xl font-bold text-gray-900" aria-label="8,500 plus expenses tracked">8.5K+</div>
                  <div className="text-gray-600 mt-1">Expenses Tracked</div>
                </article>
                <article className="p-6 bg-gray-100 rounded-xl text-center">
                  <div className="text-4xl font-bold text-gray-900" aria-label="12 plus currencies supported">12+</div>
                  <div className="text-gray-600 mt-1">Currencies</div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Expenses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make expense tracking effortless and insightful
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Authentication</h3>
              <p className="text-gray-600">
                JWT-based authentication with bcrypt password hashing ensures your financial data stays private and secure.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Currency Support</h3>
              <p className="text-gray-600">
                Track expenses in 15+ currencies including USD, EUR, GBP, JPY, INR, and BDT with automatic conversion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Categories</h3>
              <p className="text-gray-600">
                Create personalized categories with custom colors and icons to organize your expenses your way.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Visualize spending patterns with interactive charts, category breakdowns, and monthly trend analysis.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Filtering</h3>
              <p className="text-gray-600">
                Filter expenses by category, date range, amount, and more with powerful search and sorting options.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Instant synchronization across all your devices with real-time data updates and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features in Action Section */}
      <section id="demo" className="py-24 bg-white border-t border-gray-200" aria-labelledby="demo-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6" aria-hidden="true">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h2 id="demo-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Features in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the powerful capabilities that make expense tracking simple, visual, and insightful.
              Every feature is designed to give you complete control over your finances.
            </p>
          </header>

          <div className="space-y-24">{/* Dashboard Overview */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/expenses-status-and-filters.png"
                      alt="Comprehensive dashboard showing date range filter with start and end date selectors, and four key metrics cards displaying total expenses of $252.6M with 94.9% decrease vs last month, total count of 1.0M expenses, average expense of $252.64, and 500 categories"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Real-time dashboard with customizable date filters and key performance indicators</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Dashboard Overview
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Get instant insights with our powerful dashboard. Filter expenses by date range and view key metrics including total expenses, expense count, average spending, and total categories at a glance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Custom date range filtering for precise analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real-time statistics with comparison to previous periods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Clean, intuitive interface with color-coded metrics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly Trends */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Monthly Trends
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Track your spending patterns month by month with interactive bar charts. Identify seasonal variations, spot unusual spending spikes, and compare current expenses with historical data.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Visual comparison of spending across 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Identify seasonal spending patterns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Hover over bars for detailed monthly totals</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/monthly-expenses-trends.png"
                      alt="Interactive bar chart displaying monthly expense trends from February to December 2025, showing spending patterns ranging from 15M to 25M per month with visual comparison between months"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Monthly trends help identify seasonal spending patterns and track year-over-year changes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Spending Categories */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/top-spending-categories.png"
                      alt="Horizontal bar chart showing top 5 spending categories: Train (545.1K), Taxi 2 (541.1K), Life Insurance 2 (536.9K), Education 3 (536.2K), and Printer 3 (535.0K) with color-coded bars"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Instantly identify your highest spending categories to make informed budgeting decisions</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Top Spending Categories
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  See at a glance where most of your money goes. Our ranking system automatically identifies and displays your top 5 spending categories with exact amounts and color-coded bars.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Automatically ranked by total spending amount</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Color-coded bars for quick visual comparison</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Precise amounts displayed for each category</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expense Management */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Expense Management
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Efficiently manage all your expenses in one place. Search, filter by date and category, sort by different criteria, and perform bulk operations on multiple expenses.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advanced search and filtering options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sort by date, amount, or category</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Quick actions for edit, delete, and bulk operations</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/expenses-filters-and-list.png"
                      alt="Comprehensive expense list showing 20 of 500 expenses with search bar, filter by 'Updated Date', sort by 'Descending', displaying expense cards with category icons, titles, amounts, and dates with quick action buttons"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Powerful search and filtering to find any expense in seconds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Categories */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/expense-categories-and-filters.png"
                      alt="Smart categories grid showing 20 of 500 categories with search functionality, each card displaying custom emoji icon, category name, total amount, expense count, and trend percentage (Fitness: $508,532.12 with 2029 expenses at 94%, Healthcare: $518,601.82 with 2058 expenses at 92%)"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Organize and track spending across customizable categories with real-time statistics</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Smart Categories
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Organize expenses with custom categories. Each category shows total amount, expense count, and percentage change. Search and sort to find categories quickly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Custom emojis and colors for visual identification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real-time statistics with trend indicators</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Search and sorting capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expense Detailed Views */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Expense Detailed Views
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  View comprehensive details for any expense. Access all information including dates, amounts, currency, descriptions, and metadata with quick action buttons for editing and deletion.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Complete expense information with all details</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Timestamps for creation and last update</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Quick action buttons for edit and delete</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-9/16 w-full overflow-hidden">
                    <Image
                      src="/images/expense-details-preview.png"
                      alt="Detailed expense view for Garden care showing $259.93 amount with expense date (Friday, January 2, 2026), currency (USD), creation timestamp (Jan 2, 2026, 07:19 PM), description field, and action buttons for delete, edit, and close"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Complete expense details with all metadata and quick actions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Detailed Views */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src="/images/expense-category-preview.png"
                      alt="Interactive pie chart showing category breakdown of 500 categories with top 10 displayed: Train (10.18%), Taxi 2 (10.1%), Life Insurance (10.03%), Education 3 (10.01%), Printer 3 (9.99%), Streaming 4 (9.98%), Watches 3 (9.94%), Entertainment 3 (9.93%), Charity 3 (9.93%), and Furniture 2 (9.91%) with color-coded segments and detailed legend"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-medium">Visual breakdown showing percentage distribution across all spending categories</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    Category Detailed Views
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Visualize your category spending distribution with interactive pie charts. See how much you spend in each category with percentage breakdowns and identify areas where you can optimize your budget.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Interactive pie chart with percentage breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Color-coded segments for easy identification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Top categories displayed with detailed legend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works - Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start tracking your expenses and managing your budget in minutes with our simple three-step process
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-12">
            <article className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg" aria-hidden="true">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Create Your Free Account</h3>
              <p className="text-gray-600">
                Sign up with your email and create a secure account in seconds. No credit card required - start tracking expenses immediately.
              </p>
            </article>

            <article className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg" aria-hidden="true">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Add & Categorize Expenses</h3>
              <p className="text-gray-600">
                Start tracking your expenses with custom categories, amounts, and descriptions. Support for 12+ currencies worldwide.
              </p>
            </article>

            <article className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg" aria-hidden="true">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Analyze & Optimize Spending</h3>
              <p className="text-gray-600">
                View detailed analytics, identify spending patterns, set budgets, and make smarter financial decisions with real-time insights.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-gray-50" aria-labelledby="tech-stack-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="tech-stack-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built with Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by industry-leading technologies for optimal performance, security, and reliability
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list" aria-label="Technology stack used">
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">React 18</h3>
              <p className="text-sm text-gray-600">Modern UI Framework</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">Next.js 15</h3>
              <p className="text-sm text-gray-600">Full-stack Framework</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">Express.js</h3>
              <p className="text-sm text-gray-600">REST API Backend</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">PostgreSQL</h3>
              <p className="text-sm text-gray-600">Robust Database</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">Prisma ORM</h3>
              <p className="text-sm text-gray-600">Type-safe Database</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Utility-first CSS</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">Docker</h3>
              <p className="text-sm text-gray-600">Containerization</p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-300" role="listitem">
              <h3 className="font-semibold text-gray-900 mb-2">JWT Auth</h3>
              <p className="text-sm text-gray-600">Secure Authentication</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Take Control of Your Personal Finances?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join over 1,200 users who are already managing their expenses smarter with Expenser - free forever
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_EXPENSE_MANAGER_APP_URL || "http://localhost:5173"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Start tracking expenses for free"
            >
              Start Tracking Expenses Free
            </a>
            <a
              href="mailto:contact@expenser.site"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Contact Expenser support team"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Social Links */}
            <nav aria-label="Social media links">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/sakilahmmad71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sakilahmmad71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com/sakilahmmad71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </nav>

            {/* Divider */}
            <div className="w-full max-w-md border-t border-gray-200"></div>

            {/* Legal Links */}
            <nav aria-label="Legal and policy links">
              <div className="flex items-center justify-center gap-6 text-xs">
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="/security"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Security
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </nav>

            {/* Copyright */}
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-sm text-gray-600 flex items-center gap-1">
                Made with
                <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                by{' '}
                <a
                  href="https://github.com/sakilahmmad71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  Shakil Ahmed
                </a>
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Open source and free for everyone to use
              </p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Expenser. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
