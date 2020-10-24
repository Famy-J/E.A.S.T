
import React from "react"
import axios from "axios"
class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           Email : "",
           reason: "",
           data: "" 
        }
        this.AxiosBann = this.AxiosBann.bind(this)
    }
    AxiosBann() {
        axios({
          url: "/banaccount",
          method: "post",
          data: {
            Email: this.state.Email,
            reason: this.state.reason,
            date: this.state.date,
          },
        });
        console.log("data")
      }

    render() {
      return <div>
        <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>If You Have More Questions</span>
            Admin Space
        </h1>
    </div>

    <main className="ashade-content-wrap">
		<div className="ashade-content-scroll">
			<div className="ashade-content">
				<section className="ashade-section">
					<div className="ashade-row">
                        <div className="ashade-col col-12">
                            <h1 className="ashade-intro"  >Admin Space</h1>
						</div>
					</div>
				</section>
				<section className="ashade-section">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<div className="ashade-contact-details">
								<h4 className="ashade-contact-details__title">
									<span>Admin Space</span>
									Ban Account
								</h4>
								
							</div>
						</div>
						<div className="ashade-col col-8">
							<form action="mail.php" method="post" className="ashade-contact-form">
								<div className="ashade-row ashade-small-gap">
                                    <div className="ashade-col col-4">
										<input type="email" id="email" name="email" placeholder="Account Email" onChange={(e) => {
                  this.setState({ Email: e.target.value }) }} required/>
									</div>
									<div className="ashade-col col-4">
										<input type="date" id="name" name="name" placeholder="Period"  onChange={(e) => {
                  this.setState({ date: e.target.value });
                }} required/>
									</div>
									
									 {/* <div className="ashade-col col-4">
										<input type="tel" id="phone" name="phone" placeholder="Your Phone" required>
									</div> */}
								</div>
								<textarea name="message" id="message" placeholder="Reason of Ban"  onChange={(e) => {
                  this.setState({ reason: e.target.value });
                }} required></textarea>
								<div className="ashade-contact-form__footer">
									<div className="ashade-contact-form__response"></div>
									<div className="ashade-contact-form__submit">
										<input type="submit" value="Ban Account" onClick={this.AxiosBann}/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
			
			
		</div>
	</main>
    
    <div className="ashade-to-top-wrap ashade-back-wrap">
        <div className="ashade-back is-to-top">
            <span>Back to</span>
            <span>Top</span>
        </div>
    </div>

   

   
    <div className="ashade-menu-overlay"></div>
    <div className="ashade-aside-overlay"></div>
    <div className="ashade-cursor is-inactive">
    	<span className="ashade-cursor-circle"></span>
    	<span className="ashade-cursor-slider"></span>
    	<span className="ashade-cursor-close ashade-cursor-label">Close</span>
    	<span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
    </div>
	
      </div>
    }
  }

export default Admin ;