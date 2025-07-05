import React from 'react'
import  {CheckCircle, Shield } from "lucide-react"

export default function About() {
  return (
    <section className="px-16" id='about'>
          <div className="text-center mb-12">
            <h2  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              About AI Prompt Generator
              </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionizing how professionals consume information through cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that information overload shouldn't slow down progress. Our AI-powered summarization tool 
                helps professionals, researchers, and students quickly extract key insights from lengthy documents, 
                enabling faster decision-making and improved productivity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Built with state-of-the-art natural language processing technology, our platform maintains the 
                context and meaning of your original content while delivering concise, actionable summaries.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Privacy & Security</h4>
                  <p className="text-sm text-gray-600">Your data is processed securely and never stored</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced AI algorithms trained on millions of documents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Support for multiple languages and document types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time processing with instant results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
  )
}

