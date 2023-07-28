import { allEvents, Event } from 'contentlayer/generated'
import { compareDesc, isAfter, addDays } from 'date-fns'
import EventCard from '@/components/EventCard'

export default function NextEventsPage() {
  const latentDay = addDays(new Date(), 2)

  let futureEvents: Event[] = []
  let pastEvents: Event[] = []

  ;(allEvents as Event[])
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach((event) => {
      if (isAfter(new Date(event.date), latentDay)) {
        futureEvents.push(event)
      } else {
        pastEvents.push(event)
      }
    })

  return (
    <div className='mx-auto w-full px-2 py-12'>
      <div className='flex flex-col items-start justify-center gap-6 xl:mx-auto xl:grid xl:max-w-max xl:grid-cols-2'>
        <h1 className='xl:grid-col-1 mx-auto w-full max-w-max font-sans text-6xl font-bold uppercase leading-none tracking-tighter text-black sm:py-16 sm:text-8xl xl:sticky xl:top-0 xl:max-w-none'>
          don’t act like a clown, dance like one
        </h1>
        <div className='xl:max-w-1/2 xl:grid-col-1 mx-auto max-w-max space-y-8 xl:max-w-none xl:py-16'>
          {futureEvents.length > 0 ? (
            <div className='space-y-2'>
              <h2 className='text-sm font-bold uppercase leading-none'>
                next ↓ ↓ ↓
              </h2>
              <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                {futureEvents.map((event) => (
                  <EventCard key={event._id} eventPost={event} />
                ))}
              </div>
            </div>
          ) : (
            <div className='space-y-2'>
              <h2 className='text-sm font-bold uppercase leading-none'>
                No Future Events
              </h2>
              <p>There are currently no upcoming events. Check back later.</p>
            </div>
          )}
          {pastEvents.length < 0 ? (
            <div className='space-y-2'>
              <h2 className='text-sm font-bold uppercase leading-none'>
                past ↓ ↓ ↓
              </h2>
              <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 '>
                {pastEvents.slice(0, 3).map((event) => (
                  <EventCard key={event._id} eventPost={event} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
