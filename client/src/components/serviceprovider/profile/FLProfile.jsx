import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import Studio from "./studio.jsx";
import ProfileInfo from "./profInfo.jsx";
import Feedbacks from "./feedbacks.jsx";
class FreelancerProfile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BackToTop />
        <AboutMe />
        <main className="ashade-content-wrap">
          <div className="ashade-content-scroll">
            <div className="ashade-content">
              <Bio />
              <ProfileInfo />
              <Studio />
              <Feedbacks />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default FreelancerProfile;
