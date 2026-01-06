function Clock() {
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
  });
  return (
    <div classNameName="content-container">
      <p>This is the clock that shows the time in Pakistan at all time.</p>
      <div classNameName="current_time">
        <span>This is the current time:</span>
        <span>{currentTime}</span>
      </div>
    </div>
  );
}
export default Clock;
