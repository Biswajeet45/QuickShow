import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [isBigPlaying, setIsBigPlaying] = useState(false)
  const [hoveredTrailer, setHoveredTrailer] = useState(null)

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      {/* Big trailer: plays muted while hovered OR when we explicitly start it (after click) */}
      <div
        className='relative mt-6'
        onMouseEnter={() => setIsBigPlaying(true)}
        onMouseLeave={() => setIsBigPlaying(false)}
      >
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          playing={isBigPlaying}
          muted={true}
          controls={true}
          className='mx-auto max-w-full'
          width='960px'
          height='540px'
        />
      </div>

      {/* Thumbnails */}
      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => {
          const isHovered = hoveredTrailer === trailer
          const isCurrent = trailer.videoUrl === currentTrailer.videoUrl

          return (
            <div
              key={trailer.image}
              className='relative hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer rounded-lg overflow-hidden'
              onMouseEnter={() => setHoveredTrailer(trailer)}
              onMouseLeave={() => setHoveredTrailer(null)}
            >
              {/* Show live muted preview in thumbnail only when hovered AND it's NOT the current big trailer */}
              {isHovered && !isCurrent ? (
                <>
                  <ReactPlayer
                    url={trailer.videoUrl}
                    playing={true}
                    muted={true}
                    controls={false}
                    width='100%'
                    height='100%'
                    // ensure the player is under the overlay (no z-index)
                    className='absolute inset-0'
                  />

                  {/* transparent overlay above the player so clicks always register */}
                  <button
                    type='button'
                    onClick={() => {
                      setCurrentTrailer(trailer)   // load into big player
                      setIsBigPlaying(true)        // start big player playing immediately (muted)
                      setHoveredTrailer(null)      // stop the small preview
                    }}
                    className='absolute inset-0 z-20'
                    aria-label='Play in main player'
                    style={{ background: 'transparent' }}
                  />
                </>
              ) : (
                // default thumbnail view (or when hovered but it's the currently selected trailer)
                <>
                  <img
                    src={trailer.image}
                    alt='trailer'
                    className='rounded-lg w-full h-full object-cover brightness-75'
                  />

                  {/* Click here to load into big */}
                  <div
                    onClick={() => {
                      setCurrentTrailer(trailer)
                      setIsBigPlaying(true)
                    }}
                    className='absolute inset-0 z-10 flex items-center justify-center'
                  >
                    <PlayCircleIcon strokeWidth={1.6} className='w-8 h-8 md:w-12 md:h-12 text-white' />
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrailersSection

