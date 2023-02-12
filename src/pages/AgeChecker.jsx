import React from "react";

const AgeChecker = () => {
  return (
    <>
          {/* <!-- Start Age Checker Page --> */}
    <section class="age-checker text-center">
        <div class="age-checker__contents">
            <div class="container">
                <div class="age-checker__content">
                    <div class="row">
                        <h2>Confirm Your Age</h2>
                    </div>
                    <div class="row">
                        <p>THIS GAME MAY CONTAIN CONTENT NOT APPROPRIATE FOR ALL AGES,
                        OR MAY NOT BE APPROPRIATE FOR VIEWING AT WORK.</p>
                    </div>
                    <div class="checker row">
                        <div class="col-lg-4">
                            <input required class="year primary-input" type="text" placeholder="YY" name=""/>
                        </div>
                        <div class="col-lg-4">
                            <input required class="month primary-input" type="text" placeholder="MM" name=""/>
                        </div>
                        <div class="col-lg-4">
                            <input required class="day primary-input" type="text" placeholder="DD" name=""/>
                        </div>
                    </div>
                    <div class="row btn-checker justify-content-between mt-4">
                        <div class="col-lg-6">
                            <a class="anc-btn"><button href="#" id="btn" class="des confirm primary-btn--non-bg ">Processed</button></a>
                        </div>
                        <div class="col-lg-6">
                            <a href="index.html" id="clear" class="clear primary-btn--non-bg">Close</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Start Age Checker Page --> */}
    </>
  )
};

export default AgeChecker;
