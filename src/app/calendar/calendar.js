"use client"
import Image from "next/image";
import date1 from "./uiw_date.png";
import "./calender.css"
import React, { useState } from 'react';



export default function Calendar() {
  const currentDate = new Date();
  console.log("the date is",currentDate)
   const [date, setDate] = useState(currentDate);
   const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date

   // Function to get the number of days in a month
   const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

   // Function to get the first day of the month
   const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

   // Array to hold the days of the current month
   const days = Array.from({ length: daysInMonth(date.getFullYear(), date.getMonth()) }, (_, i) => i + 1);

   // Function to handle the previous month button click
   const handlePrevMonth = () => {
       setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
   };

   // Function to handle the next month button click
   const handleNextMonth = () => {
       setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
   };

   // Function to handle date selection
   const handleDateSelection = (day) => {
       setSelectedDate(day);
   };

   // Define styles for selected and unselected dates
   const selectedDateStyle = {
       backgroundColor: 'white',
       color: 'black',
   };

   const unselectedDateStyle = {
       backgroundColor: 'transparent',
       color: 'white',
   };

  return (<>
    <div className="a">
                <div class="rectangle-92"  >
                    <p class="our-product" >Booking</p>
                </div>
            </div>
    <div className="calendar-container container">
      <div className="row">
        <div className="col-md-6 col-12">
          {" "}
          {/* Column for Business Hours */}
          <div className="business-time text-center">
            <div className="business-text mt-1">Business Hours</div>
            <div className="business-chart">
              <ul className="business-ul">
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Monday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Tusday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Wednsday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Thrusday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Friday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Saturday</p>
                  <p className="time">Holyday</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date1} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Sunday</p>
                  <p className="time">Holyday</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          {" "}
          {/* Column for Calendar */}
          <p className="appointment mt-1">Make an Appointment</p>

<div className="calendar-container align-items-center justify-content-center d-flex">
    <div className="month">
        <ul>
            <li className="prev" onClick={handlePrevMonth}>&#10094;</li>
            <li className="next" onClick={handleNextMonth}>&#10095;</li>
            <li>
                <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
            </li>
        </ul>
        <ul className="weekdays">
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
        </ul>
        <ul className="days">
            {Array.from({ length: firstDayOfMonth.getDay() }).map((_, index) => (
                <li key={`empty-${index}`} />
            ))}
            {days.map((day, index) => (
                <li
                    key={day}
                    onClick={() => handleDateSelection(day)}
                    style={selectedDate === day ? selectedDateStyle : unselectedDateStyle}
                >
                    {day}
                </li>
            ))}
            {Array.from({ length: 7 - (days.length % 7) }).map((_, index) => (
                <li key={`empty-end-${index}`} />
            ))}
        </ul>
    </div>
</div>
<p className="hour-text">Hour</p>
<div className="hour-center align-items-center justify-content-center d-flex mt-4">
    <button className="hour-btn">
        <p className="hour-time">10:00 AM - 10:15 AM</p>
    </button>
</div>
<div className="appointment-center align-items-center justify-content-center d-flex mt-4">
    <button className="appointment-btn">
        Make An Appointment
    </button>
</div>
          </div>
     </div>     
    </div>
    </>
  );
}
