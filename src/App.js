import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  const hours = padStart(time.getHours());
  const minutes = padStart(time.getMinutes());
  const seconds = padStart(time.getSeconds());
  function padStart(value) {
    return value < 10 ? "0" + value : value;
  }
  return (
    <div>
      <span>{hours}:</span>
      <span>{minutes}:</span>
      <span>{seconds}</span>
    </div>
  );
}
