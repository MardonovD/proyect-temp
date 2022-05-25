import React from "react";
import "../style/style.css";
const HomePage = () => {
  const username = (e) => {
    console.log(e.target.value);
  };
  const password = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="ui container  colorr">
      <h1 className="text-center " style={{ color: "#fff" }}>
        TELEGRAM
      </h1>
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input
                    onChange={username}
                    type="text"
                    placeholder="Username"
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input onChange={password} type="password" />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="ui blue submit button">Login</div>
            </div>
          </div>
          <div className="middle aligned column">
            <div className="ui big button">
              <i className="signup icon" />
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default HomePage;
