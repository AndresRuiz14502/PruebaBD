"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@techserve.pro");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate based on email - admin goes to admin, others to client
    if (email.includes("admin")) {
      router.push("/admin");
    } else {
      router.push("/client");
    }
  };

  return (
    <main className="relative min-h-screen w-full">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left: Brand Visual */}
        <div className="relative hidden lg:flex flex-col justify-between bg-surface-container-highest p-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Brand Visual"
              className="object-cover w-full h-full opacity-60 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIknf-_lBSzsPKzWdutQm6ZI9i7ktuW-KWL4xtz2J9qYKvoPLJUYMxDgoByXeeb_WNBw1eeHZ5ahtoDhQhYBllxQDmFi1DgLHMtwrLg3PUg0Vpr4MdxxQWuhDPLhROKvB5khjNK4QKubG47pjXwVZkgd7-w_vcpu-GtEFLfHcNWiWjnrDYbhHTsyEoBJYU5pLxljkYIWi0KEIsZRA-EmCGVYTKVaBw-RnVfrUDjJWdwkb81TOQCyV82LDdD2LY647RLiLpPcaY8Ipk"
              fill
            />
          </div>
          <div className="relative z-10">
            <h1 className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-primary">
              TechServe Pro
            </h1>
            <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant mt-6 max-w-md">
              Precision engineering in service delivery. Access your centralized dashboard to manage
              technical operations.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-3 text-on-surface-variant">
            <Icon name="verified_user" filled className="text-secondary" />
            <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium">
              Enterprise Grade Security
            </span>
          </div>
        </div>

        {/* Right: Minimalist Form */}
        <div className="flex items-center justify-center p-6 lg:p-20 bg-surface-container-lowest">
          <div className="w-full max-w-md">
            {/* Mobile Brand Header */}
            <div className="lg:hidden mb-12">
              <h1 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-bold text-primary">
                TechServe Pro
              </h1>
            </div>

            <div className="mb-12">
              <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-on-surface mb-1">
                Welcome back
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                Sign in to your account to continue.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant mb-1"
                  htmlFor="login-email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="input-ring-transition w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-sans text-[16px] leading-[24px] text-on-surface placeholder:text-outline focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-secondary">
                      <Icon name="check_circle" filled size={20} />
                    </div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label
                  className="block font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant mb-1"
                  htmlFor="login-password"
                >
                  Password
                </label>
                <input
                  className="input-ring-transition w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 font-sans text-[16px] leading-[24px] text-on-surface placeholder:text-outline focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Utilities */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-1 cursor-pointer group">
                  <input
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 transition-colors cursor-pointer"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  href="#"
                  className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-secondary hover:text-secondary-fixed-dim transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Actions */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary text-on-primary py-3 font-sans text-[14px] leading-[20px] tracking-[0.01em] font-bold shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-on-surface transition-all active:scale-[0.98]"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-20 text-center">
              <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                {"Don't have a client account? "}
                <Link
                  href="/register"
                  className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-bold text-primary hover:text-secondary transition-colors ml-1"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
