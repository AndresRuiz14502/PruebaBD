"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    identityDoc: "",
    address: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to client dashboard after registration
    router.push("/client");
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-surface">
      {/* Left Screen: Branding & Visuals (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-primary-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="TechServe Pro Architectural Background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-bwdZjv_GP1XctNC8MUekXzXf75Ay4ZSbg0n3kfE5sJCcu8lFRaRgdN72ouWuTyEId23TqffqNAKbyYyAhSUV5ySPlM2L1CHMOULCKhralwxktqc3iysCGhrqHcySJfDrSb1CVCRpX4IgMScgtjtRoB4dAp83ogaPMOdDfzhXEZtODE6yyu8UAx68TELJY_62xc9ALskdAr59vHlOs1PiSANZPmITIqkYo4o9LM4PkkCbWxaWOjJc_Al_pVNTQ-AWkZFkh-tPR3T9"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/80 to-primary-container/95"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-between p-12 h-full w-full">
          <div className="flex items-center gap-3">
            <Icon name="precision_manufacturing" filled size={32} className="text-secondary-container" />
            <span className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-on-primary">
              TechServe Pro
            </span>
          </div>
          <div className="max-w-md">
            <h1 className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-on-primary mb-6">
              Precision engineering in service delivery.
            </h1>
            <p className="font-sans text-[18px] leading-[28px] text-on-primary-container">
              Join an elite network of vetted technical professionals. Elevate your practice with our
              comprehensive management tools.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary-container flex items-center justify-center text-on-surface-variant font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold">
                TS
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary-container flex items-center justify-center text-on-primary font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold">
                PR
              </div>
            </div>
            <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-primary-container ml-3">
              Trusted by 5,000+ professionals
            </span>
          </div>
        </div>
      </div>

      {/* Right Screen: Registration Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex items-center justify-center p-6 sm:p-12 min-h-screen bg-surface">
        <div className="w-full max-w-[520px]">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center gap-3 mb-20">
            <Icon name="precision_manufacturing" filled size={28} className="text-primary" />
            <span className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-black text-primary">
              TechServe Pro
            </span>
          </div>

          <div className="mb-12">
            <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-on-surface mb-1">
              Create an Account
            </h2>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
              Enter your details to apply for the professional network.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1">
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Doe"
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Birth Date */}
              <div className="space-y-1">
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                  htmlFor="dob"
                >
                  Birth Date
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="dob"
                  name="dob"
                  required
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Identity Document */}
            <div className="space-y-1">
              <label
                className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                htmlFor="identityDoc"
              >
                Identity Document Number (SSN/Tax ID)
              </label>
              <input
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                id="identityDoc"
                name="identityDoc"
                placeholder="XXX-XX-XXXX"
                required
                type="text"
                value={formData.identityDoc}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <label
                className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                htmlFor="address"
              >
                Business Address
              </label>
              <textarea
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
                id="address"
                name="address"
                placeholder="123 Tech Lane, Suite 100&#10;San Francisco, CA 94105"
                required
                rows={2}
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label
                className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/50 input-ring-transition focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon name={showPassword ? "visibility" : "visibility_off"} size={20} />
                </button>
              </div>
              <p className="font-sans text-[11px] leading-[16px] text-outline mt-1 font-normal tracking-normal">
                Must be at least 8 characters, including a number and symbol.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium shadow-sm hover:shadow-md hover:bg-tertiary-container transition-all duration-200 flex items-center justify-center gap-2"
              >
                Sign Up
                <Icon name="arrow_forward" size={18} />
              </button>
            </div>
          </form>

          <div className="mt-20 text-center">
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-secondary hover:text-secondary-container transition-colors ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
