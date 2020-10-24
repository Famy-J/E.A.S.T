import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"
import {connect} from "react-redux"
class JobDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
         PosterData:{},
         apllication:false,
        }
        this.getposter=this.getposter.bind(this)
    }
    
    getposter(prop){
      axios({
        url: '/api/users/name',
        method: 'post',
        data:{userid:prop.jobDetails.client_id}
      }).then(data=>{
        console.log(data.data)
        this.setState({PosterData:data.data})
      })
    }

    componentDidMount(){
      this.getposter(this.props)
   if(this.props.user.type=="freelancer"){
this.setState({apllication:true})
   }
    }
    render() {
      return <div id="detailblock">
          <div className="ashade-service-card__head">
					<div id="detailjobimg">
						<img src={this.props.jobDetails.imgUrl?this.props.jobDetails.imgUrl:"img/avatars/testimonial01.png"} id="imgdet"/>
					</div>
                    
      </div>
    <cite id="detailcite">{this.state.PosterData.FirstName}-{this.state.PosterData.LastName}</cite>
<div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>don't miss this opportunity</span>
            it came once
        </h1>
    </div>
         <div className="ashade-col col-4" id="DetailJobTitle">
				<h2>
					<span>{this.props.jobDetails.fields}</span>
						{this.props.jobDetails.jobTitle}
				</h2>
		</div>

      <section className="ashade-section" id="DetailJobdescription">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<h2>
								<span>Job</span>
								 description
							</h2>
						</div>
						<div className="ashade-col col-8" id="borderdetail">
							<p className="is-dropcap">
							{this.props.jobDetails.jobDescription}
							</p>
						</div>
					</div>
				</section>
        <br/>
        <section className="ashade-section" id="DetailJobdescription">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<h2>
								<span>Job</span>
								Budget TnD
							</h2>
						</div>
						<div className="ashade-col col-8" id="borderdetail">
              <br/>
							<p id="budgetP">
							{this.props.jobDetails.budget} TnD
							</p>
						</div>
					</div>
				</section>
                  <div className="ashade-contact-form__submit" id="detailsubmitbtn">  
                  {this.state.apllication?<div className="modal">
  <input id="modal__trigger" type="checkbox" />
  <label htmlFor="modal__trigger">Apply Now</label>
  <div className="modal__overlay">
    <div className="modal__wrap">
      <label htmlFor="modal__trigger">&#10006;</label>
      <h2>Application</h2>
     <div >Convince me</div> 
     <textarea name="" id="" cols="30" rows="10" id="detailtextarea"></textarea>
     <button id='modalbutton'>Apply</button>
    </div>
  </div>
</div>:null}
                 <br/> 
                 <br/>
<Footer/>
				  </div>
         
          </div>
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
 
export default connect(mapStateToProps)(JobDetails)