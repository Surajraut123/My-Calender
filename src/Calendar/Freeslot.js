import React from 'react'
// import ReactDOM from 'react-dom/client';
import Fullcalendar from '@fullcalendar/react'
import timegridplugin from '@fullcalendar/timegrid'
import { INITIAL_EVENTS, createEventId} from './Calendar-event-utils';
// import interactionPlugin from "@fullcalendar/interaction" 
export default class Freeslot extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div className='free-slot'>
        <Fullcalendar
          plugins={[timegridplugin]}
          initialView='timeGrid'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={this.state.weekendsVisible}
          initialEvents={INITIAL_EVENTS} 
          select={this.handleDateSelect}
          eventContent={renderEventContent}
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents}
        />

      </div>
    
    );
  }  


  renderSidebar() {
    return <></>;
  }

  handleDateSelect = (selectInfo) => {
    let title = window.prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventClick = (clickInfo) => {
    var curr = window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)
    if(curr) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <div className="current_time_slot">
        <div className='time'>{eventInfo.timeText}</div>
        <h3>{eventInfo.event.title}</h3>
      </div>
    </>
  );
}

