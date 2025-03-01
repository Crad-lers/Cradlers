import Head from "next/head"
import Image from "next/image"
import { Baby, Shield, Smartphone, Moon, Heart, Music } from "lucide-react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


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
        <Header/>
        {/* Hero Section */}
        <section id="home" className="text-center py-32 pt-28">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Smart Baby Cradle</h1>
          <p className="text-lg text-gray-600 mb-8">Comfort and Care for Your Little One</p>
          <button className="bg-[#28B7A6] hover:bg-[#1F9786] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Shop Now
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Smart Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Baby className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Intelligent Motion</h3>
                <p className="text-gray-600">Adapts to your baby's sleep patterns for a peaceful nap.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Shield className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Safety Certified</h3>
                <p className="text-gray-600">Built with safety in mind, so you can rest easy.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Smartphone className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Mobile App Control</h3>
                <p className="text-gray-600">Control and monitor from anywhere with the mobile app.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Moon className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Sleep Tracking</h3>
                <p className="text-gray-600">Monitor your baby's sleep patterns and quality.</p>
              </div> 
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Heart className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Comfort Sensors</h3>
                <p className="text-gray-600">Ensures optimal temperature and humidity for your baby.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in duration-300">
                <Music className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
                <h3 className="text-xl font-semibold mb-2">Soothing Sounds</h3>
                <p className="text-gray-600">Plays gentle lullabies and white noise to help your baby sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What Parents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#E0F7F5] p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  &quot;The Smart Baby Cradle is a lifesaver! My baby sleeps peacefully, and I get to rest too!&quot;
                </p>
                <h3 className="text-lg font-semibold">– Sarah M.</h3>
              </div>
              <div className="bg-[#E0F7F5] p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  &quot;I love the mobile app control feature. It makes parenting so much easier.&quot;
                </p>
                <h3 className="text-lg font-semibold">– John D.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer/>
      </main>
    </>
  )
}

