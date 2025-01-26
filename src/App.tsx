import React from "react";
import { Layout } from "./components/Layout";
import {
  ArrowRight,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Sparkles,
  Menu,
  Check,
  Bell,
  FileText,
} from "lucide-react";

function App() {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-[#9bbbf4]" />
            <span className="text-xl font-bold text-[#9bbbf4]">Skinfinity</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-[#9bbbf4]">
              Features
            </a>
            <a href="#" className="hover:text-[#9bbbf4]">
              Pricing
            </a>
            <a href="#" className="hover:text-[#9bbbf4]">
              About
            </a>
            <a href="#" className="hover:text-[#9bbbf4]">
              Contact
            </a>
            <a
              href="/dashboard"
              className="bg-[#9bbbf4] text-white px-6 py-2 rounded-full hover:bg-blue-500"
            >
              Sign In
            </a>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#9bbbf4] to-blue-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            alt="Beauty Clinic"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform Your Beauty Clinic Management with Skinfinity
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Streamline your operations, enhance patient care, and grow your
            beauty clinic with our comprehensive management solution.
          </p>
          <button
            className="bg-white text-[#9bbbf4] px-8 py-3 rounded-full font-semibold
                               hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Active Clinics" },
              { number: "50k+", label: "Patients Managed" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-[#9bbbf4] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Patient Management",
                description:
                  "Efficiently manage patient records and treatment history",
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Streamline appointment booking and management",
              },
              {
                icon: TrendingUp,
                title: "Financial Insights",
                description: "Track revenue and analyze business performance",
              },
              {
                icon: Sparkles,
                title: "Treatment Tracking",
                description: "Monitor and document treatment progress",
              },
              {
                icon: FileText,
                title: "Digital Records",
                description:
                  "Maintain secure digital patient records and history",
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Automated reminders and alerts for appointments",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm text-center"
              >
                <feature.icon className="w-12 h-12 text-[#9bbbf4] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description:
                  "Create your account and set up your clinic profile",
              },
              {
                step: "02",
                title: "Import Data",
                description:
                  "Easily import your existing patient and treatment data",
              },
              {
                step: "03",
                title: "Start Managing",
                description:
                  "Begin streamlining your clinic operations immediately",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#9bbbf4] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                features: [
                  "Up to 500 patients",
                  "Basic reporting",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "$99",
                features: [
                  "Unlimited patients",
                  "Advanced analytics",
                  "24/7 support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Custom solutions",
                  "Dedicated manager",
                  "Premium support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm ${
                  plan.popular ? "ring-2 ring-[#9bbbf4]" : ""
                }`}
              >
                {plan.popular && (
                  <span className="bg-[#9bbbf4] text-white px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mt-4">{plan.name}</h3>
                <p className="text-3xl font-bold my-4">
                  {plan.price}
                  <span className="text-gray-500 text-base">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#9bbbf4]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-full ${
                    plan.popular
                      ? "bg-[#9bbbf4] text-white"
                      : "border border-[#9bbbf4] text-[#9bbbf4]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Skinfinity has revolutionized how we manage our clinic. The
                  system is intuitive and has helped us improve our efficiency
                  significantly."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Clinic Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#9bbbf4] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of successful beauty clinics already using Skinfinity
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#9bbbf4] px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#9bbbf4] mb-4">
              Skinfinity
            </h3>
            <p className="text-gray-600">
              Transform your beauty clinic management with our comprehensive
              solution.
            </p>
          </div>
          {["Product", "Company", "Resources", "Legal"].map(
            (section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section}</h4>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Support", "Contact"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#9bbbf4]"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
