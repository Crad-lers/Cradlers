import Head from "next/head";
import { Baby, Shield, Smartphone, Moon, Heart, Music } from "lucide-react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
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

      <main className="bg-gradient-to-r from-white to-[#E0F7F5] min-h-screen font-sans">
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <section id="home" className="text-center py-24 sm:py-32 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Smart Baby Cradle
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Comfort and Care for Your Little One
          </p>
          <button className="bg-[#28B7A6] hover:bg-[#1F9786] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Shop Now
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Smart Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {[
                { icon: Baby, title: "Intelligent Motion", desc: "Adapts to your baby's sleep patterns for a peaceful nap." },
                { icon: Shield, title: "Safety Certified", desc: "Built with safety in mind, so you can rest easy." },
                { icon: Smartphone, title: "Mobile App Control", desc: "Control and monitor from anywhere with the mobile app." },
                { icon: Moon, title: "Sleep Tracking", desc: "Monitor your baby's sleep patterns and quality." },
                { icon: Heart, title: "Comfort Sensors", desc: "Ensures optimal temperature and humidity for your baby." },
                { icon: Music, title: "Soothing Sounds", desc: "Plays gentle lullabies and white noise to help your baby sleep." },
              ].map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-14 h-14 mx-auto mb-4 text-[#28B7A6]" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              What Parents Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  text: "The Smart Baby Cradle is a lifesaver! My baby sleeps peacefully, and I get to rest too!",
                  name: "Sarah M.",
                },
                {
                  text: "I love the mobile app control feature. It makes parenting so much easier.",
                  name: "John D.",
                },
              ].map(({ text, name }, index) => (
                <div
                  key={index}
                  className="bg-[#E0F7F5] p-6 rounded-lg shadow-md"
                >
                  <p className="text-gray-700 mb-4">&quot;{text}&quot;</p>
                  <h3 className="text-lg font-semibold">– {name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}