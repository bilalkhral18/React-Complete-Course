import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("interval clear");
    };
  }, []);
  return (
    <div className="content-container">
      <p>This is the clock that shows the time in Pakistan at all time.</p>
      <div className="current_time">
        <span>This is the current time:</span>
        <span>
          {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
export default Clock;
