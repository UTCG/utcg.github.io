import React, {Component} from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import request from 'superagent'
// a localizer for BigCalendar
const localizer = momentLocalizer(moment)

require('react-big-calendar/lib/css/react-big-calendar.css')

let CALENDAR_ID = process.env.CALENDAR_ID;
let API_KEY = process.env.CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

// earliest time shown on the calendar: 8:00 am
let minTime = new Date(0);
minTime.setHours(8);

// latest time shown on the calendar: 10:00 pm
let maxTime = new Date(0);
maxTime.setHours(22);

function getEvents (callback) {
    // get events from Google Calendar
    request.get(url).end((err, resp) => {
        if (!err) {
            const events = [];
            JSON.parse(resp.text).items.map((event) => {
                // only create event if it has a start
                if ("start" in event) {
                    let ne = {
                        start: new Date(event.start.dateTime || event.start.date),
                        end: new Date(event.end.dateTime || event.end.date),
                        title: event.summary,
                        description: event.description,
                    }
                    events.push(ne)
                }
            })
            callback(events);
        }
    })
    const events1 = [
        // NOTE: January is month 0!

        {start: new Date(2022, 2, 0, 18, 30, 0, 0),
         end: new Date(2022, 2, 7, 19, 30, 0, 0),
         title: "Model UofT",
         description: "https://discord.gg/TjjDYRT6Rz"},
        {start: new Date(2022, 2, 3, 18, 0, 0, 0),
         end: new Date(2022, 2, 3, 19, 0, 0, 0),
         title: "Rapid Fire Talks",
         description: "https://www.eventbrite.ca/e/rapid-fire-talks-2022-tickets-288259380567"},
        {start: new Date(2022, 2, 9, 18, 0, 0, 0),
         end: new Date(2022, 2, 9, 19, 0, 0, 0),
         title: "Cyberpunk Facial Animation",
         description: "https://www.eventbrite.ca/e/cyberpunk-2077-facial-animation-talk-tickets-288698122857"},

        // 2022-2023 year
        {start: new Date(2022, 8, 28, 18, 0, 0, 0), end: new Date(2022, 8, 28, 19, 0, 0, 0),
         title: "Blender Workshop",
         description: "#"},
        {start: new Date(2022, 9, 13, 18, 0, 0, 0), end: new Date(2022, 9, 13, 19, 0, 0, 0),
         title: "Social + Model UofT",
         description: "#"},
        {start: new Date(2022, 10, 16, 18, 0, 0, 0), end: new Date(2022, 10, 16, 20, 0, 0, 0),
         title: "Pixomondo: HALO",
         description: "#"},
        {start: new Date(2022, 9, 24, 18, 0, 0, 0), end: new Date(2022, 9, 24, 19, 0, 0, 0),
         title: "Social + SIGGRAPH viewing",
         description: "#"},
    ];
    callback(events1);
}


function printHi() {
    console.log('hi');
    return false;
}


class CustomEvent extends React.Component {
    constructor(event) {
        super();
        this.state = {display: 'none'};
        this.event = event.event;
        this.toggleShowLink = this.toggleShowLink.bind(this)
    }

    toggleShowLink() {
        if (this.state.display == 'none') {
            this.setState({display: 'block'});
        } else {
            this.setState({display: 'none'});
        }
        console.log(this.state.display);
    }

    render() {
        return (
            <div className='rbc-event'>
                <div className='rbc-event-content'>
                    <div onClick={this.toggleShowLink}>{this.event.title}</div>
                    <a href={this.event.description} target='_blank'
                        style={{...this.state, ...{color: 'white'}}}>more details</a>
                </div>
            </div>
            )
    }
}



class BigCalendarComponent extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        getEvents((events) => {
            this.setState({events})
        })
    }

    render () {
        return (
            <>
                <div className="container pt-20">
                    <div className="section-title">
                        <span className="wow fadeInUp">Upcoming Events</span>
                        <h2 className="wow fadeInDown">See what's happening next at UTCG</h2>
                    </div>
                </div>
                <Calendar
                localizer={localizer}
                style={{height: '600px'}}
                events={this.state.events}
                min={minTime}
                max={maxTime}
                components={{event: CustomEvent}}
                />
            </>
        )
    }
}

export default BigCalendarComponent;

