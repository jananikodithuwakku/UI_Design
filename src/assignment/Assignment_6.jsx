import "./Assignment_6.css";

export default function Assignment_6() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const weekday = today.toLocaleString("default", { weekday: "long" });
  const year = today.getFullYear();
  const monthIndex = today.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return (
    <div className="page6">
      <div className="bg"></div>
      <div className="bg-dark"></div>

      <div className="calendar-card">
        <div className="card-header">
          <div className="header-text">
            <h2>
              {day}, {weekday}
            </h2>
            <p>{month}</p>
          </div>
        </div>

        <div className="card-body">
          <div className="week-days">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className={i >= 5 ? "weekend" : ""}>
                {d}
              </span>
            ))}
          </div>

          <div className="dates">
            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = i + 1;
              const dayofWeek = new Date(year, monthIndex, date).getDay();
              const isSunday = dayofWeek === 0;
              return (
                <span
                  key={date}
                  className={`
                        ${date === day ? "today" : ""}
                        ${isSunday ? "sunday" : ""}
                        
                        `}
                >
                  {date}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
