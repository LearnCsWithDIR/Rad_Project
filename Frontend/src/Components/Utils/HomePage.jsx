import "./HomePage.css";
import Navbar from "./Navbar";
import image from "../../assets/sms1.jpg";
import { Link } from "react-router-dom";
// import "../App.css";
function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="content">
        <h1>Student Management System</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          delectus ad illo a <br />
          blanditiis quod ab repellendus dolorem cum praesentium provident,
          velit nihil beatae voluptas voluptatem aspernatur id deleniti. Illum.
        </p>
        <Link to="/login">
          <button>
            <span className="signIn"></span>Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;