import { Mail, MapPin, Phone,ArrowRight } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
   <section className="p-16 bg-white rounded-xl shadow-lg border border-gray-200 mb-16" id="contact">
          <div className="text-center mb-12">
            <h2  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our tool? We're here to help you get the most out of our platform.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="text-center p-6 border border-gray-300 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get personalized assistance from our support team</p>
              <a href="mailto:support@aisummarizer.com" className="text-blue-500 hover:text-blue-600 font-medium">
                support@aisummarizer.com
              </a>
            </div>
            
            <div className="text-center p-6 border border-gray-300 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>
              <a href="tel:+1-555-0123" className="text-blue-500 hover:text-blue-600 font-medium">
                +1 (555) 012-3456
              </a>
            </div>
            
            <div className="text-center p-6 border border-gray-300 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Location</h3>
              <p className="text-gray-600 mb-4">Visit us at our headquarters</p>
              <address className="text-blue-500 not-italic">
                123 Innovation Drive<br />
                San Francisco, CA 94107
              </address>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who trust AI Summarizer for their daily information processing needs.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Start Generating  Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </section>
  )
}

export default Contact