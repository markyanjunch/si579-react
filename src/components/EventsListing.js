import './EventsListing.css';
import EventDateTime from "./EventDateTime";
import EventInfo from "./EventInfo";
import EventInstance from "./EventInstance";

const EventsListing = (props) => {
    console.log('THE PROPS', props);

    /**
     * Creates an array where each item is the JSX "markup" for an event.
     *
     * @returns {*[]}
     */
    const generateEvents = () => {
        // Initialize an empty array that will get each event
        const eventsToShow = [];

        // Loop through the event list. Add each event as new array item.
        // If React sees an array of JSX "markup", it will render each one.
        props.events.forEach((eventInstance, index) =>
            eventsToShow.push(<EventInstance key={index}>
                    <EventDateTime
                        dateStart={eventInstance.date_start}
                        timeStart={eventInstance.time_start}
                        timeEnd={eventInstance.time_end}
                    />
                    <EventInfo
                        title={eventInstance.event_title}
                        description={eventInstance.description}
                    />
                </EventInstance>
            )
        );
        return eventsToShow;
    }

    return (
        <div className='events'>
            {generateEvents()}
        </div>
    );
}

export default EventsListing;