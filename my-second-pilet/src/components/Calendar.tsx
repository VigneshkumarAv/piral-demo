import * as React from "react";
import "../style.scss";

const Calendar = () => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const handleNavigate = (button:string) => {
    setSelectedDate(null);
    if (button === "previous") {
      setCurrentDate(new Date(currentYear, currentMonth - 1));
    } else if (button === "next") {
      setCurrentDate(new Date(currentYear, currentMonth + 1));
    }
  };
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = [];
  for (let i = 1 - firstDayOfMonth; i <= daysInMonth; i++) {
    if (i > 0) {
      days.push(i);
    } else {
      days.push("");
    }
  }
  const handleDateCick = (day:string) => {
    if (day) {
      setSelectedDate(`${months[currentMonth]} ${day} , ${currentYear}`);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => handleNavigate("previous")}>Previous</button>
        <span>
          {months[currentMonth] + " "} {currentYear}
        </span>
        <button onClick={() => handleNavigate("next")}>Next</button>
      </div>
      <div className="calendar-body">
        <div className="weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thurs</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div
              key={index}
              className={`day ${
                day === parseInt(selectedDate?.split(" ")[1]) ? "selected" : ""
              }`}
              onClick={() => handleDateCick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      {selectedDate && (
        <div className="selected-date">Selected Date: {selectedDate}</div>
      )}
    </div>
  );
};

export default Calendar;