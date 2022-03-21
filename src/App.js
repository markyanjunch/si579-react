import './App.css';
// We import this component to make it available.
import EventsListing from "./components/EventsListing";
// To get assets from a file with multiple exports.
// import { helperImage, helperLink} from "./file-with-many-assets"

function App() {
    // This is an array of events that matches the structure provided by
    // https://events.umich.edu/day/json
    const events = [
        {
            date_start: '2022-03-06',
            time_start: '00:00:00',
            time_end: '20:00:00',
            event_title: '2022 U.S. Synchronized Skating Championships',
            description: 'Nationals - March 2-5 2022',
        },
        {
            date_start: '2022-03-06',
            time_start: '00:00:00',
            time_end: '16:00:00',
            event_title: 'Spring Break Training 2022',
            description: 'Spring break training for development in Fort Lauderdale',
        },
        {
            date_start: '2022-03-06',
            time_start: '00:00:00',
            time_end: '23:59:00',
            event_title: 'UMS Live Session: Nicholas Phan, tenor',
            description: 'Recognized as “one of the world’s most remarkable singers” (Boston Globe), lyric tenor and University of Michigan School of Music, Theatre & Dance alumnus Nicholas Phan leads a digital-exclusive recital of songs written by women composers. Phan returns to his hometown and alma mater to perform alongside distinguished U-M professor of piano Martin Katz, and student ensemble Calista Quartet. This UMS Live Session was recorded at the University of Michigan’s Rackham Auditorium in December 2021.',
        },
    ];

    // This returns the JSX "markup" of this component.
    return (
        <main>
            <h1>Events at University of Michigan</h1>
            {/*  <EventsListing /> is a self-closing "tag" that generates the list of events */}
            {/*  We are adding `events` as a prop that gets passed to EventsListing */}
            <EventsListing events={events} />
        </main>
    );
}

export default App;