"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icon";

interface SideNavBarProps {
  activeTab?: "overview" | "service-requests" | "technicians" | "analytics" | "inventory" | "settings";
  variant?: "admin" | "client";
  isOpen?: boolean;
  onClose?: () => void;
}

const adminNavItems = [
  { id: "overview", label: "Overview", icon: "dashboard", href: "/admin" },
  { id: "service-requests", label: "Service Requests", icon: "build", href: "/admin" },
  { id: "technicians", label: "Technicians", icon: "engineering", href: "/admin" },
  { id: "analytics", label: "Analytics", icon: "monitoring", href: "/admin" },
  { id: "inventory", label: "Inventory", icon: "inventory_2", href: "/admin" },
  { id: "settings", label: "Settings", icon: "settings", href: "/admin" },
];

const clientNavItems = [
  { id: "overview", label: "Overview", icon: "dashboard", href: "/client" },
  { id: "service-requests", label: "Service Requests", icon: "build", href: "/client" },
  { id: "technicians", label: "Technicians", icon: "engineering", href: "/client" },
  { id: "analytics", label: "Analytics", icon: "monitoring", href: "/client" },
  { id: "inventory", label: "Inventory", icon: "inventory_2", href: "/client" },
  { id: "settings", label: "Settings", icon: "settings", href: "/client" },
];

export function SideNavBar({
  activeTab = "overview",
  variant = "admin",
  isOpen = true,
  onClose,
}: SideNavBarProps) {
  const navItems = variant === "admin" ? adminNavItems : clientNavItems;
  const title = variant === "admin" ? "Admin Console" : "TechServe Pro";
  const subtitle = variant === "admin" ? "Technical Operations" : "Technical Operations";

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <nav
        className={`h-screen w-72 fixed left-0 top-0 border-r border-outline-variant/30 bg-surface flex flex-col py-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-4 mb-8">
          <div>
            <h1 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-black text-primary">
              {title}
            </h1>
            <p className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant mt-1">
              {subtitle}
            </p>
          </div>
          <button className="md:hidden p-2 text-primary" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        {variant === "client" && (
          <div className="px-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUdP1NiGUlK4CwuqJ6PQBhNBTSQD9psJcOzv8vHyDl4DxEEBEPFcQbSpH6mPBfuk8Dw1nFNCAt3AJMiBSjOyBpaOdE-xwdsy3WQTng1w2qHTavYych9wo0Eu8y4qiiN3bZQIA-WQdOUzBt_He7xnHYXy1RK_eRniFhyw5L2Uw2I5Y-FbnXp9D2S27LuESIA6MlsGUbWq1UquckgLDXhVUrtaGbW57Yx-bLe57QSF4anxS761DoVqhuPlM84QQWYqZ1-HcEtKd0wIMs"
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full border border-outline-variant object-cover"
              />
              <div>
                <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-primary">
                  Admin Console
                </p>
                <p className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Technical Operations
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="px-4 mb-6">
          <button className="w-full py-2 px-4 bg-primary text-on-primary rounded-lg font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <Icon name="add" size={18} />
            New Service
          </button>
        </div>

        <ul className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? "text-secondary bg-secondary-container/10 border-r-4 border-secondary"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:translate-x-1"
                }`}
              >
                <Icon
                  name={item.icon}
                  filled={activeTab === item.id}
                  className={activeTab === item.id ? "text-secondary" : ""}
                />
                <span
                  className={`font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium ${
                    activeTab === item.id ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-2 border-t border-outline-variant/30 pt-4">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg"
              >
                <Icon name="help" />
                <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium">
                  Support
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg"
              >
                <Icon name="logout" />
                <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium">
                  Sign Out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideNavBar;
