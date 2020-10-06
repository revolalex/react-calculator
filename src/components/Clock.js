import React, { useState, useEffect } from 'react';

export default function Clock() {

  const [time, setTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString())
    })

    return function cleanup() {
      clearInterval(timer)
    };
  }, [])

  return (
    <p className="App-clock">{ time }</p>
  );
}
