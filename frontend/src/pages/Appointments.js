import React from "react";
import { motion } from "framer-motion";

const Meditation = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-700">
          👨‍⚕️ Doctor Consultation
        </h1>
        <p className="text-gray-600 mt-4">
          Book an appointment with a professional.
        </p>
      </div>
    </motion.div>
  );
};

export default Meditation;
