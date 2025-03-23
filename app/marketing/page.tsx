"use client";

import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Smartphone, Wifi, Cloud, Settings, Download } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Marketing() {
  const carouselImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  const appFeatures = [
    {
      icon: Wifi,
      title: "IoT-Enabled Smart Cradle",
      description: "Control and monitor your baby's cradle remotely using Wi-Fi connectivity.",
    },
    {
      icon: Smartphone,
      title: "Android & iOS App",
      description: "Download our app to control the cradle, track sleep patterns, and receive alerts.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Store and analyze your baby's sleep data securely in the cloud.",
    },
    {
      icon: Settings,
      title: "Customizable Settings",
      description: "Adjust rocking speed, music, and temperature to suit your baby's needs.",
    },
  ];

  return (
    <>
      <Head>
        <title>Marketing - Cradlers</title>
        <meta
          name="description"
          content="Discover how Cradlers revolutionizes baby care with IoT technology and a dedicated Android & iOS app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-white to-[#E0F7F5] min-h-screen font-sans">
        {/* Header Section */}
        <Header />

        {/* Hero Section with Carousel */}
        <section className="relative h-[600px]">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            showStatus={false}
            className="h-full"
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="h-[600px] relative">
                <Image
                  src={image}
                  alt={`Marketing Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-4">
                    <h1 className="text-5xl font-bold mb-6">
                      Revolutionizing Baby Care with IoT
                    </h1>
                    <p className="text-xl mb-8">
                      Control, monitor, and care for your baby from anywhere with our smart cradle and mobile app.
                    </p>
                    <button className="bg-[#28B7A6] hover:bg-[#1F9786] text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* IoT & App Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Why Choose Cradlers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appFeatures.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-[#E0F7F5] rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#28B7A6]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About IoT Section */}
        <section className="py-20 bg-[#E0F7F5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="IoT Smart Cradle"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-900">
                  IoT-Enabled Smart Cradle
                </h2>
                <p className="text-lg text-gray-600">
                  Our smart cradle is powered by IoT technology, allowing you to monitor and control your baby's environment from anywhere. Whether you're at work or on the go, you can ensure your baby is safe and comfortable.
                </p>
                <p className="text-lg text-gray-600">
                  With real-time data tracking and cloud integration, you can analyze your baby's sleep patterns and make adjustments to improve their comfort. The cradle adapts to your baby's needs, providing a personalized experience.
                </p>
                <button className="bg-[#28B7A6] hover:bg-[#1F9786] text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="bg-gradient-to-r from-[#28B7A6] to-[#1F9786] text-white text-center py-16 px-6">
          <h2 className="text-4xl font-extrabold mb-4">
            Download the App Today
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Available on both Android and iOS. Take control of your baby's comfort from anywhere.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-[#28B7A6] py-3 px-8 rounded-full font-bold transition transform hover:scale-105 duration-300 shadow-lg flex items-center">
              <Download className="w-6 h-6 mr-2" />
              Download for Android
            </button>
            <button className="bg-white text-[#28B7A6] py-3 px-8 rounded-full font-bold transition transform hover:scale-105 duration-300 shadow-lg flex items-center">
              <Download className="w-6 h-6 mr-2" />
              Download for iOS
            </button>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}