import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cradlers - Comfort and Care for Your Little One</title>
        <meta name="description" content="Cradlers – Smart Baby Cradle that gently rocks your baby to sleep with intelligent motion technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-white to-[#E0F7F5] min-h-screen font-sans">

        {/* Header Section */}
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
          <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-2">
              <Image src="/globe.svg" alt="Cradlers Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-[#30D5C8]">Cradlers</span>
            </div>
            <ul className="hidden md:flex space-x-8 text-gray-700">
              <li><a href="#home" className="hover:text-[#30D5C8] transition">Home</a></li>
              <li><a href="#features" className="hover:text-[#30D5C8] transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-[#30D5C8] transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#30D5C8] transition">Contact</a></li>
            </ul>
            <a href="#" className="hidden md:inline-block bg-[#28B7A6] hover:bg-[#1F9786] text-white py-2 px-6 rounded-lg shadow-lg transition">
              Buy Now
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="text-center py-32 pt-28">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Smart Baby Cradle
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Comfort and Care for Your Little One
          </p>
          <button className="bg-[#28B7A6] hover:bg-[#1F9786] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Shop Now
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Smart Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#E0F7F5] rounded-lg shadow-md">
                <Image src="/globe.svg" alt="Intelligent Motion" width={100} height={100} />
                <h3 className="text-xl font-semibold mb-2">Intelligent Motion</h3>
                <p>Adapts to your baby's sleep patterns for a peaceful nap.</p>
              </div>
              <div className="text-center p-6 bg-[#E0F7F5] rounded-lg shadow-md">
                <Image src="/globe.svg" alt="Safety Certified" width={100} height={100} />
                <h3 className="text-xl font-semibold mb-2">Safety Certified</h3>
                <p>Built with safety in mind, so you can rest easy.</p>
              </div>
              <div className="text-center p-6 bg-[#E0F7F5] rounded-lg shadow-md">
                <Image src="/globe.svg" alt="Mobile App Control" width={100} height={100} />
                <h3 className="text-xl font-semibold mb-2">Mobile App Control</h3>
                <p>Control and monitor from anywhere with the mobile app.</p>
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
        <footer id="contact" className="py-10 bg-gray-800 text-gray-300 text-center">
          <p>© 2025 Cradlers. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
