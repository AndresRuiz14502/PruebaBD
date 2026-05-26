"use client";

import Link from "next/link";
import { Icon } from "./icon";

interface TopNavBarProps {
  activeTab?: "marketplace" | "services" | "pricing" | "enterprise";
}

export function TopNavBar({ activeTab = "marketplace" }: TopNavBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-primary hidden md:block"
        >
          TechServe Pro
        </Link>
        <Link
          href="/"
          className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary md:hidden"
        >
          TechServe Pro
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium ${
              activeTab === "marketplace"
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg px-3 py-2"
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="#services"
            className={`font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium ${
              activeTab === "services"
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg px-3 py-2"
            }`}
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className={`font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium ${
              activeTab === "pricing"
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg px-3 py-2"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="#enterprise"
            className={`font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium ${
              activeTab === "enterprise"
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-lg px-3 py-2"
            }`}
          >
            Enterprise
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden lg:block font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-primary bg-transparent border border-outline px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-primary bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <button className="md:hidden text-on-surface-variant">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopNavBar;
