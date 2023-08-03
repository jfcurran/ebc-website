import EventSection from '@/components/EventSection'
import SplitContainer from '@/components/layout/SplitContainer'
import { useDate } from '@/config/useDate'

export default function Home() {
  const { futureEvents, pastEvents } = useDate()

  return (
    <SplitContainer
      stickyLeft
      leftSide={
        <h1 className='font-sans text-2xl sm:text-3xl xl:text-4xl'>
          don’t act like a clown, dance like one
        </h1>
      }
      rightSide={
        <>
          <EventSection events={futureEvents} label='next ↓ ↓ ↓' />
          <hr className='border-black' />
          <EventSection events={pastEvents} label='past ↓ ↓ ↓' />
        </>
      }
    />
  )
}
