import { Award, Clock, Globe, Sparkles, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import FeatureCard from './FeatureCard'

function Stats() {
       const stats = [
    {
      icon: Sparkles,
      title: "Prompts Generated",
      description: "45,200 today"
    },
    {
      icon: Clock,
      title: "Response",
      description: "0.8 sec per prompt"
    },
    {
      icon: TrendingUp,
      title: "Usage Growth",
      description: "+18% this week"
    },
    {
      icon: Users,
      title: "Active Users",
      description: "2300 online now"
    }
  ];
  return (
    <section className="py-12 px-16"id='stats'>
      <div className="text-center mb-12">
        <h2  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
       A Quick Look at the Metrics
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Realtime stats showcasing our tool's usage, performance , and the value it delivers to users across globe
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <FeatureCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-8">
        <div className="flex items-center justify-center space-x-3">
          <Users className="h-8 w-8 text-blue-500" />
          <div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Enterprise Clients</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Award className="h-8 w-8 text-blue-500" />
          <div>
            <div className="text-2xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Globe className="h-8 w-8 text-blue-500" />
          <div>
            <div className="text-2xl font-bold text-gray-900">120+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats