import React from 'react'
import HeroSection from '../components/app/HeroSection'
import HowItWorks from '../components/app/HowItWorks'
import FeatureHighlights from '../components/app/FeatureHighlights'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeatureHighlights />
    </div>
  )
}
