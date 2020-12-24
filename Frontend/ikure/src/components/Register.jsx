import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {registerUserData} from "../Redux/Register/action"
export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            age: "",
            email:"",
            password:"",
            company:""
        }; 
    }

    handleRegister=()=>{
        let {fname,lname,age,email,password,company} = this.state
        // console.log(fname,lname,age,email,password,company)
        let obj = {
            fname: fname,
            lname: lname,
            age: age,
            email: email,
            password: password,
             
        }

        console.log(obj)
        this.props.registerUserData(obj)
    }
    render() {
        const {fname,lname,age,email,password} = this.state
        return (
            <div>
                <div class="border border-dark mx-5">
            <div class="mb-3 row px-5 my-4">
               <div class="col-sm-10">
                <input
                  type="text"
                  className={`form-control`}
                  id="staticEmail"
                  value={fname}
                  placeholder="Enter Firstname"
                  onChange={(e) =>
                    this.setState({
                      fname: e.target.value,
                    })
                  }
                />
              </div>
                  
              <div class="col-sm-10">
                <input
                  type="text"
                  className={`form-control`}
                  id="staticEmail"
                  value={lname}
                  placeholder="Enter Lastname"
                  onChange={(e) =>
                    this.setState({
                      lname: e.target.value,
                    })
                  }
                />
              </div>  
            </div>
            <br />

            <div class="mb-3 row px-5 my-4">
               <div class="col-sm-10">
                <input
                  type="email"
                  className={`form-control`}
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

              <div class="col-sm-10">
                <input
                  type="password"
                  className={`form-control`}
                  id="staticEmail"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
                />
              </div>  
            </div>

            <div class="mb-3 row px-5 my-4">
            <div class="col-sm-10">
                <input
                  type="number"
                  className={`form-control`}
                  id="staticEmail"
                  value={age}
                  placeholder="Enter Age"
                  onChange={(e) =>
                    this.setState({
                      age: e.target.value,
                    })
                  }
                />
              </div>

              
            </div>
            <button class="btn btn-primary btn-center"
              onClick={() => {
                this.handleRegister();
              }}
            >
              Register
            </button>

            <Link to="/login" className="btn btn-link">Login</Link>
          </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    message: state.register.message,
    registerData:state.register.registerData
  });
  const mapDispatchToProps = dispatch => ({
    registerUserData: payload => dispatch(registerUserData(payload))
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);

// export default Register
