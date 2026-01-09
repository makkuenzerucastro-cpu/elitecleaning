import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, BedDouble, Sofa, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceAreas = [
  {
    icon: Home,
    title: "General Areas (All Rooms)",
    color: "from-green-500 to-teal-500",
    services: [
      "Dust all surfaces (furniture, shelves, baseboards)",
      "Wipe down and disinfect high-touch areas (light switches, doorknobs, remotes)",
      "Vacuum carpets and rugs",
      "Sweep and mop hard floors",
      "Empty trash bins and replace liners",
      "Remove cobwebs",
      "Clean under small furniture if accessible"
    ]
  },
  {
    icon: BedDouble,
    title: "Bedrooms",
    color: "from-teal-500 to-cyan-500",
    services: [
      "Dust furniture (nightstands, dressers, headboards)",
      "Clean mirrors",
      "Vacuum/mop under bed (if accessible)",
      "Organize surfaces (vanity tops, dressers)"
    ]
  },
  {
    icon: Sofa,
    title: "Living Room / Common Areas",
    color: "from-yellow-500 to-amber-500",
    services: [
      "Dust electronics (TV, speakers, consoles)",
      "Wipe down tables, shelves, and décor",
      "Fluff and arrange cushions and pillows",
      "Vacuum upholstered furniture (if required)"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen",
    color: "from-emerald-500 to-green-600",
    services: [
      "Wipe down countertops and backsplash",
      "Clean exterior of appliances (fridge, oven, microwave, dishwasher)",
      "Wipe cabinet faces"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Standard Residential Cleaning
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Transform your home into a spotless sanctuary with our comprehensive cleaning service
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${area.color}`} />
                  <CardContent className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${area.color} shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mt-2">
                        {area.title}
                      </h3>
                    </div>

                    {/* Service List */}
                    <ul className="space-y-3">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-br from-green-700 to-teal-700 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Elite Triple A?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-white">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-yellow-300">100%</div>
                  <div className="text-lg">Satisfaction Guaranteed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-yellow-300">★★★★★</div>
                  <div className="text-lg">Professional Team</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-yellow-300">💚</div>
                  <div className="text-lg">Trusted by Calgary Families</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}