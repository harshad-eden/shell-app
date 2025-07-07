import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const portals = [
    {
      name: "Sales Portal",
      description: "CRM, quotes, and policy management",
      href: "/sales",
      icon: "🎯",
    },
    {
      name: "Underwriter Portal",
      description: "Risk assessment and approvals",
      href: "/underwriter",
      icon: "🛡️",
    },
    {
      name: "Product Configuration",
      description: "Product setup and pricing",
      href: "/products",
      icon: "⚙️",
    },
  ];

  return (
    <div className="p-6">
      {/* Main Dashboard Banner */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-indigo-800">
          🏠 You are on the Main Insurance Platform Dashboard
        </h3>
        <p className="text-xs text-indigo-600 mt-1">
          Select a portal below to access specific functionality
        </p>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Insurance Platform Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to your insurance management platform. Choose a portal to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portals.map((portal) => (
          <Link key={portal.name} to={portal.href}>
            <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{portal.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{portal.name}</h3>
                <p className="text-gray-600 mb-4">{portal.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Click to enter →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
