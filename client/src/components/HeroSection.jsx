import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bgimg.jpg")] bg-cover bg-center h-screen pt-36'>

      {/* Logo with glow so "2" is visible */}
      <img 
        src={assets.pushpaLogo} 
        alt="Pushpa 2 Logo" 
        className="h-20 md:h-28 drop-shadow-[0_4px_16px_rgba(255,255,255,0.7)]"
      />

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Thriller</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5'/> 2024
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5'/> 3h 21m
        </div>
      </div>

      <p className='max-w-md text-gray-300'>
        A smuggling kingpin faces off against a vengeful rival while manipulating politics, making big deals, and navigating tense confrontations. A public apology leads to a dramatic showdown, ending with challenge.
      </p>

      <button 
        onClick={() => navigate('/movies')} 
        className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
      >
        Explore Movies
        <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  )
}

export default HeroSection
