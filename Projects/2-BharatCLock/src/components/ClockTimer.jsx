let ClockTimer = ()=>{

    let time = new Date();
    return <p className="fst-italic">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default ClockTimer;