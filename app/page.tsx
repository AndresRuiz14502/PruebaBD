import Image from "next/image";
import Link from "next/link";
import { TopNavBar } from "@/components/top-nav-bar";
import { Icon } from "@/components/icon";

export default function HomePage() {
  return (
    <>
      <TopNavBar activeTab="marketplace" />

      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-primary-fixed/20 blur-3xl"></div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-12 z-10">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase border border-outline-variant/30">
                Precision Engineering
              </span>
              <h1 className="font-sans text-[36px] leading-[44px] tracking-[-0.02em] font-bold md:text-[48px] md:leading-[56px] text-primary">
                Absolute Reliability in Service Delivery.
              </h1>
              <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-2xl">
                Connect with rigorously vetted technical experts for your high-end property needs.
                Quality and efficiency, guaranteed by our proprietary matching algorithm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/client"
                className="bg-primary text-on-primary font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Explore Marketplace
                <Icon name="arrow_forward" size={20} />
              </Link>
              <button className="bg-surface text-primary border border-outline-variant font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium px-8 py-4 rounded-lg hover:bg-surface-container-low transition-colors shadow-sm flex items-center justify-center gap-2">
                <Icon name="play_circle" size={20} />
                See How It Works
              </button>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/20">
              <div className="flex -space-x-3">
                <Image
                  alt="Professional 1"
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjJUHJ1MEzgMUCSHOYa_ozNPlnMh1teh8TMLgPz3IdJmyVhzx0lc8ESN7CC6lLasNMUXO8v7UhXeehMUC6A2xROTjFovyrsJyPQlpoOX-ZUk9p_SuCBHWwhwMfrBG9N0hSb-9cAwShipx-CiNzrt9ajZ5RcimjumRqYT94lbkFqkV43mvaRwry-eDJWfUNegjndGHDVUlzUXgJucFnqNan9F6pT7_9gjx1i1cqzNLkLHNHoocNcW6JMW1znXOtceHXYqP0pvk0GmqM"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Professional 2"
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sLCZxV8Bh2qu0gA_gfXI1p-d2BA6yQB3jXQ_Oj-2h3pxI0ahUJH7_noi4Z1GN1sNlWzgIRHBRjALwlHOwDHr8Ou8NdmV2Wwtla7UZnDS03KKYGAwBArEjX8InGyyKBEFMhUhvbHSzJPxBvjLMq36g5vNp2Gd1wurlKa2QprAaHvkKi9jFbFH0nN3TVWM8PgXq5sGM4t3zIxUBkOX6j5XL3FxP-gkXQTrg5NdUB1rMHeVBUwg6ZmaebN0v7mg4U7YcU1iFXPDCKv6"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Professional 3"
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkExlNU5J1cVLD3TH35Tnj0cOjmUiElDpnFbcadAYUdmPoPrDtBNbyw8zFdfjU_o_qiean8K9MfYi3WLGa5RDA__oxLrpl_eKtHWF70ach0km4q5JGZo4Zqfrkb3LSFAtRPOUI4uGEmPHbdcxOPv3-IMypRta_aCFmA7OmPERLc6P2iJqkUHr7wwYUxsKVVwTOVZtEht6bK93isWl-3-87rfB_QSFnB4Us1jE8XY46blBdf3r6BdFA08bZe4NiT8MbqB6erJw5nJ7S"
                  width={40}
                  height={40}
                />
              </div>
              <div className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant flex flex-col justify-center">
                <span className="text-primary font-bold">500+ Vetted Experts</span>
                <span className="flex items-center text-[#fbbf24]">
                  <Icon name="star" filled size={16} /> 4.9/5 Average Rating
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative z-10">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-outline-variant/30 group">
              <Image
                alt="Technical Service Illustration"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzOYaGWzw8bn6MouMUcwvAQK2NdNLbj7mAxPFqUXgdu2VzYTLH7VYmIrV1Bkv286JT-K0aqI6t14SzZ0cXMJzCLkRjZoqpIenBwC7LQzhh-hEwRK1prXaOaBUAbaSEXG1g_yiO9k1TDm6rgpaF5I3r6Sj2-FjJc6dvyGAoyiE0R4VvSeVu2J4n-zWNo-nX9S3y5KQjtGlW1tbiQ3HMVPe2WIpPy4eXJobOnHyy8yNc6OEYd2gzTmJl8BxXaoAT6jH-E__F6JEWf0B"
                fill
              />
              {/* Floating UI Card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur-md p-6 rounded-lg border border-outline-variant/30 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <Icon name="verified" filled />
                  </div>
                  <div>
                    <h3 className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-bold text-primary">
                      Verified Professional
                    </h3>
                    <p className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant">
                      Diagnostics & Repair
                    </p>
                  </div>
                </div>
                <span className="bg-[#10b981]/10 text-[#10b981] font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold px-3 py-1 rounded-full border border-[#10b981]/20">
                  Available Now
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-primary mb-3">
                Streamlined Process
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                {"We've engineered a frictionless experience from request to completion."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-outline-variant/30 z-0"></div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="manage_search" size={40} className="text-primary" />
                </div>
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Select Service
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  Choose from our curated list of technical categories and specify your requirements.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="handshake" size={40} className="text-primary" />
                </div>
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Expert Match
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  Our algorithm pairs you with an expert holding the precise certifications needed.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="task_alt" size={40} className="text-primary" />
                </div>
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Execution
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  Precision delivery with real-time tracking and comprehensive digital invoicing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services (Bento Grid) */}
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-3">
            <div className="max-w-2xl">
              <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-primary mb-3">
                Premium Technical Services
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                Rigorously vetted professionals for complex infrastructural needs.
              </p>
            </div>
            <button className="text-secondary font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:text-secondary-fixed-dim transition-colors flex items-center gap-2 whitespace-nowrap">
              View All Services <Icon name="arrow_forward" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Service 1: Large Feature (Plumbing) */}
            <div className="md:col-span-8 bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col justify-between service-card-hover relative overflow-hidden group bento-card">
              <div className="flex justify-between items-start z-10 relative">
                <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant/20 mb-3">
                  <Icon name="plumbing" size={28} className="text-primary service-icon transition-colors" />
                </div>
                <span className="bg-surface font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant/30 shadow-sm">
                  From $120/hr
                </span>
              </div>
              <div className="mt-20 z-10 relative md:w-2/3">
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Advanced Hydro-Systems
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mb-6">
                  Comprehensive diagnostics, leak detection, and high-pressure system maintenance by
                  master certified technicians.
                </p>
                <Link
                  href="/client"
                  className="bg-primary text-on-primary font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm inline-flex items-center gap-2 w-max"
                >
                  Request Service
                </Link>
              </div>
              {/* Decorative Image overlay */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0">
                <Image
                  alt="Plumbing background"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVGWVHmCm5MrRH7Yqj3uF3xbqSJlTJwS4JPDH6hqCLBTCNr4yKH75b9VL_8bvH_sFqX9ZH-SFU0Ysy9_M5GGZmFsVxjlQOKZ3AGHE9QHhPVXZnIVXS7DTHM9ZgK9Q2U_nVmLdB3kYQzE"
                  fill
                />
              </div>
            </div>

            {/* Service 2: Electrical */}
            <div className="md:col-span-4 bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col justify-between service-card-hover bento-card">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant/20 mb-3">
                  <Icon name="electrical_services" size={28} className="text-primary service-icon transition-colors" />
                </div>
                <span className="bg-surface font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant/30 shadow-sm">
                  From $95/hr
                </span>
              </div>
              <div>
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Electrical Systems
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  Panel upgrades, smart home integration, and commercial-grade wiring solutions.
                </p>
              </div>
            </div>

            {/* Service 3: HVAC */}
            <div className="md:col-span-4 bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col justify-between service-card-hover bento-card">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center border border-outline-variant/20 mb-3">
                  <Icon name="mode_fan" size={28} className="text-primary service-icon transition-colors" />
                </div>
                <span className="bg-surface font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant/30 shadow-sm">
                  From $110/hr
                </span>
              </div>
              <div>
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary mb-1">
                  Climate Control
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  HVAC installation, maintenance, and smart thermostat integration for optimal efficiency.
                </p>
              </div>
            </div>

            {/* Service 4: Security */}
            <div className="md:col-span-8 bg-primary-container rounded-xl border border-outline-variant/30 p-6 flex flex-col justify-between relative overflow-hidden group service-card-hover">
              <div className="flex justify-between items-start z-10 relative">
                <div className="w-14 h-14 rounded-lg bg-on-primary-fixed/20 flex items-center justify-center border border-on-primary-fixed/10 mb-3">
                  <Icon name="security" size={28} className="text-on-primary service-icon transition-colors" />
                </div>
                <span className="bg-surface/10 backdrop-blur-sm font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-primary px-3 py-1 rounded-full border border-on-primary/20 shadow-sm">
                  From $200/hr
                </span>
              </div>
              <div className="mt-20 z-10 relative md:w-2/3">
                <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-on-primary mb-1">
                  Security Integration
                </h3>
                <p className="font-sans text-[16px] leading-[24px] text-on-primary-container">
                  Advanced surveillance, access control, and cybersecurity solutions for complete
                  property protection.
                </p>
              </div>
              {/* Decorative background element */}
              <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 z-0">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-container rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-surface-container-low py-20 border-y border-outline-variant/20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-primary mb-3">
                Why Clients Trust Us
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant max-w-2xl mx-auto">
                Our commitment to excellence has earned us the trust of industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-secondary">
                  500+
                </div>
                <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant">
                  Vetted Experts
                </p>
              </div>
              <div className="text-center">
                <div className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-secondary">
                  15K+
                </div>
                <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <div className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-secondary">
                  99.2%
                </div>
                <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant">
                  Client Satisfaction
                </p>
              </div>
              <div className="text-center">
                <div className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-secondary">
                  24/7
                </div>
                <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-on-primary mb-2">
                TechServe Pro
              </h2>
              <p className="font-sans text-[14px] leading-[20px] text-on-primary-container">
                Precision Engineering in Service Delivery
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-primary-container hover:text-on-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-secondary text-on-secondary font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="border-t border-on-primary-fixed/20 mt-8 pt-8">
            <p className="font-sans text-[12px] leading-[16px] text-on-primary-container text-center">
              &copy; 2024 TechServe Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
