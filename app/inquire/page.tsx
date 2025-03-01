"use client";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Inquire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        alert("Inquiry submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit inquiry.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Inquiry - Cradlers</title>
        <meta name="description" content="Submit an inquiry to get in touch with us." />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Page Content - Form Centered */}
        <main className="flex flex-grow items-center justify-center bg-gray-100 px-4 py-12 sm:py-20">
          <div className="bg-white shadow-lg rounded-lg px-6 sm:px-8 py-8 w-full max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
              Submit an Inquiry
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#30D5C8]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#30D5C8]"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#30D5C8]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#30D5C8] hover:bg-[#26B2A7]"
                } text-white font-semibold py-3 px-6 rounded-lg transition`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Inquire;
