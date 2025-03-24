"use client";

import Head from "next/head";
import Image from "next/image";
import {
  Baby,
  Shield,
  Smartphone,
  Moon,
  Heart,
  Music,
  Quote,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SplashScreen from "../Components/SplashScreen";
import { useEffect, useState } from "react";

export default function Marketing() {
  const [isLoading, setIsLoading] = useState(true);

  // Hide splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      text: "This cradle is a lifesaver! My baby sleeps so well, and I finally get some rest too!",
      name: "Sarah M.",
    },
    {
      text: "I love how I can control the cradle remotely with the app. Super convenient!",
      name: "John D.",
    },
    {
      text: "The quality of sleep my baby gets with this cradle is amazing. Best purchase ever!",
      name: "Emma T.",
    },
    {
      text: "Super easy to set up and use. The smart motion adapts perfectly to my baby's needs.",
      name: "Michael R.",
    },
    {
      text: "I highly recommend this to all new parents. It's a game changer!",
      name: "Sophia L.",
    },
  ];

  return (
    <>
      <Head>
        <title>Cradlers - Comfort and Care for Your Little One</title>
        <meta
          name="description"
          content="Cradlers – Smart Baby Cradle that gently rocks your baby to sleep with intelligent motion technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <SplashScreen />
      ) : (
        <main className="bg-gradient-to-b from-white to-[#E0F7F5] min-h-screen font-sans">
          {/* Header Section */}
          <Header />

          {/* Hero Section */}
          <section id="home" className="py-24 sm:py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
              {/* Left - Text Content */}
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-[#28B7A6] to-[#1F9786] text-transparent bg-clip-text">
                    The Smart Baby Cradle
                  </span>
                  <br />
                  Designed for Peaceful Sleep
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                  Comfort and Care for Your Little One with Intelligent Motion
                  Technology.
                </p>
                <button className="bg-gradient-to-r from-[#1F9786] to-[#28B7A6] hover:from-[#28B7A6] hover:to-[#1F9786] text-white py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105 duration-300">
                  Shop Now
                </button>
              </div>

              {/* Right - Cradle Image */}
              <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <Image
                  src="/cradle.png"
                  alt="Smart Baby Cradle"
                  width={480}
                  height={380}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                Why Parents Love Cradlers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Baby,
                    title: "Smart Motion",
                    desc: "Adapts to your baby's sleep cycles.",
                  },
                  {
                    icon: Shield,
                    title: "Safety First",
                    desc: "Certified and tested for security.",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile App Control",
                    desc: "Adjust settings from anywhere.",
                  },
                  {
                    icon: Moon,
                    title: "Sleep Tracking",
                    desc: "Monitor sleep quality effortlessly.",
                  },
                  {
                    icon: Heart,
                    title: "Comfort Sensors",
                    desc: "Maintains ideal temperature & humidity.",
                  },
                  {
                    icon: Music,
                    title: "Soothing Sounds",
                    desc: "Gentle lullabies & white noise.",
                  },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                  >
                    <div className="bg-[#E0F7F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-12 h-12 text-[#28B7A6]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="py-20 bg-gradient-to-r from-[#E0F7F5] to-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                What Parents Say
              </h2>
              <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap">
                  {testimonials
                    .concat(testimonials)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between mx-4 min-w-[320px] sm:min-w-[400px] max-w-[450px] h-auto text-left overflow-hidden text-wrap break-words"
                      >
                        <Quote className="text-gray-300 w-12 h-12" />
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <h3 className="text-lg font-semibold text-[#28B7A6]">
                          - {testimonial.name}
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-gradient-to-r from-[#d3ebeb] to-[#d7fffb] text-light-grey text-center py-16 px-6">
            <h2 className="text-4xl font-extrabold mb-4">
              Give Your Baby The Best Sleep
            </h2>
            <p className="text-lg sm:text-xl mb-6">
              Order your Smart Baby Cradle today and enjoy peaceful nights!
            </p>
            <button className="bg-white text-[#1B8577] hover:bg-gray-100 py-4 px-12 rounded-full font-bold transition transform hover:scale-105 duration-300 shadow-lg">
              Get Yours Now
            </button>
          </section>

          {/* Footer Section */}
          <Footer />
        </main>
      )}

      {/* Tailwind CSS for smooth scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-wrapper {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
        }

        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          min-width: 200%;
        }

        .testimonial {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 0 1rem;
          min-width: 320px;
          max-width: 450px;
          text-align: left;
        }
      `}</style>
    </>
  );
}
