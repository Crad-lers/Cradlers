
import { motion } from 'framer-motion';
import { Baby, Shield, Smartphone, Moon, Heart, Music2 } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Smart Features</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Baby className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Intelligent Motion</h3>
            <p className="text-gray-600">Adapts to your baby's sleep patterns for a peaceful nap.</p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Shield className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Safety Certified</h3>
            <p className="text-gray-600">Built with safety in mind, so you can rest easy.</p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Smartphone className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Mobile App Control</h3>
            <p className="text-gray-600">Control and monitor from anywhere with the mobile app.</p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Moon className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Sleep Tracking</h3>
            <p className="text-gray-600">Monitor your baby's sleep patterns and quality.</p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Heart className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Comfort Sensors</h3>
            <p className="text-gray-600">Ensures optimal temperature and humidity for your baby.</p>
          </motion.div>

          <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={cardVariants}>
            <Music2 className="w-16 h-16 mx-auto mb-4 text-[#28B7A6]" />
            <h3 className="text-xl font-semibold mb-2">Soothing Sounds</h3>
            <p className="text-gray-600">Plays gentle lullabies and white noise to help your baby sleep.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
