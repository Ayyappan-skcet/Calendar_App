import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { useNavigate } from "react-router-dom";
import './year.css';
function Calendar() {
    const navigate=useNavigate();
    const Home = () =>{
        navigate('/home');
    }
  return (
    <>
      <button onClick={Home} className="btn">Back to Home</button>
      <Fullcalendar className="cal"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,multiMonthPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "today prev,next", // will normally be on the left. if RTL, will be on the right
        center: "title",
        end: "multiMonthYear", // will normally be on the right. if RTL, will be on the left
      }}
      height={"90vh"}
      
    />
   
    </>
  );
}

export default Calendar;