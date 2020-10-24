import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
        Email:"",
        password:""
    };
    this.AxiosLogin=this.AxiosLogin.bind(this)

}
 AxiosLogin(){
      axios({
          url: '/AdminLogin',
          method: 'post',
          data:{name:this.state.Email,password:this.state.password}
        }).then(data=>{data=data.data
          console.log(data)
          if(data.Banned){
            alert(`you are banned because ${data.Reason} you will be unbanned in ${data.date}`,2000)
          }else{
            if(data.admin){
              this.props.admin()
            }else{
              if(data.Registred){
                Alert("Success Login", 2500)
                this.props.updatedata(data)
                this.props.start()
       
              }
            }
          }
        })
  }

  
  render() {
    return (
      <div className="col-md-6 signup-form-1" >
          <h2 id = "signupAdmin">Admin Login</h2>
            <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email " onChange={event=>{this.setState({Email:event.target.value})}}/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Your Password " onChange={event=>{this.setState({Password:event.target.value})}} />
        </div>      
        <div className="form-group">
            <input type="submit" className="btnSubmit" id="btnsub" value="Login" onClick={this.AxiosLogin}/>
        </div>
        <div className="form-group">
            <a className="btnForgetPwd" id="forgetpass">Forget Password?</a>
        </div> 
      </div>
    );
  }
}

export default AdminLogin;