import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <React.Fragment>
            <div className="background-image">
                <div className="row justify-content-center m-0">
                    <div
                        className="col-md-12 login-box"
                        style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                            display: "inline",
                            animation: "colorChangeAnimation 1s infinite",
                            // background: `linear-gradient(45deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 255, 0.6))`,
                        }}
                    >
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
      {/*      <style>{`*/}
      {/*  @keyframes colorChangeAnimation {*/}
      {/*    0% {*/}
      {/*      background: linear-gradient(45deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 255, 0.6));*/}
      {/*    }*/}
      {/*    50% {*/}
      {/*      background: linear-gradient(45deg, rgba(255, 0, 255, 0.6), rgba(0, 255, 255, 0.6));*/}
      {/*    }*/}
      {/*    100% {*/}
      {/*      background: linear-gradient(45deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 255, 0.6));*/}
      {/*    }*/}
      {/*  }*/}
      {/*`}</style>*/}
        </React.Fragment>
    );
}

export default Login;
