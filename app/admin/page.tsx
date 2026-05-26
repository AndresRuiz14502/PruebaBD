"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SideNavBar } from "@/components/side-nav-bar";
import { Icon } from "@/components/icon";

const serviceRequests = [
  {
    id: "REQ-8091",
    client: "Acme Corp HQ",
    serviceType: "HVAC Diagnostic",
    status: "In Progress",
    statusColor: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "REQ-8092",
    client: "Stark Industries",
    serviceType: "Server Rack Install",
    status: "Pending",
    statusColor: "bg-amber-100 text-amber-800",
  },
  {
    id: "REQ-8093",
    client: "Wayne Enterprises",
    serviceType: "Security System Audit",
    status: "In Progress",
    statusColor: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "REQ-8094",
    client: "Daily Planet",
    serviceType: "Network Troubleshooting",
    status: "Completed",
    statusColor: "bg-slate-100 text-slate-800",
  },
];

const technicians = [
  { initials: "JD", name: "John Doe", status: "En route to REQ-8091", eta: "2 min" },
  { initials: "SK", name: "Sarah Kim", status: "On-site at REQ-8093", eta: "Active" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface flex min-h-screen">
      {/* SideNavBar */}
      <SideNavBar
        activeTab="analytics"
        variant="admin"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-surface border-b border-outline-variant/30 z-30">
        <h1 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-black text-primary">
          Admin Console
        </h1>
        <button className="p-2 text-primary" onClick={() => setSidebarOpen(true)}>
          <Icon name="menu" />
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-72 p-6 max-w-[1280px] mx-auto w-full mt-16 md:mt-0">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="font-sans text-[30px] leading-[38px] tracking-[-0.01em] font-semibold text-primary">
              Operations Analytics
            </h2>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant mt-1">
              Real-time metrics and service orchestration.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="pl-10 pr-4 py-2 border border-outline-variant/50 rounded-lg font-sans text-[16px] leading-[24px] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none w-full md:w-64 bg-surface-container-lowest widget-shadow"
                placeholder="Search resources..."
                type="text"
              />
            </div>
            <button className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <Icon name="notifications" className="text-on-surface-variant" />
            </button>
          </div>
        </header>

        {/* Analytics Widgets (Bento Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Widget 1: Revenue */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 widget-shadow hover-lift">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                Total Revenue
              </h3>
              <span className="text-secondary bg-secondary-container/20 p-2 rounded-lg">
                <Icon name="payments" />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-primary">
                $124,500
              </span>
              <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-emerald-600 flex items-center">
                <Icon name="arrow_upward" size={16} /> 12.5%
              </span>
            </div>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant/70 mt-2">
              vs. previous 30 days
            </p>
          </div>

          {/* Widget 2: Technicians */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 widget-shadow hover-lift">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                Active Technicians
              </h3>
              <span className="text-secondary bg-secondary-container/20 p-2 rounded-lg">
                <Icon name="engineering" />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-primary">
                48
              </span>
              <span className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                / 52 available
              </span>
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-2 mt-4">
              <div className="bg-secondary h-2 rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>

          {/* Widget 3: Pending Requests */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 widget-shadow hover-lift">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                Pending Requests
              </h3>
              <span className="text-error bg-error-container/50 p-2 rounded-lg">
                <Icon name="pending_actions" />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-primary">
                15
              </span>
              <span className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-error flex items-center">
                <Icon name="arrow_upward" size={16} /> 3 urgent
              </span>
            </div>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant/70 mt-2">
              Requires immediate dispatch
            </p>
          </div>
        </section>

        {/* Complex Layout Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* Service Management Table (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant/30 widget-shadow overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
              <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary">
                Service Management
              </h3>
              <button className="text-secondary font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium flex items-center gap-1 hover:underline">
                View All <Icon name="arrow_forward" size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F1F5F9] border-b border-outline-variant/30">
                    <th className="p-4 font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                      ID
                    </th>
                    <th className="p-4 font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                      Client
                    </th>
                    <th className="p-4 font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                      Service Type
                    </th>
                    <th className="p-4 font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                      Status
                    </th>
                    <th className="p-4 font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {serviceRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="hover:bg-surface-container-low/30 transition-colors"
                    >
                      <td className="p-4 font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-on-surface-variant">
                        {request.id}
                      </td>
                      <td className="p-4 font-sans text-[16px] leading-[24px] text-primary font-medium">
                        {request.client}
                      </td>
                      <td className="p-4 font-sans text-[16px] leading-[24px] text-on-surface-variant">
                        {request.serviceType}
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${request.statusColor}`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-on-surface-variant hover:text-secondary">
                          <Icon name="more_vert" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technician Dispatch Map Widget */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 widget-shadow overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
              <h3 className="font-sans text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-primary">
                Live Dispatch
              </h3>
              <button className="text-on-surface-variant hover:text-secondary">
                <Icon name="filter_list" />
              </button>
            </div>
            <div className="relative h-64 bg-surface-container-low w-full overflow-hidden">
              {/* Map Placeholder Image */}
              <Image
                alt="Map View"
                className="w-full h-full object-cover opacity-70 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeWzIckYyXzzmn1ekHRsNCcnFZyUxt6EH7yyHEXws1-28qj2bE3repWGI6VovAUsx7N0eSK87tne6a_LAc_T-BcFXEku44Ls7uEdLNhvA7A7ylFKnYigyy-4BpMz8ipznNxET96KFbThi-bGxqc5osyoQrTQ-S5xWFpcwscPe48j8KrnZN-GvKeVxSZY8iRuyAHmjAVz6PjKP3BpA1SMyX3tVGuzwi3epd7IXdvVutvwXODEAAWsexB09qAwASKq19dxzuPlVd-FY"
                fill
              />
              {/* Faux Map Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-md animate-pulse"></div>
              <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {technicians.map((tech) => (
                <div
                  key={tech.initials}
                  className="flex items-center gap-3 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold">
                    {tech.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-[14px] leading-[20px] tracking-[0.01em] font-medium text-primary">
                      {tech.name}
                    </p>
                    <p className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant">
                      {tech.status}
                    </p>
                  </div>
                  <span className="font-sans text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-secondary">
                    {tech.eta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
