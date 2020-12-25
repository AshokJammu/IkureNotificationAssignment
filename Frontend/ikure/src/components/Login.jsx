import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUserData } from "../Redux/Login/action";
import HomeNavbar from './HomeNavbar';

function getData(key) {
  try {
      let data = localStorage.getItem(key)
      data = JSON.parse(data)
      return data
  }
  catch{
      return undefined
  }
}

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            idFlag: false,
            passwordFlag:false
        }; 
    }


    handleLogin =()=>{
        let {email,password,idFlag,passwordFlag} = this.state
    
        if(email === "" || password === ""){
          this.setState({
            idFlag:!idFlag,
            passwordFlag:!passwordFlag
          })
        }else{
          let obj={
            email:email,
            password:password
          }
          this.props.loginUserData(obj)
        }
      }

    render() {
        // const { loggingIn } = this.props;
        // const { username, password, submitted } = this.state;
        const { password, email,passwordFlag,idFlag} = this.state;
        const { isLogin,loginData } = this.props;
       console.log(loginData.error,"logg")
        if(loginData && getData("cutomerExist")){

            if(isLogin && loginData.data[0].userType === "admin"){
              this.props.history.push("/admin/dashboard/all")
            }
        }
        return (
          <>
          {loginData.error === false && <HomeNavbar />}
            <div class="border border-dark mx-5">
            <div class="mb-3 row px-5 my-4">
               <div class="col-sm-10">
                <input
                  type="text"
                  className={`form-control  ${idFlag ? 'is-invalid' : ''}`}
                  id="staticEmail"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value,
                    })
                  }
                />
              </div>
                {idFlag && <p class="text-danger">Please enter valid EmployeeID</p>}
            </div>
            <br />
            <div class="mb-3 row px-5 my-4">
               <div class="col-sm-10">
                <input
                  type="password"
                  className={`form-control  ${passwordFlag ? 'is-invalid' : ''}`}
                  id="inputPassword"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
                />
              </div>
                {passwordFlag && <p class="text-danger">Please enter valid Password</p>}
            </div>
            <button class="btn btn-primary btn-center"
              onClick={() => {
                this.handleLogin();
              }}
            >
              LOGIN
            </button>

            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
          </>   
        )
    }
}

const mapStateToProps = state => ({
    username: state.login.username,
    message: state.login.message,
    isLogin: state.login.isLogin,
    loginData:state.login.loginData
  });
  const mapDispatchToProps = dispatch => ({
    loginUserData: payload => dispatch(loginUserData(payload))
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);


