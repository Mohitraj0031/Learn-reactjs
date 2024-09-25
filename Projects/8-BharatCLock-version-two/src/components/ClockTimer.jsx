import { useEffect,useState } from "react";

let ClockTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() =>{
        setTime(new Date());
    }, 1000);

    return(()=>{
        clearInterval(intervalId);
    })
  },[]);
  return (
    <p className="fst-italic">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTimer;
