import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from "@/api/base44Client";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    service_type: 'Standard Residential Cleaning',
    preferred_date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.BookingRequest.create(formData);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          address: '',
          service_type: 'Standard Residential Cleaning',
          preferred_date: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div id="booking" className="py-24 px-6 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Book Your Cleaning
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Let us take the stress out of cleaning. Fill out the form below and we'll get back to you shortly!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500" />
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
                    <p className="text-slate-600">
                      Thank you for your booking request. We'll contact you shortly to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="full_name" className="text-slate-700 font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="full_name"
                          required
                          value={formData.full_name}
                          onChange={(e) => handleChange('full_name', e.target.value)}
                          placeholder="John Smith"
                          className="border-slate-200 focus:border-blue-500 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@example.com"
                          className="border-slate-200 focus:border-blue-500 h-12"
                        />
                      </div>
                    </div>

                    {/* Phone and Service Type */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="587-226-0109"
                          className="border-slate-200 focus:border-blue-500 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service_type" className="text-slate-700 font-medium">
                          Service Type
                        </Label>
                        <Select
                          value={formData.service_type}
                          onValueChange={(value) => handleChange('service_type', value)}
                        >
                          <SelectTrigger className="border-slate-200 focus:border-blue-500 h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Standard Residential Cleaning">
                              Standard Residential Cleaning
                            </SelectItem>
                            <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                            <SelectItem value="Move In/Out">Move In/Out</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-slate-700 font-medium">
                        Service Address
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        placeholder="123 Main Street, Calgary, AB"
                        className="border-slate-200 focus:border-blue-500 h-12"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <Label htmlFor="preferred_date" className="text-slate-700 font-medium">
                        Preferred Date
                      </Label>
                      <Input
                        id="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={(e) => handleChange('preferred_date', e.target.value)}
                        className="border-slate-200 focus:border-blue-500 h-12"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium">
                        Additional Notes or Special Requests
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Any special instructions or areas of focus?"
                        className="border-slate-200 focus:border-blue-500 min-h-[120px] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Request Your Cleaning
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      * Required fields. We'll contact you within 24 hours to confirm your booking.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}