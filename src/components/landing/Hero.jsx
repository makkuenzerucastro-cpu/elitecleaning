import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onBookNow }) {
  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-100 text-slate-900 overflow-hidden">
      {/* Hexagonal Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25" fill="none" stroke="currentColor" strokeWidth="1" className="text-teal-300"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-3xl blur-3xl" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69614460b9fddce15f584f6f/2c5d8e40f_BusinessPic1.jpg"
                alt="Elite Triple A Cleaning Services"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">Professional Cleaning Services in Calgary</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-green-800" style={{ fontFamily: 'cursive' }}>
                Elite Triple A
                <br />
                <span className="text-green-700">
                  Cleaning Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-yellow-600 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                We Specialize in Delivering High-Quality Cleaning Services!
              </p>
              <p className="text-lg text-slate-700 font-medium">
                Your trusted cleaning partner in Calgary, AB. We treat every home with the care and attention it deserves.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-start pt-6"
            >
              <Button
                onClick={onBookNow}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Cleaning
              </Button>
              
              <a href="tel:587-226-0109">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-6 py-6 rounded-full shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  587-226-0109
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 flex flex-wrap gap-6 text-slate-700"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Professional Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Trusted by Calgary Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave - removed for cleaner transition */}
    </div>
  );
}