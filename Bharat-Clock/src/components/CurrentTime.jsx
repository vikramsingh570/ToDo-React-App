let ClockTime = () => {

    let date = new Date();
    

    return <p className="lead">This is the current Time : {date.toLocaleDateString() } - {date.toLocaleTimeString()}</p>

};

export default ClockTime;