export default function Timer() {
    let commingSoon = document.querySelector('.coming-soon')
    let community = document.querySelector('.community')
    let counter = setInterval(() => {
        let countDownDate = new Date('Mar 1, 2027 15:37:25').getTime();
        let dateNow = new Date().getTime();
        let dateDiff = countDownDate - dateNow;
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
        // Make units
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        if (dateDiff < 0) {
            clearInterval(counter);
            document.querySelector('.count-down').classNameList.add("none")
        }
        }, 1000)
        return(
            <>
                <section className="coming-soon position-relative shadow-lg vh-100">
                <div className="coning-soon__contents h-100 d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="coning-soon__content">
                            <h2 className="main-text">Coming Out In</h2>
                            <div className="image-break">
                                <img src="Assets/Images/inner-img-1.png" alt=""/>
                            </div>
                            <div className="count-down">
                                <div className="row text-center fs-1 fw-bold justify-content-center">
                                    <div className="col-md-3 pt-5 col-5">
                                        <div className="days">00</div>
                                        <span>Days</span>
                                    </div>
                                    <div className="col-md-3 pt-5 col-5">
                                        <div className="hours">00</div>
                                        <span>Hours</span>
                                    </div>
                                    <div className="col-md-3 pt-5 col-5">
                                        <div className="minutes">00</div>
                                        <span>Minutes</span>
                                    </div>
                                    <div className="col-md-3 pt-5 col-5">
                                        <div className="seconds">00</div>
                                        <span>Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </>
        )
        
}