import React from 'react'
import FeatureCard from './FeatureCard';
import { Clock, Shield, Target, Zap } from 'lucide-react';

function Features() {
     const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get intelligent summaries in seconds using advanced AI algorithms"
    },
    {
      icon: Target,
      title: "Precise Extraction",
      description: "Identifies and extracts the most important information from your text"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your text is processed securely and never stored on our servers"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce reading time by up to 80% while retaining key insights"
    }
  ];
  return (
      <section className="p-16"id='features'>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Prompt Generator?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of text analysis with our cutting-edge AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
  )
}

export default Features