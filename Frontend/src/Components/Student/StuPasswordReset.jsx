import "./Login.css";
import { useState } from "react";
import Navbar from "../Utils/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordReset() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [user_id, setUser_id] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // for response success message
  const [message, setMessage] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  const navigate = useNavigate();

  function ResetData(e) {
    e.preventDefault();

    const resetPassword = {
      user_id,
      currentPassword,
      NewPassword,
    };
    console.log(resetPassword);
    if (NewPassword === confirmpassword) {
      // pass data from the backend
      axios
        .post("http://localhost:8070/student/f/update-password", resetPassword)
        .then((res) => {
          // console.log(res.data);
          // setuserType(res.data.type);
          setMessage(res.data.message);
          // console.log(userType);

          if (res.data.message == "Password Reset successful...") {
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      toast.error("Password mismatch. Try Again.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("confirm");
    }
  }
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="container_login">
        <div id="signtitle_login">Security Update !</div>
        <div className="signtitle_1">Change Your Password</div>
        <form onSubmit={ResetData}>
          <div id="user-details_login">
            <div className="input-box_login">
              <span className="details_login">Current Password</span>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter New Passsword"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="input-box_login">
              <span className="details_login">New Password</span>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter New Passsword"
                required
                value={NewPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="input-box_login">
              <span className="details_login">Confirm Password</span>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter New Passsword Again"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box_login">
            <input
              type="checkbox"
              id="show"
              name="show"
              value="show"
              checked={showpassword}
              onClick={(e) => {
                setshowpassword(e.target.checked);
              }}
            />
            <span className="details_login_check">
              {showpassword ? "Hide Password" : "Show Password"}
            </span>
          </div>

          <div id="button_login">
            <input type="submit" value="Reset" />
          </div>
        </form>
      </div>
    </>
  );
}
