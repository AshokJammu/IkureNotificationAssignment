import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";

import Notification from "./Notification";
import axios from "axios";

function getData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch {
    return undefined;
  }
}

// function saveData(key, data) {
//     localStorage.setItem(key, JSON.stringify(data))
// }

export default class HomeNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userExist: "",
      userdata: [],
    };
  }

  componentDidMount() {
    this.setState({
      userExist: getData("cutomerExist"),
    });

    axios.put("http://localhost:5000/notification").then(
      (res) =>
        this.setState({
          userdata: res.data,
        })
      // console.log(res.data)
    );
  }

  handleLogout = () => {
    console.log("logut");
    this.props.history.push("/login");
  };

  render() {
    // console.log(this.props)
    const { userdata } = this.state;
    console.log(userdata, "data");
    return (
      <div>
        <div class="d-flex justify-content-between alert alert-success">
          <div>
            <Link to="/" class="navbar-brand" href="#">
              <img
                src="data:image/jpeg;base64,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"
                width="100"
                height="75"
                alt="Meetup"
              />
            </Link>
          </div>
          <div></div>
          {/* <Link to="/" style={{ padding: 20 }}> */}
          ee
          {/* IoIosNotifications */}
          {/* <IoIosNotifications style={{ height: 30, width:30 ,"marginRight":20, "marginTop":7}} />  */}
          {/* </Link> */}
          <div>
            {this.state.userExist && (
              <>
                <div class="d-flex">
                  <div class="mr-5"></div>
                 <Link to="/">
                 
                 <button
                    class="btn btn-danger ml-5"
                    onClick={() => {
                      this.handleLogout();
                    }}
                  >
                    Logout
                  </button>
                 </Link> 
                </div>
              </>
            )}
          </div>
          <div class="toast-container">
            <div
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div
                class="toast d-flex align-items-center"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                {userdata &&
                  userdata.map((item) => {
                    <div class="toast-body">{item.message}</div>;
                  })}
                <button
                  type="button"
                  class="btn-close ms-auto me-2"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
