import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import JobOffersProf from "./jobOffers.jsx";
import ProfileStats from "./profIStats.jsx";
import axios from "axios";
import Footer from "../../footer.jsx"
import {connect} from "react-redux"
class ClientProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          user: [],
          
        }
        
    }
    componentDidMount(){
      axios.get("/api/clients/clientInfo")
      .then(response => {
        this.setState({user: response.data})
        console.log(response)
      })
    }

    render() {
      return   <div>
      <BackToTop />
      <AboutMe />
      <main className="ashade-content-wrap">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
         
            <Bio />
            <ProfileStats />
            <JobOffersProf />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
  

export default connect(mapStateToProps)(ClientProfile)