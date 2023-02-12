import React from "react";

const Community = () => {
  return (
    <>
          {/* <!-- Start Community Page--> */}
    <section class="community">
    <div class="community__contents d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="community_content text-center">
                <h2>The Another Dimensions</h2>
                <img src="Assets/Images/inner-img-2.png" alt=""/>
                <h2>This Launcher Is Early Access, And Our Community Will Coming Soon</h2>
                <div class="count-down">
                    <div class="row text-center fs-1 fw-bold justify-content-center">
                        <div class="col-md-3 pt-5 col-5">
                            <div class="days">00</div>
                            <span>Days</span>
                        </div>
                        <div class="col-md-3 pt-5 col-5">
                            <div class="hours">00</div>
                            <span>Hours</span>
                        </div>
                        <div class="col-md-3 pt-5 col-5">
                            <div class="minutes">00</div>
                            <span>Minutes</span>
                        </div>
                        <div class="col-md-3 pt-5 col-5">
                            <div class="seconds">00</div>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
                <a href="Assets/Images/download-img.jpg" download="" class="primary-btn mt-5">
                    Download Launcher
                </a>
            </div>
        </div>
    </div>
    </section>
    {/* <!-- End Community Page--> */}

    </>
  )
};

export default Community;
