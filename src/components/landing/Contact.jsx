import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Star, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="py-24 px-6 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Ready to book or have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Call or Text</h3>
                  <a
                    href="tel:587-226-0109"
                    className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
                  >
                    587-226-0109
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:elitetripleacleanserv@gmail.com"
                    className="text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors break-all"
                  >
                    elitetripleacleanserv@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Service Area</h3>
                  <p className="text-emerald-600 font-semibold text-lg">
                    Calgary, AB
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    & Surrounding Areas
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Response Time</h3>
                  <p className="text-amber-600 font-semibold">
                    Within 24 Hours
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    We'll get back to you quickly
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Facebook Review */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Leave a Review</h3>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578088535914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    Rate Us on Facebook
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/elitetriplea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors"
                  >
                    @elitetriplea
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Cleaner, Happier Home?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto font-light">
                Let us take the stress out of cleaning so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking">
                  <button className="px-8 py-4 bg-yellow-400 text-green-800 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </a>
                <a href="tel:587-226-0109">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Us
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}