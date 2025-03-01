"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SplashScreen from "../Components/SplashScreen"; // Import the SplashScreen component

const Inquire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoadingSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Your inquiry has been submitted successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setAlert({ type: "error", message: "Submission failed. Please try again!" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({ type: "error", message: "An error occurred. Please try again later." });
    }

    setLoading(false);

    // Hide alert after 5 seconds
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <>
      <Head>
        <title>Inquiry - Cradlers</title>
        <meta name="description" content="Submit an inquiry to get in touch with us." />
      </Head>

      {isLoadingSplash ? (
        <SplashScreen />
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />

          {/* Page Content - Form Centered */}
          <main className="flex flex-grow items-center justify-center px-4 py-12 sm:py-20">
            <div className="bg-white shadow-xl rounded-xl px-8 py-10 w-full max-w-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Submit an Inquiry</h2>

              {/* Alert Message inside the form */}
              {alert && (
                <div
                  className={`mb-6 px-4 py-3 rounded-lg shadow-md text-white text-lg font-semibold transition-all duration-500 ${
                    alert.type === "success" ? "bg-green-500" : "bg-red-500"
                  } flex items-center justify-between`}
                >
                  {alert.message}
                  <button
                    className="ml-4 text-white text-xl font-bold focus:outline-none"
                    onClick={() => setAlert(null)}
                  >
                    &times;
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#30D5C8] focus:border-[#30D5C8] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#30D5C8] focus:border-[#30D5C8] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#30D5C8] focus:border-[#30D5C8] transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#30D5C8] hover:bg-[#26B2A7] transform hover:scale-105"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Inquire;
