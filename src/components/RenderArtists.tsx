import React from 'react'
import residents, { Resident } from '@/config/residents'
import Link from 'next/link'

interface ArtistProps {
  name: string
  label?: string
  href?: string
}

const Artist: React.FC<ArtistProps> = ({ name, label, href }) => {
  const resident: Resident | undefined = residents.find(
    (resident) => resident.name === name
  )
  const residentLabel = resident ? 'Eisbach Callin' : label
  const link = resident ? `/about#${name}` : href

  return (
    <div className='group flex items-center font-mono uppercase'>
      <div className='pr-1'>{name}</div>

      {residentLabel && (
        <div className='px-1 text-xs text-black'>
          <span className='text-pink-500'>[</span>
          {residentLabel}
          <span className='text-pink-500'>]</span>
        </div>
      )}
      {link && (
        <Link
          href={link}
          className='font-sans text-pink-500 group-hover:text-black'
        >
          {' '}
          ↗
        </Link>
      )}
    </div>
  )
}

interface RenderArtistsProps {
  artists: ArtistProps[]
}

const RenderArtists: React.FC<RenderArtistsProps> = ({ artists }) => {
  return (
    <div className='space-y-1'>
      {artists.map((artists, index) => (
        <Artist key={index} {...artists} />
      ))}
    </div>
  )
}

export default RenderArtists
