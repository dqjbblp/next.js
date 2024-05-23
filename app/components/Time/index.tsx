"use client"

import { useEffect, useState } from "react";

const Time = () => {
  const [time,setTime] = useState('')

  const getCurrentTime = () => {
    const date = new Date();
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());
    const seconds = addLeadingZero(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }
  
  const addLeadingZero = (number:number) => {
    return number < 10 ? `0${number}` : number;
  }

  useEffect(()=>{
  
  const timer = setInterval(() => {
    const currentTime = getCurrentTime();
    setTime(currentTime)
  }, 1000);
  
  return () => {
    clearInterval(timer)
  }
  },[time])

  return (
    <>
      {time}
    </>
  )
}

export default Time