import { ArrowRight, CheckCircle, Play, Zap } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <section className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
          <Zap className="h-4 w-4 mr-2" />
          Powered by Advanced AI Technology
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Long Prompts into
          <span className="text-blue-500 block mt-2">Sharp Insights</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our AI Prompt Summariser helps you instantly condense lengthy,cluttered prompts into clear concise summaries.Whether your're streamlining workflows, organising
          conversations our tool saves time and boosts productivity - all with just one click
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
            <Play className="h-5 w-5 mr-2" />
            Try It Free Now
          </button>
          <button variant="outline" className="px-8 py-3 text-lg border border-gray-500">
            Watch Demo
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            Secure login
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            100% secure & private
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            Instant results
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero