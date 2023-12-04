import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './home.css'
function Calendar(props) {

  console.log(props.i);
  const navigate=useNavigate();
  const todo = () =>{
    navigate('/todo');
  }
  const Event1 = () =>{
    navigate('/event');
  }
  const Profile = () =>{
    navigate('/profile');
  }
  const Year = () =>{
    navigate('/year');
  }
 
   const [events, setEvents] = useState([]);
   const [newEvent, setNewEvent] = useState({ title: '', date: '' });
 
   const handleEventClick = (eventClickInfo) => {
     // Handle event click if needed
     alert("Eventclicked: ${eventClickInfo.event.title}");
   };
 
   const handleDateClick = (dateClickInfo) => {
     // Handle date click to add a new event
     setNewEvent({ ...newEvent, date: dateClickInfo.dateStr });
   };
 
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setNewEvent({ ...newEvent, [name]: value });
   };
 
   const handleAddEvent = () => {
     // Handle adding a new event
     setEvents([...events, { title: newEvent.title, date: newEvent.date }]);
     setNewEvent({ title: '', date: '' });
   };
  return (
    <div  className="homepage">
    <div className="navbar">
    <nav>
    <ul>
    <h1 className="title1">NammaCalender</h1>
    <li>
    <h5 className="title2" onClick={todo}>Todo</h5>
    
    </li>
    <li>
    <h5 className="title2" onClick={Event1}>Event</h5>
    
    </li>
    <li>
    <h5 className="title2" onClick={Profile}>Profile</h5>
    
    
    </li>
    <li>
    <h5 className="title2" onClick={Year}>Yearly Calendar</h5>
    
    
    </li>
    </ul>
    </nav>
    </div>
    
    <br></br>
    <div className="addevent">
    <div>
    <h3 >Add Event</h3>
    <label className="task">Title:</label>
    <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
  </div>

  <div>
    <label className="task1">Date:</label>
    <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
  </div>

  <button onClick={handleAddEvent} className="click">Add Event</button>
  </div>
<br></br>
<br></br>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,multi", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={events}
        eventClick={handleEventClick}
        selectable={true}
      />
    </div>
  );
}

export default Calendar;